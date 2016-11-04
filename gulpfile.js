var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	reload = browserSync.reload;

gulp.task('styles', function(){
	return gulp.src('app/sass/styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('app/css'))
		.pipe(reload({ stream:true }));
});

gulp.task('serve',['styles'], function(){
	browserSync({
		server: {
			baseDir: 'app'
		}
	});

	gulp.watch('app/sass/*', ['styles']);
	gulp.watch(['*.html',  'js/*.js'], {cwd: 'app'}, reload);
});

/*gulp.task('watch', function(){
	gulp.watch('sass/*.sass', ['styles']);
});	*/

gulp.task('default', ['serve'],function(){
});