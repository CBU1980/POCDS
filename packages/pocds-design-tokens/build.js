const StyleDictionaryPackage = require("style-dictionary");
const tokens = require("./tokens/globals");
const prefix = "pocds";

function getStyleDictionaryConfig(brand, tokens) {
  // Pixels to rems
  StyleDictionaryPackage.registerTransform({
    name: "size/rem",
    type: "value",
    matcher: function (token) {
      return token.attributes.type === "size";
    },
    transformer: function (token) {
      return (parseInt(token.original.value) / 16).toString() + "rem";
    },
  });

  // Custom format
  StyleDictionaryPackage.registerFormat({
    name: "custom/cjsmodule",
    formatter: function ({ dictionary }) {
      return `export const items = [${dictionary.allTokens.map(
        (token) => `
      {
        name: "${token.name}",
        value: "${token.value}",
      }`
      )}\n];`;
    },
  });

  return {
    source: [`tokens/brands/${brand}/**/*.json`, "tokens/globals/**/*.json"],
    platforms: {
      esmcategory: {
        buildPath: `build/${brand}/js/esm/`,
        prefix: prefix,
        transforms: [
          "attribute/cti",
          "name/cti/constant",
          "size/rem",
          "color/hex",
        ],
        files: tokens.map((tokenCategory) => ({
          destination: `${tokenCategory}.js`,
          format: "javascript/es6",
          filter: {
            attributes: {
              category: tokenCategory,
            },
          },
        })),
      },
      esmindex: {
        buildPath: `build/${brand}/js/esm/`,
        prefix: prefix,
        transforms: [
          "attribute/cti",
          "name/cti/constant",
          "size/rem",
          "color/hex",
        ],
        files: [
          {
            destination: `index.js`,
            format: "javascript/es6",
          },
        ],
      },
      cjscategory: {
        buildPath: `build/${brand}/js/cjs/`,
        prefix: prefix,
        transforms: [
          "attribute/cti",
          "name/cti/kebab",
          "size/rem",
          "color/hex",
        ],
        files: tokens.map((tokenCategory) => ({
          destination: `${tokenCategory}.js`,
          format: "custom/cjsmodule",
          filter: {
            attributes: {
              category: tokenCategory,
            },
          },
        })),
      },
      cjsindex: {
        buildPath: `build/${brand}/js/cjs/`,
        prefix: prefix,
        transforms: [
          "attribute/cti",
          "name/cti/kebab",
          "size/rem",
          "color/hex",
        ],
        files: [
          {
            destination: `index.js`,
            format: "custom/cjsmodule",
          },
        ],
      },

      // Web output in css format
      css: {
        transformGroup: "css",
        buildPath: `build/${brand}/css/`,
        prefix: prefix,
        files: [
          {
            destination: `tokens.css`,
            format: "css/variables",
          },
        ],
      },
      // Web output in css partialformat
      csscategory: {
        transformGroup: "css",
        buildPath: `build/${brand}/css/`,
        prefix: prefix,
        files: tokens.map((tokenCategory) => ({
          destination: `${tokenCategory}.css`,
          format: "css/variables",
          filter: {
            attributes: {
              category: tokenCategory,
            },
          },
        })),
      },
    },
  };
}

["default", "brand-1"].map(function (brand) {
  const StyleDictionary = StyleDictionaryPackage.extend(
    getStyleDictionaryConfig(brand, tokens)
  );
  StyleDictionary.buildAllPlatforms();
});
