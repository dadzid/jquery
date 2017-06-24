'use strict';

//$(function() {
    //efekt hide and show
   // $('p').hide(3000).show(3000);
    
    //afekt fadeOut i fadeIn
  //  $('h1').fadeout(3000).fadeIn(3000);
    
    //efekt animacji
function animacja() {
    console.log('zakonczona pierwsza animcajce');

    $('h3').animate({'font-size': '1em', 'margin-left': '0px'}, 2000);
    
}

$('h3').animate({'font-size': '3em', 'margin-left': '100px'}, 200, animacja);