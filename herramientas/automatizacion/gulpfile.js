const gulp = require("gulp");
const server = require("gulp-server-livereload");

gulp.task("build", function (cb) {
  console.log("Contruyendo el siteo");
  setTimeout(cb, 1200);
  //   cb();
});

gulp.task("serve", function (cb) {
  gulp.src("www").pipe(
    server({
      livereload: true,
      open: true,
    })
  );
});

// Ejecucion de tareas en serie
gulp.task("default", gulp.series("build", "serve"));
