import { Request, Response } from "express";

export type Middleware = (connection: HttpConnection) => Error | undefined;
export type HttpConnection = {
  request: Request;
  response: Response;
};

export type Wall_eHttpServiceBundle = {
  connection: HttpConnection;
};

export enum RouteProtocol {
  GET,
  POST,
  PUT,
  DELETE,
}

export type Route = {
  protocol: RouteProtocol;
  path: string;
  middlewares?: Middleware[];
  action: (connection: HttpConnection) => Promise<void>;
};

export class HttpConnectionWrapper {
  constructor(private connection: HttpConnection, private route: Route) {}

  public async run(): Promise<void> {
    try {
      await this.route.action(this.connection);
    } catch (error) {
      this.connection.response.status(500).send("Internal Server Error");
    }
  }
}
