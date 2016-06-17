$(document).ready(function() {
  $(".clickable").click(function() {
    $("#wizard-showing").toggle();
    $("#wizard-hidden").toggle();
  });
});

$(document).ready(function(event) {
  $("form#get-name").submit(function(event) {
    var name = $("input#name").val();
    event.preventDefault();
    });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
  $("#block2-showing").toggle();
  $("#block2-hidden").toggle();

    event.preventDefault();

  });





});
