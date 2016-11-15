$(document).ready(function() {
  
  $("#submit").on("click", function() {
    var input = $("#racetime").val();
    console.log(input)
    var answerNumber = parseInt(input);

    if (answerNumber > 30) {
      var answerText = "Sorry, you did not make it.";
    } else {
      var answerText = "You made it!";
    }

    $("#answer").text(answerText);
  
  });
});
