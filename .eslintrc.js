module.exports = {
	"extends": [
		"react-app",
		"plugin:@wordpress/eslint-plugin/recommended"
	],
	rules: {
		'jsdoc/check-tag-names': 'off',
		'no-console': 'warn',
		'no-unused-vars': 'warn',
		'no-useless-escape': 'off'
	}
}