import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import { withReflection } from "@src/lib/reflection.js";
import { routes } from "@src/services/example/index.js";
import fs from "fs";
import { getPort } from "@src/utils/port.js";

const server = fastify({
  http2: true,
  https: {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
  },
});

await server.register(fastifyConnectPlugin, {
  routes: withReflection(routes),
  grpc: true,
  grpcWeb: true,
});

server.get("/", (_, reply) => {
  reply.type("text/plain");
  reply.send("Hello World!");
});

await server.listen({ host: "localhost", port: getPort() });
console.log("server is listening at", server.addresses());
