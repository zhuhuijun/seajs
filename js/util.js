/**
 * Created by huijun on 2016/6/3.
 */

define(function(require,exports,module){
    var util={
        addClass:function(ele,clazzname){
            ele.classList.add(clazzname);
        },
        removeClass:function(ele,clazzname){
            ele.classList.remove(clazzname);
        }
    };
    var toggle=function(ele,clsname){
        ele.classList.toggle(clsname);
    }
    //module.util=util;
    exports.toggle=toggle;
});