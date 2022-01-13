using MarktenEnForenWeb.Shared.Extensions;
using MarktenEnForenWeb.Shared.Options;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.IO;
using System.Net;
using System.Threading.Tasks;

namespace MarktenEnForenWeb.Middleware
{
    public class ApiKeyRequestHandler : IApiKeyRequestHandler
    {
        private readonly IOptions<AppSettings> _settings;
        private readonly ILogger<ApiKeyRequestHandler> _logger;

        public ApiKeyRequestHandler(IOptions<AppSettings> settings, ILogger<ApiKeyRequestHandler> logger)
        {
            _settings = settings;
            _logger = logger;
        }

        public async Task Handle(HttpContext context)
        {
            var apiKey = _settings.Value.ApiKey;

            var originalRequest = context.Request;
            var uri = _settings.Value.ApiUrl.TrimEnd('/') + context.Request.Path;
            var request = (HttpWebRequest)WebRequest.Create(uri + context.Request.QueryString);

            request.Method = context.Request.Method;
            request.ContentType = context.Request.ContentType;
            request.Headers["apikey"] = apiKey;
            //1000 * 60 * 10
            request.ContinueTimeout = 600000;

            string jwt;
            if (originalRequest.Cookies.ContainsKey("jwt") && originalRequest.Cookies.TryGetValue("jwt", out jwt))
            {
                string access_token = await context.GetTokenAsync("access_token");

                if (_settings.Value.ApiUrl.ToLower().Contains("localhost"))
                    request.Headers["Authorization"] = $"Bearer {jwt}";
                else
                {
                    if (!string.IsNullOrEmpty(access_token))
                        request.Headers["Authorization"] = $"Bearer {access_token}";
                    else
                    {
                        _logger.LogError($"The access token provided is invalid: {access_token}. Started logout flow to get new credentials.");
                        await context.SignOutAsync();
                    }
                }
            }
            else if (originalRequest.Headers.ContainsKey("Authorization"))
                request.Headers["Authorization"] = originalRequest.Headers["Authorization"];

            if (originalRequest.Headers.ContainsKey("Accept"))
                request.Headers["Accept"] = originalRequest.Headers["Accept"];

            if (originalRequest.ContentLength.HasValue)
            {
                using (var requestStream = await request.GetRequestStreamAsync())
                {
                    await originalRequest.Body.CopyToAsync(requestStream);
                }
            }

            try
            {
                // request.Proxy = new WebProxy("127.0.0.1:8888", false);
                var response = await request.GetResponseAsync();
                context.Response.ContentType = response.ContentType;

                if (response.Headers["x-filename"] != null)
                    context.Response.Headers["x-filename"] = response.Headers["x-filename"];

                if (response.Headers["content-disposition"] != null)
                    context.Response.Headers["content-disposition"] = response.Headers["content-disposition"];

                using (var responseStream = response.GetResponseStream())
                {
                    await responseStream.CopyToAsync(context.Response.Body);
                    await context.Response.Body.FlushAsync();
                }
            }
            catch (WebException ex)
            {
                if (ex.Status == WebExceptionStatus.ConnectFailure)
                {
                    context.Response.StatusCode = (int)HttpStatusCode.ServiceUnavailable;
                    return;
                }
                if (context.Response.StatusCode == StatusCodes.Status401Unauthorized)
                {
                    _logger.LogWarning($"User {context.User.Identity.Name} was unauthorized to perfrom the request, challenging login scheme!");
                    await context.ChallengeAsync();
                }
                using (var responseStream = ex.Response.GetResponseStream())
                {
                    var responseBody = new StreamReader(responseStream).ReadToEnd();
                    context.Response.StatusCode = (int)((HttpWebResponse)ex.Response).StatusCode;
                    await context.Response.WriteAsync(responseBody);
                }
                _logger.LogError(ex.GetExceptionMessages());
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.GetExceptionMessages());
                throw;
            }
        }
    }
}