module.exports = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleDirectories: [
    'node_modules',
    'utils'
  ],
  setupFilesAfterEnv: ['<rootDir>/utils/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/utils/fileMock.js',
    '\\.(css|less)$': '<rootDir>/utils/styleMock.js' },
}
