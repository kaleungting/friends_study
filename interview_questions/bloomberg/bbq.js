/*    "abc       def       gh"
          
     
 *.    "abc def gh"
l = 3
r = 6

 */

/*

function takes in a string, with possible white spaces
we want to return the original string, with excess white space gone
input = "abc    def   gh"
output = "abc def gh"
modify the original string


2 pointers
l = keep track of the last empty space
r keep iterating to the end of the str 

once r hits a non space string, then start replace l+1 with where r is, and then keep doing that until r reaches a empty space

increment l+1
continue the iteration until r hits a character again, 

and it'll start replacing l with r until r hits white space
*/

function deleteExtraSpace(string) {
  let l = 0;
  for (let r = 0; r < string.length; r++) {
    if (string[r] === " ") {
      l = r;
    } else {
      if (string[l] === "_" && string[r] !== "_") {
        string[l + 1] = string[r];
      }
    }

    l += 1;
  }
}


/*
 123 4->2->1
 456 6->5->4
 
 580 5->8->0
*/

/*
 input:
 123 4->2->1
 456 6->5->4
 
 output:
 580 5->8->0

given two numbers(l1,l2)
these two numbers are in reverse order
add them up,

but return them in the correct order


edge cases -> 
length of the linkedlist could be different


prev = new ListNode(val, prev)

4 - 2 - 6
6 - 5 - 4
val1 = 1
val2 = 4
carry = 1
val = 

5 8 0 
possible edge cases
- l1 l2 different lengths
- last number has an additional carry
- 


*/
class ListNode{
    constructor(val,next = null){
        this.val = val;
        this.next = next;
    }
}


function addTwoNumbers(l1,l2){
    
    let p1 = l1, p2 = l2;
    let carry = 0;
    let prev = null;
    while (p1 || p2){
        let val1 = p1 ? p1.val : 0
        let val2 = p2 ? p2.val : 0
        let val = val1 + val2 + carry
        
        if (val >= 10){
            carry = 1;
            val %= 10;
        } else {
            carry = 0;
        }
        
        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
        
        prev = new ListNode(val, prev)
    }
    
    if (carry > 0){
        prev = new ListNode(carry,prev)
    }
    
    return prev  
}

/*
guard against - null pointer exception
time complexity O(m+n)

*/

/*
given circular sorted linkedlist, insert newVal

given a binary tree, with characters as nodes, return the path from leaf node to root, but smallest alphabetically
    for example, A is root, BCA, PECA, LA are all paths from leaf to the root A, but return BCA because B comes first


*/