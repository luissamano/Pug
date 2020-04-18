const gulp = require('gulp');
const pug = require('gulp-pug');

const pugToHtml = () => {
    return gulp.src('dev/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('public'));
};

const watchPug = () => {
    gulp.watch('dev/*.pug', pugToHtml);
};

gulp.task('default', pugToHtml);
gulp.task('watch', watchPug);