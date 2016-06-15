/**
 * Created by huijun on 2016/6/3.
 */
define('./dist/drag', ['./util', './limit'], function (require, exports, module) {
    var util = require('./util');
    var limit = require('./limit').limit;

    function Drag(ele) {
        //ele 可拖动的元素
        console.info('drag.....');
        this.x = 0;
        this.y = 0;
        var that = this;
        this.ele = ele;
        this.ele.onmousedown = function (ev) {
            util.toggle(this, 'yellow');
            that.mousedown(ev);
        };
    }

    Drag.prototype.mousedown = function (ev) {
        //鼠标按下时鼠标距离的位置
        this.x = ev.clientX - this.ele.offsetLeft;
        this.y = ev.clientY - this.ele.offsetTop;
        //调用move事件和up事件
        var that = this;
        document.onmousemove = function (ev) {
            that.mousemove(ev);
        };
        document.onmouseup = function (ev) {
            that.mouseup(ev);
        };
    };

    Drag.prototype.mousemove = function (ev) {
        //move方法设置盒子的位置
        var L = ev.clientX - this.x;
        var T = ev.clientY - this.y;
        L = limit(L, document.documentElement.clientWidth - this.ele.offsetWidth, 0);
        T = limit(T, document.documentElement.clientHeight - this.ele.offsetHeight, 0);
        this.ele.style.left = L + "px";
        this.ele.style.top = T + "px";
    };

    Drag.prototype.mouseup = function (ev) {
//清楚document的事件
        util.toggle(this.ele, "yellow");
        document.onmouseup = document.onmousemove = null;
    };
    exports.Drag = Drag;
});
/**
 * Created by huijun on 2016/6/3.
 */
define('./dist/limit', [], function (require, exports, module) {
    function limit(val, max, min) {
        if (val > max) {
            return max;
        } else if (val < min) {
            return min;
        } else {
            return val;
        }
    }

    exports.limit = limit;
})
/**
 * Created by huijun on 2016/6/3.
 */

define('./dist/util', [], function (require, exports, module) {
    var util = {
        addClass: function (ele, clazzname) {
            ele.classList.add(clazzname);
        },
        removeClass: function (ele, clazzname) {
            ele.classList.remove(clazzname);
        }
    };
    var toggle = function (ele, clsname) {
        ele.classList.toggle(clsname);
    }
    //module.util=util;
    exports.toggle = toggle;
});
/**
 * Created by huijun on 2016/6/3.
 */
define('./dist/main', ['./drag'], function (require, exports, module) {
    var oDiv = document.querySelector("#div1");
    var tt = require("./drag");
    var d = new tt.Drag(oDiv);
    //var Drag = require('./drag').Drag;
    //var d=new Drag(oDiv);
});