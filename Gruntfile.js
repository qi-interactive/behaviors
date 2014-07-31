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
				src: ['src/**/*.js', '!src/**/specs/**'],
				dest: 'dist/behaviors.js',
			},
			css: {
				src: ['src/**/*.css'],
				dest: 'dist/behaviors.css',
			}
		},

		uglify: {
			dist: {
				preserveComments: false,
				files: {
					'dist/behaviors.min.js': ['dist/behaviors.js']
				}
			}
		},

		cssmin: {
			minify: {
				expand: true,
				cwd: 'dist/',
				src: ['*.css', '!*.min.css'],
				dest: 'dist/',
				ext: '.min.css'
			}
		},

		mocha: {
			all: {
				src: ['src/**/tests/*.html'],
			},

			options: {
				run: true
			}
		},

		autoprefixer: {
			run: {
				src: 'src/**/*.css', 
			}
		},
	})

grunt.loadNpmTasks('grunt-jsdoc');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-mocha');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-autoprefixer');

grunt.registerTask('dist', ['mocha:all', 'autoprefixer:run', 'concat:dist', 'concat:css', 'uglify:dist', 'cssmin:minify', 'jsdoc']);
	// grunt.registerTask('mocha');
}