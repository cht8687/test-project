
var destFolderPath = '../cht8687.github.io/react-webpack-starter-kit/example';
var gulp = require('gulp');
var args = require('yargs').argv;
var runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')({lazy: true});

// var shell = require('gulp-shell');
// var gulptil = require('gulp-util');
// var gulpif = require('gulp-if');
// var gulpprint = require('gulp-print');



// Variables
var version = '0.10.0';
var gitCommit = `git commit -m ${version}`;
var gitTag = `git tag v${version}`;

gulp.task('npm-pub', $.shell.task([
    `npm publish`
  ]
));

gulp.task('moveToDest',['npm-pub'], function(){
  $.util.log('Moving example files to github.io...');
  return gulp.src('dist/*.js')
    .pipe(gulp.dest(destFolderPath))  
});

gulp.task('pub',['moveToDest'], function(){
  return runSequence('push-to-git');
});

gulp.task('git-add', $.shell.task([
    `git add -A`
  ]
));

gulp.task('git-commit', $.shell.task([
    gitCommit
  ]
));

gulp.task('git-push', $.shell.task([
  `git push`,
 ]
))

gulp.task('git-tag', $.shell.task([
   gitTag,
   `git push --tags`
  ]
))

gulp.task('push-to-git', function(){
  return runSequence('git-add','git-commit','git-push','git-tag');
});
