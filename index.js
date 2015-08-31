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

  // --------------------------------------------

  function turnOnPortfolio() {
    $("#overlay").fadeIn();
    event.preventDefault();
    $(".portfolio-modal").show();
  }

  $("#portfolio-clicked").click(turnOnPortfolio);

  function turnOnFinancial() {
    $("#overlay").fadeIn();
    event.preventDefault();
    $(".financial-modal").show();
  }

  $("#financial-clicked").click(turnOnFinancial);

  function turnOnCollege() {
    $("#overlay").fadeIn();
    event.preventDefault();
    $(".college-modal").show();
  }

  $("#college-clicked").click(turnOnCollege);

  function turnOnRetirement() {
    $("#overlay").fadeIn();
    event.preventDefault();
    $(".retirement-modal").show();
  }

  $("#retirement-clicked").click(turnOnRetirement);

  function turnOnSpecialNeeds() {
    $("#overlay").fadeIn();
    event.preventDefault();
    $(".specialneeds-modal").show();
  }

  $("#specialneeds-clicked").click(turnOnSpecialNeeds);

  function turnOnInsurance() {
    $("#overlay").fadeIn();
    event.preventDefault();
    $(".insurance-modal").show();
  }

  $("#insurance-clicked").click(turnOnInsurance);

  function turnOnAthlete() {
    $("#overlay").fadeIn();
    event.preventDefault();
    $(".athlete-modal").show();
  }

  $("#athlete-clicked").click(turnOnAthlete);

  function turnOnThirdParty() {
    $("#overlay").fadeIn();
    event.preventDefault();
    $(".thirdparty-modal").show();
  }

  $("#thirdparty-clicked").click(turnOnThirdParty);

  function turnOffModal() {
    $("#overlay").fadeOut();
    event.preventDefault();
    $(".modals").hide();
  }

  $(".overlay").click(turnOffModal);

});
