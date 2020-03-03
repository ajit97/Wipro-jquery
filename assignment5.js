$(document).ready(function(){
  $("div").click(function(){
   value = $(this).css("background-color");
   $("p").text(value);
  });  
});