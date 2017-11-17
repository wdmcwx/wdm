<?php
require_once 'conn.php';     //包含数据库连接文件

 $name=trim($_GET['username']);
 $pwd=trim($_GET['pwd']);
 
 $sql = mysql_query("select name,pwd from user where name='".$name."' and pwd='".$pwd."'" , $connID); 
  //执行查询
$result = mysql_fetch_array($sql);
if ($result) {     //判断用户名是否存在
    echo 'y';
} else {
    echo 'n';
}
?>