const StyleDictionaryPackage = require("style-dictionary");
const core = require("./tokens/core");
const components = require("./tokens/components");
const prefix = "pocds";

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

// Custom format for documentation purposes
StyleDictionaryPackage.registerFormat({
  name: "custom/cjsmodule",
  formatter: function ({ dictionary }) {
    console.log(dictionary);
    return `export const items = [${dictionary.allTokens.map(
      (token) => `
      {
        name: "${token.name}",
        value: "${token.value}",
      }`
    )}\n];`;
  },
});

function getStyleDictionaryConfig(brand, core, components) {
  return {
    source: [
      `tokens/brands/${brand}/**/*.json`,
      "tokens/core/**/*.json",
      "tokens/components/**/*.json",
    ],
    platforms: {
      // ESM index
      esmIndex: {
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
      // ESM single category
      esmCategory: {
        buildPath: `build/${brand}/js/esm/`,
        prefix: prefix,
        transforms: [
          "attribute/cti",
          "name/cti/constant",
          "size/rem",
          "color/hex",
        ],
        files: core.map((category) => ({
          destination: `core/${category}.js`,
          format: "javascript/es6",
          filter: {
            attributes: {
              category: category,
            },
          },
        })),
      },
      // ESM single component
      esmComponent: {
        buildPath: `build/${brand}/js/esm/`,
        prefix: prefix,
        transforms: [
          "attribute/cti",
          "name/cti/constant",
          "size/rem",
          "color/hex",
        ],
        files: components.map((component) => ({
          destination: `components/${component}.js`,
          format: "javascript/es6",
          filter: {
            attributes: {
              category: component,
            },
          },
        })),
      },
      // CJS index
      cjsIndex: {
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
      // CJS single category
      cjsCategory: {
        buildPath: `build/${brand}/js/cjs/`,
        prefix: prefix,
        transforms: [
          "attribute/cti",
          "name/cti/kebab",
          "size/rem",
          "color/hex",
        ],
        files: core.map((category) => ({
          destination: `core/${category}.js`,
          format: "custom/cjsmodule",
          filter: {
            attributes: {
              category: category,
            },
          },
        })),
      },
      // CJS single component
      cjsComponent: {
        buildPath: `build/${brand}/js/cjs/`,
        prefix: prefix,
        transforms: [
          "attribute/cti",
          "name/cti/kebab",
          "size/rem",
          "color/hex",
        ],
        files: components.map((component) => ({
          destination: `components/${component}.js`,
          format: "custom/cjsmodule",
          filter: {
            attributes: {
              category: component,
            },
          },
        })),
      },
      // CSS index
      cssIndex: {
        transformGroup: "css",
        buildPath: `build/${brand}/css/`,
        prefix: prefix,
        files: [
          {
            destination: `index.css`,
            format: "css/variables",
          },
        ],
      },
      // CSS single category
      cssCategory: {
        transformGroup: "css",
        buildPath: `build/${brand}/css/`,
        prefix: prefix,
        files: core.map((category) => ({
          destination: `core/${category}.css`,
          format: "css/variables",
          filter: {
            attributes: {
              category: category,
            },
          },
        })),
      },
      // CSS single component
      cssComponent: {
        transformGroup: "css",
        buildPath: `build/${brand}/css/`,
        prefix: prefix,
        files: components.map((component) => ({
          destination: `components/${component}.css`,
          format: "css/variables",
          filter: {
            attributes: {
              category: component,
            },
          },
        })),
      },
      // SCSS index
      scssIndex: {
        transformGroup: "scss",
        buildPath: `build/${brand}/scss/`,
        prefix: prefix,
        files: [
          {
            destination: `index.scss`,
            format: "scss/variables",
          },
        ],
      },
      // SCSS single category
      scssCategory: {
        transformGroup: "scss",
        buildPath: `build/${brand}/scss/`,
        files: core.map((category) => ({
          destination: `core/${category}.scss`,
          format: "scss/map-flat",
          mapName: `pocds-tokens-${category}`,
          filter: {
            attributes: {
              category: category,
            },
          },
        })),
      },
      // JSON
      json: {
        transformGroup: "web",
        buildPath: `build/${brand}/json/`,
        files: [
          {
            destination: "index.json",
            format: "json",
          },
        ],
      },
      ios: {
        transformGroup: "ios",
        buildPath: `build/${brand}/ios/`,
        files: [
          {
            destination: "index.h",
            format: "ios/macros",
          },
        ],
      },
      android: {
        transformGroup: "android",
        buildPath: `build/${brand}/android/`,
        files: [
          {
            destination: "index.xml",
            format: "android/resources",
          },
        ],
      },
    },
  };
}

["default", "brand-1"].map(function (brand) {
  const StyleDictionary = StyleDictionaryPackage.extend(
    getStyleDictionaryConfig(brand, core, components)
  );
  StyleDictionary.buildAllPlatforms();
});
