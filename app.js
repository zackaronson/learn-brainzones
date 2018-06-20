var button = document.querySelector('.menu-button');

var item = document.querySelector('.nav-mobile');

button.addEventListener('click', function(){
  if (item.classList.contains('active')) {
    item.classList.remove('active');

  }
  else {
    item.classList.add('active');
  }

});

window.onresize = function(){
  if(window.innerWidth > 768) {
    menu.classList.remove('active');
  }
};



//working scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 1000);
});













// var about = document.querySelector('a[href="#about"]');

// for (var i = about.length - 1; i >= 0; i--) {
// 	var num = i;
// 	(function(){
// 		about[num].addEventListener('click', function(e){
// 			e.preventDefault();
// 			console.log('message');
// 		 	document.querySelector('#about').scrollIntoView({ 
// 			  behavior: 'smooth',
// 			  alignToTop: true 
// 			});
// 		});
// 	})();
// }

// about.addEventListener('click', function(e){
// 	console.log('message');
//  	document.querySelector('#about').scrollIntoView({ 
// 	  behavior: 'smooth' 
// 	});
// });

// document.querySelector('.hello').scrollIntoView({ 
//   behavior: 'smooth' 
// });


// JQuery for smooth scroll
// $('a[href*='#about']:not([href='#about'])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
//         || location.hostname == this.hostname) {

//         var target = $(this.hash);
//         target = target.length ? target : $('#about' + this.hash.slice(1) +']');
//            if (target.length) {
//              $('html,body').animate({
//                  scrollTop: target.offset().top
//             }, 1000);
//             return false;
//         }
//     }
// });