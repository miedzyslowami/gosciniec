//slider
var sliderImage = document.querySelector('.slider');
var sliderCircle = document.querySelectorAll('.inside_circle');
var sliderStyle=window.getComputedStyle(sliderImage);
var sliderImagePosition = sliderStyle.left;
var sliderImageWidth=sliderStyle.width;//this is the value to change the position
var slide1=document.querySelector('#slide-1');
var slide2=document.querySelector('#slide-2');
var slideStyle1=window.getComputedStyle(slide1);
var slideStyle2=window.getComputedStyle(slide2);
//first useage
sliderCircle[1].style.fill="white";
setTimeout(function(){
  slide1.style.left= "-"+sliderImageWidth;
  slide2.style.left= "-"+sliderImageWidth;
  slide1.style.zIndex="";
  slide2.style.zIndex="";
  sliderCircle[0].style.fill="white";
  sliderCircle[1].style.fill="red";
},3000);
setTimeout(function(){
  slide1.style.left= sliderImageWidth;
  slide1.style.zIndex=0;
},4001);

function changeSlide(){
  var temp= 2 * (parseInt(sliderImageWidth));
  slide2.style.left= "-" + temp +"px"
  slide1.style.zIndex="";
  slide2.style.zIndex="";
  slide1.style.left= "0px";
  sliderCircle[1].style.fill="white";
  sliderCircle[0].style.fill="red";
setTimeout(function(){
  slide2.style.left= "0px";
  slide2.style.zIndex=0;
  }, 1001);
  setTimeout(function(){
    slide1.style.left= "-"+sliderImageWidth;
    slide2.style.left= "-"+sliderImageWidth;
    slide1.style.zIndex="";
    slide2.style.zIndex="";
    sliderCircle[0].style.fill="white";
    sliderCircle[1].style.fill="red";
  }, 3000);
  setTimeout(function(){
    slide1.style.left= sliderImageWidth;
    slide1.style.zIndex=0;
  }, 4001);
}

setInterval(changeSlide, 6000);
