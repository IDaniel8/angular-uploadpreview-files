import jsonServer from "json-server";
import { newEntryServerMiddleware } from "./middlewares";
import { documentCustomRoutes } from "./routes-custom/documents";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const defaultMiddlewares = jsonServer.defaults({ bodyParser: true });

// Set default middlewares (logger, static, cors and no-cache)
server.use(defaultMiddlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

documentCustomRoutes(server, router);
server.use(newEntryServerMiddleware);
server.use(router);

export function runServer({ PORT }) {
  server.listen(PORT, () => {
    console.log(`JSON Server is running: ${PORT}`);
  });
}
