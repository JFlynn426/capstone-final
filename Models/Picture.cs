namespace Capstone.Models
{
  public class Picture
  {
    public int Id { get; set; }
    public string SpeciesName { get; set; }

    public string PictureInfo { get; set; }

    public Location Place { get; set; }
    public int? PlaceId { get; set; }
    public int? TagId { get; set; }
    public Tag Tags { get; set; }

    public string ImageUrl { get; set; }

  }


}