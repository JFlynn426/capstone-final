using Microsoft.EntityFrameworkCore.Migrations;

namespace content.Migrations
{
    public partial class addedpicinfo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PictureInfo",
                table: "Pictures",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PictureInfo",
                table: "Pictures");
        }
    }
}
