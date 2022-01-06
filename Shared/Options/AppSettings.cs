using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace MarktenEnForenWeb.Shared.Options
{
    public class AppSettings
    {
        public string AppName { get; set; }
        public string ApplicationId { get; set; }
        public string ApiUrl { get; set; }
		public string ApiKey { get; set; }

        public const string PassThroughPrefix = "passthroughapi"; //this is not environment dependent; NO FORWARD SLASH
        public static void RegisterConfiguration(IServiceCollection services, IConfigurationSection section)
        {
            services.Configure<AppSettings>(settings =>
            {
                settings.LoadFromConfigSection(section);
                settings.OverrideFromEnvironmentVariables();
            });
        }

        private void LoadFromConfigSection(IConfigurationSection section)
        {
            section.Bind(this);
        }

        private void OverrideFromEnvironmentVariables()
        {
            var env = Environment.GetEnvironmentVariables();
            AppName = env.Contains("APPSETTINGS_APPNAME") ? env["APPSETTINGS_APPNAME"].ToString() : AppName;
            ApplicationId = env.Contains("APPSETTINGS_APPLICATIONID") ? env["APPSETTINGS_APPLICATIONID"].ToString() : ApplicationId;
            ApiUrl = env.Contains("APPSETTINGS_API_URL") ? env["APPSETTINGS_API_URL"].ToString() : ApiUrl;
            ApiKey = env.Contains("APPSETTINGS_API_APIKEY") ? env["APPSETTINGS_API_APIKEY"].ToString() : ApiKey;
        }
    }
}
