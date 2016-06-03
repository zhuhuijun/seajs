/**
 * Created by huijun on 2016/6/3.
 */
define(function (require, exports, module) {

    var dialog= function () {
        console.info("func dialog...");
    }

    var b = require('./b');
    b.bdialog();
    //导出模块
    exports.dialog = dialog;
});
//独立模块,直接导出
/*
 define({
 dialog:function(){
 console.info("func dialog...");
 }
 })*/
