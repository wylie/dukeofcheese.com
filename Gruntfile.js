module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express: {
			server: {
				options: {
					port: 8050,
					host: 'http://localhost',
					bases: 'dist'
				}
			}
		},

		less: {
			dev: {
				files: {
					'dist/css/styles.css': 'dev/less/styles.less'
				}
			}
		},

		copy: {
			less: {
				files: [
					{
						expand: true,
						src: 'dev/less/*',
						dest: 'dist/css/',
						flatten: true
					}
				]
			},
			html: {
				files: [
					{
						expand: true,
						src: 'dev/*.html',
						dest: 'dist/',
						flatten: true,
						filter: 'isFile'
					}
				]
			}
		},

		watch: {
			less: {
				files: ['dev/less/*.less'],
				tasks: ['less']
			},
			html: {
				files: ['dev/*.html'],
				tasks: ['copy:html']
			}
		}
	});

	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'build',
		'server'
	]);

	grunt.registerTask('build', [
		'copy',
		'less'
	]);

	grunt.registerTask('server', [
		'express',
		'watch',
		'less',
		'copy',
		'express-keepalive'
	]);

};
