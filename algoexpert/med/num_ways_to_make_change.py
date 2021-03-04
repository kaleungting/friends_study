"""
Create an array up to length of n with 0, fill the first with 1. because there's only 1 way to make 0 cents, and that's 0.

then for each coin, iterate through the len array, starting from 1 to n+1, increment the amount of ways you can make the change
    if denom <= amount
        ways[amount] += ways[amount-denom]
    
    Why ways[amount-denom]? because that's the amount you can make already from before, and now you're just adding one

TIME: O(N*D)
SPACE: O(N)

"""


def numberOfWaysToMakeChange(n, denoms):
    ways = [0] * (n+1)

    ways[0] = 1

    for denom in denoms:
        for amt in range(1, n+1):
            if denom <= amt:
                ways[amt] += ways[amt - denom]

    return ways[n]
