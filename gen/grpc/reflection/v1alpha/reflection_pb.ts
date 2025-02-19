// Copyright 2016 The gRPC Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// Service exported by server reflection

// Warning: this entire file is deprecated. Use this instead:
// https://github.com/grpc/grpc-proto/blob/master/grpc/reflection/v1/reflection.proto

// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file grpc/reflection/v1alpha/reflection.proto (package grpc.reflection.v1alpha, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file grpc/reflection/v1alpha/reflection.proto.
 * @deprecated
 */
export const file_grpc_reflection_v1alpha_reflection: GenFile = /*@__PURE__*/
  fileDesc("CihncnBjL3JlZmxlY3Rpb24vdjFhbHBoYS9yZWZsZWN0aW9uLnByb3RvEhdncnBjLnJlZmxlY3Rpb24udjFhbHBoYSKKAgoXU2VydmVyUmVmbGVjdGlvblJlcXVlc3QSDAoEaG9zdBgBIAEoCRIaChBmaWxlX2J5X2ZpbGVuYW1lGAMgASgJSAASIAoWZmlsZV9jb250YWluaW5nX3N5bWJvbBgEIAEoCUgAEk4KGWZpbGVfY29udGFpbmluZ19leHRlbnNpb24YBSABKAsyKS5ncnBjLnJlZmxlY3Rpb24udjFhbHBoYS5FeHRlbnNpb25SZXF1ZXN0SAASJwodYWxsX2V4dGVuc2lvbl9udW1iZXJzX29mX3R5cGUYBiABKAlIABIXCg1saXN0X3NlcnZpY2VzGAcgASgJSABCEQoPbWVzc2FnZV9yZXF1ZXN0IkUKEEV4dGVuc2lvblJlcXVlc3QSFwoPY29udGFpbmluZ190eXBlGAEgASgJEhgKEGV4dGVuc2lvbl9udW1iZXIYAiABKAUi0QMKGFNlcnZlclJlZmxlY3Rpb25SZXNwb25zZRISCgp2YWxpZF9ob3N0GAEgASgJEkoKEG9yaWdpbmFsX3JlcXVlc3QYAiABKAsyMC5ncnBjLnJlZmxlY3Rpb24udjFhbHBoYS5TZXJ2ZXJSZWZsZWN0aW9uUmVxdWVzdBJTChhmaWxlX2Rlc2NyaXB0b3JfcmVzcG9uc2UYBCABKAsyLy5ncnBjLnJlZmxlY3Rpb24udjFhbHBoYS5GaWxlRGVzY3JpcHRvclJlc3BvbnNlSAASWgoeYWxsX2V4dGVuc2lvbl9udW1iZXJzX3Jlc3BvbnNlGAUgASgLMjAuZ3JwYy5yZWZsZWN0aW9uLnYxYWxwaGEuRXh0ZW5zaW9uTnVtYmVyUmVzcG9uc2VIABJOChZsaXN0X3NlcnZpY2VzX3Jlc3BvbnNlGAYgASgLMiwuZ3JwYy5yZWZsZWN0aW9uLnYxYWxwaGEuTGlzdFNlcnZpY2VSZXNwb25zZUgAEkAKDmVycm9yX3Jlc3BvbnNlGAcgASgLMiYuZ3JwYy5yZWZsZWN0aW9uLnYxYWxwaGEuRXJyb3JSZXNwb25zZUgAQhIKEG1lc3NhZ2VfcmVzcG9uc2UiNwoWRmlsZURlc2NyaXB0b3JSZXNwb25zZRIdChVmaWxlX2Rlc2NyaXB0b3JfcHJvdG8YASADKAwiSwoXRXh0ZW5zaW9uTnVtYmVyUmVzcG9uc2USFgoOYmFzZV90eXBlX25hbWUYASABKAkSGAoQZXh0ZW5zaW9uX251bWJlchgCIAMoBSJQChNMaXN0U2VydmljZVJlc3BvbnNlEjkKB3NlcnZpY2UYASADKAsyKC5ncnBjLnJlZmxlY3Rpb24udjFhbHBoYS5TZXJ2aWNlUmVzcG9uc2UiHwoPU2VydmljZVJlc3BvbnNlEgwKBG5hbWUYASABKAkiOgoNRXJyb3JSZXNwb25zZRISCgplcnJvcl9jb2RlGAEgASgFEhUKDWVycm9yX21lc3NhZ2UYAiABKAkykwEKEFNlcnZlclJlZmxlY3Rpb24SfwoUU2VydmVyUmVmbGVjdGlvbkluZm8SMC5ncnBjLnJlZmxlY3Rpb24udjFhbHBoYS5TZXJ2ZXJSZWZsZWN0aW9uUmVxdWVzdBoxLmdycGMucmVmbGVjdGlvbi52MWFscGhhLlNlcnZlclJlZmxlY3Rpb25SZXNwb25zZSgBMAFCcwoaaW8uZ3JwYy5yZWZsZWN0aW9uLnYxYWxwaGFCFVNlcnZlclJlZmxlY3Rpb25Qcm90b1ABWjlnb29nbGUuZ29sYW5nLm9yZy9ncnBjL3JlZmxlY3Rpb24vZ3JwY19yZWZsZWN0aW9uX3YxYWxwaGG4AQFiBnByb3RvMw");

/**
 * The message sent by the client when calling ServerReflectionInfo method.
 *
 * @generated from message grpc.reflection.v1alpha.ServerReflectionRequest
 * @deprecated
 */
export type ServerReflectionRequest = Message<"grpc.reflection.v1alpha.ServerReflectionRequest"> & {
  /**
   * @generated from field: string host = 1;
   */
  host: string;

  /**
   * To use reflection service, the client should set one of the following
   * fields in message_request. The server distinguishes requests by their
   * defined field and then handles them using corresponding methods.
   *
   * @generated from oneof grpc.reflection.v1alpha.ServerReflectionRequest.message_request
   * @deprecated
   */
  messageRequest: {
    /**
     * Find a proto file by the file name.
     *
     * @generated from field: string file_by_filename = 3;
     */
    value: string;
    case: "fileByFilename";
  } | {
    /**
     * Find the proto file that declares the given fully-qualified symbol name.
     * This field should be a fully-qualified symbol name
     * (e.g. <package>.<service>[.<method>] or <package>.<type>).
     *
     * @generated from field: string file_containing_symbol = 4;
     */
    value: string;
    case: "fileContainingSymbol";
  } | {
    /**
     * Find the proto file which defines an extension extending the given
     * message type with the given field number.
     *
     * @generated from field: grpc.reflection.v1alpha.ExtensionRequest file_containing_extension = 5;
     */
    value: ExtensionRequest;
    case: "fileContainingExtension";
  } | {
    /**
     * Finds the tag numbers used by all known extensions of extendee_type, and
     * appends them to ExtensionNumberResponse in an undefined order.
     * Its corresponding method is best-effort: it's not guaranteed that the
     * reflection service will implement this method, and it's not guaranteed
     * that this method will provide all extensions. Returns
     * StatusCode::UNIMPLEMENTED if it's not implemented.
     * This field should be a fully-qualified type name. The format is
     * <package>.<type>
     *
     * @generated from field: string all_extension_numbers_of_type = 6;
     */
    value: string;
    case: "allExtensionNumbersOfType";
  } | {
    /**
     * List the full names of registered services. The content will not be
     * checked.
     *
     * @generated from field: string list_services = 7;
     */
    value: string;
    case: "listServices";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message grpc.reflection.v1alpha.ServerReflectionRequest.
 * Use `create(ServerReflectionRequestSchema)` to create a new message.
 * @deprecated
 */
export const ServerReflectionRequestSchema: GenMessage<ServerReflectionRequest> = /*@__PURE__*/
  messageDesc(file_grpc_reflection_v1alpha_reflection, 0);

/**
 * The type name and extension number sent by the client when requesting
 * file_containing_extension.
 *
 * @generated from message grpc.reflection.v1alpha.ExtensionRequest
 * @deprecated
 */
export type ExtensionRequest = Message<"grpc.reflection.v1alpha.ExtensionRequest"> & {
  /**
   * Fully-qualified type name. The format should be <package>.<type>
   *
   * @generated from field: string containing_type = 1;
   */
  containingType: string;

  /**
   * @generated from field: int32 extension_number = 2;
   */
  extensionNumber: number;
};

/**
 * Describes the message grpc.reflection.v1alpha.ExtensionRequest.
 * Use `create(ExtensionRequestSchema)` to create a new message.
 * @deprecated
 */
export const ExtensionRequestSchema: GenMessage<ExtensionRequest> = /*@__PURE__*/
  messageDesc(file_grpc_reflection_v1alpha_reflection, 1);

/**
 * The message sent by the server to answer ServerReflectionInfo method.
 *
 * @generated from message grpc.reflection.v1alpha.ServerReflectionResponse
 * @deprecated
 */
export type ServerReflectionResponse = Message<"grpc.reflection.v1alpha.ServerReflectionResponse"> & {
  /**
   * @generated from field: string valid_host = 1;
   */
  validHost: string;

  /**
   * @generated from field: grpc.reflection.v1alpha.ServerReflectionRequest original_request = 2;
   */
  originalRequest?: ServerReflectionRequest;

  /**
   * The server set one of the following fields according to the message_request
   * in the request.
   *
   * @generated from oneof grpc.reflection.v1alpha.ServerReflectionResponse.message_response
   * @deprecated
   */
  messageResponse: {
    /**
     * This message is used to answer file_by_filename, file_containing_symbol,
     * file_containing_extension requests with transitive dependencies. As
     * the repeated label is not allowed in oneof fields, we use a
     * FileDescriptorResponse message to encapsulate the repeated fields.
     * The reflection service is allowed to avoid sending FileDescriptorProtos
     * that were previously sent in response to earlier requests in the stream.
     *
     * @generated from field: grpc.reflection.v1alpha.FileDescriptorResponse file_descriptor_response = 4;
     */
    value: FileDescriptorResponse;
    case: "fileDescriptorResponse";
  } | {
    /**
     * This message is used to answer all_extension_numbers_of_type request.
     *
     * @generated from field: grpc.reflection.v1alpha.ExtensionNumberResponse all_extension_numbers_response = 5;
     */
    value: ExtensionNumberResponse;
    case: "allExtensionNumbersResponse";
  } | {
    /**
     * This message is used to answer list_services request.
     *
     * @generated from field: grpc.reflection.v1alpha.ListServiceResponse list_services_response = 6;
     */
    value: ListServiceResponse;
    case: "listServicesResponse";
  } | {
    /**
     * This message is used when an error occurs.
     *
     * @generated from field: grpc.reflection.v1alpha.ErrorResponse error_response = 7;
     */
    value: ErrorResponse;
    case: "errorResponse";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message grpc.reflection.v1alpha.ServerReflectionResponse.
 * Use `create(ServerReflectionResponseSchema)` to create a new message.
 * @deprecated
 */
export const ServerReflectionResponseSchema: GenMessage<ServerReflectionResponse> = /*@__PURE__*/
  messageDesc(file_grpc_reflection_v1alpha_reflection, 2);

/**
 * Serialized FileDescriptorProto messages sent by the server answering
 * a file_by_filename, file_containing_symbol, or file_containing_extension
 * request.
 *
 * @generated from message grpc.reflection.v1alpha.FileDescriptorResponse
 * @deprecated
 */
export type FileDescriptorResponse = Message<"grpc.reflection.v1alpha.FileDescriptorResponse"> & {
  /**
   * Serialized FileDescriptorProto messages. We avoid taking a dependency on
   * descriptor.proto, which uses proto2 only features, by making them opaque
   * bytes instead.
   *
   * @generated from field: repeated bytes file_descriptor_proto = 1;
   */
  fileDescriptorProto: Uint8Array[];
};

/**
 * Describes the message grpc.reflection.v1alpha.FileDescriptorResponse.
 * Use `create(FileDescriptorResponseSchema)` to create a new message.
 * @deprecated
 */
export const FileDescriptorResponseSchema: GenMessage<FileDescriptorResponse> = /*@__PURE__*/
  messageDesc(file_grpc_reflection_v1alpha_reflection, 3);

/**
 * A list of extension numbers sent by the server answering
 * all_extension_numbers_of_type request.
 *
 * @generated from message grpc.reflection.v1alpha.ExtensionNumberResponse
 * @deprecated
 */
export type ExtensionNumberResponse = Message<"grpc.reflection.v1alpha.ExtensionNumberResponse"> & {
  /**
   * Full name of the base type, including the package name. The format
   * is <package>.<type>
   *
   * @generated from field: string base_type_name = 1;
   */
  baseTypeName: string;

  /**
   * @generated from field: repeated int32 extension_number = 2;
   */
  extensionNumber: number[];
};

/**
 * Describes the message grpc.reflection.v1alpha.ExtensionNumberResponse.
 * Use `create(ExtensionNumberResponseSchema)` to create a new message.
 * @deprecated
 */
export const ExtensionNumberResponseSchema: GenMessage<ExtensionNumberResponse> = /*@__PURE__*/
  messageDesc(file_grpc_reflection_v1alpha_reflection, 4);

/**
 * A list of ServiceResponse sent by the server answering list_services request.
 *
 * @generated from message grpc.reflection.v1alpha.ListServiceResponse
 * @deprecated
 */
export type ListServiceResponse = Message<"grpc.reflection.v1alpha.ListServiceResponse"> & {
  /**
   * The information of each service may be expanded in the future, so we use
   * ServiceResponse message to encapsulate it.
   *
   * @generated from field: repeated grpc.reflection.v1alpha.ServiceResponse service = 1;
   */
  service: ServiceResponse[];
};

/**
 * Describes the message grpc.reflection.v1alpha.ListServiceResponse.
 * Use `create(ListServiceResponseSchema)` to create a new message.
 * @deprecated
 */
export const ListServiceResponseSchema: GenMessage<ListServiceResponse> = /*@__PURE__*/
  messageDesc(file_grpc_reflection_v1alpha_reflection, 5);

/**
 * The information of a single service used by ListServiceResponse to answer
 * list_services request.
 *
 * @generated from message grpc.reflection.v1alpha.ServiceResponse
 * @deprecated
 */
export type ServiceResponse = Message<"grpc.reflection.v1alpha.ServiceResponse"> & {
  /**
   * Full name of a registered service, including its package name. The format
   * is <package>.<service>
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message grpc.reflection.v1alpha.ServiceResponse.
 * Use `create(ServiceResponseSchema)` to create a new message.
 * @deprecated
 */
export const ServiceResponseSchema: GenMessage<ServiceResponse> = /*@__PURE__*/
  messageDesc(file_grpc_reflection_v1alpha_reflection, 6);

/**
 * The error code and error message sent by the server when an error occurs.
 *
 * @generated from message grpc.reflection.v1alpha.ErrorResponse
 * @deprecated
 */
export type ErrorResponse = Message<"grpc.reflection.v1alpha.ErrorResponse"> & {
  /**
   * This field uses the error codes defined in grpc::StatusCode.
   *
   * @generated from field: int32 error_code = 1;
   */
  errorCode: number;

  /**
   * @generated from field: string error_message = 2;
   */
  errorMessage: string;
};

/**
 * Describes the message grpc.reflection.v1alpha.ErrorResponse.
 * Use `create(ErrorResponseSchema)` to create a new message.
 * @deprecated
 */
export const ErrorResponseSchema: GenMessage<ErrorResponse> = /*@__PURE__*/
  messageDesc(file_grpc_reflection_v1alpha_reflection, 7);

/**
 * @generated from service grpc.reflection.v1alpha.ServerReflection
 * @deprecated
 */
export const ServerReflection: GenService<{
  /**
   * The reflection service is structured as a bidirectional stream, ensuring
   * all related requests go to a single server.
   *
   * @generated from rpc grpc.reflection.v1alpha.ServerReflection.ServerReflectionInfo
   */
  serverReflectionInfo: {
    methodKind: "bidi_streaming";
    input: typeof ServerReflectionRequestSchema;
    output: typeof ServerReflectionResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_grpc_reflection_v1alpha_reflection, 0);

