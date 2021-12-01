module.exports = {
	root: true,
	env: {
		node: true
	},
	plugins: ["prettier"],
	extends: [
		"plugin:vue/essential",
      	"eslint:recommended"
	],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"prettier/prettier": [
			"error",
			{
				printWidth: 80,
				semi: false,
				useTabs: true,
				tabWidth: 2,
				traillingComma: "all",
				barcketSpacing: true,
				arrowParens: "avoid"
			}
		]
	},
	parserOptions: {
		parser: "babel-eslint"
	},
	overrides: [
		{
			files: [
				"**/__tests__/*.{j,t}s?(x)",
				"**/tests/unit/**/*.spec.{j,t}s?(x)"
			],
			env: {
				jest: true
			}
		}
	]
}
