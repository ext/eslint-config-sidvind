# eslint-config-sidvind

> Sidvind ESLint [shareable](http://eslint.org/docs/developer-guide/shareable-configs.html) config.

## Install
```
npm install --save-dev eslint-config-sidvind
```

## Usage
In your .eslintrc file:
```javascript
{
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "extends": [
    "eslint:recommended",
    "sidvind"
  ],
}
```
