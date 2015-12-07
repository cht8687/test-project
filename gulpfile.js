
var destFolderPath = '../cht8687.github.io/react-webpack-starter-kit/example';
var gulp = require('gulp');
var runSequence = require('run-sequence');
var shell = require('gulp-shell');
var gulptil = require('gulp-util');

// Variables
var gitCommit = `git commit -m "v0.0.5"`;

gulp.task('npm-pub',shell.task([
    `npm publish`
  ]
));

gulp.task('moveToDest',['npm-pub'], function(){
  gutil.log('Moving example files to github.io...');
  return gulp.src('dist/*.js')
    .pipe(gulp.dest(destFolderPath))
});

gulp.task('pub',['moveToDest'], function(){
  return runSequence('push-to-git');
});

gulp.task('git-add', shell.task([
    `git add -A`
  ]
));

gulp.task('git-commit', shell.task([
    gitCommit
  ]
));

gulp.task('git-push', shell.task([
  `git push`
 ]
))

gulp.task('push-to-git', function(){
  return runSequence('git-add','git-commit','git-push');
});
