$('.img-thumbnail').hover(makeBigger, returnToOrgin);

        function makeBigger() {
            $(this).animate().css({opacity: '0.6'});
       }

        function returnToOrgin() {
            $(this).animate().css({opacity: ""});
        }
 