from .node import Node


class ValueNode[T](Node[T]):
    _val: T
    _left: Node[T]
    _right: Node[T]

    def __init__(self, value: T):
        from trees.bst.node import LeafNode

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

    @property
    def larger(self) -> Node[T]:
        return self._right

    def is_leaf(self) -> bool:
        return False

    def insert(self, value: T) -> Node[T]:
        if value == self.value:
            return self

        if value < self.value:
            self._left = self._left.insert(value)
        else:
            self._right = self._right.insert(value)

        return self

    def search(self, value: T) -> bool:
        if value == self.value:
            return True

        if value < self.value:
            return self._left.search(value)
        else:
            return self._right.search(value)

    def remove(self, value: T) -> Node[T]:
        if value == self.value:
            if not self._left.is_leaf() and not self._right.is_leaf():
                self.value = min(self._right)
                self._right = self._right.remove(self.value)
                return self

            if self._right.is_leaf():
                return self._left.remove(value)
            else:
                return self._right.remove(value)

        if value < self.value:
            self._left = self._left.remove(value)
        else:
            self._right = self._right.remove(value)

        return self

    def depth(self) -> int:
        return 1 + max(self._left.depth(), self._right.depth())

    def __len__(self):
        return 1 + len(self._left) + len(self._right)

    def _pretty_print(
        self, prefix: str = "", is_left: bool = False, is_root: bool = True
    ) -> list[str]:
        lines = []

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

        if not (self._left.is_leaf() and self._right.is_leaf()):
            lines.extend(
                self._left._pretty_print(next_prefix, is_left=True, is_root=False)
            )
            lines.extend(
                self._right._pretty_print(next_prefix, is_left=False, is_root=False)
            )

        return lines

    def __iter__(self):
        yield from self._left
        yield self._val
        yield from self._right
