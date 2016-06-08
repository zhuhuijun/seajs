/**
 * Created by huijun on 2016/6/3.
 */


define(function(require,exports,module){
    var cdialog = function () {
        console.info('cdialog ...');
    };
    var namespace={
        fn1: function () {
            console.log("fn1...");
        },
        fn2: function () {
            console.log("fn2...");
        }
    };
    //exports.cdialog=cdialog;
    //导出单个
    //exports.namespace=namespace;
    //导出多个
    //module.exports=namespace;
    //return namespace;
    exports.namespace=namespace;
})