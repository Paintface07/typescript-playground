module.exports = function(grunt) {
    grunt.initConfig({
        pkg: '<json:package.json>',
        framework: {
            frameworkLib: 'src/framework',
            sourceDir: 'src',
            libraries: 'lib'
        },
        ts: {
            default: {
                src: [
                    '<%= framework.libraries %>/**/*.d.ts',
                    '<%= framework.frameworkLib %>/interfaces.ts',
                    '<%= framework.frameworkLib %>/state.ts',
                    '<%= framework.frameworkLib %>/router.ts',
                    '<%= framework.frameworkLib %>/app.ts',
                    '<%= framework.sourceDir %>/script.ts'
                ], dest: 'build/main.js',
                options: {
                    module: 'amd',
                    target: 'es5',
                    rootDir: 'src',
                    sourceMap: true,
                    declaration: true
                }
            }
        },
        less: {
            main: {
                options: {
                    paths:['src'],
                    compress: true,
                    yuicompress: true
                }, files: {
                    "build/styles.css": "src/**/*.less"
                }
            }
        },
        connect: {
            test: {
                options: {
                    port: 1337,
                    base: './'
                }
            }
        }, watch: {
            dev: {
                files: ['src/**/*', '**/*.html', 'Gruntfile.js', '!.git', '!.idea', '!build', '!dist'],
                tasks: ['default']
            }
        }, copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['node_modules/jquery/dist/jquery.min.*'], dest: 'build'}
                ]
            }
        }
        // }, uglify: {
        //     main: {
        //         options: {
        //             sourceMap: true
        //         },
        //         files: {
        //             'build/script.js': [
        //                 'src/**/*.module.js',
        //                 'src/**/*.config.js',
        //                 'src/**/*.routes.js',
        //                 'src/**/*.service.js',
        //                 'src/**/*.controller.js'
        //             ]
        //         }
        //     }
        // }, concat: {
        //     js: {
        //         src: [
        //             'build/angular.min.js',
        //             'build/angular-ui-router.min.js',
        //             'build/script.js'
        //         ],
        //         dest: 'dist/script.js'
        //     }, css: {
        //         src: ['build/styles.css'],
        //         dest: 'dist/styles.css'
        //     }
        // }
    });

    // grunt.registerTask('default', [ 'less', 'uglify', 'copy', 'concat' ]);
    // grunt.registerTask('dev', ['default', 'watch']);
    // grunt.registerTask('test', [ 'default', 'connect' ]);
    grunt.registerTask('default', ['ts', 'copy', 'less']);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks('grunt-ts');
};