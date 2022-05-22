import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("email").index("userEmailIdx");
    table.string("password");
    table.float("balance").defaultTo(0);
    table.enum("role", ["user", "admin"]).defaultTo("user");
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
  
}
