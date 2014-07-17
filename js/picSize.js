$('.img-thumbnail').hover(makeBigger, returnToOrgin);

        function makeBigger() {
            $(this).animate().css({opacity: '0.6'});
       }

        function returnToOrgin() {
            $(this).animate().css({opacity: ""});
        }
 

        $('.box').hover(
            function() {
                $(this).addClass('slider');
            },
            function() {
                $(this).removeClass('slider');
            }
);

//Two changes need to be made, 1st- borders from added class are 
//pushing rest of page downwards. 2nd- need to figure out how to make
//added class slide down upon hover AND not disappear.