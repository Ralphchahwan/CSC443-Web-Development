// var img = document.querySelector("img");

$("img").click(function(){
var currentClass = $(this).attr('class');
$('.' + currentClass).show();
$(this).hide();
  // $(this).attr(src="2.jpeg");
});
