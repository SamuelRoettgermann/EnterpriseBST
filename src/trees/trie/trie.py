from collections.abc import Iterable, Iterator
from typing import Any, Protocol

from trees.base import Comparable, Tree


class ComparableSequence(Comparable, Iterable[Any], Protocol):
    pass


class _TrieNode[T]:
    children: dict[Any, _TrieNode[T]]
    value: T | None

    def __init__(self):
        self.children = {}
        self.value = None

    def __len__(self):
        return self.is_end() + sum(len(child) for child in self.children.values())

    def is_end(self) -> bool:
        return self.value is not None

    def depth(self) -> int:
        return 1 + max(child.depth() for child in self.children.values())

    def _pretty_print(
        self, prefix: str = "", is_last: bool = True, token: Any = None
    ) -> list[str]:
        lines: list[str] = []
        if token is None:
            lines.append("[X]" if self.is_end() else "[ ]")
        else:
            is_end_marker = " [X]" if self.is_end() else ""
            connector = "└── " if is_last else "├── "
            lines.append(f"{prefix}{connector}{token}{is_end_marker}")

            prefix += (" " * 4) if is_last else ("|" + " " * 3)

        for i, token in enumerate(sorted(self.children)):
            lines.extend(
                self.children[token]._pretty_print(
                    prefix, is_last=i == len(self.children) - 1, token=token
                )
            )

        return lines

    def __str__(self) -> str:
        return "\n".join(self._pretty_print())

    def __iter__(self) -> Iterator[T]:
        if self.value is not None:
            yield self.value

        for child in self.children.values():
            yield from child


class Trie[T: ComparableSequence](Tree[T]):
    _root: _TrieNode[T]

    def __init__(self):
        self._root = _TrieNode[T]()

    def insert(self, value: T):
        current_node = self._root
        for token in value:
            current_node.children.setdefault(token, _TrieNode[T]())

            current_node = current_node.children[token]

        current_node.value = value

    def search(self, value: T) -> bool:
        current_node = self._root
        for token in value:
            if token not in current_node.children:
                return False

            current_node = current_node.children[token]

        return current_node.is_end()

    def remove(self, value: T) -> bool:
        if not value in self:
            return False

        current_node = self._root
        node_stack = [current_node]
        for token in value:
            next_node = current_node.children[token]
            if current_node.is_end():
                node_stack = [
                    current_node
                ]  # reset stack; first element is the node to remove from

            current_node = next_node
            node_stack.append(next_node)

        if len(node_stack) == 1:
            # only possible if current_node is self._root is node_stack[0] / value is empty
            self._root.value = None
            return True

        del node_stack[0].children[node_stack[1]]
        node_stack[0].value = None
        return True

    def depth(self) -> int:
        return self._root.depth()

    def __len__(self) -> int:
        return len(self._root)

    def __str__(self) -> str:
        return (
            "Tree structure:\n\n"
            f"{str(self._root)}\n\n"
            "Contained data:\n"
            f"{'\n'.join(f'{i}: {element}' for i, element in enumerate(list(self)))}"
        )

    @property
    def minimum(self) -> T:
        if len(self) == 0:
            raise ValueError("Empty Tree")

        return next(iter(self))

    @property
    def maximum(self) -> T:
        if len(self) == 0:
            raise ValueError("Empty Tree")

        return list(self)[-1]

    def __iter__(self) -> Iterator[T]:
        yield from sorted(self._root)
