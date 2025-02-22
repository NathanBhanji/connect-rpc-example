import { ConnectRouter, createRouterTransport } from "@connectrpc/connect";
import { createClient } from "@connectrpc/connect";
import { ServerReflection } from "@services/grpc/reflection/v1/reflection_pb.js";
import { withReflection } from "./reflection.js";
import { TestService } from "@services/test/v1/test_pb.js";
import { describe, it, expect } from "@jest/globals";

describe("Reflection Server", () => {
  // Helper to create a test client
  function createTestClient() {
    const routes = (router: ConnectRouter) => {
      withReflection((r) => {
        // Register the actual TestService
        r.service(TestService, {
          testMethod: async () => ({}),
        });
      })(router);
    };

    const transport = createRouterTransport(routes);
    return createClient(ServerReflection, transport);
  }

  it("should list registered services", async () => {
    const client = createTestClient();
    const response = await client
      .serverReflectionInfo(
        (async function* () {
          yield {
            host: "localhost",
            messageRequest: {
              case: "listServices",
              value: "",
            },
          };
        })()
      )
      [Symbol.asyncIterator]()
      .next();

    const result = response.value;
    expect(result.messageResponse?.case).toBe("listServicesResponse");
    expect(result.messageResponse?.value.service).toHaveLength(1);
    expect(result.messageResponse?.value.service[0].name).toMatch(
      /TestService$/
    );
  });

  it("should find file by filename", async () => {
    const client = createTestClient();
    const response = await client
      .serverReflectionInfo(
        (async function* () {
          yield {
            host: "localhost",
            messageRequest: {
              case: "fileByFilename",
              value: "test/v1/test.proto",
            },
          };
        })()
      )
      [Symbol.asyncIterator]()
      .next();

    const result = response.value;
    expect(result.messageResponse?.case).toBe("fileDescriptorResponse");
    expect(result.messageResponse?.value.fileDescriptorProto).toHaveLength(1);
  });

  it("should find file by symbol", async () => {
    const client = createTestClient();
    const response = await client
      .serverReflectionInfo(
        (async function* () {
          yield {
            host: "localhost",
            messageRequest: {
              case: "fileContainingSymbol",
              value: "test.v1.TestService",
            },
          };
        })()
      )
      [Symbol.asyncIterator]()
      .next();

    const result = response.value;
    expect(result.messageResponse?.case).toBe("fileDescriptorResponse");
    expect(result.messageResponse?.value.fileDescriptorProto).toHaveLength(1);
  });

  it("should handle errors gracefully", async () => {
    const client = createTestClient();
    const response = await client
      .serverReflectionInfo(
        (async function* () {
          yield {
            host: "localhost",
            messageRequest: {
              case: "fileByFilename",
              value: "non_existent_file.proto",
            },
          };
        })()
      )
      [Symbol.asyncIterator]()
      .next();

    const result = response.value;
    expect(result.messageResponse?.case).toBe("errorResponse");
    expect(result.messageResponse?.value.errorCode).toBe(13);
  });
});
