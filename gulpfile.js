const { src, dest, parallel, series, watch } = require('gulp');
const plumber = require('gulp-plumber');
const fileinclude = require('gulp-file-include');
const inlineCss = require('gulp-inline-css');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const server = require('browser-sync').create();

var paths = {
    src: 'src/',
    dist: 'dist/'
};

function emailBuilder() {
  return src([
      paths.src + '**/*.html',
      '!' + paths.src + '**/partials/*.html'
    ], {base: './src/'})
    .pipe(plumber({
      handleError: function(err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(fileinclude({
      prefix: '@@'
    }))
    .pipe(inlineCss({
      applyStyleTags: true,
      removeStyleTags: true,
      preserveMediaQueries: true,
	  applyTableAttributes: true
    }))
    .pipe(htmlmin({
        collapseWhitespace: true,
		preserveLineBreaks: true,
        minifyCSS: {format: 'keep-breaks'},
        removeComments: true
    }))
    .pipe(dest(paths.dist));
}

function clean(done) {
	del.sync(paths.dist);
	done();
}

function serve(done) {
	server.init({
		server: {
			baseDir: './'
		},
		ui: false,
		open: false
	});
	done();
}

function reload(done) {
	server.reload();
	done();
}

function watchFiles() {
	watch(paths.src + '**/*.html', series(emailBuilder, reload));
    watch(paths.src + '**/*.css', series(emailBuilder, reload));
}

exports.build = series(clean, emailBuilder);
exports.watch = watchFiles;
exports.default = series(clean, emailBuilder, serve, watchFiles);
