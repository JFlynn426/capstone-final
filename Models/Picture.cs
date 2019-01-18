namespace Capstone.Models
{
  public class Picture
  {
    public int Id { get; set; }
    public string SpeciesName { get; set; }

    public string PictureInfo { get; set; }

    public Location Location { get; set; }
    public int? LocationId { get; set; }
    public int? TagId { get; set; }
    public Tag Tag { get; set; }

    public string ImageUrl { get; set; }

  }


}