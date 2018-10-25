// Code your JavaScript / jQuery solution here



let turn = 0;


$(document).ready(function() {
  attachListeners();
});

function player() {
  return (turn % 2 ? 'O' : 'X');
}
