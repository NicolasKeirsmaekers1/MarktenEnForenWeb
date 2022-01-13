using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarktenEnForenWeb.Areas.Klant.Controllers
{
    [Area("Klant")]
    public class HomeController : Controller
    {
        public IActionResult CommercieleKlanten()
        {
            return View();
        }

        public IActionResult NietCommercieleKlanten()
        {
            return View();
        }

        public IActionResult NieuweKlant()
        {
            return View();
        }

        public IActionResult KlantBewerken()
        {
            return View();
        }
    }
}
