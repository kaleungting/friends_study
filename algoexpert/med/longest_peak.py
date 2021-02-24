def longestPeak(array):
    longest = 0
    i = 1

    while i < len(array)-1:
        left = i - 1
        right = i + 1
        isPeak = array[left] < array[i] and array[right] < array[i]
        if not isPeak:
            i += 1
            continue

        while left >= 0 and array[left] < array[left+1]:
            left -= 1
        while right < len(array) and array[right] < array[right-1]:
            right += 1

        longest = max((right-left-1), longest)
        i = right
    return(longest)


"""
Identify if it's a peak by checking left and right of it
if not peak, then continue

if it is, continue moving left and right pointer until it hits the end of the peak,
find the length and replace longest
start i at right, since there can't be a peak on a downhill


"""
