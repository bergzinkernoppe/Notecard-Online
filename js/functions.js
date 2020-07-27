
function menuButtonClickListener(){
    $(".menu-button").click(function(){
        $(".menu").toggleClass("menu-extender");
        $(".screen-shader").toggleClass("screen-shader-extender");
        $(".menu-button-bar").each(function(){
            $(this).toggleClass("menu-button-bar-extender");
        });
    });
}