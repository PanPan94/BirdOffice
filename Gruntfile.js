module.exports = grunt => {
    require('load-grunt-tasks')(grunt)
    grunt.initConfig({
        sass: {
			dist: {
				files: {
					"css/style.css" : "sass/style.scss"
				}
			}
		},
		watch: {
			css: {
				files: "**/*.scss",
				tasks: ['sass']
			}
		},

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'index.html',
                        'css/*.css',
                        'img/*.png',
                        'img/*.jpg',
                        'js/*.js'
                    ]
                },
                server: {
                    baseDir: "./",
                    directory: true
                },
                options: {
                    notify: false,
                    watchTask: true
                }
            }
        }
    })

    grunt.registerTask('dev', [
        'watch'
    ])

}