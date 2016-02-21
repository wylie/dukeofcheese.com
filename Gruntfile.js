module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		php: {
			test: {
				options: {
					port: 5005,
					hostname: 'localhost',
					base: 'dist',
					keepalive: true,
					open: true
				}
			}
		},
		less: {
			src: {
				files: {
					"dist/css/styles.css": "src/less/styles.less"
				}
			},
			dist: {
				files: {
					"dist/css/styles.css": "src/less/styles.less"
				},
				options: {
					compress: true,
					yuicompress: true
				}
			}
		},

		copy: {
			dist: {
				files: [
					{
						expand: true,
						src: 'src/img/*',
						dest: 'dist/img/',
						flatten: true
					},
					{
						expand: true,
						src: 'src/js/*',
						dest: 'dist/js/',
						flatten: true
					},
					{
						expand: true,
						src: 'src/rsrc/*',
						dest: 'dist/rsrc/',
						flatten: true
					},
					{
						expand: true,
						src: 'src/*.html',
						dest: 'dist/',
						flatten: true,
						filter: 'isFile'
					}
				]
			}
		},

		watch: {
			css: {
				files: ['src/less/*.less','src/index.html'],
				tasks: ['less']
			}
		}
	});

	grunt.loadNpmTasks("grunt-php");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("dist", [
		"copy",
		"less",
		"php",
		"watch"
	]);

};
