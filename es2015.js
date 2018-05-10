module.exports = {
	extends: [
		"sidvind",
	],

	parserOptions: {
		ecmaVersion: "2015",
		sourceType: "module",
	},

	env: {
		es6: true,
	},

	rules: {
		"no-var": "error",
		"prefer-const": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"space-before-function-paren": ["error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always",
		}],
	},
};
