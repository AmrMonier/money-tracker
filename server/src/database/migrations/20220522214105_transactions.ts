import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("transactions", (table) => {
    table.increments("id").primary();
    table.string("note");
    table.float("amount");
    table.integer("user_id").unsigned();
    table.integer("category_id").unsigned();
    table.integer("budget_id").unsigned().nullable();
    table.integer("scheduled_transaction_id").unsigned().nullable();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("cascade");
    table
      .foreign("category_id")
      .references("id")
      .inTable("categories")
      .onDelete("cascade");
    table
      .foreign("budget_id")
      .references("id")
      .inTable("budgets")
      .onDelete("set null");
    table
      .foreign("scheduled_transaction_id")
      .references("id")
      .inTable("scheduled_transactions")
      .onDelete("set null");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("transactions");
}
