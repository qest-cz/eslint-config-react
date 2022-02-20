module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "eslint-config-prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "simple-import-sort",
        "@typescript-eslint",
        "react-hooks",
        "jsx-a11y",
        "prettier",
        "sort-keys-fix"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-multi-spaces": [
            "error"
        ],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "react/display-name": "off",
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        "no-irregular-whitespace": "error",
        "array-bracket-newline": [
            "warn",
            "consistent"
        ],
        "array-bracket-spacing": [
            "warn",
            "never"
        ],
        "arrow-body-style": [
            "warn",
            "as-needed"
        ],
        "arrow-parens": 2,
        "arrow-spacing": [
            "warn",
            {
                "before": true,
                "after": true
            }
        ],
        "brace-style": [
            "warn",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "camelcase": [
            "warn"
        ],
        "comma-spacing": [
            "warn",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "warn",
            "last"
        ],
        "computed-property-spacing": [
            "warn",
            "never"
        ],
        "curly": [
            "warn",
            "all"
        ],
        "prefer-object-spread": "warn",
        "prefer-const": "warn",
        "semi-spacing": [
            "warn",
            {
                "before": false,
                "after": true
            }
        ],
        "yoda": "warn",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "template-curly-spacing": "warn",
        "no-lonely-if": "warn",
        "padded-blocks": [
            "warn",
            "never"
        ],
        "no-console": "warn",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "caughtErrorsIgnorePattern": "^_"
            }
        ],
        "@typescript-eslint/no-empty-interface": 1,
        "key-spacing": [
            "error",
            {
                "afterColon": true
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "prettier/prettier": "error",
        "no-undef": 0,
        "sort-keys-fix/sort-keys-fix": "error",
    }
}
