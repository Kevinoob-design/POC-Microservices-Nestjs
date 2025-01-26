const nxPreset = require("@nrwl/jest/preset").default

/** @type {import('jest').Config} */
const config = {
	verbose: true,
	collectCoverage: true,
	coverageReporters: ["text", "html"],
	maxWorkers: "50%",
	coverageThreshold: {
		global: {
			// branches: 80,
			// functions: 80,
			// lines: 80,
			// statements: -10
		}
	}
}

module.exports = { ...nxPreset, ...config }
