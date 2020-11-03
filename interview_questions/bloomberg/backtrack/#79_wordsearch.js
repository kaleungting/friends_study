/* 
================================= 
backtracking solution
=================================

pseudocode

iterate through the matrix
check to see if backtracking returns true for each path, if it doesn't

return false

backtracking takes in a i,j coordinates, the remainingWord
    should be a boolean that returns true false, true when it finds the word that works, and false if it doesnt
    returns true if remainingwords === 0, that means all of the words have been found
    returns false if i,j are out of bound
    returns false if currentletter board[i][j] !== remainingWord[0]

    keep track of currentchar
    need to mark words visited
    create a boolean variable that returns (if ANY of the four directions return true)
    change the variable back to it's original char (this is the backtracking part)
    return the boolean 

Time complexity O(N * 3^L)
    N representing number of words in the board
    L representing the Length of the word to be found
    3 representing the 3 directions, because you won't need to count the direction you just came from

Space Complexity - O(L)
    L - length of the word to be found
*/

function wordSearch(board, word) {
  function backtrack(i, j, remainWord) {
    if (remainWord.length === 0) return true;
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length)
      return false;
    if (board[i][j] !== remainWord[0]) return false;

    let char = board[i][j];
    board[i][j] = "visited";
    let ret = false;

    ret =
      backtrack(i + 1, j, remainWord.substring(1)) ||
      backtrack(i - 1, j, remainWord.substring(1)) ||
      backtrack(i, j + 1, remainWord.substring(1)) ||
      backtrack(i, j - 1, remainWord.substring(1));

    board[i][j] = char;
    return ret;
  }

  for (let i = 0; i < board.length; i++){
      for(let j = 0; j < board[0].length; j++){
          if (backtrack(i,j,word)) return true;
      }
  }
  return false;
}
