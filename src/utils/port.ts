const DEFAULT_PORT = 50051;

export const getPort = (): number => {
  const port = process.env.SERVER_PORT;

  if (!port) {
    console.warn(
      "SERVER_PORT is not set, using default gRPC port:",
      DEFAULT_PORT
    );
    return DEFAULT_PORT;
  }

  const parsedPort = Number(port);

  if (isNaN(parsedPort)) {
    throw new Error(`Invalid SERVER_PORT value: "${port}". Must be a number.`);
  }

  // gRPC typically uses ports 50051-50055 by convention
  if (parsedPort < 1024 || parsedPort > 65535) {
    throw new Error(
      `Invalid SERVER_PORT value: ${parsedPort}. For gRPC services, use ports above 1024 (preferably 50051-50055)`
    );
  }

  return parsedPort;
};
