from collections.abc import Iterator

from trees import Tree
from trees.base import Comparable


class SetWrapper[T: Comparable](Tree[T]):
    _data: set[T]

    def __init__(self):
        self._data = set()

    def insert(self, value: T):
        self._data.add(value)

    def search(self, value: T) -> bool:
        return value in self._data

    def remove(self, value: T) -> bool:
        if value in self._data:
            self._data.remove(value)
            return True

        return False

    def depth(self) -> int:
        return bool(self._data)

    def __len__(self) -> int:
        return len(self._data)

    def __str__(self) -> str:
        if not self._data:
            return "Empty Tree"

        output = [f"├── {value}" for value in self._data]
        output[-1] = f"└{output[-1][1:]}"

        output[0:0] = ["Root"]

        return "\n".join(output)

    def __iter__(self) -> Iterator[T]:
        yield from sorted(self._data)

    @property
    def minimum(self) -> T:
        return min(self._data)

    @property
    def maximum(self) -> T:
        return max(self._data)
