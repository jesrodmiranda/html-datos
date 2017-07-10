$(function(){
    $(window).bind("load resize", function(){
        _winWidth = $(window).width();
        _winHeight= $(window).height();
        
        _wTop = 5; 
        
        if ( _winWidth > 1800) {
            _wTop = 5;
            $('.logo object').css({'width':270, 'margin-top': _wTop}); // 0.15 = 15%
        } else if ( _winWidth > 1300) {
            _wTop = 10;
            $('.logo object').css({'width':230, 'margin-top': _wTop}); // 0.15 = 15%
        } else if (_winWidth > 1000 ) {
            _wTop = 13;
            $('.logo object').css({'width':_winWidth * 0.20, 'margin-top': _wTop}); // 0.15 = 15%
        }
        
        
        
    });
});
