module.exports = {
    "extends": [
        "@qest/base",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
    ],
    "settings": {
        "react": {
            "version": "detect",
        }
    },
    "plugins": [
        "react",
        "react-hooks",
        "jsx-a11y",
    ],
    "rules": {
        "react/display-name": "off",
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
    }
}
