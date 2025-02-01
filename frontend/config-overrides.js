const { override, addBabelPlugin } = require("customize-cra");

module.exports = override(
  addBabelPlugin("@babel/plugin-proposal-optional-chaining"),
  addBabelPlugin("@babel/plugin-proposal-nullish-coalescing-operator")
);
