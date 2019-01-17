using Microsoft.EntityFrameworkCore.Migrations;

namespace content.Migrations
{
    public partial class addedidsforcat : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pictures_Tag_TagsId",
                table: "Pictures");

            migrationBuilder.RenameColumn(
                name: "TagsId",
                table: "Pictures",
                newName: "TagId");

            migrationBuilder.RenameIndex(
                name: "IX_Pictures_TagsId",
                table: "Pictures",
                newName: "IX_Pictures_TagId");

            migrationBuilder.AddForeignKey(
                name: "FK_Pictures_Tag_TagId",
                table: "Pictures",
                column: "TagId",
                principalTable: "Tag",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pictures_Tag_TagId",
                table: "Pictures");

            migrationBuilder.RenameColumn(
                name: "TagId",
                table: "Pictures",
                newName: "TagsId");

            migrationBuilder.RenameIndex(
                name: "IX_Pictures_TagId",
                table: "Pictures",
                newName: "IX_Pictures_TagsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Pictures_Tag_TagsId",
                table: "Pictures",
                column: "TagsId",
                principalTable: "Tag",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
