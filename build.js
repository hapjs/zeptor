var vfs = require('vinyl-fs');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var download = require('download');

function down(cb){
    download('http://zeptojs.com/zepto.js', './').then(cb);
};

function build(){
    vfs.src([
        './template/head.js', 
        './zepto.js',
        './template/foot.js'
    ])
    .pipe(concat('zepto.js'))
    .pipe(vfs.dest('./build'))
    .pipe(uglify())
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(vfs.dest('./build'))
}

down(build);