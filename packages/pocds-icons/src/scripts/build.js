const fs = require("fs");
const path = require("path");
const data = require("../../data/icons.json");

const indexFile = path.join(__dirname, "../../build/icons.js");
const iconsDir = path.join(__dirname, "../../build/assets");

const icons = {};
data.icons.forEach((icon) => {
  const filename = icon.title;
  icon.svg = fs.readFileSync(path.join(iconsDir, `${filename}.svg`), "utf8");
  icons[icon.title] = icon;

  fs.writeFileSync(
    path.join(iconsDir, `${filename}.js`),
    `module.exports=${JSON.stringify(icon)};`
  );
});

fs.writeFileSync(indexFile, `module.exports=${JSON.stringify(icons)};`);
