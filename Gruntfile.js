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
					"css/styles.css": "src/less/styles.less"
				}
			},
			dist: {
				files: {
					"css/styles.css": "src/less/styles.less"
				},
				options: {
					compress: true,
					yuicompress: true,
					report: 'gzip'
				}
			}
		},

		targethtml: {
			dist: {
				files: {
					'dist/index.html': 'src/index.html',
					'dist/js/script.js': 'src/js/script.js',
					'dist/rsrc/email.php': 'src/rsrc/email.php',
					'dist/img/new-cheese-gr.png': 'src/img/new-cheese-gr.png',
					'dist/img/bg-tile.png': 'src/img/bg-tile.png'
				}
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
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-targethtml');

	grunt.registerTask("dist", [
		"targethtml",
		"php",
		"watch"
	]);
	
};