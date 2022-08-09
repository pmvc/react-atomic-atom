module.exports = function (
  api,
  { esm = true, extWhiteList = { ".example": ".example" } } = {}
) {
  api.cache(true);
  const samePlugIns = [
    "reshow-object-to-json-parse",
    "transform-react-pure-class-to-function",
    ["transform-react-remove-prop-types", { mode: "wrap" }],
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-private-methods",
    "@babel/plugin-proposal-private-property-in-object",
    /**
     * transform need locate after proposal
     * else will have Error: Missing class properties transform.
     * cause by @babel/plugin-transform-classes
     */
    "@babel/plugin-transform-classes",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-object-assign",
    "@babel/plugin-transform-react-constant-elements",
    "@babel/plugin-transform-spread",
  ];
  const cjsPlugins = [
    ...samePlugIns,
    "add-module-exports",
    "dynamic-import-node",
    [
      "reshow-transform-runtime",
      {
        // https://babel.dev/docs/en/babel-plugin-transform-runtime#regenerator
        regenerator: true,
        // https://github.com/react-atomic/reshow/tree/main/packages/reshow-app#transform-runtime-how-to-set-reshow-transform-runtime-versions
        version: "7.18.3",
      },
    ],
  ];
  const esPlugins = [
    ...samePlugIns,
    [
      "reshow-transform-runtime",
      {
        // https://babel.dev/docs/en/babel-plugin-transform-runtime#regenerator
        regenerator: true,
        useESModules: true,
        // https://github.com/react-atomic/reshow/tree/main/packages/reshow-app#transform-runtime-how-to-set-reshow-transform-runtime-versions
        version: "7.18.3",
      },
    ],
  ];

  if (esm) {
    cjsPlugins.push([
      "reshow-import-extension",
      { extMapping: { ...extWhiteList, "": ".js" } },
    ]);
    esPlugins.push([
      "reshow-import-extension",
      { extMapping: { ...extWhiteList, "": ".mjs" } },
    ]);
  }
  const cjs = {
    presets: [
      [
        "@babel/preset-env",
        {
          loose: true,
          targets: ["last 2 versions", "ie >= 8"],
        },
      ],
      ["@babel/preset-react", { runtime: "automatic" }],
    ],
    plugins: cjsPlugins,
  };
  const es = {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          loose: true,
          /**
           * Deploying ES2015+ Code in Production Today
           *
           * https://philipwalton.com/articles/deploying-es2015-code-in-production-today/
           */
          targets: [
            "Chrome >= 60",
            "Safari >= 10.1",
            "iOS >= 10.3",
            "Firefox >= 54",
            "Edge >= 15",
          ],
        },
      ],
      ["@babel/preset-react", { runtime: "automatic" }],
    ],
    plugins: esPlugins,
  };
  return { env: { cjs, es } };
};
