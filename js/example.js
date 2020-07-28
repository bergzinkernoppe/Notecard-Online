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

var anime = anime.timeline({
  targets: ".panel",
  duration: 1000,
  loop: true,
  easing: "easeInOutExpo",
  delay: anime.stagger(1300)
});

anime.add({
  update: function(e){
    if(e.progress > 50){
      // $(".panel").siblings().css("top","-0px");
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
}).add({
  zIndex: 10
}, "-=1250")