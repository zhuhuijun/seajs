module.exports = function (grunt) {
    grunt.initConfig({
        //任务合并
        concat: {
            seajs: {
                //输出文件的地址//后者是要合并的文件
                files: {
                    './app/dist/js/main.js': ['./app/.build/js/drag.js',
                        './app/.build/js/limit.js',
                        './app/.build/js/util.js',
                        './app/.build/js/main.js']
                }
            }
        },
        //任务名字模块id的提取
        transport:{
            options:{//id头的配置./dist/js/drag.js
                idleading:'./dist/'
            },
            seajs: {
                files: {//
                    './app/.build': ['./js/drag.js', './js/limit.js', './js/util.js', './js/main.js']
                }
            }
        },
        //压缩的处理
        uglify:{
            seajs: {
                files: {//
                    './app/dist/js/main.js': './app/dist/js/main.js'
                }
            }
        }
    });
    //注册插件
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-cmd-transport");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    //注册任务
    //grunt.registerTask("default",['concat']);
    grunt.registerTask("default",['transport','concat','uglify']);
};