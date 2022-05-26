import knex, { Knex } from "knex";
import db from "../Config/db";
import IDatabaseConnection from "../interfaces/IDatabaseConnections";
export default class DatabaseClient {
  private static _instance: DatabaseClient;
  public connection: Knex;
  private constructor(connection: IDatabaseConnection) {

    this.connection = knex(connection);
    this.connection
      .select(1)
      .then(() => console.log("⚡️[server]: Database Connected"))
      .catch((e) =>
        console.error("⚡️[server]: Failed to connect to database")
      );
  }

  static getInstance(
    connection: IDatabaseConnection = db.default
  ): DatabaseClient {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new DatabaseClient(connection);
    return this._instance;
  }
}
