import abc
from collections.abc import Iterable
from typing import Any, Protocol


class Comparable(Protocol):
    def __lt__(self, other: Any, /) -> bool: ...


class Tree[T: Comparable](abc.ABC, Iterable[T]):
    """A generic Tree.

    This is the base class for all Trees.
    Currently, only a small set of operations are supported.
    The plan is to expand this to support operations like:

    - pre-/in-/post-order traversal
    - min/max/median/mode/range
    - union/intersection/difference
    - Total data size in bytes
    - Pruning/attaching subtrees
    - ...
    """

    @abc.abstractmethod
    def __init__(self): ...

    @abc.abstractmethod
    def insert(self, value: T):
        """Inserts a value into the Tree. Does not modify the Tree if the value is already present."""
        ...

    @abc.abstractmethod
    def search(self, value: T) -> bool:
        """Returns True if the value is in the Tree, False otherwise."""
        ...

    def __contains__(self, value: T) -> bool:
        return self.search(value)

    @abc.abstractmethod
    def remove(self, value: T) -> bool:
        """Removes the value from the Tree and returns True if the value was in the Tree, False otherwise."""
        ...

    @abc.abstractmethod
    def depth(self) -> int:
        """Returns the maximum depth of the Tree."""
        ...

    @abc.abstractmethod
    def __len__(self) -> int: ...

    @abc.abstractmethod
    def __str__(self) -> str: ...

    @property
    @abc.abstractmethod
    def minimum(self) -> T: ...

    @property
    @abc.abstractmethod
    def maximum(self) -> T: ...
