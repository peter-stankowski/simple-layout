using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using MyApp.Model.Layout;
using MyApp.Service.Layout;


namespace MyApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LayoutController : ControllerBase
    {

        private ILayoutService service;
        
        public LayoutController(ILayoutService _service)
        {
            service = _service;
        }

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet]
        [Route("api/Layout/GetNavItems")]
        public ActionResult<NavItemViewModel> GetNavItems()
        {
            return Ok(service.GetNavItems());
        }

    }
}