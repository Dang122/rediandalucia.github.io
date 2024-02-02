$(window).on('scroll',function(){
  //efecto1
  var scrolled = $(this).scrollTop();
  $('.efecto1').css({
    'transform':'translate3d(0, ' + (scrolled * .20) + 'px,0)',
    'opacity':1 - scrolled / 400
  });

  //efecto2
  var descubrir = document.getElementById('descubrir');
  d = descubrir.getBoundingClientRect().top - 300;
  $('.efecto2').css({
    'transform':'translate3d(0, ' + (-d * .20) + 'px,0)',
    'opacity':1 - d / 400
  });

  //efecto3
  var surfing = document.getElementById('surfing');
  d = surfing.getBoundingClientRect().top - 300;
  $('.efecto3').css({
    'transform':'translate3d(0, ' + (d * .30) + 'px,0)',
    'opacity':1 - (-d) / 900
  });

  //efecto4
  var esahora = document.getElementById('esahora');
  d = esahora.getBoundingClientRect().top - 100;
  $('.efecto4').css({
    'transform':'translate3d(0, ' + (d * .30) + 'px,0)',
    'opacity':1 - d / 900
  });



})

