var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

gulp.task('bundle', function() {
  console.log("bundle called");
  return browserify('src/app.js')
    .transform('babelify', {presets: 'react'})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('static/'));
});

gulp.task('watch', function() {
  var b = browserify({
    entries: ['src/app.js'],
    cache: {},
    packageCache: {},
    plugin: [watchify]
  });

  b.on('update', makeBundle);
  b.on('log', function(data) {
    console.log(data);
  });

  function makeBundle() {
    b
      .transform('babelify', {presets: 'react'})
      .bundle()
      .on('error', function(err) {
        console.error(err.message);
        console.error(err.codeFrame);
      })
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('static/'));
    console.log("Bundle updated successfully.");
    console.log(new Date());
  }

  makeBundle();

  return b;

});
