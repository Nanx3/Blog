$('#main-menu').hover(
    function(){
        $('body').addClass('menubar-visible');
    },
    function () {
        $('body').removeClass('menubar-visible');
    }
);

if($( '.section-action' ).length == 0){
    $('section.has-actions').addClass('no-bottom');
}


$("#main-menu>li").on("click", function(e) {
    $(this).addClass("active").siblings().removeClass("active");
});

$("#dash-btn").on("click", function(e) {
    $('#main-menu').children.removeClass("active");
});

