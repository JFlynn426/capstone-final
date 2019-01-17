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
  public class TagViewController : Controller
  {
    private DatabaseContext db;

    public TagViewController()
    {
      this.db = new DatabaseContext();
    }
    [HttpGet]
    public async Task<ActionResult<List<Picture>>> Get([FromRoute] string Tag)
    {
      var results = this.db.Pictures.Where(Picture => Picture.Tags.Tags.ToLower() == Tag.ToLower());
      return await results.ToListAsync();
    }
  }

}

