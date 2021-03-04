"""
create array of length n+1 set all to positive infinity

initialize 0 to 0

iterate thru and compare denominations
    compare current minimum to what it would be like 

TIME: O(N*D)
SPACE: O(N)


"""
def minNumberOfCoinsForChange(n, denoms):
    ways = [float("inf")] * (n+1)
    ways[0] = 0
    for denom in denoms:
        for amt in range(1, n+1):
            if denom <= amt:
                ways[amt] = min(ways[amt], ways[amt - denom]+1)
    if ways[n] != float("inf"):
        return ways[n]
    else:
        return -1
