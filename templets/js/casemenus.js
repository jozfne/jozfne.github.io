// JavaScript Document

			$(document).ready(function(){
		
		
		/*首页案例*/
$(".CaseBody .list").hover(function() {
	// $("#orderedlist li:last").hover(function() {
	 var self = this;
	 $(this).find(".title").stop(true,false).animate({borderBottomColor:'#dc7e3f'});
		$(this).find(".title a").stop(true,false).animate({color:"#fff"},400);
		$(this).find(".coms").stop(true,false).animate({color:"#fff",borderTopColor:'#ffaa70'},400);
	
		$(this).find(".a5").stop(true,false).animate({opacity:1},150);
		$(this).find(".a1").stop(true,false).delay(250).animate({height:'150'},200);
		$(this).find(".a2").stop(true,false).delay(250).animate({height:'150'},200,function(){
		$(self).find(".a3").stop(true,false).animate({width:'50%'},100);
		$(self).find(".a4").stop(true,false).animate({width:'50%'},100);
		});
		
		
	}, function() {
		 var self = this;
		$(this).find(".a3").stop(true,false).animate({width:'0'},100);
		$(this).find(".a4").stop(true,false).animate({width:'0'},100);
		$(self).find(".a1").stop(true,false).delay(200).animate({height:'0'},200);
		$(self).find(".a2").stop(true,false).delay(200).animate({height:'0'},200);

		$(this).find(".a5").stop(true,false).delay(500).animate({opacity:0},100);
		$(this).find(".title").stop(true,false).delay(400).animate({borderBottomColor:'#C9C9C9'},400);
		$(this).find(".title a").stop(true,false).delay(400).animate({color:"#2A2B2C",borderBottomColor:'#C9C9C9'},400);
		$(this).find(".coms").stop(true,false).delay(400).animate({color:"#999999",borderTopColor:'#ffffff'},400);

	});
	
	
	/*案例MORE*/
	
	
	$(".CaseMore a").hover(function() {
	// $("#orderedlist li:last").hover(function() {

	 var self = ".CaseMore";
	
		$(self).find(".a1").stop(true,false).animate({height:'40'},300);
	$(self).find(".a2").stop(true,false).animate({height:'40'},300);
	$(self).find(".a3").stop(true,false).delay(300).animate({width:'60'},150);
	$(self).find(".a4").stop(true,false).delay(300).animate({width:'60'},150);
		
		
	}, function() {
		  var self = ".CaseMore";
		
		$(self).find(".a3").stop(true,false).animate({width:'0'},150);
		$(self).find(".a4").stop(true,false).animate({width:'0'},150);
		$(self).find(".a1").stop(true,false).delay(150).animate({height:'0'},300);
		$(self).find(".a2").stop(true,false).delay(150).animate({height:'0'},300);

	});
	
/**	判断滑动条方向
	var initTop = 0;
$(window).scroll(function(){
 var scrollTop = $(document).scrollTop();
 if(scrollTop > initTop){



 } else {




 }
 initTop = scrollTop;
});
	
*/	
	

	
	
});