var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');
    gp_less = require('gulp-less');
    gp_minifyCss = require('gulp-minify-css');
    gp_watch = require('gulp-watch');
    gp_minifyHTML = require('gulp-minify-html');
    gp_imagemin = require('gulp-imagemin');
    gp_pngquant = require('imagemin-pngquant');
    gp_iconfont = require('gulp-iconfont');
    runTimestamp = Math.round(Date.now()/1000);
 
 
gulp.task('index', function() {
  var html_opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('src/index.html')
    .pipe(gp_minifyHTML(html_opts))
    .pipe(gulp.dest('../public'));
});
 
gulp.task('html', function() {
  var html_opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('src/views/**/*.html')
    .pipe(gp_minifyHTML(html_opts))
    .pipe(gulp.dest('../public/assets/views'));
});

gulp.task('js', function(){
    return gulp.src([
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'src/js/script.js',
        'src/js/app.js',
        'src/js/services/*',
        'src/js/controllers/*',
	])
    .pipe(gp_concat('app.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('../public/assets/js'));
});

gulp.task('less', function() {
  gulp.src([
        'bower_components/bootswatch/slate/bootstrap.css',
        'bower_components/font-awesome/css/font-awesome.css',
        'src/css/main.less'
    ])
    .pipe(gp_concat('layout.css'))
    .pipe(gp_less())
    .pipe(gp_minifyCss())
    .pipe(gulp.dest('../public/assets/css'));
});

gulp.task('img', function () {
    return gulp.src('src/img/**/*')
        .pipe(gp_imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [gp_pngquant   ()]
        }))
        .pipe(gulp.dest('../public/assets/img'));
});

gulp.task('icons', function() { 
    gulp.src('bower_components/bootstrap/fonts/**.*') 
        .pipe(gulp.dest('../public/assets/fonts/')); 

    return gulp.src('bower_components/font-awesome/fonts/**.*') 
        .pipe(gulp.dest('../public/assets/fonts/')); 

});

gulp.task('fonts', function(){
  return gulp.src(['src/fonts/GE_SS_Two_Light/GE_SS_Two_Light.ttf'])
    .pipe(gp_iconfont({
      fontName: 'GE SS Two Light', // required 
      appendUnicode: true, // recommended option 
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'], // default, 'woff2' and 'svg' are available 
      timestamp: runTimestamp, // recommended to get consistent builds when watching files 
    }))
    .on('glyphs', function(glyphs, options) {
        console.log(glyphs, options);
      })
    .pipe(gulp.dest('../public/assets/fonts/GE_SS_Two_Light/'));
});




gulp.task('watch', function (cb) {

    gulp.watch('src/index.html', function (event) {
        gulp.run('index');
    });

    gulp.watch('src/views/**/*.html', function (event) {
        gulp.run('html');
    });
    
    gulp.watch('src/js/**/*.js', function (event) {
        gulp.run('js');
    });
    
    gulp.watch('src/css/**/*.less', function (event) {
        gulp.run('less');
    });
});

gulp.task('default', ['index', 'html', 'js', 'less', 'img', 'icons', 'fonts', 'watch'], function(){});
gulp.task('fast', ['index', 'html', 'js', 'less'], function(){});
