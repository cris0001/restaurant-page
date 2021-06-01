
$(document).ready(function(){

    $('#menu-bar').click(function(){
$(this).toggleClass('fa-times');
$('.nav-list').toggleClass('nav-toggle');
    });


$(window).on('scroll load', function(){
    $('#menu-bar').removeClass('fa-times');
    $('.nav-list').removeClass('nav-toggle');
});

$('.menu .list .btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');

    let src = $(this).attr('data-src');
    $('#menu-img').attr('src',src)
})

});

