import type { ConnectRouter } from "@connectrpc/connect";
import { ExampleEncryptService } from "@services/bhanji/example/v1/example_pb.js";
import { EncryptRequest } from "@services/bhanji/example/v1/example_pb.js";

export const routes = (router: ConnectRouter) =>
  router.service(ExampleEncryptService, {
    async encrypt(req: EncryptRequest) {
      // Simple Caesar cipher with shift of 3
      const encrypted = req.input
        .split("")
        .map((char: string) => {
          if (char.match(/[a-zA-Z]/)) {
            const code = char.charCodeAt(0);
            const isUpperCase = code >= 65 && code <= 90;
            const base = isUpperCase ? 65 : 97;
            return String.fromCharCode(((code - base + 3) % 26) + base);
          }
          return char;
        })
        .join("");

      return {
        output: encrypted,
      };
    },
    async decrypt(req) {
      // Decrypt Caesar cipher with shift of 3
      const decrypted = req.input
        .split("")
        .map((char) => {
          if (char.match(/[a-zA-Z]/)) {
            const code = char.charCodeAt(0);
            const isUpperCase = code >= 65 && code <= 90;
            const base = isUpperCase ? 65 : 97;
            return String.fromCharCode(((code - base - 3 + 26) % 26) + base);
          }
          return char;
        })
        .join("");

      return {
        output: decrypted,
      };
    },
  });

export default routes;
