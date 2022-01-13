using MarktenEnForenWeb.Services;
using MarktenEnForenWeb.Shared;
using MarktenEnForenWeb.Shared.Options;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Threading.Tasks;

namespace MarktenEnForenWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppSettings appSettings;
        private readonly AuthService authService;

        public HomeController(IOptions<AppSettings> appSettings, AuthService authService)
        {
            this.appSettings = appSettings.Value;
            this.authService = authService;
        }

        [Authorize]
        public IActionResult Index()
        {
            return View("Index");
        }

        public IActionResult AccessDenied() => View("~/Views/Home/AccessDenied.cshtml");


        public IActionResult Error()
        {
            return View();
        }

        [HttpGet("/permissions")]
        public async Task<IActionResult> GetUserPermissions()
        {
            var permissions = await authService.GetPermissions();
            return Json(permissions.Permissions);
        }

        [HttpGet("/me")]
        public async Task<IActionResult> GetUserInfo()
        {
            var userInfo = await authService.GetUserInfo();
            return Json(userInfo.Data);
        }

        [HttpGet("/refresh")]
        public async Task<IActionResult> RefreshToken()
        {
            var token = await authService.RefreshToken();
            return Json(new { jwt = token });
        }

        [HttpGet("/logout")]
        public IActionResult NoUserIndex()
        {
            return View("NoUserIndex");
        }

        [HttpPost("/logout")]
        [Authorize]
        public async Task<IActionResult> Logout([FromBody] UserInfo userName)
        {
            if (userName == null)
                throw new ArgumentNullException($"No current user signed in, cannot logout!");

            await authService.Logout();
            HttpContext.Response.Cookies.Delete("jwt");

            return Json("/home/logout");
        }

        [HttpGet("/login")]
        public IActionResult Login()
        {
            HttpContext.Response.Redirect("/");
            return Ok();
        }
    }
}
