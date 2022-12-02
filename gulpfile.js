const gulp = require("gulp"),
  concat = require("gulp-concat"),
  cleanCss = require("gulp-clean-css"),
  browSync = require("browser-sync").create(),
  sass = require("gulp-sass")(require("sass")),
  minify = require("gulp-minify"),
  babel = require("gulp-babel"),
  clean = require("gulp-clean"),
  imagemin = require("gulp-imagemin"),
  imageminOptipng = require("imagemin-optipng");

// delete dist folder every time when running gulp default
function delDist() {
  return gulp.src("./dist/**").pipe(clean({ force: true }));
}

// convert and minify scss file to dist/css
function convertSass() {
  return gulp.src("./src/scss/styles.scss").pipe(sass()).pipe(cleanCss()).pipe(concat("styles.min.css")).pipe(gulp.dest("./dist/css"));
}

// minify js file to dist/js
function js() {
  return (
    gulp
      .src("./src/js/*")
      // .pipe(babel({ presets: ["@babel/preset-env"] }))
      .pipe(concat("scripts.js"))
      .pipe(minify({ ext: { src: "scripts.js", min: ".min.js" }, noSource: true }))
      .pipe(gulp.dest("./dist/js"))
  );
}

// minify images and replace to dist/images
function images() {
  return gulp
    .src("./src/assets/images/*")
    .pipe(imagemin([imagemin.gifsicle({ interlaced: true }), imagemin.mozjpeg({ quality: 25, progressive: true }), imagemin.optipng({ optimizationLevel: 5, plugins: [imageminOptipng()] }), imagemin.svgo({ plugins: [{ removeViewBox: true }, { cleanupIDs: false }] })]))
    .pipe(gulp.dest("dist/assets/images"));
}

// minify images and replace to dist/images
function videos() {
  return gulp.src("./src/assets/videos/*").pipe(gulp.dest("dist/assets/videos"));
}

// replace to dist/fonts
function fonts() {
  return gulp.src("./src/fonts/*").pipe(gulp.dest("./dist/fonts"));
}

// open localhost, watch for [index.html, src/scss] and reload the page
function browserSync(done) {
  browSync.init({
    server: { baseDir: "./" },
    notify: false,
  });

  // watching for some files and reload them
  browSync.watch("./").on("change", browSync.reload);
  browSync.watch("**/*.scss").on("change", convertSass);
  browSync.watch("./src/js/*").on("change", js);
  done();
}

// running task oner after another
exports.default = gulp.series(delDist, images, videos, convertSass, fonts, js, browserSync);
