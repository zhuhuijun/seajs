/**
 * Created by huijun on 2016/6/3.
 */


define(function(require,exports,module){
   require.async("./c",function(c){
       //c.cdialog();
       //单个
      // c.namespace.fn1();
       c.fn2();
    });
    var bdialog = function () {
        console.info('bdialog ...');
    };
    exports.bdialog=bdialog;
})