import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import uglify from 'gulp-uglify';
import gulpif from 'gulp-if';

import {
	getPluginOptions,
} from '../helpers';


gulp.task('scripts', () => {
	return gulp
		.src('./source/scripts/index.js')
		.pipe(webpackStream(getPluginOptions('webpackStream')))
		.pipe(gulpif(
			process.env.NODE_ENV === 'production',
			uglify(getPluginOptions('uglify'))
		))
		.pipe(gulp.dest('./build'));
});
