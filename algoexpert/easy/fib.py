
"""
====================================
OPTIMAL
====================================

Using a cache to reduce work that has already been computed
"""


def getNthFib(n, cache={}):
	if n < 3:
		return n - 1

	if n in cache:
		return cache[n]
	else:
		cache[n] = getNthFib(n-1, cache) + getNthFib(n-2, cache)

	return cache[n]


"""
====================================
SUBOPTIMAL
====================================

slow recursive function

"""


def getNthFib(n):
    if n <= 2:
		return n-1

	return getNthFib(n-1) + getNthFib(n-2)

