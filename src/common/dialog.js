/**
 * 弹框
 * @author cisco_luo
 **/
module.exports = {
    ANIMATION_TIME: 100,

    /*
     * 单个菜单按钮
     */
    dialogOneMenu: function(message, menuText, menuCallback) {
        var rootObj = $("#_dialogRoot1");
        if(rootObj.length == 0) {
            this.createAttachOneMenu();
            rootObj = $("#_dialogRoot1");
        }
        this.setDialogWHCenter("#_dialogRoot1Child", document.body.clientWidth*0.8, 200);
        rootObj.fadeIn(this.ANIMATION_TIME);

        $("#_dialogRoot1ChildMessage").html(message);
        var btnObj = $("#_dialogRoot1ChildBtn");
        btnObj.html(menuText);
        btnObj.off();
        btnObj.on('click', function() {
            rootObj.fadeOut(0);
            menuCallback();
        });
    },

    /*
     * 两个菜单按钮
     */
    dialogTwoMenu: function(message, menuText1, menuCallback1, menuText2, menuCallback2) {
        var rootObj = $("#_dialogRoot2");
        if(rootObj.length == 0) {
            this.createAttachTwoMenu();
            rootObj = $("#_dialogRoot2");
        }
        this.setDialogWHCenter("#_dialogRoot2Child", document.body.clientWidth*0.8, 200);
        rootObj.fadeIn(this.ANIMATION_TIME);

        $("#_dialogRoot2ChildMessage").html(message);
        var btnObj1 = $("#_dialogRoot2ChildBtn1");
        btnObj1.html(menuText1);
        btnObj1.off();
        btnObj1.on('click', function() {
            rootObj.fadeOut(0);
            menuCallback1();
        });
        var btnObj2 = $("#_dialogRoot2ChildBtn2");
        btnObj2.html(menuText2);
        btnObj2.off();
        btnObj2.on('click', function() {
            rootObj.fadeOut(0);
            menuCallback2();
        });
    },

    /*
     * 创建单个菜单弹窗
     */
    createAttachOneMenu: function() {
        var bgStyle = "position:fixed;top:0px;left:0px;right:0px;bottom:0px;background-color:rgba(0,0,0,0.5);display:none;z-index:1000;";
        var dialogStyle = "width:80%;position:absolute;background-color:#FFFFFF;border-radius:5px;padding-bottom:20px;";
        var messageStyle = "padding-top:40px;padding-bottom:40px;padding-left:15px;padding-right:15px;"+
            "text-align:center;color:#000000;font-size:16px;";
        var btnContainerStyle = "text-align:center;";
        var btnStyle = "display:inline-block;background-color:#f71b47;border-radius:5px;padding-top:13px;padding-bottom:13px;"+
            "width:90%;text-align:center;color:#FFFFFF;font-size:14px;";
        var str = "<div id='_dialogRoot1' style="+bgStyle+"><div id='_dialogRoot1Child' style="+dialogStyle+">"+
                    "<div id='_dialogRoot1ChildMessage' style="+messageStyle+"></div>"+
                    "<div style="+btnContainerStyle+">"+
                        "<span id='_dialogRoot1ChildBtn' style="+btnStyle+"></span>"+
                    "</div>"+
                  "</div></div>";
        $("body").append(str);
    },

    /*
     * 创建两个菜单弹窗
     */
    createAttachTwoMenu: function() {
        var bgStyle = "position:fixed;top:0px;left:0px;right:0px;bottom:0px;background-color:rgba(0,0,0,0.5);display:none;z-index:1000;";
        var dialogStyle = "width:80%;position:absolute;background-color:#FFFFFF;border-radius:5px;padding-bottom:20px;";
        var messageStyle = "padding-top:40px;padding-bottom:40px;padding-left:15px;padding-right:15px;"+
            "text-align:center;color:#000000;font-size:16px;";
        var btnContainerStyle = "text-align:center;";
        var btnStyle = "display:inline-block;border-radius:5px;padding-top:13px;padding-bottom:13px;"+
            "width:45%;text-align:center;font-size:14px;";
        var btn1Style = "border-width:1px;border-style:solid;border-color:#cfcfcf;color:#5c5c5c;";
        var btn2Style = "background-color:#f71b47;color:#FFFFFF;margin-left:5px;border-width:1px;border-style:solid;border-color:#f71b47;";
        var str = "<div id='_dialogRoot2' style="+bgStyle+"><div id='_dialogRoot2Child' style="+dialogStyle+">"+
                    "<div id='_dialogRoot2ChildMessage' style="+messageStyle+"></div>"+
                    "<div style="+btnContainerStyle+">"+
                        "<span id='_dialogRoot2ChildBtn1' style="+btnStyle+btn1Style+"></span>"+
                        "<span id='_dialogRoot2ChildBtn2' style="+btnStyle+btn2Style+"></span>"+
                    "</div>"+
                  "</div></div>";
        $("body").append(str);
    },

    /** set dialog's w/h postion **/
    setDialogWHCenter: function(name, divWidth, divHeight){
        var w = document.body.clientWidth;
        var h = document.documentElement.clientHeight;
        $(name).css("left", (w-divWidth)/2);
        $(name).css("top", (h-divHeight)/2+10);
    },

};