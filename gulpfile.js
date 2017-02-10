var gulp = require('gulp');
gulp.task('serve', function () {
    process.env.TASK_NAME = 'serve';
    require('./build/dev-server.js');
});

gulp.task('prod', function () {
    process.env.TASK_NAME = 'prod';
    require('./build/build.js');
});

gulp.task('test', function () {
    process.env.TASK_NAME = 'test';
    require('./build/build.js');
});

gulp.task('dev', function () {
    process.env.TASK_NAME = 'dev';
    require('./build/build.js');
});



gulp.task('default',['serve']);