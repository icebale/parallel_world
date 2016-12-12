//first page

/*iscroll start*/
var myScroll;
var myScroll1;

function loaded() {
	myScroll = new IScroll('#wrap', {
		scrollX: true,
		scrollY: false,
		momentum: false,
		snap: true,
		snapSpeed: 400,
		keyBindings: true,
		click: true,
		bounceEasing: 'quadratic',
		bounceTime: 800,
		scroll: true
	});
	myScroll1 = new IScroll('#wrap1', {
		scrollX: true,
		scrollY: false,
		momentum: false,
		snap: true,
		snapSpeed: 400,
		keyBindings: true,
		click: true,
		bounceEasing: 'back',
		bounceTime: 1200,
		scroll: true
	});
}
document.addEventListener('touchmove', function(e) {
	e.preventDefault();
}, false);
/*iscroll end*/


$(function() {
	//page 1
	/*sign in 点击获取随机数量的能量石*/
	$('.header1 ul .two').click(function() {
		var num = parseInt(Math.random() * 6);
		$(this).css({
			'transform': 'translateY(100px)'
		});
		$(this).delay(300).fadeOut(200);
		$('.tips').delay(200).animate({
			'height': '3em',
			'font-size': '2em'
		}, 800).delay(1000).slideUp(1000)
		$('.tip-random').html(num);
	})

	//page1 canvas部分上升或下降
	$('.canvas1 .global i').click(function() {
		if($(this).hasClass('icon-biji')) {
			$(this).parent().addClass('active');
			$(this).removeClass('icon-biji').addClass('icon-circle-arrow-down')
			$('.canvas1').animate({
				bottom: '9.5rem'
			}, 500)
		} else {
			$(this).parent().removeClass('active');
			$(this).removeClass('icon-circle-arrow-down').addClass('icon-biji');
			$('.canvas1').animate({
				bottom: '-4rem'
			}, 500)
		}

	})

	//page1 section 部分
	/*explore the world  进入page2*/
	$('#explore-world').click(function() {
		$(this).animate({
			'bottom': '-25em'
		}, 1000).fadeOut(500);
		$('.container1').delay(100).fadeOut(); //page1 fadeout
		$('.container2').delay(1000).show();
		/*page2 show:bug>>>--header和footer会提前出现  解决办法如下
														????fadeIn出问题 >>>---swiper不发挥作用*/

		//解决page2 header和footer提前出现的问题
		$('.container2 header').hide().fadeIn(2000);
		$('.container2 footer').hide().fadeIn(2000);
		/* page2  swiper*/
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			effect: 'cube',
			grabCursor: true,
			preventClicks : false,
			cube: {
				shadow: true,
				slideShadows: true,
				shadowOffset: 20,
				shadowScale: 0.94
			},
			onReachEnd: function(swiper) { //如果到了最后一页,地球上升
				//				alert(1)
				upscale();
			},
			runCallbacksOnInit : true,		//初始化  ?????????   如何让swiper回到初始状态
			onSlidePrevEnd: function(swiper) {		//切换方向改变触发
				//				alert(2);
				downscale();
			}
		});

		//		//点击小地球
		//		$('.container2 .footer1 .world').click(function(){upscale();})

	})
		//小地球上升
		function upscale() {
			$('.container2 .footer1 .world').removeClass('active-down').addClass('active');
			$('.container2 .footer1 .world').append('<p style="line-height: 0;color: #8B4513;font-size: 0.5em;">探索世界</p>')
		}
		//小地球回到原始位置
		function downscale() {
			$('.container2 .footer1 .world').removeClass('active').addClass('active-down');
			$('.container2 .footer1 .world').children('p').remove();
		}
	
	//page1 消息页面显示隐藏
	$('.header1>ul>.one').click(function(){
		$(".header1").hide();
		$(".header2").show();
		$('.container1>section').hide();
		$(".container1>.canvas1").hide();
		$('.container1>.xiaoxi').fadeIn(200);
	})
	$('.header2>ul>.one').click(function(){
		$(".header1").show();
		$(".header2").hide();
		$('.container1>section').show();
		$(".container1>.canvas1").show();
		$('.container1>.xiaoxi').hide();
	})
	
	//page1添加页面显示隐藏
	$('.header1>ul>.three').click(function(){
		$(".header1").hide();
		$('.container1>section').hide();
		$(".container1>.canvas1").hide();
		$('.container1>.tianjia').fadeIn(200);
	})
	$('.tianjia>.footer3>div').eq(0).click(function(){
		$(".header1").show();
		$('.container1>section').show();
		$(".container1>.canvas1").show();
		$('.container1>.tianjia').hide();
	})
	
	
	/*page1 个人页面显示隐藏     start*/
	
	//消息页面进入个人页面
	$('.header2>ul>.three').click(function(){
		$(".header2").hide();
		$(".header3").show();
		$('.container1>section').hide();
		$(".container1>.canvas1").hide();
		$('.container1>.xiaoxi').hide();
		$('.container1>.geren').show();
	})
	
	//scroller1中点击出现个人页面
	$('#scroller1>.one').click(function(){
		$(".header1").hide();
		$(".header3").show();
		$('.container1>section').hide();
		$(".container1>.canvas1").hide();
		$('.container1>.xiaoxi').hide();
		$('.container1>.geren').fadeIn(1000);
	})
	
	//个人页面消失
	$('.header3>ul>.one').click(function(){
		if($(".header1").hide()){
			$(".header1").show();
			$(".header3").hide();
			$('.container1>section').show();
			$(".container1>.canvas1").show();
			$('.container1>.xiaoxi').hide();
			$('.container1>.geren').hide();
		}else{
			$(".header2").show();
			$(".header3").hide();
			$('.container1>section').hide();
			$(".container1>.canvas1").hide();
			$('.container1>.xiaoxi').show();
			$('.container1>.geren').hide();
		}
	})
	/*page1 个人页面显示隐藏     end*/
	
	
	//page2 中卡片的更多按钮点击事件
	$('.container2 .swiper-slide .icon-gengduo').click(function() {
		$('.container2 .footer2').animate({
			height: '8em'
		}, 500).css('overflow', 'visible')
	})
	$('.container2 .footer2 .icon-xia').click(function() {
			$('.container2 .footer2').animate({
				height: 0
			}, 500).css('overflow', 'hidden')
		})
		
		//page2 footer1按钮点击返回事件-----page2 hide,page1 show
	$('.container2  .icon-fanhui').click(function() {
		$('.container2').hide();
		$('.container1').delay(100).show();
		$('.container1  #explore-world').fadeIn(10).animate({
			'bottom': '10.5em'
		}, 800)
		//让小地球回到原始状态
		$('.container2 .footer1 .world').children('p').remove();
		$('.container2 .footer1 .world').removeClass('active active-down')
	})
	
	//page3 出现消失
	$("#scroller>li.four").click(function(){
		$('.container1').hide();
		$('.container3').fadeIn();
	})
	$('.container3>.footer2>ul>li>.icon-fanhui').click(function(){
		$('.container3').hide();
		$('.container1').show();
		$("#scroller>li.four").addClass('animated zoomOutDown');
		$("#scroller>li.five").delay(1000).addClass('active');
		
		//如何在动画演示之后再移除这个对象并把父级宽度变窄?????????????????????????
//		$("#scroller>li.four").delay(5000).remove();
//		$("#scroller").delay(5000).animate({width:'80em'},100)
	})
})

/*explore the world canvas  用画布绘制图形*/
var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext('2d');

ctx.strokeStyle = '#333';
ctx.fillStyle = '#555';
ctx.lineCap = 'round';
ctx.lineWidth = 6;

ctx.beginPath();
ctx.moveTo(0, 60);
ctx.quadraticCurveTo(74, 68, 120, 40)

ctx.lineTo(120, 40);
ctx.quadraticCurveTo(160, 0, 200, 40);

ctx.lineTo(200, 40);
ctx.quadraticCurveTo(260, 80, 320, 60)

ctx.lineTo(320, 60);
ctx.lineTo(320, 1000);
ctx.lineTo(0, 1000);
ctx.lineTo(0, 60)
ctx.stroke();
ctx.closePath();
ctx.fill()