module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jsdoc : {
			dist : {
				src: ['src/**/*.js'], 
				options: {
					destination: 'doc',
					template : "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template",
					configure : "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template/jsdoc.conf.json"
				}
			}
		},

		concat: {
			options: {
				separator: ";",
				stripBanners: true,
			},
			dist: {
				src: ['src/**/*.js'],
				dest: 'dist/behaviors.js',
			}
		},

		uglify: {
			dist: {
				preserveComments: false,
				files: {
					'dist/behaviors.min.js': ['dist/behaviors.js']
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
}