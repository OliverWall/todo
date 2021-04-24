module.exports = {
    extends: [
      'airbnb-typescript'
    ],
    env: {
      browser: true,
      es2020: true
    },
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/no-unused-vars": "error"
    }
};
