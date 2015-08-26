$(document).ready(function() {

  function showMore() {
    $("#show-this-on-click").slideDown();
    event.preventDefault();
    $(".readmore").hide();
    $(".readless").show();
  }

  $(".readmore").click(showMore);

  function showLess() {
    $("#show-this-on-click").slideUp();
    event.preventDefault();
    $(".readmore").show();
    $(".readless").hide();
  }

  $(".readless").click(showLess);

  function showinfo() {
    $("#show-on-click").slideDown();
    event.preventDefault();
    $(".moreinfo").hide();
    $(".lessinfo").show();
  }

  $(".moreinfo").click(showinfo);

  function hideinfo() {
    $("#show-on-click").slideUp();
    event.preventDefault();
    $(".moreinfo").show();
    $(".lessinfo").hide();
  }

  $(".lessinfo").click(hideinfo);

// --------------------------------------------


  // function displayWebinar() {
  //   $("#webinar-form").velocity({
  //     opacity:[1,0]
  //   });
  // }

  $("#show-webinar-form").click(function() {
    $(".webinar-form").velocity("transition.fadeIn");


  });

  // $("#show-webinar-form").click(function() {
  //   $("nav a").velocity("transition.fadeIn");
  //
  //   $("nav").velocity({
  //     translateY: ["0%", "-100%"],
  //   }, {
  //     easing: [400, 50],
  //     duration: 500
  //   });
  //   $(".overlay").velocity({
  //     opacity: [1, 0]
  //   }, {
  //     display: 'block'
  //   });
  // });

});
