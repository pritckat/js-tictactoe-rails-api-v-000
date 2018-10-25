// Code your JavaScript / jQuery solution here



let turn = 0;
let gameNumber = 0;

$(document).ready(function() {
  attachListeners();
});

function player() {
  return (turn % 2 ? 'O' : 'X');
}

function turnThing(cell) {
  let marker = player();
  $(cell).text(marker);
  turnNumber++;
}

function attachListeners() {
  $('td').on('click', function() {
    turn(this);
  })
}
