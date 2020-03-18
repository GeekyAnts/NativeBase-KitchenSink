/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {
  applyConfigForLinkedDependencies
} = require("@carimus/metro-symlinked-deps");

module.exports = applyConfigForLinkedDependencies(
  {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false
        }
      })
    }
  },
  {
    projectRoot: __dirname,
    blacklistLinkedModules: ["react-native"]
  },
);
