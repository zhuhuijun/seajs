module.exports = function (grunt) {
    grunt.initConfig({
        //任务合并
        concat: {
            seajs: {
                //输出文件的地址//后者是要合并的文件
                files: {
                    './app/dist/main.js': ['./app/public/js/drag.js', './app/public/js/limit.js', './app/public/js/util.js', './app/public/js/main.js']
                }
            }
        }
    });
    //注册插件
    grunt.loadNpmTasks("grunt-contrib-concat");
    //注册任务
    grunt.registerTask("default",['concat'])
};