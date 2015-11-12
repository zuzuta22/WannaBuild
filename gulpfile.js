var gulp        = require('gulp');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var browserSync = require('browser-sync');

gulp.task('watch', function () {
  gulp.watch('./src/**/*.*', ['copy','uglify'])
});

gulp.task('copy', function() {
  return gulp.src(['./src/**/*.html'])
    .pipe(gulp.dest('build/'))
});

gulp.task('uglify', function () {
  return browserify('./src/app.js')
    .transform(babelify)
    .bundle()
    .pipe(source('wannabuild.js'))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './build'
    }
  });
});

gulp.task('default', ['serve', 'watch']);
