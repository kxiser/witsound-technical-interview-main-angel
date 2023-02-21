import { HttpConnection, Route, RouteProtocol } from "./HttpConnectionWrapper";
import { DBHandler } from "../db/DBHandler";
import { UserController } from "../controllers/UserController";
import { User } from '../models/User'

export const routes: Route[] = [
  {
    protocol: RouteProtocol.GET,
    path: "/",
    action: async (connection: HttpConnection): Promise<void> => {
      connection.response.send("Hello World from the server side!");
    },
  },
  {
    protocol: RouteProtocol.GET,
    path: "/getAll",
    action: async (connection: HttpConnection): Promise<void> => {
      // get all names
      try {
        const connectionDB = await new DBHandler().connect()
        const userCrtl = new UserController()
        connection.response.send(await userCrtl.getAll(connectionDB))
      } catch (error) {
        console.log(error)
      }

    },
  },
  {
    protocol: RouteProtocol.POST,
    path: "/create",
    action: async (connection: HttpConnection): Promise<void> => {
      // create new name
      const {request} = connection
      console.log(request.body.name)
      let result: any = null
      let name: any = request.body.name??null
      if (name != null) {
        if (name.match(/^Z/gi) != null) {
          result = "The name cannot begin with z"
        }else{
          const connectionDB = await new DBHandler().connect()
          const userCrtl = new UserController()
          let current_user: User = { id: null, name: name }
          await userCrtl.set(connectionDB, current_user)
          result = "successfully created"
        }
      }
      connection.response.send(result)
    },
  },
];
