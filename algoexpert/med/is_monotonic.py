def isMonotonic(array):
    nonDecreasing = True  # nonDecreasing means trending upward
    nonIncreasing = True  # nonIncreasing means trending downward
    for i in range(1, len(array)):

        if array[i] < array[i-1]:  # if the next number is smaller
            nonDecreasing = False  # then it can't be nonDecreasing

        if array[i] > array[i-1]:  # if the next number is bigger
            nonIncreasing = False  # then it can't be nonIncreasing

    return nonDecreasing or nonIncreasing


"""
nonDecreasing (never decreases) means trending upward
if the next number is smaller, nonDecreasing is FALSE because it decreases

nonIncreasing (never increases) means trending downward
if the next number is bigger, nonIncreasing is FALSE because it increases

"""
