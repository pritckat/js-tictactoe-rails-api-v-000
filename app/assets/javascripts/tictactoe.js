// Code your JavaScript / jQuery solution here



var turn = 0;


$(document).ready(function() {
  attachListeners();
});

function player() {
  return (turn % 2 ? 'O' : 'X');
}

function updateState(square) {
  $(square).text(player())
}

function setMessage(string) {
  $('#message').text(string);
}

function checkWinner() {

}
