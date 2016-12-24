/**
 * 
 * @authors Gan Yuling (yumiao@126.com)
 * @date    2016-09-26 10:13:01
 * @version $Id$
 */

$(function(){
	
	// 下拉菜单
	$('.top_bar_cart').hover(function(){
		$('.top_bar_bg').stop().slideDown(60)
		$(this).children('a').attr('id', 'cur');
		$('.bar_a span').attr('id', 'cur_span');
	},function(){
		$('.top_bar_bg').slideUp(60)
		$(this).children('a').attr('id', '');
		$('.bar_a span').attr('id', '');
	})
	//搜索
	$('.search_txt').focus(function(){
		$('.sea_pr').css('display', 'none');
	}).blur(function(){
		if ( $('.search_txt').val() == '') {
			$('.sea_pr').css('display', 'block');
		}
	})

	// 导航栏下拉
	var  header_m = $('.header_mnue li:gt(0):not(:last):not(:last)');
	var  header_d = $('.header_div')
	var bann = $('.category li');
	var cai = $('.caidan_l');

	pullDown(bann,cai,'460px','caidan_02','cateLi');
	pullDown(header_m,header_d,'229px','headr_iphone_bg','hover1');
// 下拉菜单
function pullDown(a,b,height1,idName,cateLi){
	var timer = null;
	a.hover(function(event) {
 		/* Act on the event */	
 		clearInterval(timer);
 		$(this).addClass(''+cateLi+'').siblings().removeClass(''+cateLi+'');
 		b.css('height', height1).stop().slideDown(60);
 		b.children().eq($(this).index()).attr('id',''+ idName +'').siblings().attr('id', '');

 	},function(){
 		clearInterval(timer);
 		timer = setTimeout(function(){
			b.stop().slideUp(60);
			a.removeClass(''+cateLi+'');
		},100);
 	});

	b.hover(function(){
		clearInterval(timer);
		$(this).addClass(''+cateLi+'').siblings().removeClass(''+cateLi+'');
		$(this).css('height', height1).stop().show(30)
	},function(){
		clearInterval(timer);
		$(this).stop().slideUp(60)
		a.removeClass(''+cateLi+'');
	})	
}

//轮播图
	var num = 0;
	var timer = null;
	$('.banner_pager li').hover(function() {
		/* Stuff to do when the mouse enters the element */
	
		$(this).stop().addClass('curli').siblings().removeClass('curli');
		$('.banner ul li').eq( $(this).index()).css({'z-index': 3}).stop().hide().fadeIn().siblings().css({'z-index': 2}).stop().hide()
		num = $(this).index();
	   	clearInterval(timer)     
	},function(){
		troll();
	});
	$('.banner ul li').hover(function() {
            clearInterval(timer);
        }, function() {
           troll(); 
        });
		troll();	
	function troll(){
	    timer = setInterval(function(){
	    num++;
	    if (num === $('.banner_pager ol li').length ) {
	            num = 0;
	        } 
	        $('.banner_pager ol li').eq(num).addClass('curli').siblings().removeClass('curli');
	        $('.banner ul li').eq(num).css({'z-index': 3}).hide().fadeIn().siblings().css({'z-index': 2})
	    },3000)
	}
	    //播放

	var timer1 = null;
	var onOff = false;
	var iNum = 0;
	var iNum1 = 0;
	function tim(){
		timer1 = setInterval(function(){

			if (onOff == false) {
				$('.star_tit_r span').css({color:'#e0e0e1'});
				$('.star_tit_r span').eq(iNum).css({color:'#aaa'})
				$('.star_down ul').animate({left: -1240});
				onOff = true;
				iNum =1;		
			}else{	
				$('.star_tit_r span').css({color:'#e0e0e1'});
				$('.star_tit_r span').eq(iNum).css({color:'#aaa'})
				$('.star_down ul').animate({left: 0});
				onOff = false;
				iNum = 0;
				
			}	
		},3000);
	}
	// tim();

	aHover($('.a1'), 0);
	aHover($('.a2'), -1240)
	function aHover(a,b){
		
		a.click(function(event) {

			if (iNum1 == 0) {
				$('.star_tit_r span').css({color:'#e0e0e1'});
				$(this).css({color:'#aaa'})
				clearInterval(timer1);
				$('.star_down ul').animate({left:b});
				iNum1 =1
				
			} else {
				
				$('.star_tit_r span').css({color:'#e0e0e1'});
				$(this).css({color:'#aaa'})
				clearInterval(timer1);
				$('.star_down ul').animate({left:b});
				iNum1 = 0
			}
			
			

		

		})
	}

	// 阴影	
	function boxShow(showA){
		showA.hover(function(){
				$(this).append('<div class=" bo_in "></div>')

				 $('.bo_in').fadeIn(500)
				 $(this).css('zIndex', '10').animate({'margin-top': - 2},300);
			},function(){
				 $('.bo_in').stop().fadeOut(500,function(){
		      		$(this).remove()
		      })
				  $(this).css('zIndex', '').animate({'margin-top': 0},300);

		})
	}
boxShow($('.show1 li'));
boxShow($('.show2 a'));

// tab选项卡JQ
	function tabL(tabA,tabB){
		$('.'+tabA+' li').mouseover(function(event) {
			/* Act on the event */
			$(this).attr('class', 'tab_active').siblings().attr('class', '');
			$('.'+tabB+' ul').eq($(this).index()).attr('class', 'baick_01').siblings().attr('class', '');
		});
	}

tabL('dpTab_u','dpTab_d');
tabL('pjTab_u','pjTab_d');
tabL('zbTab_u','zbTab_d');





})



