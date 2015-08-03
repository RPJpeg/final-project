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

});
