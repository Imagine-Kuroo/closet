var gulp = require('gulp')
var path = require('path')

var browserSync = require('browser-sync').create()
var reload = browserSync.reload;

var stylus = require('gulp-stylus')

var sourcemaps = require('gulp-sourcemaps')

var stylusFiles = [
    path.join(__dirname, 'public/styles/*.styl')
]

var cssDir = path.join(__dirname, 'public/styles')

gulp.task('stylus', function () {
    return gulp.src(stylusFiles)
        .pipe(sourcemaps.init())
        .pipe(stylus())  //编译
        .pipe(gulp.dest(cssDir))
        .pipe(reload({
            stream: true
        }))
})

gulp.task('serve', function () {
    gulp.watch(stylusFiles, gulp.series('stylus')).on('change', reload);
    gulp.watch("views/*").on('change', reload);
})

// todo 代码压缩

gulp.task('default', gulp.series(gulp.parallel('serve')))