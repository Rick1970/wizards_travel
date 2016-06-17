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

$(document).ready(function(event) {
  $("form#questions").submit(function(event) {
    var q1 = parseInt($("select#qts1").val());
    var q2 = parseInt($("select#qts2").val());
    var q3 = parseInt($("select#qts3").val());
    var q4 = parseInt($("select#qts4").val());
    var result = (q1 + q2 + q3 + q4);
alert(result);
  if (result <= 5) {
    alert("Looks like Rome in the springtime!!");
  } else if (result === 6) {
    alert("Costa rica")
  } else {
    alert("Fiji")
  }

  });
});
