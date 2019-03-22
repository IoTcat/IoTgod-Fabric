<?php
include '../../../functions.php'; 

yimian__header("随机一言","IoTcat, 随机一言, api", "随机一言API介绍页面");
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
        <h2 style="font-size:15px;word-break:break-all;padding:20px 32px;margin:0;text-align:center">随机一言 - API</h2>
    </div>
    <div style="margin:0px auto;width:90%">
        <h3 style="-webkit-transition: all .2s cubic-bezier(0, 0, 0, 0.48);-moz-transition: all .2s ease;border:.0625rem solid #fafafa;background:#fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);margin:15px 0px;padding:20px;border-radius:5px;font-size:14px;color:#333;">
        # 随机一言API请求方式 #
        <ul>
        <li>Method: GET/POST</li>
        </ul>
        <hr>
        # 请求地址 #<br/>
        <a style="color:#fd4b5c;text-decoration:none;">https://api.yimian.xyz/words</a><br/>
        # 参数 #<br/>
        <div style="width:100%;background-color: #000;background-image: linear-gradient(90deg, #6694ed 0%,);color:#FFFFFF;border-radius:5px">
        无参数<br/>
        </div>
        <hr>
        # 返回数据(Json格式) #<br/>
        <li>s //返回的随机一言字符串</li>
        <hr>
        # 备注 #<br/>
        -=-=-=-<br/>
        <hr>
        # 示例 #<br/>
        <a style="color:#fd4b5c;text-decoration:none；" target="_blank">https://api.yimian.xyz/words</a>
        </h3>
          </div>
</div>
<?php
yimian__simpleFooter();