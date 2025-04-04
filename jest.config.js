/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: ["\\\\node_modules\\\\", "\\.pnp\\.[^\\\\]+$"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@store/(.*)$": "<rootDir>/src/store/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "\\.(png|jpg|jpeg|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  testPathIgnorePatterns: ["/playwright"],
};

export default config;
