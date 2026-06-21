import abc
import collections


class Node[T](abc.ABC, collections.abc.Iterable[T]):
    @property
    @abc.abstractmethod
    def value(self) -> T: ...

    @property
    @abc.abstractmethod
    def smaller(self) -> Node[T]: ...

    @smaller.setter
    @abc.abstractmethod
    def smaller(self, value: Node[T]): ...

    @property
    @abc.abstractmethod
    def larger(self) -> Node[T]: ...

    @larger.setter
    @abc.abstractmethod
    def larger(self, value: Node[T]): ...

    @property
    @abc.abstractmethod
    def minimum(self) -> Node[T]: ...

    @property
    @abc.abstractmethod
    def maximum(self) -> Node[T]: ...

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

    def __bool__(self) -> bool:
        return not self.is_leaf()

    @abc.abstractmethod
    def depth(self) -> int: ...

    @abc.abstractmethod
    def _update_height(self) -> None: ...

    @abc.abstractmethod
    def _get_balance(self) -> int: ...

    @abc.abstractmethod
    def _rebalance(self) -> Node[T]: ...

    @abc.abstractmethod
    def _rotate_left(self) -> Node[T]: ...

    @abc.abstractmethod
    def _rotate_right(self) -> Node[T]: ...


class ValueNode[T](Node[T]):
    _val: T
    _height: int
    _left: Node[T]
    _right: Node[T]

    def __init__(self, value: T):
        self._val = value
        self._height = 1
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
    def smaller(self, value: Node[T]):
        self._left = value

    @property
    def larger(self) -> Node[T]:
        return self._right

    @larger.setter
    def larger(self, value: Node[T]):
        self._right = value

    @property
    def minimum(self):
        return self.smaller.minimum or self

    @property
    def maximum(self):
        return self.larger.maximum or self

    def is_leaf(self) -> bool:
        return False

    def insert(self, value: T) -> Node[T]:
        if value == self.value:
            return self

        if value < self.value:
            self.smaller = self.smaller.insert(value)
        else:
            self.larger = self.larger.insert(value)

        return self._rebalance()

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
                return self._rebalance()

            elif self.smaller:
                return self.smaller
            else:
                return self.larger

        if value < self.value:
            self.smaller = self.smaller.remove(value)
        else:
            self.larger = self.larger.remove(value)

        return self._rebalance()

    def depth(self) -> int:
        return self._height

    def __len__(self):
        return 1 + len(self.smaller) + len(self.larger)

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

        if self.smaller or self.larger:
            lines.extend(
                self.smaller._pretty_print(next_prefix, is_left=True, is_root=False)
            )
            lines.extend(
                self.larger._pretty_print(next_prefix, is_left=False, is_root=False)
            )

        return lines

    def __iter__(self):
        yield from self.smaller
        yield self.value
        yield from self.larger

    def _update_height(self):
        self._height = 1 + max(self.smaller.depth(), self.larger.depth())

    def _get_balance(self) -> int:
        return self.smaller.depth() - self.larger.depth()

    def _rotate_right(self) -> Node[T]:
        new_root = self.smaller
        self.smaller = new_root.larger

        new_root.larger = self

        self._update_height()
        new_root._update_height()

        return new_root

    def _rotate_left(self) -> Node[T]:
        new_root = self.larger
        self.larger = self.larger.smaller

        new_root.smaller = self

        self._update_height()
        new_root._update_height()

        return new_root

    def _rebalance(self) -> Node[T]:
        self._update_height()
        balance = self._get_balance()

        # Left heavy
        if balance > 1:
            if self.smaller._get_balance() < 0:
                self.smaller = self.smaller._rotate_left()

            return self._rotate_right()

        # Right heavy
        if balance < -1:
            if self.larger._get_balance() > 0:
                self.larger = self.larger._rotate_right()

            return self._rotate_left()

        return self


class LeafNode[T](Node[T]):
    def is_leaf(self) -> bool:
        return True

    @property
    def value(self) -> T:
        raise ValueError("a leaf does not have a value")

    @property
    def smaller(self) -> Node[T]:
        return self

    @smaller.setter
    def smaller(self, value: Node[T]):
        raise ValueError("a leaf can't have children")

    @property
    def larger(self) -> Node[T]:
        return self

    @larger.setter
    def larger(self, value: Node[T]):
        raise ValueError("a leaf can't have children")

    @property
    def minimum(self):
        return self

    @property
    def maximum(self):
        return self

    def insert(self, value: T) -> Node[T]:
        return ValueNode(value)

    def search(self, value: T) -> bool:
        return False

    def remove(self, value: T) -> Node[T]:
        return self

    def depth(self) -> int:
        return 0

    def __len__(self) -> int:
        return 0

    def _update_height(self) -> None:
        pass

    def _get_balance(self) -> int:
        return 0

    def _rebalance(self) -> Node[T]:
        return self

    def _rotate_left(self) -> Node[T]:
        return self

    def _rotate_right(self) -> Node[T]:
        return self

    def _pretty_print(
        self, prefix: str = "", is_left: bool = False, is_root: bool = False
    ) -> list[str]:
        if is_root:
            return ["Empty Tree"]

        pointer = "├── [L] " if is_left else "└── [R] "
        return [f"{prefix}{pointer}·"]

    def __iter__(self):
        yield from []
