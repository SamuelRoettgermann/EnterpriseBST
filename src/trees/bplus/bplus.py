from trees.base import Comparable, Tree


class BPlusTree[T: Comparable](Tree[T]):
    def __init__(self):
        pass

    def insert(self, value: T) -> None:
        pass

    def search(self, value: T) -> bool:
        pass

    def remove(self, value: T) -> bool:
        pass

    def depth(self) -> int:
        pass

    def __len__(self) -> int:
        pass

    def __str__(self) -> str:
        pass

    @property
    def minimum(self) -> T:
        pass

    @property
    def maximum(self) -> T:
        pass

    def __iter__(self):
        pass
