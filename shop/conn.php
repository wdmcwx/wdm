<?php
$host = '127.0.0.1';     //MySQL���ݿ��������ַ
$userName = 'root';     //�û���
$password = '111';     //����
$connID = mysql_connect($host, $userName, $password);     //���������ݿ������
mysql_select_db('wdm', $connID);     //ѡ�����ݿ�
mysql_query('set names gb2312');     //�����ַ���
?>