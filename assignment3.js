$(document).ready(()=>{
  $("input").attr("type",function(num,type){
    if(type === "text"){
      $(this).hide();
    }
  });
});