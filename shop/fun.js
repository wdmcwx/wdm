function chkUsername(username,pwd){
	if(username==''){     //判断用户名是否为空
	    alert('请输入用户名或密码！');	
	}else{
        var xmlObj;     //定义XMLHttpRequest对象
	    if(window.ActiveXObject){     //如果是浏览器支持ActiveXObjext则创建ActiveXObject对象
	        xmlObj = new ActiveXObject("Microsoft.XMLHTTP");
	    }else if(window.XMLHttpRequest){     //如果浏览器支持XMLHttpRequest对象则创建XMLHttpRequest对象
		    xmlObj = new XMLHttpRequest();
	    }	
	
	    xmlObj.onreadystatechange = callBackFun;    //指定回调函数
		//使用GET方法调用chk.php并传递username参数的值
	    xmlObj.open('GET', 'chk.php?username='+username+'&pwd='+pwd, true);
	    xmlObj.send();     //不发送任何数据，因为数据已经使用请求URL通过GET方法发送
	
	    function callBackFun(){     //回调函数
	        if(xmlObj.readyState == 4 && xmlObj.status == 200){   //如果服务器已经传回信息并没发生错误
			    if(xmlObj.responseText=='y'){    //如果服务器传回的内容为y，则表示用户名已经被占用
				    alert('用户密码输入正确！');
					//在此打开一个新窗口，表示进入成功
					// window.location.href="http://www.baidu.com";
					/*
					在新浏览器窗口中打开 about:blank 页：
					myWindow=window.open('','','width=600,height=400')
					myWindow.document.write("This is 'myWindow'")
					myWindow.focus();
					*/
					window.open("http://www.w3school.com.cn")
			    }else{       //不为y，则表明用户名未被占用
			        alert('用户密码输入不正确！');	
			    }
		    }	
	    }
	}
}