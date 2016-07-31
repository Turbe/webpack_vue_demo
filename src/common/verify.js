/**
 * @desc 相关校验方法
 * @author wangjb@taofen8.com
 * @date 2016.6.13
 *
 **/
module.exports = {
    /**判断url的正则**/
    isURL: function(str){
        return !!str.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g);
    },
    /**校验手机号**/
    checkMobileNo:function(str){
        if (str == '' || str == undefined){
            return "手机号码不能为空";
        }else{
            var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
            if(!myreg.test(str)) {
                return "请输入有效的手机号码！";
            } else{
                return "true";
            }
        }
    }
};