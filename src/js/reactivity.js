/**
 * @desc 数据响应原理demo中逻辑
 * @author wanjb@taofencomputed8.com
 * @date 2016/7/30
 *
 **/
var Vue = require("vue"),
    footer = require("footer"),
    Dialog = require("dialog");

$(function(){
    var obj = new reactivityObj();
    obj.init();
});

var reactivityObj = function(){
    this.reactivityVue = "";
    this.dataList = [];
};

reactivityObj.prototype.init = function() {
    var self = this;
    self.dataList = self.getDataList();
    self.vueInstance();
};

/**VUE: vue实例化&数据渲染**/
reactivityObj.prototype.vueInstance = function(){
    var self = this;
    self.reactivityVue = new Vue({
        el:"#J-content",
        data:{
            self:this,
            dataList:self.dataList,
        },
        components:{
            footercmpt:footer
        },
        computed: {

        },
        methods:{
            addDataClick:self.addDataClick,
            reduceDataClick:self.reduceDataClick,
            resetClick:self.resetClick
        }
    });
};

/**click: 动态减少数据**/
reactivityObj.prototype.reduceDataClick = function(){
    var self = this.self;
    if (self.dataList.length > 1) {
        self.dataList.pop();
    }else{
        Dialog.dialogTwoMenu("你确定还要把最后一个元素删除吗", "NO", function(){}, "YES", function(){
            self.dataList.pop();
        });
    }
};

/**click：动态增加数据**/
reactivityObj.prototype.addDataClick = function(){
    var self = this.self;
    self.dataList.push(self.getRandomColor());
};

/**click: 重置数据**/
reactivityObj.prototype.resetClick = function(){
    var self = this.self;
    self.dataList = [];
    self.dataList = self.getDataList();
    self.reactivityVue.dataList = self.dataList;

};

/**获取色值列表**/
reactivityObj.prototype.getDataList = function() {
    var self = this;
    var dataList = [];
    for(var i = 0; i<5; i++){
        dataList.push(self.getRandomColor());
    }
    return dataList;
};

/**获取随机色值**/
reactivityObj.prototype.getRandomColor = function() {
    var self = this;
    return '#'+Math.floor(Math.random()*16777215).toString(16);
};

/**获取0-9随机整数**/
reactivityObj.prototype.getRandomNum = function() {
    // body...
    return Math.floor(Math.random()*10);
};