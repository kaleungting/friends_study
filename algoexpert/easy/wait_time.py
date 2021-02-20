"""
it makes more sense to run the smallest first because you want to leave the longest wait time at the end
greedy algorithm - choosing the shortest choice at each step
[1,6] - wait time = 1

[6,1] - wait time = 6

"""


def minimumWaitingTimeOpt(queries):
    queries.sort()
    wait = 0
    length = len(queries)
    for i, num in enumerate(queries):
        left = length - (i + 1)  # find out how many queries are left
        # everything behind this number you are on will have to wait X amount of time
        wait += left * num

    return wait


def minimumWaitingTimeSub(queries):
    queries.sort()

    wait = currSum = 0

    for i, num in enumerate(queries):
        wait += currSum
        if i == len(queries)-1:
            break
        currSum += num

    return wait
