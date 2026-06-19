from .node import Node


class LeafNode[T](Node[T]):
    def is_leaf(self) -> bool:
        return True

    @property
    def value(self) -> T:
        raise ValueError("a leaf does not have a value")

    @property
    def smaller(self) -> Node[T]:
        return self

    @property
    def larger(self) -> Node[T]:
        return self

    def insert(self, value: T) -> Node[T]:
        from trees.bst.node import ValueNode

        return ValueNode(value)

    def search(self, value: T) -> bool:
        return False

    def remove(self, value: T) -> Node[T]:
        return self

    def depth(self) -> int:
        return 0

    def __len__(self) -> int:
        return 0

    def _pretty_print(
        self, prefix: str = "", is_left: bool = False, is_root: bool = False
    ) -> list[str]:
        """Helper to return lines of the tree. A lone LeafNode signifies an empty tree."""
        if is_root:
            return ["Empty Tree"]

        # If this leaf is a child, represent it with a subtle dot to show missing branches
        pointer = "├── [L] " if is_left else "└── [R] "
        return [f"{prefix}{pointer}·"]

    def __iter__(self):
        yield from []
