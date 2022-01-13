using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarktenEnForenWeb.Areas.Facturatie.Controllers
{
    [Area("Facturatie")]
    public class HomeController : Controller
    {
        public IActionResult Halfjaarlijks()
        {
            return View();
        }

        public IActionResult Tussentijds()
        {
            return View();
        }

        public IActionResult Terugbetaling()
        {
            return View();
        }

        public IActionResult Historiek()
        {
            return View();
        }

    }
}
