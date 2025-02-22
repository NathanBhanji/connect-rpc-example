/** @type {import('jest').Config} */
export default {
  testEnvironment: "node",
  testTimeout: 30_000,
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",

  // Coverage collection configuration
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.test.{ts,tsx}",
  ],

  roots: ["<rootDir>/src"],

  // ESM support
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
    "^@services/(.*)\\.js$": "<rootDir>/gen/$1",
    "^@services/(.*)$": "<rootDir>/gen/$1",
    "^@src/(.*)\\.js$": "<rootDir>/src/$1",
    "^@src/(.*)$": "<rootDir>/src/$1",
  },

  // Transform configuration
  transform: {
    "^.+\\.m?[tj]sx?$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "tsconfig.json",
      },
    ],
  },

  modulePaths: ["<rootDir>"],
};
