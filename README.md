# @qest/eslint-config-react

This package extends [@qest/eslint-config-base](https://github.com/qest-cz/eslint-config-base)

This aims to provide easy and consistent settings for all our react projects.

Package should take into cosideration tsconfig as well as prettier and enforce their rules trough eslint.

## instalation

``` bash
yarn add -D eslint prettier @qest/eslint-config-react
```

``` js
// .eslintrc.js
module.exports = {
  extends: ["@qest/react"],
  rules: [
      //...any overrides
  ]
};
```

``` js
// .prettierrc.js
module.exports = {
  ...require('@qest/eslint-config-react/.prettierrc'),
  //...any overrides
};
