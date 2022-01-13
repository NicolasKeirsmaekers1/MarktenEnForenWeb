using Digipolis.Errors;
using MarktenEnForenWeb.Shared;
using MarktenEnForenWeb.Shared.Constants;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MarktenEnForenWeb.Controllers
{
    [Route("/[controller]")]
    public class StatusController : Controller
    {
        /// <summary>
        /// Get the global Front End status.
        /// </summary>
        /// <returns></returns>
        [HttpGet("ping")]
        [Produces(MediaType.Json)]
        [ProducesResponseType(typeof(StatusResponse), 200)]
        [ProducesResponseType(typeof(Error), 500)]
        [AllowAnonymous]
        public IActionResult GetPing()
        {
            return Ok(new StatusResponse()
            {
                Status = Status.Ok
            });
        }
    }
}
