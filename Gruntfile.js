
/**
 * @author Berkan Dirim
 */

module.exports = function(grunt) {

    grunt.initConfig({
        sass : {
            dev: {
                options: {
                    style    : 'compressed',
                    sourcemap: 'auto'
                },
                files  : {
                    './assets/css/styles.css': './source/styles/styles.scss'
                }
            }
        },
        watch: {
            css: {
                files: './source/**/*.scss',
                tasks: ['sass']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        './assets/**/*.css',
                        './*.html'
                    ]
                },
                options: {
                    server: {
                        baseDir: "./"
                    },
                    watchTask: true,
                    notify: true,
                    browser: 'google chrome'
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt, { pattern: ['grunt-*', '@*/grunt-*'] });

    // Default task(s).
    grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
};