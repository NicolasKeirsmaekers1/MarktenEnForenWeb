using System;
using Microsoft.AspNetCore.Hosting;

namespace MarktenEnForenWeb
{
    public static class HostingEnvironmentExtensions
    {
        public static bool IsVagrant(this IHostingEnvironment hostingEnvironment)
        {
            return hostingEnvironment.IsEnvironment("vagrant");
        }
    }
}
