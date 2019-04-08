import * as dotenv from "dotenv";
dotenv.config();

import config from "./config";
import server from "./server";

const port: number = parseInt(process.env.PORT || "3000", config.radix);

server.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`[SERVER] Running at http://localhost:${port}`);
});
