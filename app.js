// Grab the hamburger menu

var nav = document.querySelector('.nav-button');

// grab mobile menu
var menu = document.querySelector('.nav-mobile');

nav.addEventListener('click', function(){
  if(menu.classList.contains('active')) {
    // if the mobile menu has the 'active' class
    // remove it
    menu.classList.remove('active');

  } else {
    // else, add the active class
    // this is a vanilla JS implementation of
    // jQuery's .toggleClass();
    menu.classList.add('active');
  }
});


// if the mobile menu is left active
// and the screen is made larger, then smaller,
// let's remove the mobile menu's active class
// to ensure a fresh start
window.onresize = function(){
  if(window.innerWidth > 420) {
    menu.classList.remove('active');
  }
};