$('.img-thumbnail').hover(makeBigger, returnToOrgin);

        function makeBigger() {
            $(this).animate().css({height: '+=10%', width: '+=10%', opacity: '0.6'});
        }

        function returnToOrgin() {
            $(this).animate().css({height: "", width: "", opacity: ""});
        }
 