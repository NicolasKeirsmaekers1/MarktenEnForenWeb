using System;
using Microsoft.Extensions.Logging;
using MarktenEnForenWeb.Logging;

namespace MarktenEnForenWeb
{
    public interface IApplicationLogger : ILogger<ApplicationLogger>
    { }
}
