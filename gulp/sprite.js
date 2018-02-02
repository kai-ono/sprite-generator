module.exports = function(gulp) {
  gulp.task('sprite', function() {
    const spritesmith = require('gulp.spritesmith');
    const originalImages = 'src/*'; // これらの画像を1個にまとめる。
    const spritesmithParam = {
      imgName: 'sprite.png', // 生成される画像
      cssName: 'sprite.css' // 生成されるCSS
    };

    return gulp.src(originalImages)
      .pipe(spritesmith(spritesmithParam))
      .pipe(gulp.dest('dest'));
  });
};
