using MarktenEnForenWeb.Shared.Constants.Config;
using MarktenEnForenWeb.Shared.Options._Base;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MarktenEnForenWeb.Shared.Options
{
    public class AppSettings : SettingsBase
    {
        public string ApiKey { get; set; }
        public string ApiUrl { get; set; }
        public string AuthUri { get; set; }
        public string ClientId { get; set; }
        public string ClientSecret { get; set; }
        public string MeAuthzAppName { get; set; }
        public string MeAuthzUri { get; set; }
        public string TokenUri { get; set; }
        public string UserInfoUri { get; set; }

        public static void RegisterConfiguration(IServiceCollection services, IConfigurationSection section, IWebHostEnvironment env)
        {
            services.Configure<AppSettings>(settings =>
            {
                settings.LoadFromConfigSection(section);
                settings.OverrideFromEnvironmentVariables(env);
            });
        }

        private void OverrideFromEnvironmentVariables(IWebHostEnvironment env)
        {
            ApiKey = GetValue(ApiKey, AppSettingsConfigKey.ApiKey, env);
            ApiUrl = GetValue(ApiUrl, AppSettingsConfigKey.ApiUrl, env);
            AuthUri = GetValue(AuthUri, AppSettingsConfigKey.AuthUri, env);
            ClientId = GetValue(ClientId, AppSettingsConfigKey.ClientId, env);
            ClientSecret = GetValue(ClientSecret, AppSettingsConfigKey.ClientSecret, env);
            MeAuthzAppName = GetValue(MeAuthzAppName, AppSettingsConfigKey.MeAuthzAppName, env);
            MeAuthzUri = GetValue(MeAuthzUri, AppSettingsConfigKey.MeAuthzUri, env);
            TokenUri = GetValue(TokenUri, AppSettingsConfigKey.TokenUri, env);
            UserInfoUri = GetValue(UserInfoUri, AppSettingsConfigKey.UserInfoUri, env);
        }
    }
}