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
  $("#nameout2").empty().append(name);
  $("#nameout3").empty().append(name);
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
  $("form#questions").submit(function() {
    var q1 = parseInt($("select#qts1").val());
    var q2 = parseInt($("select#qts2").val());
    var q3 = parseInt($("select#qts3").val());
    var q4 = parseInt($("select#qts4").val());
    var result = (q1 + q2 + q3 + q4);

    if (result <= 5) {
      $(location).attr('href','http://www.italyguides.it/en/lazio/rome/travel-guides/travel-tips/rome-in-a-nutshell');
      return false;

    } else if (result === 6) {
      $(location).attr('href','https://www.anywherecostarica.com/travel-guide');
      return false;
    } else {
      $(location).attr('href','http://www.nomadicmatt.com/travel-guides/thailand-travel-tips/');
      return false;
    }
    event.preventDefault();



  });
});
