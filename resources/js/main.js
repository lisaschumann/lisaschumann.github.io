//$(document).ready(function($){
//$('.fact').hover(
//    function() {
//      $('#from').attr('#from', '.example');
//    },
//    function() {
//      $('#from').remove();
//    }
//);
  
// Wrap every letter in a span
$('.move').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.move .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function(el, i) {
      return 150 * (i+1)
    }
  }).add({
    targets: '.move',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  
});
