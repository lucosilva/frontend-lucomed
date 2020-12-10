$('.hamburguer').click(() => {
    $('.menu-mobile').toggleClass('openMenu');
    $('.hamburguer').toggleClass('animateOpemMenu')
})

$('header a').click(() => {
    $('.menu-mobile').toggleClass('openMenu');
    $('.hamburguer').toggleClass('animateOpemMenu')
})


$(window).scroll(()=>{
    if($(window).scrollTop() > 150){
        $('header').addClass('bg-Theme2')
    }else{
        $('header').removeClass('bg-Theme2')
    }
})






