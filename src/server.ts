import cors from "cors";
import express from "express";
import HttpErrorMiddleware, {
  NOT_FOUND,
} from "./middlewares/httpErrorMiddleware";
import swaggerMiddleware, {
  swaggerConfig,
} from "./middlewares/swaggerMiddleware";
import router from "./routes/router";

const server = express();

server.use(cors());
server.use(/\/per\-(day|month|year)/, router);
server.use(
  "/doc",
  swaggerMiddleware.serve,
  swaggerMiddleware.setup(swaggerConfig),
);
server.all("/*", (_, __, next) => next(NOT_FOUND));
server.use(HttpErrorMiddleware);

export default server;
