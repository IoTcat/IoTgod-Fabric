<?php
include '../../../functions.php'; 

yimian__header("咕咕机发送","IoTcat, 咕咕机发送, api", "咕咕机发送API介绍页面");
?>

<meta name="theme-color" content="#fd4b5c">

<?php
yimian__headerEnd();
?>

<style type="text/css">
h3:hover {box-shadow:0px 0px 8px #D1D1D1;}
</style>
<div style="box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);border-radius:15px;font-size:13px;width:950px;font-family:微软雅黑,'Helvetica Neue',Arial,sans-serif;margin:10px auto 0px;border:0px solid #eee;max-width:100%;">
    <div style="width:100%;background-color: #3174ed;background-image: linear-gradient(90deg, #3174ed 0%, #FA8BFF 35%, #3fd9fb 88%);color:#FFFFFF;border-radius:15px 15px 0 0;">
        <h2 style="font-size:15px;word-break:break-all;padding:20px 32px;margin:0;text-align:center">咕咕机发送 - API</h2>
    </div>
    <div style="margin:0px auto;width:90%">
        <h3 style="-webkit-transition: all .2s cubic-bezier(0, 0, 0, 0.48);-moz-transition: all .2s ease;border:.0625rem solid #fafafa;background:#fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);margin:15px 0px;padding:20px;border-radius:5px;font-size:14px;color:#333;">
        # 咕咕机发送API请求方式 #
        <ul>
        <li>Method: GET/POST</li>
        </ul>
        <hr>
        # 请求地址 #<br/>
        <a style="color:#fd4b5c;text-decoration:none;">https://api.yimian.xyz/gugu</a><br/>
        # 参数 #<br/>
        <li>ak //咕咕机AccessKey(前往<a href="http://open.memobird.cn">咕咕机开放平台</a>申请)</li>
        <li>userID //用户的咕咕号(手机软件>>我的>>头像旁边的咕咕号)</li>
        <li>memobirdID //咕咕机ID(手机软件>>我的>>我的咕咕机>>咕咕机>>设备编号)</li>
        <li>body //内容</li>
        <hr>
        # 返回数据(Json格式) #<br/>
        <li>showapi_res_code //1为发送成功，0为失败</li>
        <li>showapi_res_error //"ok"为发送成功，否则显示错误信息</li>
        <li>result //1为打印成功</li>
        <li>smartGuid //会话标识符</li>
        <li>printcontentid //打印内容识别编码</li>
        <li>更多用法见<a href="http://open.memobird.cn/upload/webapi.pdf">官方文件</a></li>
        <hr>
        # 备注 #<br/>
        次API仅为官方接口的二次封装，意在降低其使用门槛。本站承诺不会保存任何使用者信息。如果您对本站存有疑惑，请慎重使用本接口！！<a href="https://github.com/IoTcat/IoTgod-Fabric/blob/master/server/cn/home/www/api/www-api/gugu/index.php">本接口源码</a><br/>
        <hr>
        # 示例 (类似这个格式)#<br/>
        <a style="color:#fd4b5c;text-decoration:none；" target="_blank">https://api.yimian.xyz/gugu?ak=9e55121803474371bfa25d20e554b31d&userID=832598&memobirdID=c3ee06a8bd9b49e1&body=你好呀世界</a>
        </h3>
          </div>
</div>
<?php
yimian__footer();