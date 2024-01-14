module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "plugin:react/recommended",
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": 1,
    "indent": ["error", 2],
    "react/react-in-jsx-scope": "off"
  }
};
