// JavaScript Document
  $(function(){
	//城市高亮切换
	(function(){
		var aCity=$('.city a');
		aCity.each(function(index){
			//console.log(index);  //在控制台输出索引值
			$(this).click(function(){
				aCity.attr("class","gradient"); 
				$(this).attr("class","active");
			});
		});
	 })();

	//搜索切换
	(function search(){
	
		var aLi=$("#menu li");
		
		//find() 方法获得当前元素集合中每个元素的后代，通过选择器、jQuery 对象或元素来筛选。
		var oText = $('#search').find('.form .txt');
		
		//定义搜索框中的文字
		var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		];
		var iNow=0; 
		
		//val() 方法返回或设置被选元素的值。
		oText.val(arrText[iNow]);
		
		//循环每一个li点的动作   为了与下面的所搜框相关联。 index为索引值
		aLi.each(function(index){
			$(this).click(function(){
				//console.log(index);  在控制台输出索引值
				//先清除所有样式，再加上特殊样式
				aLi.attr("class","gradient"); //attr() 方法设置或返回被选元素的属性值。
				$(this).attr("class","active"); //为当前选中的li的class加上active
				
				iNow=index;
				oText.val(arrText[iNow]);
			});
		});
		
		//文本框获取焦点时
	   oText.focus(function(){
	   		//console.log(arrText[iNow]); 向控制台输出当前文本框中的值
		  	//判断当前文本框中的内容是否是数组中的某一个值，如果是则清空，不是（用户自己输入）则不清空
			if($(this).val()==arrText[iNow]){
				 $(this).val(''); //清空文本框中的内容
			}
	   });
	   
	   //文本失去焦点时
	    oText.blur(function(){
			//如果文本框有内容，不需要有任何操作，如果没有内容，则恢复初始状态。
			if($(this).val()==''){
				oText.val(arrText[iNow]);
			}
		});
	})();
	
	//update文字滚动
	(function(){
		
		var oDiv=$('.update');
		var oUl= oDiv.find('ul');
		var iH=0;
		
		//定义Li中的数据（JSON格式）
		var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
		];
		var str='';
		//根据数组的数据长度，进行字符串拼接
		for( var i=0;i<arrData.length;i++){	
			 str+='<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong><span> '+arrData[i].time+'</span> 写了一篇新文章：'+arrData[i].title+'</a></li>'; //进行字符串拼接；
		}
	//	console.log(str);
		oUl.html(str);  //往ul追加Li   (动态生成li)
		
		//获取li的高度
		iH=oUl.find('li').height();
		console.log(iH); 

		//实现li的上下移动，即把ul的top值进行修改
		//oUl.animate({top:"-30px"},3000); //animate() 方法执行 CSS 属性集的自定义动画。
		//oUl.animate({'top':-iH},2000,'elasticOut'); //elasticOut 引用插件中的方法
		//获取上下运动的a标签
		var oBtnUp=$('#updateUpBtn');
		var oBtnDown=$('#updateDownBtn');
		
		var iNow=0; //定义第几个Li在显示
		var timer=null; //定时器的管理
		
		oBtnUp.click(function(){
			doMove(-1); //调用函数
		});
		oBtnDown.click(function(){
			doMove(1);
		});
		function doMove(num){ 
			//累加法  0+1=1  1+1=2  2+1=3 …………
			iNow=iNow+num;//循环改变当前显示的li的索引  1,2,3,4,5,6……
			//往上走的限制
			if(Math.abs(iNow)>arrData.length-1){ //进行长度限制（iNow值不能大于数组长度）
				iNow=0; //重新回到原点
			}
			//往下走的限制
			if(iNow>0){
				iNow=-(arrData.length-1);
			}
			
			//避免连续点击之后，li自动不停的运动  .stop()
			//.stop() 先停掉之前的运动，再执行当前运动。
			oUl.stop().animate({'top':iH*iNow},2000,'elasticOut');  
		}
		//当鼠标移入update范围内，运动停止,hover内有两个函数，即鼠标移入前和鼠标移入后的事件
		 oDiv.hover(function(){
		 	//鼠标移入update范围，停掉定时器
			clearInterval(timer);
		 },function(){
		 	antoPlay(); //重新开启运动
		 });
		
		//li自动运动
		function antoPlay(){
			timer=setInterval(function(){
				doMove(-1);
			},1500);
		}
		antoPlay(); //调用定时器函数
	})();
	
	//options选项卡切换
	(function(){
	
		fnTab($('.tabNav1'),$('.tabCon1'));  	//切换 ‘红店铺、新开张’选项卡
		fnTab($('.tabNav2'),$('.tabCon2'));  	//切换‘地铁交通……’选项卡
		fnTab($('.tabNav3'),$('.tabCon3'));		//抢卷儿  选项卡
		fnTab($('.tabNav4'),$('.tabCon4'));		//‘知道分子‘  选项卡
		
		function fnTab(oNav,aCon){
			var aElem=oNav.children(); //找到oNav下的所有子元素（为方便以后的扩展）
			aCon.hide().eq(0).show();//把aCon所有的内容全部隐藏，再把第一个内容显示。
			
			//循环所有的li（切换的li）
			aElem.each(function(index){
				$(this).click(function(){
					//让所有的Li去掉身上的active,再加上gradient
					aElem.removeClass('active').addClass('gradient');
					//处理当前选中的Li
					$(this).removeClass('gradient').addClass('active');
					//找到Li身上的所有a标签,把所有的a标签中的class全部换成灰色triangle_down_gray
					aElem.find('a').attr('class','triangle_down_gray');
					//处理当前li身上的a标签的颜色
					$(this).find('a').attr('class','triangle_down_red');
					
					aCon.hide().eq(index).show();//把aCon所有的内容全部隐藏，再把当前内容显示。
				});
			});
		}
	
	})();
	
	//自动播放的焦点图
	(function(){
		var oDiv=$('#fade');
		var aULi=oDiv.find('ul li');
		var aOLi=oDiv.find('ol li');
		var oP=oDiv.find('p');
		var arr=['爸爸去哪儿啦~','人像摄影中的光影感','娇柔妩媚、美艳大方'];
		var iNow=0;
		var timer=null; //定时器
		
		fnFade();	//第一次调用fnFade();是为了最开始要显示第一张图片
		autoPlay();	//调用自动播放函数
		
		aOLi.click(function(){
			iNow=$(this).index(); //获得第一个匹配元素相对于其同胞元素的 index 位置。
			fnFade(); //第二次调用fnFade();是为了切换图片（改变iNow的值）
		});
		
		function autoPlay(){
			timer=setInterval(function(){
				iNow++;
				iNow%=arr.length; //求余运算  限制iNow的范围。
				fnFade();
			},1500);
		}
		
		
		//所有的li都是绝对定位，越是后面层级越高
		function fnFade(){ //显示第一张图片函数
			aULi.each(function(i){ //遍历所有的li    i会自动加1
				if(i!=iNow){ //如果当前不是第iNow个，则淡出，并且降低层级
					//i =0 1 2 
					aULi.eq(i).fadeOut().css('ZIndex',1);
					aOLi.eq(i).removeClass('active'); //去掉身上的class
				}else{
					//把当前的图片弹出，并提高层级
					aULi.eq(i).fadeIn().css('ZIndex',2);
					aOLi.eq(i).addClass('active'); //去掉身上的class
				}
			});
			
			//替换p标签中的文字
			oP.text(arr[iNow]);
		}
		
		//oDiv范围内鼠标移入移出的效果
		oDiv.hover(function(){
			clearInterval(timer);
		},function(){
			autoPlay();
		});
		
	})();
	
	//日历提示说明
	(function(){
		var aSpan=$('.calendar h3 span');
		var aImg=$('.calendar .img');
		var oPromp=$('.today_info');
		var oImg=oPromp.find('img');
		var oStrong=oPromp.find('strong');
		var oP=oPromp.find('p');
		
		//给所有的图片加上鼠标移入移出事件
		 aImg.hover(function(){
		  // $(this).parent() 获取的是Li标签 。position().top获取的是其top值
		 	var iTop=$(this).parent().position().top-30;
			var iLeft=$(this).parent().position().left+55;// 
		 //	console.log(iLeft);
		//  console.log($(this).attr('info')); //获取当前图片文字说明
		
			//输出被 jQuery 选择器匹配的元素的数量：
		 //	console.log($(this).parent().index()% aSpan.size()); //获取鼠标移到的Li的索引值
		 	var index=$(this).parent().index()% aSpan.size();
			
		 	oPromp.show().css({'left':iLeft,'top':iTop}); //显示提示信息，并且设置其显示位置
			oP.text($(this).attr('info')); //往p标签放说明文字
			oImg.attr('src',$(this).attr('src'));  //换图片
			oStrong.text(aSpan.eq(index).text()); //加上星期几文字；
		 },function(){
		 	oPromp.hide(); //隐藏
		 });
	})();
	
	//BBS论坛效果切换
	(function(){
		$('.bbs ol li').mouseover(function(){
			//去除Li身上所有的active,再给当前的li加上active
			//$(this).index() 当前li的索引值
			$('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active'); 
		});
	})();
	
	//hot_area 加上透明交互效果
	(function(){
		
		//p标签中文字说明数组
			var arr = [
					'',
					'用户1<br />人气1',
					'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
					'用户3<br />人气3',
					'用户4<br />人气4',
					'用户5<br />人气5',
					'用户6<br />人气6',
					'用户7<br />人气7',
					'用户8<br />人气8',
					'用户9<br />人气9',
					'用户10<br />人气10'
				 ];
		
		//找到hot_area下所有的li，加上鼠标移入事件
		$('.hot_area li').mouseover(function(){
		
			//不让第一个li有背景层
			if($(this).index()==0){return;}  //结束后面的执行语句
			
			//首先去掉所有的背景层（p标签）
			$('.hot_area li p').remove();
			//获取当前Li的宽高
			$(this).width();
			//console.log($(this).width());
			//在css样式表中已经设置了p标签的上和左内填充有12px,所以在生成的p标签时，根据获取到的li宽高再减去12px就是p标签的真正宽高。
			//给当前的li生成一个p标签（背景层）
			$(this).append('<p style="width:'+($(this).width()-12)+'px; height:'+($(this).height()-12)+'px">'+arr[$(this).index()]+'</p>');		
				
		});
	})();
	
	
});