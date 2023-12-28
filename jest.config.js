/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Set the maximum number of worker processes to 4
  maxWorkers: 4,
  preset: 'ts-jest',
  testEnvironment: 'node',
};