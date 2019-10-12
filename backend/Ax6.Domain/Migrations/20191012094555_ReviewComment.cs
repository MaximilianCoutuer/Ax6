using Microsoft.EntityFrameworkCore.Migrations;

namespace Ax6.Domain.Migrations
{
    public partial class ReviewComment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Comment",
                table: "Criteria_Reviews",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Comment",
                table: "Criteria_Reviews");
        }
    }
}
