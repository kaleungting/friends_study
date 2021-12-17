"""
118. Pascal's Triangle
Easy

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
"""

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 1:
            return [[1]]
        
        result = [[1]]
        
        for i in range(numRows-1):
            prev = result[-1]
            new = [1]
            for i in range(len(prev)-1):
                new.append((prev[i] + prev[i+1]))
            new.append(1)
            result.append(new)
        return result
                
        
    """
    if numRows = 1
        return [[1]]
    
    result = [[1]]
    prev_row
    new_row = [1]
    
    loop thru prev_row
        new_row.append(x + x+1)
        new_row.append(1)
    """