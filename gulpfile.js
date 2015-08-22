'use strict';

var gulp = require('gulp'),
    shell = require('gulp-shell'),
    del = require('del'),
    webserver = require('gulp-webserver');


/**
 * @description
 * Cleans out the intermediate files that are being generated as part of
 * the typescript compilation phase
 */
gulp.task('clean:js', function(cb) {
    del([
        'app/app.js',
        // here we use a globbing pattern to match everything inside the `mobile` folder
        'app/components/*.js'
    ], cb);
});

/**
 * @description
 * Unfortunantely gulp-typescript comes packaged with support
 * for versions 1-4 but does not include support for 1.5.0-beta.
 * For now we will need to run this as a shell command for automation
 * purposes but will upgrade once the proper support is built in
 */
gulp.task('tsc', shell.task([
    'tsc -m commonjs -t es5 --experimentalDecorators --emitDecoratorMetadata app/app.ts'
]));

// wrapper around our typescript compile and clean
gulp.task('compile', ['clean:js', 'tsc']);

/**
 * @description
 * Post install script, rather than using a shell or bat file
 */
gulp.task('postinstall', shell.task([
    'npm install -g tsd@^0.6.0',
    'tsd install angular2 es6-promise rx rx-lite',
    'npm install -g typescript@^1.5.0-beta'
], {
    cwd: 'app'
}));



/**
 * @description
 * NodeJS connect server with livereload
 */
gulp.task('connect', function() {
    gulp.src('app')
        .pipe(webserver({
            livereload: {
                enable: true,
                filter: function(fileName) {
                    if (fileName.match(/.ts$/)) { // exclude all source maps from livereload
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            directoryListing: false,
            open: true
        }));
});

/**
 * @description
 * Use the gulp watcher instead of tsc watcher
 * This is useful in case we want to link in any other
 * processes as well i.e. LESS / SASS compiler
 */
gulp.task('watch', function() {
    gulp.watch('app/**/*.ts', ['compile']);
});



/**
 * @description
 * Default task list
 */
gulp.task('default', ['compile', 'connect', 'watch']);
