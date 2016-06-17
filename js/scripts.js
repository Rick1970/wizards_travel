$(document).ready(function() {
  $(".clickable").click(function() {
    $("#wizard-showing").toggle();
    $("#wizard-hidden").toggle();
  });
});

$(document).ready(function(event) {
  $("form#get-name").submit(function(event) {
  var name = $("input#name").val();
  $("#nameout").empty().append(name);
  event.preventDefault();
  });
});
$(document).ready(function(event) {
  $(".clickable2").click(function() {
  $("#block2-showing").toggle();
  $("#block2-hidden").toggle();
  });
});
