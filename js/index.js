//business logic
//game object

/*var game = {
 totalScore: 0,
 currentScore: 0,
 player1: 0,
 player2: 0,
 currentPlayer: 1
}*/
var currentPlayer = 1;
var p1Total = 0;
var p1Current;
var p2Total = 0;
var p2Current;

function roll() {
  var random = Math.floor(Math.random() * 6) + 1;
  document.getElementById("currentdieroll").value = random;
}

function rollDice() {
  document.getElementById("rolled1").innerHTML = "";
  var random = Math.floor(Math.random() * 6) + 1;
  document.getElementById("currentdieroll").value = random;
  if (random != 1) {
    if (this.currentPlayer === 1) {
      document.getElementById("player1currentscore").value = +document.getElementById("player1currentscore").value + +random;
    } else if (this.currentPlayer === 2) {
      document.getElementById("player2currentscore").value = +document.getElementById("player2currentscore").value + +random;
    }
  } else {
    document.getElementById("player1currentscore").value = 0;
    document.getElementById("player2currentscore").value = 0;
    document.getElementById("rolled1").innerHTML = "sorry you rolled 1!";
    changeTurn();
  }

}

function changeTurn() {
  document.getElementById("player1currentscore").value = 0;
  document.getElementById("player2currentscore").value = 0;
  console.log(this.currentPlayer)
  if (this.currentPlayer == 1) {
    this.currentPlayer = 2;
    document.getElementById("play1").innerHTML = "Player 1";
    document.getElementById("play2").innerHTML = "Player 2 is rolling";
  } else if (this.currentPlayer == 2) {
    this.currentPlayer = 1;
    document.getElementById("play2").innerHTML = "Player 2";
    document.getElementById("play1").innerHTML = "Player 1 is rolling";
  }
}

function hold() {
  if (this.currentPlayer === 1) {
    document.getElementById("player1totalscore").value = +document.getElementById("player1currentscore").value + +document.getElementById("player1totalscore").value;
  } else if (this.currentPlayer === 2) {
    document.getElementById("player2totalscore").value = +document.getElementById("player2currentscore").value + +document.getElementById("player2totalscore").value;
  }
  this.winner();
  this.changeTurn();

}

//function for checking winner
function winner() {
  if (document.getElementById("player1totalscore").value >= 100) {
    document.getElementById("playerwin").innerHTML = "Player 1 is the winner!"
  } else if (document.getElementById("player2totalscore").value >= 100) {
    document.getElementById("playerwin").innerHTML = "Player 2 is the winner!"
  } else {
    document.getElementById("playerwin").innerHTML = ""
  }
}

//user interface
$(document).ready(function() {
  $(".container").hide();
  $("#start").click(function() {
    document.getElementById("play1").innerHTML = "Player 1 is rolling";
    $(".container").show();
    $("#introduction").hide();
    $("#player2currentdieroll,#player1win,#player2win,#rolled2").hide();
  })
})
