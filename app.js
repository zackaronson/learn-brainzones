var button = document.querySelector('.menu-button');

var item = document.querySelector('.item-list');

button.addEventListener('click', function(){
  if (item.classList.contains('active')) {
    item.classList.remove('active');

  }
  else {
    item.classList.add('active');
  }

});