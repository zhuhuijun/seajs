/**
 * Created by huijun on 2016/6/3.
 */
define(function (require, exports, module) {
    var oDiv = document.querySelector("#div1");
    console.log(module.dependencies);
    var tt=require("./drag");
    var d=new tt.Drag(oDiv);
    //var Drag = require('./drag').Drag;
    //var d=new Drag(oDiv);
});