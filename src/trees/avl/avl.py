from trees.base import Tree
from .nodes import Node, LeafNode


class AVL[T](Tree[T]):
    root: Node[T]

    def __init__(self):
        self.root = LeafNode[T]()

    def insert(self, value: T):
        """Inserts a value into the AVL. Does not modify the tree if the value is already present."""
        self.root = self.root.insert(value)

    def search(self, value: T) -> bool:
        """Returns True if the value is in the AVL, False otherwise."""
        return self.root.search(value)

    def remove(self, value: T) -> bool:
        """Removes the value from the AVL and returns True if the value was in the AVL, False otherwise."""
        # this is a bit of a primitive implementation to return whether the deletion was successful, but this took
        # way too long anyway already
        was_present = self.search(value)
        self.root = self.root.remove(value)
        return was_present

    def depth(self) -> int:
        return self.root.depth()

    def __len__(self):
        return len(self.root)

    def __str__(self):
        return str(self.root)

    def __iter__(self):
        yield from self.root
