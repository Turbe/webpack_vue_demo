/**
 * 工具类
 * @author wangjb@taofen8.com
 * @desc 一般常用JS封装方法
 **/
var md5 = require("md5");

module.exports = {
    /** get parameter **/
    getParameter: function(name){
        var result = "";
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r =  window.location.search.substr(1).match(reg);
        if (r != null) {
            result = decodeURI(r[2]);
        }
        return result;
    },
    /** get parameter by url **/
    getUrlParam: function(name, url){
        var result = "";
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        if (this.isURL(url)) {
            if (url.indexOf("?") != -1) {
                var urlParam = url.split("?");
                var params = urlParam[1].toString();
                var r =  params.match(reg);
                if (r != null) {
                    result = decodeURI(r[2]);
                }
            }
        }
        return result;
    },
    /*
     * 对象转化成字符串
     */
    toString: function(jsonObj) {
        return JSON.stringify(jsonObj);
    },

    isNull: function(value) {
        return value == '' || value == undefined || value == null;
    },

    merge: function(arr1, arr2) {
        if(arr1 && arr2 == undefined) {
            return arr1;
        }

        if(arr2 && arr1 == undefined) {
            return arr2;
        }

        return $.merge(arr1, arr2);
    },

    /** string transfer int **/
    parseInt: function(value) {
        if(value) {
            return parseInt(value);
        } else {
            return 0.0;
        }
    },

    /** string transfer float **/
    parseFloat: function(value) {
        if(value) {
            return parseFloat(value);
        } else {
            return 0.0;
        }
    },

    /**时间字符串转秒**/
    stringToSecond: function(str){
        if(str && str !== null){
            return new Date(Date.parse(str.replace(/-/g, "/"))).getTime();
        }
    },

    /**截取时间时：分**/
    getSampleTime: function(str){
        if(str){
            var strArr = str.split(" ");
            var timeStr = strArr[1];
            var sampleTime = timeStr.split(":");
            return sampleTime[0]+":"+sampleTime[1];
        }
    },

    toLowerCase: function(value) {
        if(this.isNull(value)) {
            return value;
        } else {
            return value.toLowerCase();
        }
    },

    getBodyWidth: function() {
        return document.body.clientWidth;
    },

    getBodyHeight: function() {
        return document.body.clientHeight;
    },

    /**返回整数和小数**/
    splitPrice: function (price) {
        var self = this;
        var result = {
            integer: 0,
            decimal: 0,
        };
        if(price.indexOf(".") < 0) {
            result.integer = price;
            result.decimal = "00";
        } else {
            var price = self.parseFloat(price).toFixed(2);
            var arr = price.split(".");
            result.integer = arr[0];
            if(arr[1].length==1){
                result.decimal = arr[1]+"0";
            }else{
                result.decimal = arr[1];
            }
        }
        return result;
    },

    /**
     *  计算字符串中全角字符数量
     */
    calcuFullHalfAngle: function(value, maxLength) {
        var count = 0;
        var strCode;
        for (var i = 0; i < value.length; i++) {
            strCode = value.charCodeAt(i);
            if (strCode>=10000) {
                count += 1;
            } else {
                count += 0.5;
            }
            if(count >= maxLength) {
                return i;
            }
        }
        return value.length;
    },

    /*
     * 是否全是中文字符
     */
    isChinese: function(str) {
        return /^[\u4e00-\u9fa5]+$/.test(str);
    },

};