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
  public class CategoriesController : Controller
  {
    private DatabaseContext db;

    public CategoriesController()
    {
      this.db = new DatabaseContext();
    }
    [HttpGet]
    public async Task<ActionResult<List<Picture>>> GetAll()
    {
      var results = this.db.Pictures
            .Include(i => i.Location)
            .Include(i => i.Tag);
      return await results.ToListAsync();
    }
  }
}