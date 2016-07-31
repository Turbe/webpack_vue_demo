/**
 * @desc demo中逻辑
 * @author wanjb@taofen8.com
 * @date 2016/7/30
 *
 **/
var Vue = require("vue");

$(function(){
    var obj = new indexObj();
    obj.init();
});

var indexObj = function(){
    this.indexVue = "";
    this.showOne = false;
};

indexObj.prototype.init = function() {
    var self = this;
    self.vueInstance();
};

/**VUE: vue实例化&数据渲染**/
indexObj.prototype.vueInstance = function(){
    var self = this;
    self.indexVue = new Vue({
        el:"#J-content",
        data:{
            self:this,
            title:"VUE实例",
            demoList:self.getNameList().demoList,
            showOne:self.showOne,
            build_author:BUILD_AUTHOR,
            build_date:BUILD_DATE,
            build_desc:BUILD_DESC
        },
        methods:{
            demoClick: self.demoClick
        },
        computed: {
        },
    });
};

/**click: demo列表点击事件**/
indexObj.prototype.demoClick = function(index) {
    var self = this.self;
    // if (index == 0) {
    //     if (self.indexVue.showOne) {
    //         self.indexVue.showOne = false;
    //     }else{
    //         self.indexVue.showOne = true;
    //     }
    // }else if(index == 1){

    // }
    switch (index){
        case 0:
            if (self.indexVue.showOne) {
                return self.indexVue.showOne = false;
            }else{
                return self.indexVue.showOne = true;
            };
        case 1: return window.location.href = "./method.html";
        case 2: return window.location.href = "./computed.html";
        case 3: return window.location.href = "./class.html";
        case 4: return window.location.href = "./filter.html";
        case 5: return window.location.href = "./reactivity.html";
    };
};

/**data: 获取数据列表**/
indexObj.prototype.getNameList = function() {
    return {
        "demoList":[
            {"name":"实例化&数据绑定","desc":"Vue.js 的模板是基于 DOM 实现的。<br>这意味着所有的 Vue.js 模板都是可解析的有效的 HTML，且通过一些特殊的特性做了增强。<br>Vue 模板因而从根本上不同于基于字符串的模板，请记住这点。"},
            {"name":"事件方法处理器", "desc":""},
            {"name":"计算属性","desc":""},
            {"name":"class与style绑定","desc":""},
            {"name":"过滤器","desc":""},
            {"name":"数据响应式","desc":""}
        ]
    };
};