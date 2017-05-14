var hamburger = document.querySelector('.hamburger');

console.log(hamburger);

hamburger.addEventListener('click', function(e) {
  e.preventDefault();
  //make a cross
  var span = hamburger.querySelectorAll('span');
  span[0].classList.toggle('cross');
  span[1].classList.toggle('cross');
  span[1].classList.toggle('hidden');
  //show menu
  var menu = document.querySelector('.menu');
  var mask = document.querySelector('body');
  mask.classList.toggle('mask');
  menu.classList.toggle('show_menu');
})

var submenuItems = document.querySelectorAll('.small_cross');
for (var i = 0; i < submenuItems.length; i++) {
  submenuItems[i].addEventListener('click', function(e) {
    if(this.innerText=='+'){
      this.innerText='-';
    }else{
      this.innerText='+';
    }

  this.nextElementSibling.classList.toggle('hidden');

  })
}
