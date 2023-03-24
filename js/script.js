$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__list-link').toggleClass('active');
        $('body').toggleClass('lock')
    });
});