"""
OPTIMIZATION - adding the counter, everytime we go through one iteration, the biggest number
gets pushed to the end so we never have to look at the last number again

using counter to check

SPACE = O(1)
TIME = O(N^2)

"""


def bubbleSort(array):
    sort = False
    counter = 0
    while not sort:
        sort = True
        for i in range(len(array) - 1 - counter):
            if array[i] > array[i+1]:
                [array[i], array[i+1]] = [array[i+1], array[i]]
                sort = False
        counter += 1
    return array
