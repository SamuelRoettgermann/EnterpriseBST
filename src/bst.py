from node import Node, LeafNode


class BST[T]:
    root: Node[T]

    def __init__(self):
        self.root = LeafNode[T]()

    def insert(self, value: T):
        """Inserts a value into the BST. Does not modify the tree if the value is already present."""
        self.root = self.root.insert(value)

    def search(self, value: T) -> bool:
        """Returns True if the value is in the BST, False otherwise."""
        return self.root.search(value)

    def remove(self, value: T) -> bool:
        """Removes the value from the BST and returns True if the value was in the BST, False otherwise."""
        # this is a bit of a primitive implementation to return whether the deletion was successful, but this took
        # way too long anyway already
        was_present = self.search(value)
        self.root = self.root.remove(value)
        return was_present

    def __len__(self):
        return len(self.root)

    def __str__(self):
        return str(self.root)
