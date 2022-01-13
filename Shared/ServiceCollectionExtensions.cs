using MarktenEnForenWeb.Shared.Options;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

namespace MarktenEnForenWeb.Shared
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddDigipolisAuth(this IServiceCollection services, AppSettings settings)
        {
            ILogger<Startup> logger = null;

            using (var sp = services.BuildServiceProvider())
            {
                logger = sp.GetRequiredService<ILogger<Startup>>();
            }

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = "Digipolis";
            })
            .AddCookie(options =>
            {
                options.Cookie.Name = "Mafo.Web";
            }) // cookie authentication middleware first
            .AddOAuth("Digipolis", options =>
            {
                options.ClientId = settings.ClientId;
                options.ClientSecret = settings.ClientSecret;
                options.CallbackPath = new PathString("/callback");
                options.Scope.Add("all");

                options.AccessDeniedPath = new PathString("/Home/AccessDenied");
                options.AuthorizationEndpoint = settings.AuthUri;
                options.TokenEndpoint = settings.TokenUri;
                options.UserInformationEndpoint = settings.UserInfoUri;
                options.SaveTokens = true;

                options.ClaimActions.MapJsonKey("permissions", "permissions");

                options.CorrelationCookie.SameSite = SameSiteMode.Unspecified;

                options.Events = new OAuthEvents
                {
                    OnRedirectToAuthorizationEndpoint = redirectContext =>
                    {
                        logger.LogWarning("starting oauth redirect");
                        redirectContext.Response.Redirect(redirectContext.RedirectUri + "&lng=nl&service=astad-mprofiel-v1&force_auth=true");
                        logger.LogWarning("oauth redirect done");
                        return Task.CompletedTask;
                    },
                    OnTicketReceived = context =>
                    {
                        logger.LogWarning("Received oauth creation ticket");
                        return Task.CompletedTask;
                    },
                    OnCreatingTicket = context =>
                    {
                        logger.LogWarning("Creating Oauth ticket");
                        Task.WaitAll(
                                GetMeAuthzJwt(settings, context, logger),
                                GetMeAuthzPermissions(settings, context, logger)
                            );
                        logger.LogWarning("Ticket creation complete");
                        return Task.CompletedTask;
                    },
                    OnRemoteFailure = context =>
                    {
                        logger.LogCritical(context.Failure, $"Remote authentication failure with message: {context.Failure.Message}");
                        logger.LogCritical(context.Failure.InnerException, $"Remote authentication inner exception");
                        return Task.CompletedTask;
                    },
                    OnAccessDenied = context =>
                    {
                        logger.LogWarning("Access was denied when trying to login");
                        return Task.CompletedTask;
                    }
                };
            });
            return services;
        }

        private static async Task GetMeAuthzJwt(AppSettings settings, OAuthCreatingTicketContext context, ILogger<Startup> logger)
        {
            try
            {
                var jwtTokenRequest = new HttpRequestMessage(HttpMethod.Get, $"{settings.MeAuthzUri}/jwt-token");
                jwtTokenRequest.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                jwtTokenRequest.Headers.Authorization = new AuthenticationHeaderValue("Bearer", context.AccessToken);
                jwtTokenRequest.Headers.Add("apiKey", settings.ApiKey);

                var response = await context.Backchannel.SendAsync(jwtTokenRequest, HttpCompletionOption.ResponseHeadersRead,
                    context.HttpContext.RequestAborted);
                response.EnsureSuccessStatusCode();

                var jwtTokenString = await response.Content.ReadAsStringAsync();
                var jwtTokenObject = JsonSerializer.Deserialize<JwtTokenResponse>(jwtTokenString);
                context.Response.Cookies.Append("jwt", jwtTokenObject.JwtToken);
            }
            catch (Exception ex)
            {
                logger.LogCritical(ex, "Could not fetch jwt token");
                throw;
            }
        }

        private static async Task GetMeAuthzPermissions(AppSettings appSettings, OAuthCreatingTicketContext context, ILogger<Startup> logger)
        {
            try
            {
                var request = new HttpRequestMessage(HttpMethod.Get, $"{appSettings.MeAuthzUri}/permissions?applicationId={appSettings.MeAuthzAppName}");
                request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", context.AccessToken);
                request.Headers.Add("apiKey", appSettings.ApiKey);

                var response = await context.Backchannel.SendAsync(request, HttpCompletionOption.ResponseHeadersRead,
                    context.HttpContext.RequestAborted);
                response.EnsureSuccessStatusCode();

                var body = await response.Content.ReadAsStringAsync();
                var jsonPermissions = JsonDocument.Parse(body).RootElement;
                context.RunClaimActions(jsonPermissions);
            }
            catch (Exception ex)
            {
                logger.LogCritical(ex, "Could not fetch user permissions");
                throw;
            }
        }
    }
}