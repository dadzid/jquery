'use strict';

$(function(){
    
    //wybeiranie elemetnu z kolekcji za pomoca eq()
    $('body').find('p').eq(1).css({color: 'green'});
    
});

// petla each dodajaca do paragrafow kalse z kolejnym numerem
$('p').each( function(index) {
    $(this). addClass('paragraf-' + index);
    console.log( jQuery(this));
})

