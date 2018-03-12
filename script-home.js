$(document).ready(function(){
$(".outwall").hide();
$(".inwall").hide();
$(".nature").hide();
$("#xi").hide();
$(".taglist").hide();
$("#home").hide();

  $( "#haitong" ).click(function() {
    $(".taglist").show();
    $("#home").show();
    $(".cityname").toggle();
    $("#haitong").hide();
  });


  $( function() {
      $( ".outwall" ).draggable();
      $( ".nature" ).draggable();
      $( ".inwall" ).draggable();
 } );

  $( "#b-nature" ).click(function() {
      $('.nature').show();
      });
  $('.nature').each(function(i,el){

        var tLeft = Math.floor(Math.random()*1000),
            tTop  = Math.floor(Math.random()*500);

        $(el).css({position:'absolute', left: tLeft, top: tTop});
});


   $("#b-outwall").click(function(){
     $(".outwall").show();
   });
  $('.outwall').each(function(i,el){

        var tLeft = Math.floor(Math.random()*1000),
            tTop  = Math.floor(Math.random()*500);

        $(el).css({position:'absolute', left: tLeft, top: tTop});
});

$("#b-inwall").click(function(){
  $(".inwall").show();
  });
  $('.inwall').each(function(i,el){

       var tLeft = Math.floor(Math.random()*1000),
           tTop  = Math.floor(Math.random()*500);

       $(el).css({position:'absolute', left: tLeft, top: tTop});
  });
});
