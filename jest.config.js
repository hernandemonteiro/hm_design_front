/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    '@testing-library/jest-dom'
  ]
};