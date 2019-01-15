using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace MasterReview.ImageUtilities
{
  public class CloudinaryHelper
  {
    private Cloudinary _cloudinary;
    public CloudinaryHelper()
    {
      Account account = new Account(
          "johnflynnphotos",
          "538473767795286",
          "DPMtKL8S9yaIShSwPXFhS5B1ktI");

      _cloudinary = new Cloudinary(account);
    }

    public ImageUploadResult UploadFile(string path)
    {
      var uploadParams = new ImageUploadParams()
      {
        File = new FileDescription(path)
      };
      var uploadResult = _cloudinary.Upload(uploadParams);
      return uploadResult;
    }
  }

  public class CloudinaryKeys
  {
    public string CloudName { get; set; } = null;
    public string CloudKey { get; set; } = null;
    public string CloudSecret { get; set; } = null;
  }
}