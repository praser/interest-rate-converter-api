import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import path from "path"
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import HttpErrors from "./HttpErrors";
import router from "./routes/router";

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
server.all("*", (_, res) => {
  return res.status(HttpErrors.NOT_FOUND().code).send({
    error: {
      ...HttpErrors.NOT_FOUND(),
    },
  });
});

export default server;
