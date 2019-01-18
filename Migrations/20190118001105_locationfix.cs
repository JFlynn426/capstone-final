using Microsoft.EntityFrameworkCore.Migrations;

namespace content.Migrations
{
    public partial class locationfix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pictures_Place_PlaceId",
                table: "Pictures");

            migrationBuilder.RenameColumn(
                name: "PlaceId",
                table: "Pictures",
                newName: "LocationId");

            migrationBuilder.RenameIndex(
                name: "IX_Pictures_PlaceId",
                table: "Pictures",
                newName: "IX_Pictures_LocationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Pictures_Place_LocationId",
                table: "Pictures",
                column: "LocationId",
                principalTable: "Place",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pictures_Place_LocationId",
                table: "Pictures");

            migrationBuilder.RenameColumn(
                name: "LocationId",
                table: "Pictures",
                newName: "PlaceId");

            migrationBuilder.RenameIndex(
                name: "IX_Pictures_LocationId",
                table: "Pictures",
                newName: "IX_Pictures_PlaceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Pictures_Place_PlaceId",
                table: "Pictures",
                column: "PlaceId",
                principalTable: "Place",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
