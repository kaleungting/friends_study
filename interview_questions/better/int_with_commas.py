def int_with_commas(x):
    if x < 0:
        return '-' + int_with_commas(-x)
    # build up string backwards
    result = []
    while x > 0:
        if len(result) % 4 == 3:
            result.append(',')
        result.append(str(x % 10))
        x //= 10
    print(result)
    return ''.join(reversed(result))


print(int_with_commas(-1000000))
print(int_with_commas(1235.24))
print(int_with_commas(1235123213))
# -12


# 12
# [2,]

# 1

'''
What language is this?
    python


What does this code do? For instance what does int_with_commas(-1000000) return?
    this code takes an int and adds the appropriate commas into it. it will return -1,000,000

What does str(x % 10) do? What about x //= 10?
    x % 10 will return the remainder, basically gets the last digit of the number
    x //= will return the number with the last digit removed

Why are we doing len(result) % 4 == 3? 
    checking to see if it is time to add the comma, if there are increments of 3 digits in the array, it is time to add a comma

There is an edge case that will lead to the wrong output. What is it? How can we fix it?
    possible edge cases =
        Decimals?
'''