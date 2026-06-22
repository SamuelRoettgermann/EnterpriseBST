import abc
from collections.abc import Iterable

from trees.base import Comparable


class Node[T: Comparable](abc.ABC, Iterable[T]):
    @property
    @abc.abstractmethod
    def value(self) -> T: ...

    @property
    @abc.abstractmethod
    def smaller(self) -> Node[T]: ...

    @property
    @abc.abstractmethod
    def larger(self) -> Node[T]: ...

    @abc.abstractmethod
    def insert(self, value: T) -> Node[T]: ...

    @abc.abstractmethod
    def search(self, value: T) -> bool: ...

    @abc.abstractmethod
    def remove(self, value: T) -> Node[T]: ...

    @abc.abstractmethod
    def __len__(self) -> int: ...

    def __str__(self) -> str:
        return "\n".join(self._pretty_print())

    @abc.abstractmethod
    def _pretty_print(
        self, prefix: str = "", is_left: bool = False, is_root: bool = False
    ) -> list[str]: ...

    @abc.abstractmethod
    def is_leaf(self) -> bool: ...

    @abc.abstractmethod
    def depth(self) -> int: ...

    @property
    @abc.abstractmethod
    def minimum(self) -> Node[T]: ...

    @property
    @abc.abstractmethod
    def maximum(self) -> Node[T]: ...

    def __bool__(self) -> bool:
        return not self.is_leaf()
