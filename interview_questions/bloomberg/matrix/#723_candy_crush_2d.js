/* 723. Candy Crush
This question is about implementing a basic elimination algorithm for Candy Crush.

Given a 2D integer array board representing the grid of candy, different positive integers board[i][j] represent different types of candies. A value of board[i][j] = 0 represents that the cell at position (i, j) is empty. The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

If three or more candies of the same type are adjacent vertically or horizontally, "crush" them all at the same time - these positions become empty.
After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. (No new candies will drop outside the top boundary.)
After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
If there does not exist more candies that can be crushed (ie. the board is stable), then return the current board.
You need to perform the above rules until the board becomes stable, then return the current board.

 

Example:

Input:
board =
[[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]

Output:
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],[210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],[610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]] */



/*
====================================================================================
PSEUDOCODE
====================================================================================
steps to take,

redo until end becomes true

iterate through the board[i][j]

first thing is to check if 
you only really need to check the RIGHT and DOWN, why? because as you're iterating through the board, you would have already checked UP AND LEFT. 
flip the ones you wanna crush negative 

do that for horizontal and then vertical

then crush it
    check through the columns, iterate through j
    set sliding window, anker = last row
        crush it down

    set from anker all the way to top row to 0s
*/


var candyCrush = function (board) {
  let r = board.length,
    c = board[0].length;
  let end = false;

  while (!end) {
    end = true;
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        let val = Math.abs(board[i][j]); //get the value of the board
        if (val === 0) continue; //if it's 0, nothing to be crushed

        //horizontal check
        if (
          j < c - 2 &&
          Math.abs(board[i][j + 1]) === val &&
          Math.abs(board[i][j + 2]) === val
        ) {
          end = false;
          for (let k = j; k <= j + 2; k++) board[i][k] = -val; //flip the ones to the right be crushed negative
        }
        
        //vertical check
        if (
          i < r - 2 &&
          Math.abs(board[i + 1][j]) === val &&
          Math.abs(board[i + 2][j]) === val
        ) {
          end = false;
          for (let k = i; k <= i + 2; k++) board[k][j] = -val; //flip the ones below to negative
        }
      }
    }
    

    if (!end) {//there are things that needs to be crushed, use sliding window technique. starting from the left column to the right
      for (let j = 0; j < c; j++) {
        let anker = r - 1; //sliding window
        for (let i = r - 1; i >= 0; i--) { //iterate through the rows going up
          if (board[i][j] > 0) { //anker is basically where you last saw a value that's not negative, so if you reach negative values, you'll skip over it and then start replacing values with the positive ones down to where anker was
            board[anker][j] = board[i][j];
            anker--;
          }
        }

        for (let k = anker; k >= 0; k--) { //after iterating through, where anker was last seen, is where all the candies have been crush, so everything on TOP of that should be zeroes 
          board[k][j] = 0;
        }
      }
    }
  }
  return board;
};
