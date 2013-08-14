//This is for the swipe events on the home page, dashboard, and new spark page

$( document ).ready(function(event) {
  var homebutton =  $("#homebutton");
  var sparkbutton = $("#sparkbutton");
  var dashbutton =  $("#dashbutton");
  var mainwrapper = $("#mainwrapper");
  var new_spark = $("#new_spark_div")
  var homepage = $("#homepage")
  var dashboard = $("#dashboard")

  new_spark.swipe({
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      homepage.css('position', 'absolute');
      homepage.css('width', '100%');
      dashboard.removeAttr("style");
      new_spark.animate({
        right:'100%',
        opacity: 1
      },{ duration: 500, queue: false});
      homepage.animate({
        left: "0%",
        opacity: 1
      }, { duration: 500, queue: false});
      //when you swipe on the container div new_spark, click on the homebutton link
    }
  });
  dashboard.swipe({
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      homepage.css('position', 'absolute');
      homepage.css('width', '100%');
      new_spark.removeAttr("style");
      dashboard.animate({
        left:'100%',
        opacity: 1
      },{ duration: 500, queue: false});

      homepage.animate({
        right: "0%",
        opacity: 1
      }, { duration: 500, queue: false} );
    }
  });
  homepage.swipe({
    swipe:function(event, direction, distance, duration, fingerCount) {
      homepage.removeAttr('style');
      if (direction === "right"){
        $.getScript("swipe_to_spark");

      }
      if(direction === "left"){
        $.getScript("swipe_to_dash");
      }
    },
      allowPageScroll:"auto"
      //here we are on the homepage, we can either go left or right, allow page scroll lets you do the normal stuff with up and down
  });
});
