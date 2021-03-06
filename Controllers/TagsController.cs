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
  public class TagsController : Controller
  {
    private DatabaseContext db;

    public TagsController()
    {
      this.db = new DatabaseContext();
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Tag>>> GetAllTags()
    {
      return await this.db.Tags.ToListAsync();
    }
  }
}