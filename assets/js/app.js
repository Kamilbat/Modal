$(document).ready(function(){
   $('.section__button').click(function(event){

        event.preventDefault();

        $('.modal').addClass('show');
        $('body').addClass('lock');

    });

    $('.modal__close, .modal__button').click(function(event){

        event.preventDefault();

        $('.modal').removeClass('show');
        $('body').removeClass('lock');

    });

});
