const gulp = require('gulp');
const { src, dest } = require('gulp');

gulp.task('createTemplate', function() {
  return src('src/*.js')
    .pipe(dest('dist'))
})

gulp.task('watch', function() {
  gulp.watch('src/**/*.json', { events: ['change'] }, gulp.series('createTemplate'))
})
