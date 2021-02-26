// dl-menu options
$(function() {
  $( '#dl-menu' ).dlmenu({
    animationClasses : { classin : 'dl-animate-in', classout : 'dl-animate-out' }
  });
});
// Need this to show animation when go back in browser
window.onunload = function() {};

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// FitVids options
$(function() {
  $(".content").fitVids();
});

// All others
$(document).ready(function() {
    // zoom in/zoom out animations
    if ($(".container").hasClass('fadeOut')) {
        $(".container").removeClass("fadeOut").addClass("fadeIn");
    }
    if ($(".wrapper").hasClass('fadeOut')) {
        $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
    }
    $(".zoombtn").click(function() {
        $(".container").removeClass("fadeIn").addClass("fadeOut");
        $(".wrapper").removeClass("fadeIn").addClass("fadeOut");
    });
    // go up button
    $.goup({
        trigger: 500,
        bottomOffset: 10,
        locationOffset: 20,
        containerRadius: 0,
        containerColor: '#fff',
        arrowColor: '#000',
        goupSpeed: 'normal'
    });
	$('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});

//배경 빛나는 별 효과
$(document).ready(function(){
  var layers=6;
  var starDensity=0.0025;

  var ww=$(window).width();
  var wh=$(window).height();

  var dpi=window.devicePixelRatio;
  var cw=ww*dpi;
  var ch=wh*dpi;
  var stars=ww*ww*starDensity*dpi;

  var contexts=[];

  function startBlinking($layer){
    function blink(){
      TweenMax.to($layer,0.2+(Math.random()*0.4),{
        opacity:0.4+(Math.random()*0.4),
        onComplete:blink,
        repeat:1,
        yoyo:true,
        ease:Quad.easeInOut
      });
    }
    blink();
  }

  for(var i=0;i<layers;i++){
    var $layer=$("<canvas/>")
      .addClass("layer")
      .attr({
        width:ww,
        height:wh
      })
      .css({
        width:ww,
        height:wh
      })
      .appendTo("body")
    ;
    var ctx=$layer.get(0).getContext("2d");
    ctx.fillStyle="#00f6ff";
    contexts.push(ctx);
    startBlinking($layer);

  }



  for(var i=0;i<stars;i++){
    var x=Math.round(Math.random()*cw)-0.5;
    var y=Math.round(Math.random()*ch)-0.5;

    var s=Math.random();
    s=Math.pow(s,8)*1.5;
    s+=0.3
    if(Math.random()<0.1){
      s*=2;
    }
    if(s<0) s=0;

    var a=1;
    if(s<1){
      a=s;
      s=1;
    }

    var id=Math.round(Math.random()*(contexts.length-1));
    var ctx=contexts[id];

    ctx.translate(x,y);
    ctx.globalAlpha = a;
    ctx.rotate(Math.PI/4);
    ctx.fillRect(0,0,s*dpi,s*dpi);

    if(s>=1){
    ctx.globalAlpha = 0.03;
    var shineSize=(s*s*s)*1.5*dpi;
    ctx.fillRect((s-(shineSize))/2,(s-(shineSize))/2,shineSize,shineSize);
    }

    ctx.rotate(-Math.PI/4);
    ctx.translate(-x,-y);
  }
 })
