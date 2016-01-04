gulp.task('jade', function() {
    gulp.src('*.jade')
        .pipe(jade())
        .pipe(gulp.dest('.'))
});
gulp.run('jade');
gulp.watch(['*.jade', 'js/*', 'css/*']);