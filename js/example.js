$('#wave').wavify({
  height: 15,
  bones: 3,
  amplitude: 30,
  color: 'rgba(246,190,0,1)',
  speed: .30
});

$('#wave2').wavify({
  height: 60,
  bones: 3,
  amplitude: 10,
  color: 'rgba(180,58,165,1)',
  speed: .28
});

//----------------------< Notecard animation >-------------------

var panels = [];
var texts = ["Innovative","PK Fire","Snake? Snaaaaakeee!","Oxygen","Guillotine","Pet your Dog","Meatball","Don ma glas","Einhebelspültischmischer","Haus","MixMax",
"Hirtenkäse","Milchbrei","Müllermilch","Dünger","Melone","Seidenbaum","Spülmittel","Gabel","Löffel","Göffel","Guess whos Back","Always learn","Hüpfburg","Cola","Bepis",
"Topfschlagen","Ofen","stick stick wood = shovel","Back to the Sender"];

var i = 0;
var zahl = 500;
var anzahlAnPanels = 0;

$(".panel").each(function(){
  panels.push($(this));
  $(this).html(texts[Math.floor(Math.random() * texts.length)]);
  console.log($(this).html());
  anzahlAnPanels++;
});

var moveNotecard = (anzahlAnPanels * 8) - 8

var anime = anime.timeline({
  targets: ".panel",
  duration: 1000,
  loop: true,
  easing: "easeInOutExpo",
  delay: anime.stagger(1000),
  endDelay: 750
});

anime.add({
  update: function(e){
    if(i != anzahlAnPanels){
      if(e.currentTime > zahl){
        panels[i].css("z-index","1");
        panels[i].siblings().css("top","-=8px");
        panels[i].siblings().css("left","-=9")
        if(i != 2){
          panels[i+1].html(texts[Math.floor(Math.random() * texts.length)]);
        }else{
          panels[0].html(texts[Math.floor(Math.random() * texts.length)]);
        }
        zahl += 1000;
        i++;
      }
    }else if(e.currentTime == (anzahlAnPanels * 1000) + 750){
      $(".panel").each(function(){
        $(this).css("z-index","0");
        $(this).css("top","+=16px");
        $(this).css("left","+=18px");
      });
      i = 0;
      zahl = 500;
    }
  },
  translateX: [{
    value: "400px",
    duration: 500,
  },
  {
    value: "9px",
    duration: 500,
  }],
  translateY: moveNotecard
});