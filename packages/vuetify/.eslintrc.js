module.exports = {
  globals: {
    '__VUETIFY_VERSION__': true,
    '__REQUIRED_VUE__': true
  },
  env: {
    'jest/globals': true
  },
  plugins: [
    'jest',
    'eslint-plugin-local-rules'
  ],
  extends: ['plugin:jest/recommended'],
  rules: {
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    "vue/max-attributes-per-line": ["error", {
      "singleline": 1,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    'local-rules/no-render-string-reference': 'error',
    'jest/no-disabled-tests': 'off',
    'jest/no-large-snapshots': 'warn',
    'jest/prefer-spy-on': 'warn',
    'jest/prefer-to-be-null': 'warn',
    'jest/prefer-to-be-undefined': 'warn',
    'jest/prefer-to-contain': 'warn',
    'jest/prefer-to-have-length': 'warn'
  }
}
