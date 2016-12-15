
var gulp = require('gulp');

gulp.task('default', ['buildlib'], function(){
  
});

gulp.task('buildlib', function(){
	var fs=require('fs');
	var JsonObj=JSON.parse(fs.readFileSync('bower.json'));
	var deps=JsonObj.dependencies;
	for(var dep in deps){
	  var src = './bower_components/'+dep+'/'+dep+'*.js';
	  var dst = './dist/js/vendor/'+dep+'/';
	  gulp.src(src).pipe( gulp.dest(dst) );
	  console.log('copy lib('+dep+') to '+dst+'...');
	}

});

