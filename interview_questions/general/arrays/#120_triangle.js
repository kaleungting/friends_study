/*Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

*/

var minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
};

/*
first row will always be itself
second row
    if you choose 3, which is index 0, you only have access to index 0,1 on the next row
    if you choose 4, which is index 1, you can have 1,2 on the next row
    
whatever path you choose
    it's either index of itself, or +1 on the next row


store the totals in a new data structure, and get the Math.min() then that will be the shortest path

[1001,1003,8,10]


[
       [16],
      [15,23],
    [1004,13,28],         index 
 [1001,1002,8,10]  index or index + 1

 
]

iterate through the triangle backwards, starting from second to last row
    create another for loop to iterate through the elements within the row
    compare what the sum could be Math.min(nums[i][j] + nums[i+1][j], nums[i][j]+nums[i+1][j+1]) i will replace current nums[i][j] with whichever is smaller
    decrement i--
    
    return triangle[0][0]
*/
