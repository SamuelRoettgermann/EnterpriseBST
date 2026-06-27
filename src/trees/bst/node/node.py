import abc
from collections.abc import Iterable

from trees.base import Comparable


class Node[T: Comparable](abc.ABC, Iterable[T]):
    @property
    @abc.abstractmethod
    def value(self) -> T:
        raise NotImplemented

    @property
    @abc.abstractmethod
    def smaller(self) -> Node[T]:
        raise NotImplemented

    @property
    @abc.abstractmethod
    def larger(self) -> Node[T]:
        raise NotImplemented

    @abc.abstractmethod
    def insert(self, value: T) -> Node[T]:
        raise NotImplemented

    @abc.abstractmethod
    def search(self, value: T) -> bool:
        raise NotImplemented

    @abc.abstractmethod
    def remove(self, value: T) -> Node[T]:
        raise NotImplemented

    @abc.abstractmethod
    def __len__(self) -> int:
        raise NotImplemented

    def __str__(self) -> str:
        return "\n".join(self._pretty_print())

    @abc.abstractmethod
    def _pretty_print(
        self, prefix: str = "", is_left: bool = False, is_root: bool = False
    ) -> list[str]:
        raise NotImplemented

    @abc.abstractmethod
    def is_leaf(self) -> bool:
        raise NotImplemented

    @abc.abstractmethod
    def depth(self) -> int:
        raise NotImplemented

    @property
    @abc.abstractmethod
    def minimum(self) -> Node[T]:
        raise NotImplemented

    @property
    @abc.abstractmethod
    def maximum(self) -> Node[T]:
        raise NotImplemented

    def __bool__(self) -> bool:
        return not self.is_leaf()
