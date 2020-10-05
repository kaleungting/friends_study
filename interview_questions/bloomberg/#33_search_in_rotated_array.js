/*
Use binary search to find out if the target belongs in the array O(logN)

if the array has a pivot point, it has at least one side that is strictly increasing, and another side that is not.

the idea is to find the side that is strictly increasing, and check to see if the target is between the lowest and the highest

create left pointer and a right pointer
iterate while left <= right
    find the mid (Math.floor(left+right)/2)

    if nums[mid] === target then return mid, you've found it
    else if, check to see if the left side is "Strictly Increasing" by comparing to see if nums[mid] is greater than nums[left],
        if it is, then check to see if target is larger than nums[left] and target is less than nums[mid] (checking to see if it's in between them){
            if it is, then readjust right side to be mid - 1
        } if it isn't, then it's on the other side, readjust left to be mid + 1;
    else, left is "Not strictly increasing", so the right side is.
        check to see if target is between the right side, if it is, adjust left to be mid + 1;
        else adjust right to be mid - 1;

if not found after loop, return -1;


*/
