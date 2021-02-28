def arrayOfProducts(array):
    product = [1 for _ in range(len(array))]
    left = [1 for _ in range(len(array))]
    right = [1 for _ in range(len(array))]

    leftProd = 1  # leftProd means the product of everything to the left of the element
    for i in range(len(array)):
        left[i] = leftProd  # set left array to running leftProd
        # increase the running leftProd by the current element
        leftProd = array[i]*leftProd
    # [1,5,5,20]

    rightProd = 1  # rightProd means the product of everything to the left of the element
    for i in reversed(range(len(array))):
        right[i] = rightProd  # set space at right array to
        # increase the running rightProd by the current element
        rightProd = array[i]*rightProd
    # [8,8,2,1]

    for i in range(len(product)):
        product[i] = right[i] * left[i]

    return product


"""
TIME: O(N)
SPACE: O(N)

[5,1,4,2]
all of the products on the left side [1,5,5,20]
all of the products on the right side [8,8,2,1]

[8,40,10,20]


"""
