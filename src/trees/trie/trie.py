from collections.abc import Iterable, Iterator
from typing import Any, Protocol

from trees.base import Comparable, Tree


class ComparableSequence(Comparable, Iterable[Any], Protocol):
    pass


class _TrieNode:
    children: dict[Any, _TrieNode]
    is_end: bool

    def __init__(self):
        self.children = {}
        self.is_end = False

    def __len__(self):
        return self.is_end + sum(len(child) for child in self.children.values())

    def depth(self) -> int:
        return 1 + max(child.depth() for child in self.children.values())


class Trie[T: ComparableSequence](Tree[T]):
    _root: _TrieNode

    def __init__(self):
        self._root = _TrieNode()

    def insert(self, value: T):
        current_node = self._root
        for token in value:
            current_node.children.setdefault(token, _TrieNode())

            current_node = current_node.children[token]

        current_node.is_end = True

    def search(self, value: T) -> bool:
        current_node = self._root
        for token in value:
            if token not in current_node.children:
                return False

            current_node = current_node.children[token]

        return current_node.is_end

    def remove(self, value: T) -> bool:
        if not value in self:
            return False

        current_node = self._root
        node_stack = [current_node]
        for token in value:
            next_node = current_node.children[token]
            if current_node.is_end:
                node_stack = [
                    current_node
                ]  # reset stack; first element is the node to remove from

            current_node = next_node
            node_stack.append(next_node)

        if len(node_stack) == 1:
            # only possible if current_node is self._root is node_stack[0] / value is empty
            self._root.is_end = False
            return True

        del node_stack[0].children[node_stack[1]]
        node_stack[0].is_end = False
        return True

    def depth(self) -> int:
        return self._root.depth()

    def __len__(self) -> int:
        return len(self._root)

    def __str__(self) -> str:
        pass

    @property
    def minimum(self) -> T:
        pass

    @property
    def maximum(self) -> T:
        pass

    def __iter__(self) -> Iterator[T]:
        pass
