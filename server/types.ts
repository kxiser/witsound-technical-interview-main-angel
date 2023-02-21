export type Middleware = (connection: HttpConnection) => Error | undefined;
export type HttpConnection = {
  request: Express.Request;
  response: Express.Response;
};

export type Wall_eHttpServiceBundle = {
  connection: HttpConnection;
};

export enum RouteProtocol {
  GET,
  POST,
}

export type Route = {
  protocol: RouteProtocol;
  path: string;
  middlewares?: Middleware[];
  action: (connection: HttpConnection) => Promise<void>;
};
