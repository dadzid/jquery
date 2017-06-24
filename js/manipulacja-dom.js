 'use strict';
jQuery( document ).ready( function(){
   

// Pobieranie tekstu
 var tekstParagrafuPierwszego = $('#paragraf').text();
    console.log(tekstParagrafuPierwszego);
    
    //dodawanoe tekstu
    $("paragraf").text(tekstParagrafuPierwszego);

    
    //dodawanie html
    $('#paragrafnext')
    .html("to jest<strong>paragraf</strong> z dodanym <br> HTML");
    
    //dodawanie tresci za selektorem
    
    $('.paragrafnext')
    .after('tresc za selektorem');

//dodwania treci na koncu selektora
    $(".paragrafNext")
    .append('tresc na koncu selektora');

    //dodawanie css
$(".paragrafnext").css({'font-size': '3em', color: 'red'});




}