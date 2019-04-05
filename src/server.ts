import express from "express";
import router from "./routes/router";

const server = express();

server.use(/\/per\-(day|month|year)/, router);

export default server;
