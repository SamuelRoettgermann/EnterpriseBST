# EnterpriseBST

A fun toy project of creating an over-engineered Binary Search Tree, but where each part is actually useful, and not just a redundant indirection.

### API
```py
class BST[T](collections.abc.Iterable):
    def __init__(self): ...

    def insert(self, value: T):
        """Inserts a value into the BST. Does not modify the tree if the value is already present."""
        ...

    def search(self, value: T) -> bool:
        """Returns True if the value is in the BST, False otherwise."""
        ...

    def remove(self, value: T) -> bool:
        """Removes the value from the BST and returns True if the value was in the BST, False otherwise."""
        ...

    def __len__(self): ...

    def __str__(self): ...

    def __iter__(self): ...
```
