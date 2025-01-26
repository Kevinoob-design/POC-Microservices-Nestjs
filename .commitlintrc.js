/* eslint-disable @typescript-eslint/naming-convention */

const {
	utils: { getProjects }
} = require("@commitlint/config-nx-scopes")

module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"header-max-length": [2, "always", 72],
		"header-case": [2, "always", "lower-case"],
		"body-leading-blank": [2, "always"],
		"body-empty": [2, "never"],
		"body-min-length": [2, "always", 40],
		"body-case": [2, "always", "lower-case"],
		"trailer-exists": [2, "always", "ticket:"],
		"scope-case": [2, "always", "lower-case"],
		"scope-empty": [2, "never"],
		"scope-enum": async ctx => [
			2,
			"always",
			[
				"workspace",
				"docker",
				"k8s",
				"infra",
				"lint",
				"build",
				...(await getProjects(
					ctx,
					({ name, projectType }) =>
						!name.includes("e2e") && ["application", "library"].some(type => type === projectType)
				))
			]
		]
	}
}
