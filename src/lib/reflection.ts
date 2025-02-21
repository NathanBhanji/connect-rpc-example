import { create, DescMethod, DescService, toBinary } from "@bufbuild/protobuf";
import { GenFile } from "@bufbuild/protobuf/codegenv1";
import { FileDescriptorProtoSchema } from "@bufbuild/protobuf/wkt";
import { ConnectRouter, MethodImpl, ServiceImpl } from "@connectrpc/connect";
import { UniversalHandlerOptions } from "@connectrpc/connect/protocol";
import {
  ErrorResponseSchema,
  FileDescriptorResponseSchema,
  ListServiceResponseSchema,
  ServerReflection,
  ServerReflectionRequest,
  ServerReflectionResponse,
  ServerReflectionResponseSchema,
  ServiceResponseSchema,
} from "@services/grpc/reflection/v1/reflection_pb.js";
import {
  ErrorResponseSchema as ErrorResponseSchemaV1Alpha,
  FileDescriptorResponseSchema as FileDescriptorResponseSchemaV1Alpha,
  ListServiceResponseSchema as ListServiceResponseSchemaV1Alpha,
  ServerReflection as ServerReflectionV1Alpha,
  ServerReflectionRequest as ServerReflectionV1AlphaRequest,
  ServerReflectionResponse as ServerReflectionV1AlphaResponse,
  ServerReflectionResponseSchema as ServerReflectionV1AlphaResponseSchema,
  ServiceResponseSchema as ServiceResponseSchemaV1Alpha,
} from "@services/grpc/reflection/v1alpha/reflection_pb.js";

class ReflectionRegistry {
  private static instance: ReflectionRegistry;
  private files: Set<GenFile> = new Set();
  private serviceMap: Map<string, GenFile> = new Map();

  static getInstance(): ReflectionRegistry {
    if (!this.instance) {
      this.instance = new ReflectionRegistry();
    }
    return this.instance;
  }

  addFile(file: GenFile) {
    this.files.add(file);
    file.services.forEach((svc) => {
      this.serviceMap.set(svc.typeName, file);
    });
  }

  getFiles(): GenFile[] {
    return Array.from(this.files);
  }

  findFileByName(filename: string): GenFile | undefined {
    return this.getFiles().find((file) => file.name === filename);
  }

  findFileBySymbol(symbol: string): GenFile | undefined {
    return this.serviceMap.get(symbol);
  }
}

class ReflectionRouter implements ConnectRouter {
  constructor(private router: ConnectRouter) {}

  service<T extends DescService>(
    service: T,
    implementation: Partial<ServiceImpl<T>>,
    options?: Partial<UniversalHandlerOptions>
  ): this {
    if (service.file) {
      ReflectionRegistry.getInstance().addFile(service.file);
    }
    this.router.service(service, implementation, options);
    return this;
  }

  get handlers() {
    return this.router.handlers;
  }

  rpc<M extends DescMethod>(
    method: M,
    impl: MethodImpl<M>,
    options?: Partial<UniversalHandlerOptions>
  ): this {
    this.router.rpc(method, impl, options);
    return this;
  }
}

// New helper functions to handle common reflection logic
function handleFileDescriptorResponse(file: GenFile) {
  return {
    case: "fileDescriptorResponse" as const,
    value: create(FileDescriptorResponseSchema, {
      fileDescriptorProto: [toBinary(FileDescriptorProtoSchema, file.proto)],
    }),
  };
}

function handleFileDescriptorResponseV1Alpha(file: GenFile) {
  return {
    case: "fileDescriptorResponse" as const,
    value: create(FileDescriptorResponseSchemaV1Alpha, {
      fileDescriptorProto: [toBinary(FileDescriptorProtoSchema, file.proto)],
    }),
  };
}

function getServicesList(registry: ReflectionRegistry) {
  return registry.getFiles().flatMap((file) =>
    file.services.map((svc) => ({
      name: svc.typeName,
    }))
  );
}

export function withReflection(
  registerServices: (router: ConnectRouter) => void
) {
  return (router: ConnectRouter) => {
    const reflectionRouter = new ReflectionRouter(router);
    registerServices(reflectionRouter);
    const registry = ReflectionRegistry.getInstance();

    router.service(ServerReflection, {
      async *serverReflectionInfo(
        requests: AsyncIterable<ServerReflectionRequest>
      ): AsyncIterable<ServerReflectionResponse> {
        for await (const request of requests) {
          const response = create(ServerReflectionResponseSchema, {
            validHost: request.host,
            originalRequest: request,
          });

          try {
            switch (request.messageRequest.case) {
              case "fileByFilename": {
                const file = registry.findFileByName(
                  request.messageRequest.value
                );
                if (file) {
                  response.messageResponse = handleFileDescriptorResponse(file);
                }
                break;
              }

              case "fileContainingSymbol": {
                const file = registry.findFileBySymbol(
                  request.messageRequest.value
                );
                if (file) {
                  response.messageResponse = handleFileDescriptorResponse(file);
                }
                break;
              }

              case "listServices": {
                const services = getServicesList(registry);
                response.messageResponse = {
                  case: "listServicesResponse",
                  value: create(ListServiceResponseSchema, {
                    service: services.map((svc) =>
                      create(ServiceResponseSchema, svc)
                    ),
                  }),
                };
                break;
              }
            }
          } catch (error) {
            console.error("Error in serverReflectionInfo:", error);
            response.messageResponse = {
              case: "errorResponse",
              value: create(ErrorResponseSchema, {
                errorCode: 13,
                errorMessage:
                  error instanceof Error ? error.message : "Unknown error",
              }),
            };
          }

          yield response;
        }
      },
    });

    router.service(ServerReflectionV1Alpha, {
      async *serverReflectionInfo(
        requests: AsyncIterable<ServerReflectionV1AlphaRequest>
      ): AsyncIterable<ServerReflectionV1AlphaResponse> {
        for await (const request of requests) {
          const response = create(ServerReflectionV1AlphaResponseSchema, {
            validHost: request.host,
            originalRequest: request,
          });

          try {
            switch (request.messageRequest.case) {
              case "fileByFilename": {
                const file = registry.findFileByName(
                  request.messageRequest.value
                );
                if (file) {
                  response.messageResponse =
                    handleFileDescriptorResponseV1Alpha(file);
                }
                break;
              }

              case "fileContainingSymbol": {
                const file = registry.findFileBySymbol(
                  request.messageRequest.value
                );
                if (file) {
                  response.messageResponse =
                    handleFileDescriptorResponseV1Alpha(file);
                }
                break;
              }

              case "listServices": {
                const services = getServicesList(registry);
                response.messageResponse = {
                  case: "listServicesResponse",
                  value: create(ListServiceResponseSchemaV1Alpha, {
                    service: services.map((svc) =>
                      create(ServiceResponseSchemaV1Alpha, svc)
                    ),
                  }),
                };
                break;
              }
            }
          } catch (error) {
            console.error("Error in serverReflectionInfo:", error);
            response.messageResponse = {
              case: "errorResponse",
              value: create(ErrorResponseSchemaV1Alpha, {
                errorCode: 13,
                errorMessage:
                  error instanceof Error ? error.message : "Reflection error",
              }),
            };
          }

          yield response;
        }
      },
    });
  };
}
