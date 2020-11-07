// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  verbose: true,
  collectCoverage:true,
  coverageReporters: ["text","html"],
  coverageDirectory: "./codeCoverage/",
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
        "pageTitle": "Test Report"
    }]
]
};