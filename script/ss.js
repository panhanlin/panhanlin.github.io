/*
* @Author: ASUS
* @Date:   2018-06-26 21:00:29
* @Last Modified bcj:   ASUS
* @Last Modified time: 2018-06-27 20:15:37
*/
$(function(){
	var n=null;
	$('.pic>li').eq(4).css('display', 'block').siblings().css('display', 'none');
	$('.num>li').on('click',function(){
		n=$(this).index();
		$('.pic>li').eq(n).css('display', 'block').siblings().css('display', 'none');
	})
})


