module.exports = function (api) {
  api.cache(true);
  return {
    env: {
      cjs: {
        presets: [
          [
            "@babel/preset-env",
            {
              corejs: 3,
              useBuiltIns: "usage",
              loose: true,
              targets: ["last 2 versions", "ie >= 8"],
            },
          ],
          ["@babel/preset-react", { runtime: "automatic" }],
        ],
        plugins: [
          "add-module-exports",
          "dynamic-import-node",
          "reshow-object-to-json-parse",
          "transform-react-pure-class-to-function",
          ["transform-react-remove-prop-types", { mode: "wrap" }],
          [
            "reshow-transform-runtime",
            {
              // https://babel.dev/docs/en/babel-plugin-transform-runtime#regenerator
              regenerator: true,
              // https://github.com/react-atomic/reshow/tree/main/packages/reshow-app
              version: "7.17.0",
            },
          ],
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-transform-arrow-functions",
          "@babel/plugin-transform-object-assign",
          "@babel/plugin-transform-react-constant-elements",
          "@babel/plugin-transform-spread",
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-proposal-export-default-from",
          "@babel/plugin-proposal-nullish-coalescing-operator",
          "@babel/plugin-proposal-optional-chaining",
          "@babel/plugin-proposal-object-rest-spread",
          ["@babel/plugin-proposal-private-methods", { loose: false }],
          [
            "@babel/plugin-proposal-private-property-in-object",
            { loose: false },
          ],
        ],
      },
      es: {
        presets: [
          [
            "@babel/preset-env",
            {
              modules: false,
              loose: true,
              targets: ["last 2 versions", "ie >= 8"],
            },
          ],
          ["@babel/preset-react", { runtime: "automatic" }],
        ],
        plugins: [
          "reshow-object-to-json-parse",
          "transform-react-pure-class-to-function",
          ["add-import-extension", { extension: "mjs", replace: true }],
          ["transform-react-remove-prop-types", { mode: "wrap" }],
          [
            "reshow-transform-runtime",
            {
              // https://babel.dev/docs/en/babel-plugin-transform-runtime#regenerator
              regenerator: true,
              useESModules: true,
              // https://github.com/react-atomic/reshow/tree/main/packages/reshow-app
              version: "7.17.0",
            },
          ],
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-transform-arrow-functions",
          "@babel/plugin-transform-object-assign",
          "@babel/plugin-transform-react-constant-elements",
          "@babel/plugin-transform-spread",
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-proposal-export-default-from",
          "@babel/plugin-proposal-nullish-coalescing-operator",
          "@babel/plugin-proposal-optional-chaining",
          "@babel/plugin-proposal-object-rest-spread",
          ["@babel/plugin-proposal-private-methods", { loose: false }],
          [
            "@babel/plugin-proposal-private-property-in-object",
            { loose: false },
          ],
        ],
      },
    },
  };
};
