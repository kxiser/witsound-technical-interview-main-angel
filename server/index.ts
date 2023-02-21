import express from "express";
import { routes } from "./routes";
import cors from 'cors';
import {
  HttpConnectionWrapper,
  RouteProtocol,
} from "./routes/HttpConnectionWrapper";

const server = express();
server.use(cors()); 
server.use(express.json());

for (const route of routes) {
  switch (route.protocol) {
    case RouteProtocol.GET:
      server.get(route.path, (request, response) =>
        new HttpConnectionWrapper({ request, response }, route).run()
      );
      break;
    case RouteProtocol.POST:
      server.post(route.path, (request, response) =>
        new HttpConnectionWrapper({ request, response }, route).run()
      );
      break;

    case RouteProtocol.PUT:
      server.put(route.path, (request, response) =>
        new HttpConnectionWrapper({ request, response }, route).run()
      );
      break;

    case RouteProtocol.DELETE:
      server.delete(route.path, (request, response) =>
        new HttpConnectionWrapper({ request, response }, route).run()
      );
      break;
  }
}

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
