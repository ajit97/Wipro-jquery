$(document).ready(function(){
  $("p.intro").find("*").css("background-color","green");
  $("li:nth-child(2)").nextAll().hide();
});