module.exports = {
  presets: [
    "@babel/react",
    [
      "@babel/env",
      {
        // targets are defined in .browserslistrc
        useBuiltIns: "entry",
        // This should be kept up to date with thee version in package.json
        corejs: "3.24.1",
        // We care more about perf than exactly conforming to the spec
        loose: true,
        exclude: [
          // These exist since forever but end up being polyfilled anyway because of an obscure issue if length is not writeable
          "es.array.push",
          "es.array.unshift"
        ],
        // Enable to sse resolved targets and polyfills being used
        debug: false
      }
    ],
    "@babel/typescript"
  ],
  plugins: [
    // TODO: When i18n build pipeline is finished move to: [ "react-intl", { "removeDefaultMessage": true } ]
    "react-intl",
    ["@babel/proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    "@babel/proposal-object-rest-spread",
    "@babel/plugin-proposal-optional-chaining"
  ]
};
