module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ['./jest.setup.js'],
}