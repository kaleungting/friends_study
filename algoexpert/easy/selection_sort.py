
def selectionSort(array):
    current = 0  # set this as the index to swap
    while current < len(array)-1:
        smallest = current
        # iterate from the current to the end of the array and find the smallest
        for i in range(current+1, len(array)):
            if array[smallest] > array[i]:
                smallest = i  # replace smallest as you go
        [array[current], array[smallest]] = [
            array[smallest], array[current]]  # swap the current index with the new smallest
        current += 1

    return array
