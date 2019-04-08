import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import path from "path";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import router from "./routes/router";
import HttpErrorMiddleware, { NOT_FOUND } from "./middlewares/httpErrorMiddleware";

dotenv.config();
const server = express();

const swaggerDocument = YAML.load(path.join(__dirname, "./openApi.yaml"));
const urls = [process.env.PRODUCTION_URL, process.env.SANDBOX_URL];
const swaggerServers = urls
  .map((url, index) => {
    const description = index === 0 ? "Production Server" : "Sandbox Server";
    return { description, url };
  })
  .filter((sawaggerServer) => sawaggerServer.url !== undefined);

swaggerDocument.servers = swaggerServers;

server.use(cors());
server.use(/\/per\-(day|month|year)/, router);
server.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.all("/*", (_, __, next) => next(NOT_FOUND));
server.use(HttpErrorMiddleware);

export default server;
