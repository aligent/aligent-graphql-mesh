const config = {
    parser: "babel-eslint",
    extends: ["@magento", "plugin:testing-library/react", "react-app"],
    rules: {
        "no-undef": "off",
        "no-useless-escape": "off",
        "no-restricted-globals": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "import/no-anonymous-default-export": "off",
        "react-hooks/exhaustive-deps": "error",
        "no-unused-vars": "error",
    },
    plugins: ["testing-library", "import"],
};

module.exports = config;
