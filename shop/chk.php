<?php
require_once 'conn.php';     //�������ݿ������ļ�

 $name=trim($_GET['username']);
 $pwd=trim($_GET['pwd']);
 
 $sql = mysql_query("select name,pwd from user where name='".$name."' and pwd='".$pwd."'" , $connID); 
  //ִ�в�ѯ
$result = mysql_fetch_array($sql);
if ($result) {     //�ж��û����Ƿ����
    echo 'y';
} else {
    echo 'n';
}
?>