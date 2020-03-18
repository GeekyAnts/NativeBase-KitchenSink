module.exports = {
    tabWidth: 2,
    semi: true,
    singleQuote: false,
    trailingComma: false,
    useTabs: false,
    overrides: [
        {
            files: "*.md",
            options: {
                printWidth: 90,
                trailingComma: "none",
                proseWrap: "always"
            }
        },
        {
            files: "*.json",
            options: {
                tabWidth: 2,
                printWidth: 90,
                proseWrap: "never"
            }
        }
    ]
};
