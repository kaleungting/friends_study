Hash Tables
- Associates a set of keys with a set of values, each key value pair is an entry in the table
- Given a key you can look up its corresponding value in O(1) Constant Time no matter how big the table is

Array of Buckets

  Hash function
    - deterministic - same input must always hash to the same number
    - uniform - produce a wide evenly distributed range of output numbers, scatter values to minimize collision and clustering
    - fast

It takes an input, hashes it and converts it into an integer used as an index to place in the buckets.