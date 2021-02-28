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


print(int_with_commas(1235.24))


# array = [1,2,3,4,5,6]

# for num in array:
#     print(num * 2)

# num = 2
# 2
