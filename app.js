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

