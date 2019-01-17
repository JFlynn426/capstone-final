using Microsoft.EntityFrameworkCore.Migrations;

namespace content.Migrations
{
    public partial class AddedSeecondeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Location",
                keyColumn: "Id",
                keyValue: -1,
                column: "Place",
                value: "Northeast Photography");

            migrationBuilder.InsertData(
                table: "Location",
                columns: new[] { "Id", "Place" },
                values: new object[,]
                {
                    { -2, "Florida Photography" },
                    { -3, "Travel/Landscape Photography" }
                });

            migrationBuilder.UpdateData(
                table: "Tag",
                keyColumn: "Id",
                keyValue: -1,
                column: "Tags",
                value: "Hawks/Eagles");

            migrationBuilder.InsertData(
                table: "Tag",
                columns: new[] { "Id", "Tags" },
                values: new object[,]
                {
                    { -2, "Owls" },
                    { -3, "Small Songbirds" },
                    { -4, "Ducks and Waterfowl" },
                    { -5, "Larger Misc. Birds" },
                    { -6, "Landscape" },
                    { -7, "Non-Avian Wildlife" },
                    { -8, "Shorebirds" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "Id",
                keyValue: -3);

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "Id",
                keyValue: -2);

            migrationBuilder.DeleteData(
                table: "Tag",
                keyColumn: "Id",
                keyValue: -8);

            migrationBuilder.DeleteData(
                table: "Tag",
                keyColumn: "Id",
                keyValue: -7);

            migrationBuilder.DeleteData(
                table: "Tag",
                keyColumn: "Id",
                keyValue: -6);

            migrationBuilder.DeleteData(
                table: "Tag",
                keyColumn: "Id",
                keyValue: -5);

            migrationBuilder.DeleteData(
                table: "Tag",
                keyColumn: "Id",
                keyValue: -4);

            migrationBuilder.DeleteData(
                table: "Tag",
                keyColumn: "Id",
                keyValue: -3);

            migrationBuilder.DeleteData(
                table: "Tag",
                keyColumn: "Id",
                keyValue: -2);

            migrationBuilder.UpdateData(
                table: "Location",
                keyColumn: "Id",
                keyValue: -1,
                column: "Place",
                value: "north east");

            migrationBuilder.UpdateData(
                table: "Tag",
                keyColumn: "Id",
                keyValue: -1,
                column: "Tags",
                value: "owls");
        }
    }
}
