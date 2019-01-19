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
  public class UpdateController : Controller
  {
    private DatabaseContext db;

    public UpdateController()
    {
      this.db = new DatabaseContext();
    }

    [HttpPost]
    public async Task<ActionResult<Picture>> Post([FromBody] Picture newPicture)
    {
      this.db.Pictures.Add(newPicture);
      await this.db.SaveChangesAsync();
      return newPicture;
    }
    [HttpGet]
    public async Task<ActionResult<List<Picture>>> GetAll()
    {
      var results = this.db.Pictures
            .Include(i => i.Location)
            .Include(i => i.Tag);
      return await results.ToListAsync();
    }
    [HttpDelete("{id}")]
    public ActionResult<Picture> DeleteAction([FromRoute] int id)
    {
      var PicToRemove = this.db.Pictures.FirstOrDefault(Picture => Picture.Id == id);
      this.db.Pictures.Remove(PicToRemove);
      this.db.SaveChanges();
      return PicToRemove;
    }
  }

}



