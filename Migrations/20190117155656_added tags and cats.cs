using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace content.Migrations
{
    public partial class addedtagsandcats : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PlaceId",
                table: "Pictures",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TagsId",
                table: "Pictures",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Location",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Place = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Location", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tag",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Tags = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tag", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Pictures_PlaceId",
                table: "Pictures",
                column: "PlaceId");

            migrationBuilder.CreateIndex(
                name: "IX_Pictures_TagsId",
                table: "Pictures",
                column: "TagsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Pictures_Location_PlaceId",
                table: "Pictures",
                column: "PlaceId",
                principalTable: "Location",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Pictures_Tag_TagsId",
                table: "Pictures",
                column: "TagsId",
                principalTable: "Tag",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pictures_Location_PlaceId",
                table: "Pictures");

            migrationBuilder.DropForeignKey(
                name: "FK_Pictures_Tag_TagsId",
                table: "Pictures");

            migrationBuilder.DropTable(
                name: "Location");

            migrationBuilder.DropTable(
                name: "Tag");

            migrationBuilder.DropIndex(
                name: "IX_Pictures_PlaceId",
                table: "Pictures");

            migrationBuilder.DropIndex(
                name: "IX_Pictures_TagsId",
                table: "Pictures");

            migrationBuilder.DropColumn(
                name: "PlaceId",
                table: "Pictures");

            migrationBuilder.DropColumn(
                name: "TagsId",
                table: "Pictures");
        }
    }
}
