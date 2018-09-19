
  var m = 0;
    var timer = null;
    $(function() {

        
        var autoplay = function() {
        
            if (m >= 3) {
                m = 0;
            }
            $('.pic').animate({
                left: -m * 500
            }, 2000);
            
            m += 1;
            timer = setTimeout(autoplay, 4000);
        }

        $('.ad').hover(
            function() {
                clearTimeout(timer)
            },
            function() {
                autoplay();
            }
        ).trigger('mouseleave');


    })