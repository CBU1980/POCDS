"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return gulp
    .src("./src/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./build/"));
}

exports.default = buildStyles;

exports.watch = function () {
  gulp.watch("./src/index.scss", ["sass"]);
};
