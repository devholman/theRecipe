module.exports = {
  //find test files inside src folder and match files ending with spec .js
  testRegex: '/src/.*?(Spec)\\.js$',
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  transform: {
    '^.+\\.(js|jsx|mjs)$': './jest-transform.js'
  },
  //regex for all files you import inside components. If the Regex matches,
  // instead of loading the real package, it will load a mock package that you
  //  have to specify in the value of the key.
  //everytime we import a module inside a test that matches the regex key, instead of loading the real package,
  //load the mock file located in the path provided as the value
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/src/utils/fileMock.js'
  },
  //executes files stated before running the test suite
  setupFiles: ['<rootDir>/src/specs/index.js']
};
