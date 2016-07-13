$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();      
    var bounce = false;
    //Only add the bounce__in class once.
    $(".about__photo").each( function() {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight) && bounce == false) {
            $(this).addClass("bounce__in");
            bounce=true;
        }
    });
});