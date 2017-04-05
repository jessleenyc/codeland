$(document).ready(function(){
  var elem = document.querySelector('.grid');
  var day_two = document.querySelector('.day-two .grid');
  var day_two_msnry = new Masonry( day_two, {
        itemSelector: '.grid-item',
          columnWidth: '.grid-sizer' 
  });
  var msnry = new Masonry( elem, {
        itemSelector: '.grid-item',
          columnWidth: '.grid-sizer' 
  });
  var boxes = $(".box-shadow");
  $.each(boxes, function(i, box){
    var width = $(this).closest(".boxed").find(".box").css("width");
    $(this).width(width);
    var height = $(this).closest(".boxed").find(".box").css("height");
    $(this).height(height-7);
  });
  var headerLeft = $(".boxed span").first().position().left;
  $(".boxed .box-shadow").first().css("left", (headerLeft)+"px");
  $(window).resize(function(){
    var boxes = $(".box-shadow");
    $.each(boxes, function(i, box){
      var width = $(this).closest(".boxed").find(".box").css("width");
      $(this).width(width);
      var height = $(this).closest(".boxed").find(".box").css("height");
      $(this).height(height-7);
    });
    var headerLeft = $(".boxed span").first().position().left;
    $(".boxed .box-shadow").first().css("left", (headerLeft)+"px");
  });
});
