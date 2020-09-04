const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const del = require("del");
const imagemin = require("gulp-imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "source"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", sync.reload);
}

exports.default = gulp.series(
  styles, server, watcher
);

// Sprite

const sprite = () => {
  return gulp.src("source/img/icons/*.svg")
  .pipe(svgstore())
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("source/img"))
}

exports.sprite = sprite;

// // Clean

// const clean_build = () => {
//   return del("build");
// };

// exports.clean_build = clean_build;

// // Copy

// const copy_build = () => {
//   return gulp.src([
//     "source/fonts/**/*.{woff,woff2}",
//     "source/js/**/*.js",
//     "source/*.ico",
//     "source/**/*.html"
//   ], {
//     base: "source"
//   })
//   .pipe(gulp.dest("build"));
// };

// exports.copy_build = copy_build;

// // Styles_build

// const styles_build = () => {
//   return gulp.src("source/sass/style.scss")
//     .pipe(plumber())
//     .pipe(sourcemap.init())
//     .pipe(sass())
//     .pipe(postcss([
//       autoprefixer()
//     ]))
//     .pipe(csso())
//     .pipe(rename("style.min.css"))
//     .pipe(sourcemap.write("."))
//     .pipe(gulp.dest("build/css"))
//     .pipe(sync.stream());
// }

// exports.styles_build = styles_build;

// // Server_build

// const server_build = (done) => {
//   sync.init({
//     server: {
//       baseDir: "build"
//     },
//     cors: true,
//     notify: false,
//     ui: false,
//   });
//   done();
// }

// exports.server_build = server_build;

// Images

// const images = () => {
//   return gulp.src("source/img/**/*.{jpg,png,svg}")
//   .pipe(imagemin([
//     imagemin.optipng({optimizationLevel: 3}),
//     imageminJpegtran({progressive: true}),
//     imagemin.svgo()
//   ]))
//   .pipe(gulp.dest("build/img"))
// }

// exports.images = images;

// // WebP
// const createWebp = () => {
//   return gulp.src("source/img/**/*.{png,jpg}")
//   .pipe(webp({quality: 90}))
//   .pipe(gulp.dest("build/img"))
// }

// exports.createWebp = createWebp;


// // Sprite_build

// const sprite_build = () => {
//   return gulp.src("source/img/icons/*.svg")
//   .pipe(svgstore())
//   .pipe(rename("sprite.svg"))
//   .pipe(gulp.dest("build/img"))
// }

// exports.sprite_build = sprite_build;

// // Build

// const build = gulp.series(
//   clean_build,
//   copy_build,
//   styles_build,
//   images,
//   createWebp,
//   sprite_build
// );

// exports.build = build;

// exports.default = gulp.series(
//   build, server_build, watcher
// );
