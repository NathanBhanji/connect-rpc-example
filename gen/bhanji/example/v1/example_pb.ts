// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file bhanji/example/v1/example.proto (package bhanji.example.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file bhanji/example/v1/example.proto.
 */
export const file_bhanji_example_v1_example: GenFile = /*@__PURE__*/
  fileDesc("Ch9iaGFuamkvZXhhbXBsZS92MS9leGFtcGxlLnByb3RvEhFiaGFuamkuZXhhbXBsZS52MSIfCg5FbmNyeXB0UmVxdWVzdBINCgVpbnB1dBgBIAEoCSIhCg9FbmNyeXB0UmVzcG9uc2USDgoGb3V0cHV0GAEgASgJIh8KDkRlY3J5cHRSZXF1ZXN0Eg0KBWlucHV0GAEgASgJIiEKD0RlY3J5cHRSZXNwb25zZRIOCgZvdXRwdXQYASABKAkyvwEKFUV4YW1wbGVFbmNyeXB0U2VydmljZRJSCgdFbmNyeXB0EiEuYmhhbmppLmV4YW1wbGUudjEuRW5jcnlwdFJlcXVlc3QaIi5iaGFuamkuZXhhbXBsZS52MS5FbmNyeXB0UmVzcG9uc2UiABJSCgdEZWNyeXB0EiEuYmhhbmppLmV4YW1wbGUudjEuRGVjcnlwdFJlcXVlc3QaIi5iaGFuamkuZXhhbXBsZS52MS5EZWNyeXB0UmVzcG9uc2UiAGIGcHJvdG8z");

/**
 * @generated from message bhanji.example.v1.EncryptRequest
 */
export type EncryptRequest = Message<"bhanji.example.v1.EncryptRequest"> & {
  /**
   * @generated from field: string input = 1;
   */
  input: string;
};

/**
 * Describes the message bhanji.example.v1.EncryptRequest.
 * Use `create(EncryptRequestSchema)` to create a new message.
 */
export const EncryptRequestSchema: GenMessage<EncryptRequest> = /*@__PURE__*/
  messageDesc(file_bhanji_example_v1_example, 0);

/**
 * @generated from message bhanji.example.v1.EncryptResponse
 */
export type EncryptResponse = Message<"bhanji.example.v1.EncryptResponse"> & {
  /**
   * @generated from field: string output = 1;
   */
  output: string;
};

/**
 * Describes the message bhanji.example.v1.EncryptResponse.
 * Use `create(EncryptResponseSchema)` to create a new message.
 */
export const EncryptResponseSchema: GenMessage<EncryptResponse> = /*@__PURE__*/
  messageDesc(file_bhanji_example_v1_example, 1);

/**
 * @generated from message bhanji.example.v1.DecryptRequest
 */
export type DecryptRequest = Message<"bhanji.example.v1.DecryptRequest"> & {
  /**
   * @generated from field: string input = 1;
   */
  input: string;
};

/**
 * Describes the message bhanji.example.v1.DecryptRequest.
 * Use `create(DecryptRequestSchema)` to create a new message.
 */
export const DecryptRequestSchema: GenMessage<DecryptRequest> = /*@__PURE__*/
  messageDesc(file_bhanji_example_v1_example, 2);

/**
 * @generated from message bhanji.example.v1.DecryptResponse
 */
export type DecryptResponse = Message<"bhanji.example.v1.DecryptResponse"> & {
  /**
   * @generated from field: string output = 1;
   */
  output: string;
};

/**
 * Describes the message bhanji.example.v1.DecryptResponse.
 * Use `create(DecryptResponseSchema)` to create a new message.
 */
export const DecryptResponseSchema: GenMessage<DecryptResponse> = /*@__PURE__*/
  messageDesc(file_bhanji_example_v1_example, 3);

/**
 * @generated from service bhanji.example.v1.ExampleEncryptService
 */
export const ExampleEncryptService: GenService<{
  /**
   * @generated from rpc bhanji.example.v1.ExampleEncryptService.Encrypt
   */
  encrypt: {
    methodKind: "unary";
    input: typeof EncryptRequestSchema;
    output: typeof EncryptResponseSchema;
  },
  /**
   * @generated from rpc bhanji.example.v1.ExampleEncryptService.Decrypt
   */
  decrypt: {
    methodKind: "unary";
    input: typeof DecryptRequestSchema;
    output: typeof DecryptResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_bhanji_example_v1_example, 0);

