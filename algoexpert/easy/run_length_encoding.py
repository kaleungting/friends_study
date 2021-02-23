"""
TIME: O(N)
SPACE: O(N)

"""


def runLengthEncoding(string):
    chars = []
    count = 1

    for i in range(1, len(string)):
            curr = string[i]
            prev = string[i-1]

            if curr != prev or count == 9:
                chars.append(str(count))
                chars.append(prev)
                count = 0

            count += 1

        chars.append(str(count))
        chars.append(string[len(string)-1])

    return "".join(chars)
