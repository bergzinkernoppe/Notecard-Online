
function menuButtonClickListener(){
    $(".menu-button").click(function(){
        $(".menu").toggleClass("menu-extender");
        $(".dim-screen").toggleClass("dim-screen-extender");
        $(".menu-button-bar").each(function(){
            $(this).toggleClass("menu-button-bar-extender");
        });
    });
}