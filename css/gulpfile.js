var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');

//定义css任务
gulp.task('css', function(){
  //定义postcss任务流数组
  var processors = [
    autoprefixer({
      browsers:['last 3 version'],
      cascade: false,
      remove: false
    }),
    cssnext()
  ];
  return gulp.src('./src/css/*.css')
             .pipe(postcss(processors))
             .pipe(gulp.dest('./dist'));
});