// JavaScript Document
  $(function(){
	//���и����л�
	(function(){
		var aCity=$('.city a');
		aCity.each(function(index){
			//console.log(index);  //�ڿ���̨�������ֵ
			$(this).click(function(){
				aCity.attr("class","gradient"); 
				$(this).attr("class","active");
			});
		});
	 })();

	//�����л�
	(function search(){
	
		var aLi=$("#menu li");
		
		//find() ������õ�ǰԪ�ؼ�����ÿ��Ԫ�صĺ����ͨ��ѡ������jQuery �����Ԫ����ɸѡ��
		var oText = $('#search').find('.form .txt');
		
		//�����������е�����
		var arrText = [
			'���磺�����㷻���� �� ӣ���ձ�����',
			'���磺��ƽ������վ����㳡2��¥609��',
			'���磺���ӰԺ˫������ȯ',
			'���磺��ݸ�����ˣ����ϻ���˭��',
			'���磺����������ѩ���������Ī��'
		];
		var iNow=0; 
		
		//val() �������ػ����ñ�ѡԪ�ص�ֵ��
		oText.val(arrText[iNow]);
		
		//ѭ��ÿһ��li��Ķ���   Ϊ������������ѿ�������� indexΪ����ֵ
		aLi.each(function(index){
			$(this).click(function(){
				//console.log(index);  �ڿ���̨�������ֵ
				//�����������ʽ���ټ���������ʽ
				aLi.attr("class","gradient"); //attr() �������û򷵻ر�ѡԪ�ص�����ֵ��
				$(this).attr("class","active"); //Ϊ��ǰѡ�е�li��class����active
				
				iNow=index;
				oText.val(arrText[iNow]);
			});
		});
		
		//�ı����ȡ����ʱ
	   oText.focus(function(){
	   		//console.log(arrText[iNow]); �����̨�����ǰ�ı����е�ֵ
		  	//�жϵ�ǰ�ı����е������Ƿ��������е�ĳһ��ֵ�����������գ����ǣ��û��Լ����룩�����
			if($(this).val()==arrText[iNow]){
				 $(this).val(''); //����ı����е�����
			}
	   });
	   
	   //�ı�ʧȥ����ʱ
	    oText.blur(function(){
			//����ı��������ݣ�����Ҫ���κβ��������û�����ݣ���ָ���ʼ״̬��
			if($(this).val()==''){
				oText.val(arrText[iNow]);
			}
		});
	})();
	
	//update���ֹ���
	(function(){
		
		var oDiv=$('.update');
		var oUl= oDiv.find('ul');
		var iH=0;
		
		//����Li�е����ݣ�JSON��ʽ��
		var arrData = [
			{ 'name':'����', 'time':4, 'title':'��Щ���û�����˲��', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'����', 'time':5, 'title':'�㶫3��ץ������ɷ�', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'����', 'time':6, 'title':'��̨���Ӧ������', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'����', 'time':7, 'title':'��Щ���û�����˲��', 'url':'http://www.miaov.com/2013/#message' },
			{ 'name':'����', 'time':8, 'title':'��Щ���û�����˲��', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'����', 'time':9, 'title':'�㶫3��ץ������ɷ�', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'����', 'time':10, 'title':'��̨���Ӧ������', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'����', 'time':11, 'title':'��Щ���û�����˲��', 'url':'http://www.miaov.com/2013/#message' }
		];
		var str='';
		//������������ݳ��ȣ������ַ���ƴ��
		for( var i=0;i<arrData.length;i++){	
			 str+='<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong><span> '+arrData[i].time+'</span> д��һƪ�����£�'+arrData[i].title+'</a></li>'; //�����ַ���ƴ�ӣ�
		}
	//	console.log(str);
		oUl.html(str);  //��ul׷��Li   (��̬����li)
		
		//��ȡli�ĸ߶�
		iH=oUl.find('li').height();
		console.log(iH); 

		//ʵ��li�������ƶ�������ul��topֵ�����޸�
		//oUl.animate({top:"-30px"},3000); //animate() ����ִ�� CSS ���Լ����Զ��嶯����
		//oUl.animate({'top':-iH},2000,'elasticOut'); //elasticOut ���ò���еķ���
		//��ȡ�����˶���a��ǩ
		var oBtnUp=$('#updateUpBtn');
		var oBtnDown=$('#updateDownBtn');
		
		var iNow=0; //����ڼ���Li����ʾ
		var timer=null; //��ʱ���Ĺ���
		
		oBtnUp.click(function(){
			doMove(-1); //���ú���
		});
		oBtnDown.click(function(){
			doMove(1);
		});
		function doMove(num){ 
			//�ۼӷ�  0+1=1  1+1=2  2+1=3 ��������
			iNow=iNow+num;//ѭ���ı䵱ǰ��ʾ��li������  1,2,3,4,5,6����
			//�����ߵ�����
			if(Math.abs(iNow)>arrData.length-1){ //���г������ƣ�iNowֵ���ܴ������鳤�ȣ�
				iNow=0; //���»ص�ԭ��
			}
			//�����ߵ�����
			if(iNow>0){
				iNow=-(arrData.length-1);
			}
			
			//�����������֮��li�Զ���ͣ���˶�  .stop()
			//.stop() ��ͣ��֮ǰ���˶�����ִ�е�ǰ�˶���
			oUl.stop().animate({'top':iH*iNow},2000,'elasticOut');  
		}
		//���������update��Χ�ڣ��˶�ֹͣ,hover�����������������������ǰ������������¼�
		 oDiv.hover(function(){
		 	//�������update��Χ��ͣ����ʱ��
			clearInterval(timer);
		 },function(){
		 	antoPlay(); //���¿����˶�
		 });
		
		//li�Զ��˶�
		function antoPlay(){
			timer=setInterval(function(){
				doMove(-1);
			},1500);
		}
		antoPlay(); //���ö�ʱ������
	})();
	
	//optionsѡ��л�
	(function(){
	
		fnTab($('.tabNav1'),$('.tabCon1'));  	//�л� ������̡��¿��š�ѡ�
		fnTab($('.tabNav2'),$('.tabCon2'));  	//�л���������ͨ������ѡ�
		fnTab($('.tabNav3'),$('.tabCon3'));		//�����  ѡ�
		fnTab($('.tabNav4'),$('.tabCon4'));		//��֪�����ӡ�  ѡ�
		
		function fnTab(oNav,aCon){
			var aElem=oNav.children(); //�ҵ�oNav�µ�������Ԫ�أ�Ϊ�����Ժ����չ��
			aCon.hide().eq(0).show();//��aCon���е�����ȫ�����أ��ٰѵ�һ��������ʾ��
			
			//ѭ�����е�li���л���li��
			aElem.each(function(index){
				$(this).click(function(){
					//�����е�Liȥ�����ϵ�active,�ټ���gradient
					aElem.removeClass('active').addClass('gradient');
					//����ǰѡ�е�Li
					$(this).removeClass('gradient').addClass('active');
					//�ҵ�Li���ϵ�����a��ǩ,�����е�a��ǩ�е�classȫ�����ɻ�ɫtriangle_down_gray
					aElem.find('a').attr('class','triangle_down_gray');
					//����ǰli���ϵ�a��ǩ����ɫ
					$(this).find('a').attr('class','triangle_down_red');
					
					aCon.hide().eq(index).show();//��aCon���е�����ȫ�����أ��ٰѵ�ǰ������ʾ��
				});
			});
		}
	
	})();
	
	//�Զ����ŵĽ���ͼ
	(function(){
		var oDiv=$('#fade');
		var aULi=oDiv.find('ul li');
		var aOLi=oDiv.find('ol li');
		var oP=oDiv.find('p');
		var arr=['�ְ�ȥ�Ķ���~','������Ӱ�еĹ�Ӱ��','�������ġ����޴�'];
		var iNow=0;
		var timer=null; //��ʱ��
		
		fnFade();	//��һ�ε���fnFade();��Ϊ���ʼҪ��ʾ��һ��ͼƬ
		autoPlay();	//�����Զ����ź���
		
		aOLi.click(function(){
			iNow=$(this).index(); //��õ�һ��ƥ��Ԫ���������ͬ��Ԫ�ص� index λ�á�
			fnFade(); //�ڶ��ε���fnFade();��Ϊ���л�ͼƬ���ı�iNow��ֵ��
		});
		
		function autoPlay(){
			timer=setInterval(function(){
				iNow++;
				iNow%=arr.length; //��������  ����iNow�ķ�Χ��
				fnFade();
			},1500);
		}
		
		
		//���е�li���Ǿ��Զ�λ��Խ�Ǻ���㼶Խ��
		function fnFade(){ //��ʾ��һ��ͼƬ����
			aULi.each(function(i){ //�������е�li    i���Զ���1
				if(i!=iNow){ //�����ǰ���ǵ�iNow�����򵭳������ҽ��Ͳ㼶
					//i =0 1 2 
					aULi.eq(i).fadeOut().css('ZIndex',1);
					aOLi.eq(i).removeClass('active'); //ȥ�����ϵ�class
				}else{
					//�ѵ�ǰ��ͼƬ����������߲㼶
					aULi.eq(i).fadeIn().css('ZIndex',2);
					aOLi.eq(i).addClass('active'); //ȥ�����ϵ�class
				}
			});
			
			//�滻p��ǩ�е�����
			oP.text(arr[iNow]);
		}
		
		//oDiv��Χ����������Ƴ���Ч��
		oDiv.hover(function(){
			clearInterval(timer);
		},function(){
			autoPlay();
		});
		
	})();
	
	//������ʾ˵��
	(function(){
		var aSpan=$('.calendar h3 span');
		var aImg=$('.calendar .img');
		var oPromp=$('.today_info');
		var oImg=oPromp.find('img');
		var oStrong=oPromp.find('strong');
		var oP=oPromp.find('p');
		
		//�����е�ͼƬ������������Ƴ��¼�
		 aImg.hover(function(){
		  // $(this).parent() ��ȡ����Li��ǩ ��position().top��ȡ������topֵ
		 	var iTop=$(this).parent().position().top-30;
			var iLeft=$(this).parent().position().left+55;// 
		 //	console.log(iLeft);
		//  console.log($(this).attr('info')); //��ȡ��ǰͼƬ����˵��
		
			//����� jQuery ѡ����ƥ���Ԫ�ص�������
		 //	console.log($(this).parent().index()% aSpan.size()); //��ȡ����Ƶ���Li������ֵ
		 	var index=$(this).parent().index()% aSpan.size();
			
		 	oPromp.show().css({'left':iLeft,'top':iTop}); //��ʾ��ʾ��Ϣ��������������ʾλ��
			oP.text($(this).attr('info')); //��p��ǩ��˵������
			oImg.attr('src',$(this).attr('src'));  //��ͼƬ
			oStrong.text(aSpan.eq(index).text()); //�������ڼ����֣�
		 },function(){
		 	oPromp.hide(); //����
		 });
	})();
	
	//BBS��̳Ч���л�
	(function(){
		$('.bbs ol li').mouseover(function(){
			//ȥ��Li�������е�active,�ٸ���ǰ��li����active
			//$(this).index() ��ǰli������ֵ
			$('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active'); 
		});
	})();
	
	//hot_area ����͸������Ч��
	(function(){
		
		//p��ǩ������˵������
			var arr = [
					'',
					'�û�1<br />����1',
					'�û������Ըб���<br />���򣺳���CBD<br />������124987',
					'�û�3<br />����3',
					'�û�4<br />����4',
					'�û�5<br />����5',
					'�û�6<br />����6',
					'�û�7<br />����7',
					'�û�8<br />����8',
					'�û�9<br />����9',
					'�û�10<br />����10'
				 ];
		
		//�ҵ�hot_area�����е�li��������������¼�
		$('.hot_area li').mouseover(function(){
		
			//���õ�һ��li�б�����
			if($(this).index()==0){return;}  //���������ִ�����
			
			//����ȥ�����еı����㣨p��ǩ��
			$('.hot_area li p').remove();
			//��ȡ��ǰLi�Ŀ��
			$(this).width();
			//console.log($(this).width());
			//��css��ʽ�����Ѿ�������p��ǩ���Ϻ����������12px,���������ɵ�p��ǩʱ�����ݻ�ȡ����li����ټ�ȥ12px����p��ǩ��������ߡ�
			//����ǰ��li����һ��p��ǩ�������㣩
			$(this).append('<p style="width:'+($(this).width()-12)+'px; height:'+($(this).height()-12)+'px">'+arr[$(this).index()]+'</p>');		
				
		});
	})();
	
	
});