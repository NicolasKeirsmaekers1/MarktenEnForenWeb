using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace MarktenEnForenWeb.Middleware
{
    public interface IApiKeyRequestHandler
    {
        Task Handle(HttpContext context);
    }
}
