// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html


$(function() {
  console.log('hello world :o');
  
  $.get('/dates', function(dates) {
    dates.forEach(function(date) {
      $('<li></li>').html("<a href=\"https://sour-lyre.glitch.me/"+date + "\">"+date+"</a>").appendTo('ul#dates');
    });
  });


});
