let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let browserSync = require('browser-sync').create();

gulp.task('minify-css', () => {
    return gulp.src('styles/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("user/themes/cmzs/scss/**/*.scss")
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("user/themes/cmzs/css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        proxy: "https://cmzs.test"
    });

    gulp.watch("user/themes/cmzs/scss/**/*.scss", ['sass']);
    gulp.watch("user/themes/cmzs/templates/*.html.twig").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);

