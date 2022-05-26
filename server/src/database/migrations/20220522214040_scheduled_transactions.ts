import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("scheduled_transactions", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.float("amount").defaultTo(0);
    table.enum("type", ["daily", "weekly", "monthly", "yearly"]);
    table.integer("user_id").unsigned();
    table.integer("category_id").unsigned();
    table.integer("budget_id").unsigned().nullable();
    table.integer("day").unsigned();
    table
      .enum("month", [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ])
      .nullable();
    table.timestamps();

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
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("scheduled_transactions");
}
