import sys
import pytest

from trees import *

sys.setrecursionlimit(1_000_000)


@pytest.fixture(
    params=[BST, AVL, SetWrapper, ListWrapper, Trie],
    ids=["BST", "AVL", "SetWrapper", "ListWrapper", "Trie"],
)
def tree_factory(request):
    """Provides the class constructors for the trees under test."""
    return request.param


"""comment or uncomment this to trigger all benchmarks on CI"""
