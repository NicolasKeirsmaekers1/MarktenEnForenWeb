using Microsoft.AspNetCore.Mvc;

namespace MarktenEnForenWeb.Areas.Abonnement.Controllers
{
    [Area("Abonnement")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Detail()
        {
            return View();
        }
    }
}