/**
 * Created by huijun on 2016/6/3.
 */
define(function (require, exports, module) {
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