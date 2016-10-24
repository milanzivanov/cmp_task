'use strict'
$(document).ready(function($){
    $(".mdi-menu-down, .mdi-plus").on("click", function(){
        alert("radi!!!");
    });

    $(".navigation-link ul li a").on('click', function() {
        $(".navigation-link ul li a, .navigation-link ul li a span").removeClass('active');
        $(this).addClass('active');
    });
    
});