const presets = [
  ["@babel/env", {
    targets: {
      edge: "16",
      firefox: "60",
      chrome: "67",
      safari: "10"
    },
    useBuiltIns: "usage"
  }]
];

const plugins = ["@babel/plugin-syntax-dynamic-import"];

module.exports = { presets, plugins };