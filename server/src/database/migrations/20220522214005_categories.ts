import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("categories", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.enum("type", ["income", "expenses"]);
    table.integer("user_id").unsigned();
    table.timestamps();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("cascade");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("categories");

}
