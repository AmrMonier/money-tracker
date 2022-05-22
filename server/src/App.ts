import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import { config } from "dotenv";
import bodyParser from "body-parser";
import {
  author,
  repository,
  version,
  description,
  name,
  license,
} from "../package.json";
export default class App {
  /**
   *
   */
  private server: Express;
  private port: number;
  constructor(port: number) {
    config();
    this.port = port;
    this.server = express();
    // this.middlewares();
    this.routes();
  }
  private middlewares() {
    this.server.use(bodyParser.json());
    this.server.use(cors({ origin: "*" }));
  }
  private routes() {
    this.server.get("/", (req: Request, res: Response, next: NextFunction) => {
      return res.json({
        name,
        version,
        description,
        author,
        license,
        repository,
      });
    });
  }
  run() {
    this.server.listen(this.port, () =>
      console.log(
        `⚡️[server]: Server is running at https://localhost:${this.port}`
      )
    );
  }
}
