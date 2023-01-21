var game = document.getElementById("game");
var cells = game.getElementsByTagName("td");
var player = "X";

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (this.textContent === "") {
      this.textContent = player;
      if (checkWin(player)) {
        alert(player + " wins!");
      } else if (checkTie()) {
        alert("Tie game!");
      } else {
        player = (player === "X") ? "O" : "X";
      }
    }
  });
}

function checkWin(player) {
  // Check for horizontal win
  for (var i = 0; i <= 6; i += 3) {
    if (cells[i].textContent === player &&
        cells[i+1].textContent === player &&
        cells[i+2].textContent === player) {
      return true;
    }
  }
  // Check for vertical win
  for (var i = 0; i <= 2; i++) {
    if (cells[i].textContent === player &&
        cells[i+3].textContent === player &&
        cells[i+6].textContent === player) {
      return true;
    }
  }
  // Check for diagonal win
  if (cells[0].textContent === player &&
      cells[4].textContent === player &&
      cells[8].textContent === player) {
    return true;
  }
  if (cells[2].textContent === player &&
      cells[4].textContent === player &&
      cells[6].textContent === player) {
    return true;
  }
  return false;
}

function checkTie() {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }
  return true;
}
function resetGame() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  player = "X";
}

