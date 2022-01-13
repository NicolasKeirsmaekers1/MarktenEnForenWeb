using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarktenEnForenWeb.Areas.Markt.Controllers
{
    [Area("Markt")]
    public class HomeController : Controller
    {
        public IActionResult Marktboekje()
        {
            return View();
        }

        public IActionResult MarktBeheren()
        {
            return View();
        }

        public IActionResult NieuweMarkt()
        {
            return View();
        }

        public IActionResult Detail()
        {
            return View();
        }

        public IActionResult MarktBewerken()
        {
            return View();
        }

        public IActionResult Typology()
        {
            return View();
        }
    }
}
