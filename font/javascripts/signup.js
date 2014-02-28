$(document).ready(function(){
  $('.sign-up-button').on('click', function(e){
    e.preventDefault();
    $(this).parent().addClass('open');
    $(this).fadeOut();
    $(this).siblings('.input-group').fadeIn();
    $(this).siblings('.input-group').find('input').focus();
  });
  
  var label = $('.input-group label'),
      input = $('.input-group input');
  
  input.on('focus', function(){
    label.css('opacity',0.5);
  });
  
  input.on('keyup', function(){
    label.css('opacity',0);
    if( $(this).val().length == 0 ) {
        label.css('opacity',0.5);
    }
  });
  
  input.on('blur', function(){
    if( $(this).val().length == 0 ) {
        label.css('opacity', 1);
    }
  });
});