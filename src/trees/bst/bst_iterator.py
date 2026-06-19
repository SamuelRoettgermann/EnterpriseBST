import collections

from .node import Node


class BSTIterator[T](collections.abc.Iterator[T]):
    _stack: collections.deque[Node[T]]

    def __init__(self, root: Node[T]):
        self._stack = collections.deque()
        self._push_left_only_traversal(root)

    def _push_left_only_traversal(self, node: Node[T]):
        while not node.is_leaf():
            self._stack.append(node)
            node = node.smaller

    def __next__(self):
        if not self._stack:
            raise StopIteration

        smallest_node = self._stack.pop()

        if not smallest_node.larger.is_leaf():
            self._push_left_only_traversal(smallest_node.larger)

        return smallest_node.value
