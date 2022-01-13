using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarktenEnForenWeb.Areas.Wachtlijst.Controllers
{
    [Area("Wachtlijst")]
    public class HomeController : Controller
    {
        public IActionResult Intake()
        {
            return View();
        }

        public IActionResult Preregistratie()
        {
            return View();
        }

        public IActionResult Registratie()
        {
            return View();
        }

        public IActionResult Reservatie()
        {
            return View();
        }

        public IActionResult IntakeDetail()
        {
            return View();
        }

        public IActionResult IntakeEdit()
        {
            return View();
        }

        public IActionResult IntakeNew()
        {
            return View();
        }

        public IActionResult IntakeNewDetailed()
        {
            return View();
        }

        public IActionResult PreregistratieDetail()
        {
            return View();
        }

        public IActionResult PreregistratieEdit()
        {
            return View();
        }

        public IActionResult RegistratiePerMarkt()
        {
            return View();
        }

        public IActionResult RegistratieDetail()
        {
            return View();
        }

        public IActionResult RegistratieEdit()
        {
            return View();
        }

        public IActionResult ReservatieDetail()
        {
            return View();
        }
    }
}
