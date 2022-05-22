import knex, { Knex } from "knex";
export default class DatabaseClient {
  private static _instance: DatabaseClient;
  private connection: Knex;
  private constructor() {
    this.connection = knex({
      client: process.env.DB_CLIENT,
      connection: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || ""),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      },
    });
    this.connection
      .select(1)
      .then(() => console.log("[Server] Database Connected"))
      .catch((e) => console.error("[Server] Failed to connect to database"));
  }

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new DatabaseClient();
    return this._instance;
  }
}
