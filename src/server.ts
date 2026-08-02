import { Server } from "http";
import app from "./app.js";
import env from "./config/env.js";

let server: Server;

// Bootstrap server startup sequence
const bootstrap = async () => {
  try {
    server = app.listen(env.port, () => {
      console.log(`Server is running on port ${env.port}`);
    });
  } catch (err) {
    console.error("Server running error", err);
  }
};

(async () => {
  await bootstrap();
})();

process.on("unhandledRejection", () => {
  console.log("Unhandled Rejection Detected");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log("Unhandled UncaughtException Detected");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

process.on("SIGTERM", (err) => {
  console.log("SIGTERM signal received", err);

  if (server) {
    server.close(() => {
      process.exit(0);
    });
  }
});