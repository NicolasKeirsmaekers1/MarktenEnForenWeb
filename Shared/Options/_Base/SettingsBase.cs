using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Environment = MarktenEnForenWeb.Shared.Constants.EnvironmentConstants;

namespace MarktenEnForenWeb.Shared.Options._Base
{
    public abstract class SettingsBase
    {
        public static string GetValue(string value, string configKey, IWebHostEnvironment env)
        {
            var configKeyValue = System.Environment.GetEnvironmentVariable(configKey);
            return configKeyValue ?? ((env.IsDevelopment() || env.IsEnvironment(Environment.IntegrationTesting)) ? value : throw new ArgumentException($"Configuration error: invalid parameter '{configKey}'"));
        }

        public static int GetValue(int value, string configKey, IWebHostEnvironment env)
        {
            return int.TryParse(System.Environment.GetEnvironmentVariable(configKey), out var configKeyValue) ?
                  configKeyValue : ((env.IsDevelopment() || env.IsEnvironment(Environment.IntegrationTesting)) ? value : throw new ArgumentException($"Configuration error: invalid parameter '{configKey}'"));
        }

        public static bool GetValue(bool value, string configKey, IWebHostEnvironment env)
        {
            return bool.TryParse(System.Environment.GetEnvironmentVariable(configKey), out var configKeyValue) ?
                    configKeyValue : ((env.IsDevelopment() || env.IsEnvironment(Environment.IntegrationTesting)) ? value : throw new ArgumentException($"Configuration error: invalid parameter '{configKey}'"));
        }

        protected void LoadFromConfigSection(IConfigurationSection section) =>
            section.Bind(this);
    }
}
