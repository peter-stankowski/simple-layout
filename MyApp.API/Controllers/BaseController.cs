using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyApp.API.Controllers
{
    [EnableCors("AllowAll")]
    public class BaseController : ControllerBase
    {
    }
}