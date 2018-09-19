
    $(function(){
    	$('.ad li').hover(
    	function(){
    			$(this).css('width','56%').siblings().css('width',"11%")
    	},
    	function(){
    		// $('.ad li').css('width','20%');
    		$(this).css('width','56%');
			}
    	)
    })
    