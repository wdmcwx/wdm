<?php
$host = '127.0.0.1';     //MySQL数据库服务器地址
$userName = 'root';     //用户名
$password = '111';     //密码
$connID = mysql_connect($host, $userName, $password);     //建立与数据库的连接
mysql_select_db('wdm', $connID);     //选择数据库
mysql_query('set names gb2312');     //设置字符集
?>