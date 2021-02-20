def removeDuplicatesFromLinkedList(linkedList):
    current = linkedList
    while current:
        nextDistinct = current.next
        while nextDistinct and nextDistinct.value == current.value:
            nextDistinct = nextDistinct.next

        current.next = nextDistinct
        current = nextDistinct

    return linkedList


"""
get current and then take a look at the next node, keep iterating through the next node
until it is not the same node, and then readjust pointer

1 - 1 - 3
c.      d. 

1 - 1 - 1 - 3
c           d           

"""
