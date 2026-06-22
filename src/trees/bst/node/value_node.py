from collections.abc import Iterator

from trees.base import Comparable
from .node import Node


class ValueNode[T: Comparable](Node[T]):
    _val: T
    _left: Node[T]
    _right: Node[T]

    def __init__(self, value: T):
        from ..node import LeafNode

        self._val = value
        self._left = LeafNode[T]()
        self._right = LeafNode[T]()

    @property
    def value(self) -> T:
        return self._val

    @value.setter
    def value(self, value: T):
        self._val = value

    @property
    def smaller(self) -> Node[T]:
        return self._left

    @smaller.setter
    def smaller(self, node: Node[T]):
        self._left = node

    @property
    def larger(self) -> Node[T]:
        return self._right

    @larger.setter
    def larger(self, node: Node[T]):
        self._right = node

    def is_leaf(self) -> bool:
        return False

    def insert(self, value: T) -> Node[T]:
        if value == self.value:
            return self

        if value < self.value:
            self.smaller = self.smaller.insert(value)
        else:
            self.larger = self.larger.insert(value)

        return self

    def search(self, value: T) -> bool:
        if value == self.value:
            return True

        if value < self.value:
            return self.smaller.search(value)
        else:
            return self.larger.search(value)

    def remove(self, value: T) -> Node[T]:
        if value == self.value:
            if self.smaller and self.larger:
                self.value = self.larger.minimum.value
                self.larger = self.larger.remove(self.value)
                return self

            if self.smaller:
                return self.smaller.remove(value)
            else:
                return self.larger.remove(value)

        if value < self.value:
            self.smaller = self.smaller.remove(value)
        else:
            self.larger = self.larger.remove(value)

        return self

    def depth(self) -> int:
        return 1 + max(self.smaller.depth(), self.larger.depth())

    def __len__(self):
        return 1 + len(self.smaller) + len(self.larger)

    def _pretty_print(
        self, prefix: str = "", is_left: bool = False, is_root: bool = True
    ) -> list[str]:
        lines: list[str] = []

        if is_root:
            pointer = ""
            next_prefix = ""
        elif is_left:
            pointer = "├── [L] "
            next_prefix = prefix + "│   "
        else:
            pointer = "└── [R] "
            next_prefix = prefix + "    "

        lines.append(f"{prefix}{pointer}{self._val}")

        if self.smaller or self.larger:
            lines.extend(
                self.smaller._pretty_print(next_prefix, is_left=True, is_root=False)
            )
            lines.extend(
                self.larger._pretty_print(next_prefix, is_left=False, is_root=False)
            )

        return lines

    def __iter__(self) -> Iterator[T]:
        yield from self.smaller
        yield self.value
        yield from self.larger

    @property
    def minimum(self):
        return self.smaller.minimum or self

    @property
    def maximum(self):
        return self.larger.maximum or self
