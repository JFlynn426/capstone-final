using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capstone.ImageUtilities;
using MasterReview.ImageUtilities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Capstone.Controllers
{
  [Route("api/[controller]")]
  public class ImageController : Controller
  {
    private IImageWriter imagewriter;

    public ImageController(IImageWriter writer)
    {
      this.imagewriter = writer;
    }

    [HttpPost]

    public async Task<ActionResult> ImageUpload(IFormFile file)
    {
      var filepath = await imagewriter.UploadImage(file);
      var results = new CloudinaryHelper().UploadFile(filepath);
      return Ok(results);
    }
  }
}