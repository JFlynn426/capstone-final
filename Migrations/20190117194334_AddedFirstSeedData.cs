using Microsoft.EntityFrameworkCore.Migrations;

namespace content.Migrations
{
    public partial class AddedFirstSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Location",
                columns: new[] { "Id", "Place" },
                values: new object[] { -1, "north east" });

            migrationBuilder.InsertData(
                table: "Tag",
                columns: new[] { "Id", "Tags" },
                values: new object[] { -1, "owls" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "Id",
                keyValue: -1);

            migrationBuilder.DeleteData(
                table: "Tag",
                keyColumn: "Id",
                keyValue: -1);
        }
    }
}
