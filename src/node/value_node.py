from node import Node

class ValueNode[T](Node[T]):
    val: T
    left: Node[T]
    right: Node[T]

    def __init__(self, value: T):
        from node import LeafNode

        self.val = value
        self.left = LeafNode[T]()
        self.right = LeafNode[T]()

    def value(self) -> T:
        return self.val
    
    def is_leaf(self) -> bool:
        return False

    def insert(self, value: T) -> "Node[T]":
        if value == self.value():
            return self

        if value < self.value():
            self.left = self.left.insert(value)
        else:
            self.right = self.right.insert(value)

        return self

    def search(self, value: T) -> bool:
        if value == self.value():
            return True

        if value < self.value():
            return self.left.search(value)
        else:
            return self.right.search(value)

    def remove(self, value: T) -> "Node[T]":
        if value == self.value():
            if not self.left.is_leaf() and not self.right.is_leaf():
                self.val = self.left.value()
                self.left = self.left.remove(self.value())
                return self

            if self.right.is_leaf():
                return self.left.remove(value)
            else:
                return self.right.remove(value)

        if value < self.value():
            self.left = self.left.remove(value)
        else:
            self.right = self.right.remove(value)

        return self

    def __len__(self):
        return 1 + len(self.left) + len(self.right)

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

        lines.append(f"{prefix}{pointer}{self.val}")

        if not (self.left.is_leaf() and self.right.is_leaf()):
            lines.extend(
                self.left._pretty_print(next_prefix, is_left=True, is_root=False)
            )
            lines.extend(
                self.right._pretty_print(next_prefix, is_left=False, is_root=False)
            )

        return lines

    def __str__(self) -> str:
        return "\n".join(self._pretty_print())
