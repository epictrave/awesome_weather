module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': 0,
    // "no-use-before-define": [
    //   "error",
    //   { functions: true, classes: true, variables: false }
    // ]
  },
};
