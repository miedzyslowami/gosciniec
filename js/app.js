//hamburger menu

var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function(e) {
  e.preventDefault();
  //make a cross
  var span = hamburger.querySelectorAll('span');
  span[0].classList.toggle('cross');
  span[1].classList.toggle('cross');

  //show menu
  var menu = document.querySelector('.menu');
  var mask = document.querySelector('body');
  mask.classList.toggle('mask');
  menu.classList.toggle('show_menu');
})

//submenus
var submenuItems = document.querySelectorAll('.small_cross');
for (var i = 0; i < submenuItems.length; i++) {
  submenuItems[i].addEventListener('click', function(e) {
    if (this.innerText == '+') {
      this.innerText = '-';
    } else {
      this.innerText = '+';
    }

    this.nextElementSibling.classList.toggle('hidden');

  })
}
//deactive slider interval by clicking on a circle

var sliderCircle = document.querySelectorAll('.inside_circle');
for(var i=0;i<sliderCircle.length;i++){
  sliderCircle[i].addEventListener('click',function(){

    },3000);
  }

//make a table responsive
var headings=document.querySelectorAll('.heading');
for (var i=0; i<headings.length;i++){
  headings[i].colSpan='3';
}
