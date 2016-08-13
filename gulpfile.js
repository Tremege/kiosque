var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');

var paths = {
  less: {
    src: 'less/style.less',
    dest: 'static/css/'
  },
  imgs: {
    src: 'img/',
    dest: 'static/'
  }
};

gulp.task('less', function () {
  gulp.src(paths.less.src)
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(paths.less.dest))
});

gulp.task('imagemin', () =>
    gulp.src(paths.imgs.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.imgs.dest))
);

gulp.task('default', ['less', 'imagemin']);
