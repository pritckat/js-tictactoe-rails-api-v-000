// Code your JavaScript / jQuery solution here



let turnNumber = 0;
let gameNumber = 0;

$(document).ready(function() {
  attachListeners();
});

function player() { turnNumber % 2 ? 'O' : 'X'};

function turn(cell) {
  let marker = player();
  $(cell).text(marker);
  turnNumber++;
}

function attachListeners() {
  $('td').on('click', function() {
    turn(this);
  })
}
