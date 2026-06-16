from node import Node
from optional import Optional

class LeafNode[T](Node[T]):
    def value(self) -> Optional[T]:
        return Optional()

    def insert(self, value: T) -> "Node[T]":
        from node import ValueNode
        return ValueNode(value)

    def search(self, value: T) -> bool:
        return False

    def remove(self, value: T) -> "Node[T]":
        return self

    def __len__(self) -> int:
        return 0

    def _pretty_print(self, prefix: str = "", is_left: bool = False, is_root: bool = False) -> list[str]:
        """Helper to return lines of the tree. A lone LeafNode signifies an empty tree."""
        if is_root:
            return ["Empty Tree"]

        # If this leaf is a child, represent it with a subtle dot to show missing branches
        pointer = "├── [L] " if is_left else "└── [R] "
        return [f"{prefix}{pointer}·"]

    def __str__(self) -> str:
        return "\n".join(self._pretty_print())