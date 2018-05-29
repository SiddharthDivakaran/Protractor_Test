var gulp=require('gulp');
var protractor=require('gulp-protractor').protractor;
var webdriver_update=require('gulp-protractor').webdriver_update;
var webdriver_standalone=require('gulp-protractor').webdriver_standalone;

gulp.task('webdriver_update',webdriver_update);
gulp.task('webdriver_standalone',webdriver_standalone);

gulp.task('default',['webdriver_update','webdriver_standalone'],function(){
    gulp.src(["./test/*.js"])
        .pipe(protractor({
            configFile:"../conf/conf.js",
            args:['--baseUrl','http://127.0.0.1:8080']
        })).on('error',function(er){
            console.log("error is: ",er);
        })
});