module.exports = {
	plugins: [
		"angular",
	],

	extends: [
		"plugin:angular/bestpractices",
	],

	env: {
		"angular/angular": true,
	},

	rules: {
		"angular/controller-as-vm": ["error", "$ctrl"],
		"angular/no-service-method": "off",
	},
};
