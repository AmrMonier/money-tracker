import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("initial_categories", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.enum("type", ["income", "expenses"]);
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("initial_categories");
}
