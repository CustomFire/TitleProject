var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); // Подключаем Sass пакет
    browserSync = require('browser-sync'), // Подключаем Browser Sync

gulp.task('sass', function() { // Создаем таск "sass"
  return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Берем источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('css')) // Выгружаем результата в папку css
  });

gulp.task('browser-sync', function() { // Создаем таск browser-sync
  browserSync({ // Выполняем browserSync
    server: { // Определяем параметры сервера
        baseDir: './' // Директория для сервера - app
    },
    notify: false // Отключаем уведомления
  });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
  gulp.watch('pages/**/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
});

gulp.task('default', ['watch']);
