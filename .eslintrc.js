module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
      "@typescript-eslint/comma-dangle": "never"
    }
};
