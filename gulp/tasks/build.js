var gulp = require('gulp');

gulp.task('optimizeImages', function() {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('build', []);