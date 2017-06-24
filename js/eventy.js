'use strict';

$(function () {
    
    //pojedyncze zdarzenia na paragrafie
    $('p').click(function () {
        $(this).css("color", "orange")
    });

    //grupa zdarzen na naglowku

    $('h1').on({
        'click': function () {
            $(this).css("color", "orange");
        },
        'mousleave': function () {
            $(this).css("color", "inherit");
        }

    })
})
