
const MENU = {
    name : "MENU",
    htmlPath : "../components/menu.html",
    cssPath : "./css/menu.css",
    js(){
        console.log($("#menu-button"));
        //Menü-Button Klick
        $("#menu-button").click(function(){
            $("#menu").toggleClass("menu-extender");
            $(".menu-button-bar").each(function(){
                $(this).toggleClass("menu-button-bar-extender");
            });
            $("#screen-shader").toggleClass("screen-shader-extender");
        });
    }
}
function include(obj_array){
    $.each(obj_array,function(idx,component){
        $.get(component.htmlPath,function(data){      //load html content
            $("body").append(data);
        });
        $("<link>").appendTo("head").attr({     //include css
            type: 'text/css',
            rel: 'stylesheet',
            href: component.cssPath
        });
        setTimeout(function(){
            component.js(); //Js Code der Komponente
        },100);  //timeout notwendig sonst geladen bevor html content geladen wurde

        console.log("included Template: " + component.name);  //in Konsole loggen
    });
}