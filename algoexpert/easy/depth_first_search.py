"""
Vertex - node of the graphs
Edges - connected lines of the graphs
Time Complexity = O(V+E) = traversing thru every node so V and the edges of it's children
Space Complexity = O(V) = the nodes
"""

class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirstSearch(self, array):
        array.append(self.name)
        for child in self.children:
            child.depthFirstSearch(array)
        return array
