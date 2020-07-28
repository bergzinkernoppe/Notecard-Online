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
  speed: .20
});

//----------------------< Notecard animation >-------------------

var panels = [$("#panel3"),$("#panel2"),$("panel1")];
var i = 0;
var zahl = 8;

var anime = anime.timeline({
  targets: ".panel",
  duration: 1000,
  loop: true,
  easing: "easeInOutExpo",
  delay: anime.stagger(1300),
  endDelay: 750
});

anime.add({
  update: function(e){
    if(e.progress > zahl && e.progress < 71){
      //console.log("zahl: " + zahl + ", progress: " + e.progress);
      zahl += 31;
      panels[i].css("background-color","blue");
      console.log(i);
      //panels[i].siblings().css("top","-=4px");
      i++;
    }else if(zahl > 71){
      i = 0;
      zahl = 4;
      $(".panel").css("z-index","0");
    }
  },
  translateX: [{
    value: "250px",
    duration: 500,
  },
  {
    value: "0",
    duration: 500,
  }],
  translateY: 12
});