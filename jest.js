module.exports = {
	extends: [
		"jest/recommended",
	],

	plugins: [
		"jest",
	],

	rules: {
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "warn",
		"jest/no-test-prefixes": "warn",
		"jest/prefer-to-have-length": "error",
		"jest/prefer-to-be-null": "error",
		"jest/prefer-to-be-undefined": "error",
		"jest/valid-describe": "error",
		"jest/valid-expect": "error",
		"jest/valid-expect-in-promise": "error",
	},
};
