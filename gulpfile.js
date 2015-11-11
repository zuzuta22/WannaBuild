var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');

gulp.task('watch', function () {
  gulp.watch('./src/**/*.*', ['default'])
});


gulp.task('uglify', function () {
  return browserify('./src/app.js')
    .transform(babelify)
    .bundle()
    .pipe(source('wannabuild.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['uglify', 'watch']);
