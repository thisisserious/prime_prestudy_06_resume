$(document).ready(function () {

  $('.button, .skillsButton, .expButton, .eduButton').mouseenter(function () {
    $(this).fadeTo('fast', 1);
  });

  $('.button, .skillsButton, .expButton, .eduButton').mouseleave(function () {
    $(this).fadeTo('slow', 0.65);
  });

  $('.button').click(function () {
    $('.resume').slideToggle('fast');
    $(this).hide('fast');
  });

  $('.skillsButton').click(function () {
    $('#skillsList').slideToggle('slow');
  });

  $('.expButton').click(function () {
    $('.experience').slideToggle('slow');
  });

  $('.eduButton').click(function () {
    $('.education').slideToggle('slow');
  });

});
