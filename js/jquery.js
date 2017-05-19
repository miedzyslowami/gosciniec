$(document).ready(function(){
  //contact icons show form and telephone number
    $(".phone").click(function(){
        $(".contact_telnumber_window").slideDown().toggleClass('visible');
        $(".close").click(function(){
          $(".contact_telnumber_window").slideUp().toggleClass('visible');
        });
    });
    
    $(".mail").click(function(){
        $(".contact_form_window").slideDown().toggleClass('visible');
        $(".close").click(function(){
          $(".contact_form_window").slideUp().toggleClass('visible');
        });
    });








});
