const gulp = require("gulp");
const sass = require("gulp-sass");
gulp.task("sass", function() {
  return gulp.src("scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css"))
});
gulp.task("watch", function() {
    gulp.watch("scss/*.scss", gulp.series("sass"));
  });