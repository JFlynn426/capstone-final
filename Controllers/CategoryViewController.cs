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
  public class CategoryViewController : Controller
  {
    private DatabaseContext db;

    public CategoryViewController()
    {
      this.db = new DatabaseContext();
    }
    [HttpGet("{Category}")]
    public async Task<ActionResult<List<Picture>>> Get([FromRoute] string Category)
    {
      var results = this.db.Pictures.Include(i => i.Location)
            .Include(i => i.Tag).Where(Picture => Picture.Location.Place.ToLower() == Category.ToLower());
      return await results.ToListAsync();
    }

  }
}

