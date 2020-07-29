$(function(){
    MENU.activate();
    // in Menü links einfügen
    $("<div>").appendTo("#menu").attr({class: "menu-element"});
    $(".menu-element").text("Abfragen");

    FOOTER.activate();
});