module.exports = Object.assign(require('./index'), {
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
	},
	env: {
		node: true,
	},
});
