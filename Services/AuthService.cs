using MarktenEnForenWeb.Shared;
using MarktenEnForenWeb.Shared.Options;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace MarktenEnForenWeb.Services
{
    public class AuthService
    {
        private readonly AppSettings appSettings;
        private readonly IHttpContextAccessor accessor;
        private readonly ILogger<AuthService> logger;

        public AuthService(IOptions<AppSettings> appSettings, IHttpContextAccessor accessor, ILogger<AuthService> logger)
        {
            this.appSettings = appSettings.Value;
            this.accessor = accessor;
            this.logger = logger;
        }

        public async Task<PermissionsResponse> GetPermissions()
        {
            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", await accessor.HttpContext.GetTokenAsync("access_token"));
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.DefaultRequestHeaders.Add("apiKey", appSettings.ApiKey);
                var response = await client.GetAsync($"{appSettings.MeAuthzUri}/permissions?applicationId={appSettings.MeAuthzAppName}");
                response.EnsureSuccessStatusCode();
                var permissions = await response.Content.ReadAsAsync<PermissionsResponse>();
                return permissions;
            }
        }

        public async Task<UserInfoResponse> GetUserInfo()
        {
            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", await accessor.HttpContext.GetTokenAsync("access_token"));
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.DefaultRequestHeaders.Add("apiKey", appSettings.ApiKey);
                var response = await client.GetAsync($"{appSettings.UserInfoUri}");
                response.EnsureSuccessStatusCode();
                var userInfo = await response.Content.ReadAsAsync<UserInfoResponse>();
                return userInfo;
            }
        }

        public async Task<string> RefreshToken()
        {
            try
            {
                using (var client = new HttpClient())
                {
                    var pairs = new List<KeyValuePair<string, string>>
                    {
                        new KeyValuePair<string, string>("grant_type", "refresh_token"),
                        new KeyValuePair<string, string>("refresh_token", await accessor.HttpContext.GetTokenAsync("refresh_token")),
                        new KeyValuePair<string, string>("client_id", appSettings.ClientId),
                        new KeyValuePair<string, string>("client_secret", appSettings.ClientSecret),
                    };
                    var response = await client.PostAsync($"{appSettings.TokenUri}", new FormUrlEncodedContent(pairs));
                    response.EnsureSuccessStatusCode();
                    var tokenResponse = await response.Content.ReadAsAsync<TokenResponse>();

                    //Set the new access and refresh token
                    var auth = await accessor.HttpContext.AuthenticateAsync("Cookies");
                    auth.Properties.StoreTokens(new List<AuthenticationToken>()
                    {
                        new AuthenticationToken()
                        {
                            Name = "access_token",
                            Value = tokenResponse.access_token
                        },
                        new AuthenticationToken()
                        {
                            Name = "refresh_token",
                            Value = tokenResponse.refresh_token
                        }
                    });

                    await accessor.HttpContext.SignInAsync(auth.Principal, auth.Properties);

                    return await GetJwtFromAccessToken();
                }
            }
            catch (Exception ex)
            {
                logger.LogError(ex, $"Token refresh resulted in an error: {ex.Message}");
                throw;
            }
            finally
            {
                await accessor.HttpContext.ChallengeAsync();
            }
        }

        private async Task<string> GetJwtFromAccessToken()
        {
            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", await accessor.HttpContext.GetTokenAsync("access_token"));
                client.DefaultRequestHeaders.Add("apiKey", appSettings.ApiKey);

                var response = await client.GetAsync($"{appSettings.MeAuthzUri}/jwt-token");
                response.EnsureSuccessStatusCode();
                var jwtTokenString = await response.Content.ReadAsStringAsync();
                return ((dynamic)JsonConvert.DeserializeObject(jwtTokenString)).jwtToken;
            }
        }

        public async Task Logout()
        {
            await accessor.HttpContext.SignOutAsync("Cookies");
        }
    }
}
