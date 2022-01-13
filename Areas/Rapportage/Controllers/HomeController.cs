using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarktenEnForenWeb.Areas.Rapportage.Controllers
{
    [Area("Rapportage")]
    public class HomeController : Controller
    {
        public IActionResult CsvExport()
        {
            return View();
        }
    }
}
