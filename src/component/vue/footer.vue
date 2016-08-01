<style>
.footer-box{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;/*脚部的高度*/
    background: #f3f3f3;
    clear:both;
}
.footer{
    width: 100%;
    margin: 0 auto;
    padding: 13px;
    text-align: center;
}
.footer span{
    padding: 0 2px;
}
</style>
<script type="text/javascript">
    export default {
        data() {
            return {
                build_author:BUILD_AUTHOR,
                build_date:BUILD_DATE,
                build_desc:BUILD_DESC
            }
        }
    }
</script>
<template>
    <div class="footer-box">
        <div class="footer">
            <span >{{build_author}}</span>
            <span >{{build_date}}</span>
            <span >{{build_desc}}</span>
        </div>
    </div>
<template>
