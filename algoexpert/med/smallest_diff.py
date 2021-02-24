def smallestDifference(array1, array2):
    array1.sort()
    array2.sort()

    p1 = p2 = 0
    current = float("inf")
    smallest = float("inf")
    smallestPair = []
    while p1 < len(array1) and p2 < len(array2):
        first = array1[p1]
        second = array2[p2]
        current = abs(first-second)
        if first < second:
            p1 += 1
        elif first > second:
            p2 += 1
        else:
            return [first, second]
        if smallest > current:
            smallest = current
            smallestPair = [first, second]

    return smallestPair


"""
[1,3,5,10,20,28]
 f
[15,17,26,134,135]
 s
first = 1
second = 15

first < second
so move pointer first

"""
