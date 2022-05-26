export default interface IDatabaseConnection {
  client: string | undefined;
  connection: {
    host: string | undefined;
    port: number;
    user: string | undefined;
    password: string | undefined;
    database: string | undefined;
  };
}
