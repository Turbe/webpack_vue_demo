/**
 * @desc 事件方法demo中逻辑
 * @author wanjb@taofen8.com
 * @date 2016/7/30
 *
 **/
var Vue = require("vue"),
    footer = require("footer"),
    Dialog = require("dialog");

$(function(){
    var obj = new methodObj();
    obj.init();
});

var methodObj = function(){
    this.methodVue = "";
    this.showOne = false;
};

methodObj.prototype.init = function() {
    var self = this;
    self.vueInstance();
};

/**VUE: vue实例化&数据渲染**/
methodObj.prototype.vueInstance = function(){
    var self = this;
    self.methodVue = new Vue({
        el:"#J-content",
        data:{
            self:this,
            title:"用v-on指令监听DOM事件",
            index:1,
            bgColor:"bg-color",
            build_author:BUILD_AUTHOR,
            build_date:BUILD_DATE,
            build_desc:BUILD_DESC
        },
        methods:{
            clickOne: self.clickOne,
            clickTwo: self.clickTwo,
            clickThree: self.clickThree
        },
        components:{
            footercmpt:footer
        },
        computed: {
        },
    });
};

/**click: 点击事件一**/
methodObj.prototype.clickOne = function(index) {
    var self = this.self;
    Dialog.dialogOneMenu(index,"OK",function(){});

};

/**click: 点击事件二**/
methodObj.prototype.clickTwo = function(event) {
    var self = this.self,
        currentTarget = $(event.currentTarget),
        clickTwoInfo = currentTarget.attr("data-click-two");
    Dialog.dialogOneMenu(clickTwoInfo,"OK", function(){});

};

/**click: 点击事件三**/
methodObj.prototype.clickThree = function(event) {
    var self = this.self,
        currentTarget = $(event.currentTarget),
        text = currentTarget.text();
    Dialog.dialogOneMenu(text,"OK",function(){});
};





/**data: 获取数据列表**/
methodObj.prototype.getMethodList = function() {
    return {
        "methodList":[
            {"name":"1","desc":"扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法."},
            {"name":"2", "desc":"因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。"},
            {"name":"3","desc":"当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何自己清理它们。"}
        ]
    };
};