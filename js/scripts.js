// BACKEND LOGIC

// TIC TAC TOE LOGIC

// Subfocus:  loop over gameboard, detect a winning state of board

// create gameboard to loop over
// assign each cell to value 0 (empty)
// user values would be 1 (X's) or 2 (Y's),
// so that the cell value is > 0 if marked.

var tictactoeGame = function(userInput) {
  console.log("made it!");
  var rows = 3;
  var cols = 3;
  var gameboard = [];
  // Create gameboard at appropriate size by populating it during a 2d loop
  for ( var j = 0 ; j < rows ; j +=1 ) {
    gameboard[j] = [];
    for ( var i = 0 ; i < cols ; i +=1 ) {
      gameboard[j][i] = 0;
      console.log(gameboard[j][i]);
    };
  };
  console.log(gameboard);
  console.table(gameboard);
};

// FRONTEND LOGIC
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var input = $("#userInput").val();
    var output = tictactoeGame(input);
    $("#output").text(output);
  });
});
