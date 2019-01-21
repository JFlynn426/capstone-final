using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capstone.ImageUtilities;
using Capstone.Models;
using content;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Capstone.Controllers
{
  [Route("api/[controller]")]
  public class PhotoViewController : Controller
  {
    private DatabaseContext db;

    public PhotoViewController()
    {
      this.db = new DatabaseContext();
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Picture>> Get([FromRoute] int id)
    {
      var results = this.db.Pictures.Where(Picture => Picture.Id == id);
      return Ok(results);
    }

  }

}