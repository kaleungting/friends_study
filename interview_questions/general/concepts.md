Deep Copy vs Shallow Copy

Shallow Copy:
    - only one level is copied, but it only works fine for an array or object containing primitive value
    - if you use assignment operator for the array, it will show they are NOT the same
    - reassignment gets screwy, if you change one, the copy will change
    ========================================================
      - example
            let arr = ["apple","banana"]
            let shallow = arr.slice()
            arr === shallow   ----> FALSE
            arr[0] === shallow[0] ----> TRUE
    ========================================================

    Ways to make SHALLOW COPY
        - spread operator
        - array.slice()
        - Object.assign()
        - Array.from()

Deep Copy:
    - assignment operator will show they are not the same
    - when you reassign, it won't affect the original

    Ways to make DEEP COPY
        - lodash library
            import _ from "lodash"
            let shallowCopy = ._clone(arr);
            let deepCopy = _.cloneDeep(arr);
        - Ramda library
            import R from "ramda"
            let deepCopy = R.clone(arr);
        - rfdc (Really Fast Deep Clone) - supposedly 400% faster than lodash
          - const clone = require('rfdc')()
          - clone({"object or whatever array"})