//slider
var sliderImage = document.querySelector('.slider');
var sliderCircle = document.querySelectorAll('.inside_circle');
var sliderStyle=window.getComputedStyle(sliderImage);
var sliderImageWidth=sliderStyle.width;//this is the value to change the position
var sliderImagePosition = sliderStyle.left;
var slide1=document.querySelector('#slide-1');
var slide2=document.querySelector('#slide-2');
var timer =   setInterval(changeSlide, 6000);

//function to updatestyle
function updatestyle(){
    sliderStyle=window.getComputedStyle(sliderImage);
    sliderImageWidth=sliderStyle.width;//this is the value to change the position
}
//update the coputed values
window.addEventListener('resize',updatestyle);


  //first useage
  function firstSlide(){
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
}
  function changeSlide(){//slider 1 is visible
    var temp= 2 * (parseInt(sliderImageWidth));
    slide2.style.left= "-" + temp +"px"
    slide1.style.zIndex="";
    slide2.style.zIndex="";
    slide1.style.left= "0px";
    sliderCircle[1].style.fill="white";
    sliderCircle[0].style.fill="red";
  setTimeout(function(){//slider 2 changes position
    slide2.style.left= "0px";
    slide2.style.zIndex=0;
    }, 1001);
    setTimeout(function(){//Slider 2 is visible
      slide1.style.left= "-"+sliderImageWidth;
      slide2.style.left= "-"+sliderImageWidth;
      slide1.style.zIndex="";
      slide2.style.zIndex="";
      sliderCircle[0].style.fill="white";
      sliderCircle[1].style.fill="red";
    }, 3000);
    setTimeout(function(){//slider 1 changes position
      slide1.style.left= sliderImageWidth;
      slide1.style.zIndex=0;
    }, 4001);
  }

  firstSlide();

function stopInterval(){
  clearInterval(timer);
  setTimeout(function(){
    firstSlide();
    timer =   setInterval(changeSlide, 6000);
  },3000)
}
  //Set the first picture
  sliderCircle[0].addEventListener('click',function(){
    stopInterval();

  });;
  sliderCircle[1].addEventListener('click',function(){
  stopInterval();

  });;
