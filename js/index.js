$(function(){
    include([MENU,FOOTER]);
});

$("#login-button").click(function(){
    $("#center-layer").addClass("display-visible");
    $("#register-login-shader").addClass("register-login-shader-visible");
});

$("#x").click(function(){
    $("#center-layer").removeClass("display-visible");
    $("#register-login-shader").removeClass("register-login-shader-visible");
});