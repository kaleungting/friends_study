def moveElementToEnd(array, toMove):
    left = 0
    right = len(array)-1

    while left < right:
        while left < right and array[right] == toMove:
            right -= 1

        if array[left] == toMove:
            array[left], array[right] = array[right], array[left]

        left += 1

    return array


"""
TIME: O(N) - can assume you could do this without sorting, at least you have to iterate thru 
SPACE: O(1)

both pointers moving inward
right pointer moves until it's a num that you need to swap

if left pointer is the num you need to swap, swap it


"""
