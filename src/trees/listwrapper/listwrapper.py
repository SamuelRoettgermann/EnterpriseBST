import bisect

from trees import Tree
from trees.base import Comparable


class ListWrapper[T: Comparable](Tree[T]):
    _data: list[T]

    def __init__(self):
        self._data = []

    def insert(self, value: T):
        if value not in self:
            bisect.insort(self._data, value)

    def search(self, value: T) -> bool:
        index = bisect.bisect_left(self._data, value)
        return index < len(self._data) and self._data[index] == value

    def remove(self, value: T) -> bool:
        if value in self:
            index = bisect.bisect_left(self._data, value)
            del self._data[index]
            return True

        return False

    def depth(self) -> int:
        return 1

    def __len__(self) -> int:
        return len(self._data)

    def __str__(self) -> str:
        if not self._data:
            return "Empty Tree"

        output = [f"├── {value}" for value in self._data]
        output[-1] = f"└{output[-1][1:]}"

        output[0:0] = ["Root"]

        return "\n".join(output)

    @property
    def minimum(self) -> T:
        return self._data[0]

    @property
    def maximum(self) -> T:
        return self._data[-1]

    def __iter__(self):
        yield from self._data
