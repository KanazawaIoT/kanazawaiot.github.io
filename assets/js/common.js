$(function(){
	// setInit
	TweenMax.set('.copyTitle', {opacity:0});
	TweenMax.set('.copyDate', {opacity:0});
	TweenMax.set('.sponsor', {opacity:0});
	// AnimStart
	TweenMax.to($('.copyTitle'), 1.5, {opacity: 1, ease:Power0.easeIn, delay: 1});
	TweenMax.to($('.copyDate'), 1.5, {opacity: 1, ease:Power0.easeIn, delay: 1.5});
	TweenMax.to($('.sponsor'), 1.5, {opacity: 1, ease:Power0.easeIn, delay: 2});

});

$(function(){
  $('.mobile-nav').click(function(){
    $('#header').toggleClass('open');
    $('.gnav').slideToggle();
  });
});
$(function(){
  $(window).on('resize',function(){
    const windowWidth = $(window).width();
   if( windowWidth > 765 ){
       $('.gnav').show();
    } else {
       $('.gnav').hide();
     }
  });
});

$(function(){
    var device = $(window).width();
    if( device < 768 ) {
      $('.gnav li a').click(function(){
          $('.gnav').slideUp();
          $('#header').removeClass('open');
      });
    }
});

  // page scoll
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 60;
    $("html, body").animate({scrollTop:position}, 500);
    return false;
  });