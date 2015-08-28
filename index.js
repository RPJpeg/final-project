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

  function showWebForm() {
    $(".webinar-form").fadeIn();
    event.preventDefault();
    $(".adv-request").hide();
  }

  $("#show-webinar-form").click(showWebForm);

  function showAdvForm() {
    $(".adv-request").fadeIn();
    event.preventDefault();
    $(".webinar-form").hide();
  }

  $("#show-adv-form").click(showAdvForm);

  function submitRequest() {
    event.preventDefault();
    alert("Your request has been submitted!")
  }

  $("#submit").click(submitRequest);
  $("#submitWebinar").click(submitRequest);

});
