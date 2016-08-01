/**
 * @desc 计算属性demo中逻辑
 * @author wanjb@taofencomputed8.com
 * @date 2016/7/30
 *
 **/
var Vue = require("vue"),
    footer = require("footer"),
    util = require("util"),
    Dialog = require("dialog");

$(function(){
    var obj = new filterObj();
    obj.init();
});

var filterObj = function(){
    this.filterVue = "";
    this.showOne = false;
};

filterObj.prototype.init = function() {
    var self = this;
    self.vueInstance();

};

/**VUE: vue实例化&数据渲染**/
filterObj.prototype.vueInstance = function(){
    var self = this;
    self.vueFilter();
    self.filterVue = new Vue({
        el:"#J-content",
        data:{
            self:this,
            filterData:self.getFilterData().filterData
        },
        components:{
            footercmpt:footer
        },
        computed: {

        },
    });
};

/**filter: vue自定义过滤器方法**/
filterObj.prototype.vueFilter = function() {
    var self = this;
    //返回整数部分
    Vue.filter('parseInt', function(value){
        var intStr = "";
        if (value) {
            if (Number(value)<1 && Number(value) >= 0) {
                intStr = value;
            }else{
                intStr = util.splitPrice(value).integer;
            }
        }
        return intStr;
    });
    //返回星期数
    Vue.filter("weekDate", function(value){
        switch(parseInt(value)){
            case 0: return "Sunday";
            case 1: return "Monday";
            case 2: return "Tuesday";
            case 3: return "Wednesday";
            case 4: return "Thursday";
            case 5: return "Friday";
            case 6: return "Saturday";
        }
    });
    //返回和
    Vue.filter("sum",function(a,b){
        return "&yen;"+(a+b);
    });
};

/** 获取数据**/
filterObj.prototype.getFilterData = function() {
    var self = this;
    return {
        "filterData":[
            {"a":"63.1563","b":"1","c":"ASdfsdffsf","d":"603"},
            {"a":"123.4563","b":"0","c":"fgdfjoisdfsdf","d":"282"},
            {"a":"1000.543","b":"6","c":"kvmnzxhewlkfd","d":"73"},
            {"a":"122.987","b":"5","c":"JKMSMsdsKSvsd","d":"23"},
            {"a":"389.4187","b":"1","c":"XCDiudHjdadf","d":"43"},
            {"a":"229.0087","b":"2","c":"CMNSWadasSHKDa","d":"203"},
            {"a":"874.432","b":"4","c":"asaDSKsduiuiRWE","d":"323"},
            {"a":"56.8933","b":"3","c":"ppoIJDKNKsdfvs","d":"223"}
        ]
    };
};

