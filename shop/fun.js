function chkUsername(username,pwd){
	if(username==''){     //�ж��û����Ƿ�Ϊ��
	    alert('�������û��������룡');	
	}else{
        var xmlObj;     //����XMLHttpRequest����
	    if(window.ActiveXObject){     //����������֧��ActiveXObjext�򴴽�ActiveXObject����
	        xmlObj = new ActiveXObject("Microsoft.XMLHTTP");
	    }else if(window.XMLHttpRequest){     //��������֧��XMLHttpRequest�����򴴽�XMLHttpRequest����
		    xmlObj = new XMLHttpRequest();
	    }	
	
	    xmlObj.onreadystatechange = callBackFun;    //ָ���ص�����
		//ʹ��GET��������chk.php������username������ֵ
	    xmlObj.open('GET', 'chk.php?username='+username+'&pwd='+pwd, true);
	    xmlObj.send();     //�������κ����ݣ���Ϊ�����Ѿ�ʹ������URLͨ��GET��������
	
	    function callBackFun(){     //�ص�����
	        if(xmlObj.readyState == 4 && xmlObj.status == 200){   //����������Ѿ�������Ϣ��û��������
			    if(xmlObj.responseText=='y'){    //������������ص�����Ϊy�����ʾ�û����Ѿ���ռ��
				    alert('�û�����������ȷ��');
					//�ڴ˴�һ���´��ڣ���ʾ����ɹ�
					// window.location.href="http://www.baidu.com";
					/*
					��������������д� about:blank ҳ��
					myWindow=window.open('','','width=600,height=400')
					myWindow.document.write("This is 'myWindow'")
					myWindow.focus();
					*/
					window.open("http://www.w3school.com.cn")
			    }else{       //��Ϊy��������û���δ��ռ��
			        alert('�û��������벻��ȷ��');	
			    }
		    }	
	    }
	}
}