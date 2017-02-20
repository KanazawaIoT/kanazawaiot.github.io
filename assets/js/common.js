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