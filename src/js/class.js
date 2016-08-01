/**
 * @desc 计算属性demo中逻辑
 * @author wanjb@taofencomputed8.com
 * @date 2016/7/30
 *
 **/
var Vue = require("vue"),
    footer = require("footer"),
    Dialog = require("dialog");

$(function(){
    var obj = new classObj();
    obj.init();
});

var classObj = function(){
    this.classVue = "";
    this.showOne = false;
};

classObj.prototype.init = function() {
    var self = this;
    self.vueInstance();
};

/**VUE: vue实例化&数据渲染**/
classObj.prototype.vueInstance = function(){
    var self = this;
    self.classVue = new Vue({
        el:"#J-content",
        data:{
            self:this,
            bgColor:"bg-color-0",
            bgColor2:"bg-color-1",
            fontColor:"#37d48d",
            styleObjectA:{
                fontSize:"16px",
            },
            styleObjectB:{
                color:"#37d48d",
            }
        },
        components:{
            footercmpt:footer
        },
        methods:{
            classStyleOne: self.classStyleOne,
            classStyleTwo: self.classStyleTwo
        },
        computed: {
            // sum:
        }
    });
};

/**click: 对象语法点击事件**/
classObj.prototype.classStyleOne = function() {
    var self = this.self;
    self.classVue.bgColor = "bg-color-"+self.getRandomNum();
    self.classVue.fontColor = self.getRandomColor();
};

/**click: 数据语法点击事件**/
classObj.prototype.classStyleTwo = function() {
    var self = this.self;
    self.classVue.bgColor2 = "bg-color-"+self.getRandomNum();
    self.classVue.styleObjectB.color = self.getRandomColor();

};

/**获取随机色值**/
classObj.prototype.getRandomColor = function() {
    var self = this;
    return '#'+Math.floor(Math.random()*16777215).toString(16);
};

/**获取0-9随机整数**/
classObj.prototype.getRandomNum = function() {
    // body...
    return Math.floor(Math.random()*10);
};


