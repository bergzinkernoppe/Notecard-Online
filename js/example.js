$('#wave').wavify({
  height: 15,
  bones: 3,
  amplitude: 30,
  color: '#fca503',
  speed: .30
});

$('#wave2').wavify({
  height: 15,
  bones: 3,
  amplitude: 30,
  color: 'rgba(246,190,0,1)',
  speed: .30
});

$('#wave3').wavify({
  height: 60,
  bones: 3,
  amplitude: 10,
  color: 'rgba(180,58,165,1)',
  speed: .28
});

//----------------------< Notecard animation >-------------------

var panels = [];
var i = 0;
var zahl = 500;
var anzahlAnPanels = 0;

$(".panel").each(function(){
  panels.push($(this));
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
        zahl += 1000;
        console.log("ey");
        panels[i].css("z-index","1");
        panels[i].siblings().css("top","-=8px");
        i++;
      }
    }else if(e.currentTime == (anzahlAnPanels * 1000) + 750){
      $(".panel").each(function(){
        $(this).css("z-index","0");
        $(this).css("top","+=16px");
      });
      i = 0;
      zahl = 500;
    }
  },
  translateX: [{
    value: "350px",
    duration: 500,
  },
  {
    value: "0",
    duration: 500,
  }],
  translateY: moveNotecard
});