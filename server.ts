import { createServer } from "http";
import { app } from "./app";
const bootstrap = () => {
  const server = createServer(app);

  server.listen(4000, () => {
    console.log("listening on port 4000");
  });
};

bootstrap();
