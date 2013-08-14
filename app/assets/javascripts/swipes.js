//This is for the swipe events on the home page, dashboard, and new spark page

$( document ).ready(function(event) {
  var homebutton =  $("#homebutton");
  var sparkbutton = $("#sparkbutton");
  var dashbutton =  $("#dashbutton");
  var mainwrapper = $("#mainwrapper");

  $("#new_spark_div").swipe({
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      var new_spark = $("#new_spark_div")
      var homepage = $("#homepage")
      var dashboard = $("#dashboard")
      homepage.css('display', 'block');
      homepage.css('position', 'absolute');
      homepage.css('width', '100%');
      new_spark.removeAttr("style")
      dashboard.removeAttr("style")
      homepage.css('zindex', '1000')
      homepage.animate({
        left: "0%",
        opacity: 1
      }, 500 );
      //when you swipe on the container div new_spark, click on the homebutton link
    }
  });
  $("#dashboard").swipe({
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      var new_spark = $("#new_spark_div")
      var homepage = $("#homepage")
      var dashboard = $("#dashboard")
      homepage.css('display', 'block');
      homepage.css('position', 'absolute');
      homepage.css('width', '100%');
      new_spark.removeAttr("style")
      dashboard.removeAttr("style")
      homepage.css('zindex', '1000')
      homepage.animate({
        right: "0%",
        opacity: 1
      }, 500 );
    }
  });
  $("#homepage").swipe({
    swipe:function(event, direction, distance, duration, fingerCount) {
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
