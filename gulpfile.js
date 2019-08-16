/* eslint max-len:0, no-console:0, func-names: 0, no-mixed-operators:0 */
const gulp = require('gulp');
const changed = require('gulp-changed');
const size = require('gulp-size');
const imagemin = require('gulp-imagemin');
const imageminOptipng = require('imagemin-optipng');
const imageminMozjpeg = require('imagemin-mozjpeg');
const merge = require('merge-stream');
const spritesmith = require('gulp.spritesmith');
const buffer = require('vinyl-buffer');

// https://github.com/twolfson/gulp.spritesmith
function createSprite(src, fileName, cssTemplate) {
  const spriteData = gulp.src(src)
    .pipe(spritesmith({
      imgName: `${fileName}.png`,
      cssName: `${fileName}.styl`,
      padding: 4,
      imgOpts: {
        quality: 100,
      },
      cssTemplate,
      cssHandlebarsHelpers: {
      },
    }));
  const imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('src/assets/img_src/'));

  const cssStream = spriteData.css
    .pipe(gulp.dest('src/css'));
  return merge(imgStream, cssStream);
}


gulp.task('sprite', () => {
  const basicTemplate = 'src/css/handlebars/basic.hbs';
  const a = [
    createSprite('src/assets/sprite_src/*', 'sprite', basicTemplate),
  ];
  return merge(...a);
});


gulp.task('m', () => {
  const imgSrc = [
    'src/assets/img_src/**/*.+(jpg|png|gif)',
    '!src/assets/img_src/_*',
  ];
  const otherSrc = imgSrc.map(imgPath => (imgPath.indexOf('!') === 0 ? imgPath.substr(1) : `!${imgPath}`));
  otherSrc.push('src/asset/img_src/**/*.+(svg)');
  const imgDest = 'src/assets/img';

  const taskOtherSrc = gulp.src(otherSrc)
    .pipe(changed(imgDest))
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(imgDest));

  const taskImgSrc = gulp.src(imgSrc)
    .pipe(changed(imgDest))
    .pipe(size({ showFiles: true }))
    .pipe(imagemin([
      imageminMozjpeg({ quality: 90 }),
      imageminOptipng({ optimizationLevel: 3 }),
    ]))
    .pipe(gulp.dest(imgDest));

  return merge(taskOtherSrc, taskImgSrc);
});

gulp.task('watch', () => {
  gulp.watch('src/assets/img_src/**/*', gulp.series('m'));
  gulp.watch('src/assets/sprite_src/**/*', gulp.series('sprite', 'm'));
});

gulp.task('default', gulp.series('m', 'sprite', 'watch'));
