//====================================
//========== Dependancies ============
//====================================
const   gulp = require('gulp'),
        sass = require('gulp-ruby-sass-ns'),
        path = require('path'),
        concat = require("gulp-concat"),
        uglify = require("gulp-uglify"),
        rename = require("gulp-rename"),
        watch = require('gulp-watch'),
        webpack = require('webpack-stream'),
        postcss = require('gulp-postcss'),
        webpackConfig = require('./webpack.config.js');

//====================================
//==== Directory configurations ======
//====================================
const   config = {
            local : {
                webroot: __dirname,
                dist: {
                    root: path.join( __dirname,     '/app/dist/' ),
                    scss: path.join( __dirname,     '/app/dist/styles/' ),
                    scripts: path.join( __dirname,  '/app/dist/scripts/' )
                },
                src: {
                    root: path.join( __dirname,     '/app/src/' ),
                    scss: path.join( __dirname,     '/app/src/styles/' ),
                    scripts: path.join( __dirname,  '/app/src/scripts/' ),
                    entry: path.join( __dirname,    '/app/src/scripts/app.js' )
                }
            },
            staging: {
                ip: '',
                success: 'Succesfully Deployed to staging',
                dir: '/var/www/html/',
                exclude: path.join( __dirname,  'app/src/' )
            }
        };

////====================================
////============ Gulp Tasks ============
////====================================

//----- Gulp Watch Task -----
gulp.task('watch', function(){
    gulp.watch( path.join( config.local.src.scss, '/**/*.scss'), ['styles']);
    gulp.watch([
        path.join( config.local.src.scripts, '/**/*.js'),
        path.join( config.local.src.scripts, '/**/*.jsx'),
     ], ['scripts']);
});

//----- Gulp Sass Task -----
gulp.task('styles', function(){
    return gulp.src( config.local.src.scss + 'main.scss' )
        .pipe(sass())
        .on('error', errorHandler)
        .pipe(rename('style.css'))
        .pipe(gulp.dest( config.local.dist.scss ))
});

//----- Gulp + Webpack Scripts task -----
gulp.task('scripts', function(){
    return gulp.src( config.local.src.entry )
        .pipe(webpack( webpackConfig ))
        .pipe( gulp.dest( path.join( config.local.dist.scripts ) ) );
});

//----- Gulp Default Task -----
gulp.task('default', ['styles', 'watch'], function(){
    console.log( 'start' );
});


//====================================
//========= Utility Functions ========
//====================================

//----- Error Handler -----
errorHandler = function(err){
    throw err;
}
