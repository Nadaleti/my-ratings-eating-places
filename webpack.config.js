const { merge }  = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mr",
    projectName: "eating-places",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ['axios']
  });
};
