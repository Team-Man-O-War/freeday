var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browsersync = require('browser-sync').create();
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var watchify = require('watchify');
var nodemon = require('gulp-nodemon');
var reload = browsersync.reload;
// gulp.task('copy', function () {
//	gulp.src('./client/index.html')
//	.pipe(gulp.dest('path'));
//});
console.log('hello');
gulp.task('watch', function() {
	
	var watcher = watchify(browserify({
		entries: './src/main.js',
		transform: reactify,
		debug: true,
		cache: {}, packageCache: {}, fullPaths: true
	}));

	return watcher.on('update', function () {
		watcher.bundle()
			//.pipe(uglify())
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('./client/build'));
			//.pipe(browsersync.reload({stream:true}))
			console.log('updated at ' + Date.now());
	})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./client/build'));
});
gulp.task('build', function() {

	browserify({
		entries: './src/main.js',
		transform: reactify,
		debug: true,
		cache: {}, packageCache: {}, fullPaths: true
		}).bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./client/build'));
});
// Process Scripts
//gulp.task('scripts', function() {
//	return gulp.src('./src/components/*.js')
//	.pipe(concat('all.js'))
//	.pipe(uglify())
//	.pipe(gulp.dest('./client/build'));
//});

gulp.task('sync', ['watch'], function() {
 browsersync.init({

 	files: ['**/**'],
 	proxy: 'http://localhost:3000',
 	port: 4000
	});

	gulp.watch(['./client/build/bundle.js'], reload);
	gulp.watch(['./src/**/*.js'], reload);

});

//gulp.task('browserify', function() {
//	return browserify('./client/main.js')
//		.bundle()
//		.pipe(source('bundle.js'))
//		.pipe(gulp.dest('./build'));
//})

//gulp.task('watch', function() {
//	gulp.watch('client/index.html');
//	gulp.watch('./client/components/*.js', 
//		gulp.series('scripts', browsersync.reload));
//			gulp.watch('./build/bundle.js');
//});

gulp.task('server', function(){
	nodemon({
		script: './server/server.js',
		ext: 'html js',
		ignore: ['client']
	})
});

// Default Task
gulp.task('default', 
	['server', 'sync', 'build', 'watch']);

