using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using MyApp.Model.Layout;
using MyApp.Service.Layout;
using MyApp.API.Extensions;

namespace MyApp.API.Controllers
{
    /// <summary>
    /// This api deals with layout setting. Navbar position, content position and in future Theme, permissions etc.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class LayoutController : BaseController
    {

        private ILayoutService service;
        public LayoutController(ILayoutService _service)
        {
            service = _service;
        }

        /// <summary>
        /// Available layout templates
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Layout/EnumLayoutTemplates")]
        public ActionResult<dynamic> _EnumLayoutTemplates()
        {
            var dict = Enum<LayoutTemplates>.AsDictionary;

            return Ok(dict);
        }
        /// <summary>
        /// Available layout themes
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Layout/EnumLayoutThemes")]
        public ActionResult<dynamic> _EnumLayoutThemes()
        {
            var dict = Enum<LayoutThemes>.AsDictionary;

            return Ok(dict);
        }

        /// <summary>
        /// Main selected layout view model
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Layout/GetLayout")]
        public ActionResult<LayoutComponentViewModel> GetLayout(LayoutTemplates layoutTemplate)
        {
            return Ok(service.GetLayout(layoutTemplate));
        }

        /// <summary>
        /// Main layout view models
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Layout/GetLayouts")]
        public ActionResult<LayoutComponentViewModel> GetLayouts()
        {
            return Ok(service.GetLayouts());
        }

        /// <summary>
        /// Navitems, to be removed and fetched from LayoutComponentViewModel
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Layout/GetNavItems")]
        public ActionResult<NavItemViewModel> GetNavItems()
        {
            return Ok(service.GetNavItems());
        }

    }
}