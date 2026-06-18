import random
import sys
import pytest

from trees import BST


sys.setrecursionlimit(1_000_000)


@pytest.fixture(params=[BST], ids=["BST"])
def tree_factory(request):
    """Provides the class constructors for the trees under test."""
    return request.param


def test_tree_construction(tree_factory):
    assert tree_factory[int]() is not None


@pytest.fixture
def sorted_data_small():
    return list(range(1_000))


@pytest.fixture
def random_data():
    xs = list(range(4_000))
    random.shuffle(xs)
    return xs


@pytest.fixture
def populated_tree(tree_factory, random_data):
    """Create a populated tree that is likely somewhat balanced"""
    tree = tree_factory[int]()

    for value in random_data:
        tree.insert(value)

    return tree
