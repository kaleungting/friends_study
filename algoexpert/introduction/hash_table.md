Hash Table


CONSTANT TIME OPERATIONS ON AVERAGE (BUT O(N) AT WORSE CASE IF COLLISION)
Insertion
Deletion
Searching 

unlike arrays, keys don't have to be a number

hash tables are built under dynamic arrays that points to a linked-list
- encode characters to ASCII value and sum it up, then mod by length of array
- each node in the linked list will point to the keys
- the dynamic array should resize itself (create copy and double/half in size, and pass them off as a new hashing function that mods by the new length of the array)

HASH FUNCTION TRANSFORMS THE KEY INTO AN INDEX - VERY IMPORTANT TO EXPECT THEM TO PREVENT COLLISION
- DETERMINISTIC
- UNIFORM
- FAST

