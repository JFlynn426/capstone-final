using System;
using System.Text.RegularExpressions;
using Capstone.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace content
{
  public partial class DatabaseContext : DbContext
  {
    public DatabaseContext()
    {
    }

    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
    }

    private string ConvertPostConnectionToConnectionString(string connection)
    {
      var _connection = connection.Replace("postgres://", String.Empty);
      var output = Regex.Split(_connection, ":|@|/");
      return $"server={output[2]};database={output[4]};User Id={output[0]}; password={output[1]}; port={output[3]}";
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        var envConn = Environment.GetEnvironmentVariable("DATABASE_URL");
        var conn = "server=localhost;database=Capstone;User Id=dev; Password= dev";
        if (envConn != null)
        {
          conn = ConvertPostConnectionToConnectionString(envConn);
        }
        optionsBuilder.UseNpgsql(conn);
      }
    }



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");

      modelBuilder.Entity<Tag>().HasData(
            new Tag { Id = -1, Tags = "Hawks/Eagles" },
            new Tag { Id = -2, Tags = "Owls" },
            new Tag { Id = -3, Tags = "Small Songbirds" },
            new Tag { Id = -4, Tags = "Ducks and Waterfowl" },
            new Tag { Id = -5, Tags = "Larger Misc. Birds" },
            new Tag { Id = -6, Tags = "Landscape" },
            new Tag { Id = -7, Tags = "Non-Avian Wildlife" },
            new Tag { Id = -8, Tags = "Shorebirds" }
      );


      modelBuilder.Entity<Location>().HasData(
        new Location { Id = -1, Place = "Northeast Photography" },
            new Location { Id = -2, Place = "Florida Photography" },
            new Location { Id = -3, Place = "Travel/Landscape Photography" }
      );
    }



    public DbSet<Picture> Pictures { get; set; }
    public DbSet<Location> Place { get; set; }
    public DbSet<Tag> Tags { get; set; }
  }
}
