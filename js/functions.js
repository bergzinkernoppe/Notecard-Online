
var Component = class{
    /**
     * Constructor
     * @param {string} name - The name of the component
     * @param {string} htmlPath - The Path to the html File of the component. (relative to this file) 
     * @param {string} cssPath - The Path to the css File of the component. (relative to the file the component gets inserted to)
     * @param {Function} [js] - A function that is executed when .activate() gets called.
     */
    constructor(name,htmlPath,cssPath,js){
        this.name = name;
        this.htmlPath = htmlPath;
        this.cssPath = cssPath;
        if(!js) //optional
            this.js = function(){};
        else
            this.js = js;
    }
    /**
     * Activates the component
     * @param {Component~activateCallback} [customjs] - A callback function that is executed after .activate()
     */
    activate(customjs){
        var js = this.js; //muss als variable, weil in setTimeout() "this" anders
        $.ajax({                                //load html content
            dataType: "html",
            url: this.htmlPath,
            success: function(data){
                $("body").append(data);
                js();                               //js content laden
                if(customjs)
                    customjs()
            }
        });
        $("<link>").appendTo("head").attr({     //include css
            type: 'text/css',
            rel: 'stylesheet',
            href: this.cssPath
        });
        console.log("included Template: " + this.name);  //in Konsole ausgeben
    }
    
    /**
     * 
     * @callback Component~activateCallback
     * @param {string} name - The name of the component
     * @param {string} htmlPath - The Path to the html File of the component. (relative to this file) 
     * @param {string} cssPath - The Path to the css File of the component. (relative to the file the component gets inserted to)
     */
}

var MENU = new Component("MENU","../components/menu.html","./css/menu.css",function(){
    console.log($("#menu-button"));
    //Menü-Button Klick
    $("#menu-button").click(function(){
        $("#menu").toggleClass("menu-extender");
        $(".menu-button-bar").each(function(){
            $(this).toggleClass("menu-button-bar-extender");
        });
        $("#screen-shader").toggleClass("screen-shader-extender");
    });
});
var FOOTER = new Component("FOOTER","../components/footer.html","./css/footer.css");