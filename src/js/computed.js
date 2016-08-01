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
    var obj = new computedObj();
    obj.init();
});

var computedObj = function(){
    this.computedVue = "";
    this.showOne = false;
};

computedObj.prototype.init = function() {
    var self = this;
    self.vueInstance();
};

/**VUE: vue实例化&数据渲染**/
computedObj.prototype.vueInstance = function(){
    var self = this;
    self.computedVue = new Vue({
        el:"#J-content",
        data:{
            self:this,
            unit:345.45,
            num:"",
            taxes:"",
            postage:"",
            sum:""
        },
        components:{
            footercmpt:footer
        },
        computed: {
            // sum:
        }
    });
    self.taxesResult();
    self.postageResult();
    self.sumResult();
};

/**computed: 计算税费方法**/
computedObj.prototype.taxesResult = function() {
    var self = this;
    self.computedVue.$watch('num', function (val) {
        var sum = val * self.computedVue.unit;
        if (sum <= 2000) {
            self.computedVue.taxes= "免税费";
        }else if (sum>2000 && sum < 5000) {
            self.computedVue.taxes= (sum*0.1).toFixed(2);
        }else{
            self.computedVue.taxes= (sum*0.2).toFixed(2);
        }
    });


};

/**computed: 计算邮费方法**/
computedObj.prototype.postageResult = function() {
    var self = this;
    self.computedVue.$watch('num', function (val) {
        var sum = val * self.computedVue.num;
        if(val > 3 && sum > 2000) {
            self.computedVue.postage = "免邮";
        }else{
            self.computedVue.postage= (val*20).toFixed(2);
        }
    });

};

/**computed: 计算总额方法**/
computedObj.prototype.sumResult = function() {
    var self = this;
    self.computedVue.$watch('num', function (val) {
        var tax = self.computedVue.taxes>0 ? self.computedVue.taxes : 0,
            postage = self.computedVue.postage > 0 ? self.computedVue.postage : 0;
        self.computedVue.sum = (self.computedVue.unit*val+Number(tax)+Number(postage)).toFixed(2);
    });

};

