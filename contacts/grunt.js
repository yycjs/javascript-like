/**
 * Created with JetBrains WebStorm.
 * User: kevin
 * Date: 2012-11-24
 * Time: 12:23 PM
 * To change this template use File | Settings | File Templates.
 */

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-type');

    // Project configuration.
    grunt.initConfig({
//        typescript: {
//            base: {
//                src: ['typescript/**/*.ts'],
//                dest: 'resources/js',
//                options: {
////                    module: 'amd',
//                    target: 'es5'
////                    base_path: 'path/to/typescript/files'
//                }
//            }
//        }
        type: {
            compile: {
                files: {
                    'resources/js/*.js': ['typescript/*.ts']
                },
                options: {
                    target: 'ES5'
                }
            },
            options: {
//                module: 'amd',
//                style: 'eqeqeq;bitwise'
            }
        }
    });

    // Default task.
    grunt.registerTask('default', 'type');

};