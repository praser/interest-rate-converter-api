import express from "express";
import HttpErrors from "./HttpErrors";
import router from "./routes/router";

const server = express();

server.use(/\/per\-(day|month|year)/, router);
server.use((_, res) => {
  return res.status(HttpErrors.NOT_FOUND().code).send({
    error: {
      ...HttpErrors.NOT_FOUND(),
    },
  });
});

export default server;
