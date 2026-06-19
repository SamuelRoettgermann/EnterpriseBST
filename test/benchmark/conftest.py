import pytest
import random


@pytest.fixture
def sorted_data_small():
    return list(range(1_000))


@pytest.fixture
def random_data_small():
    data = list(range(1_000))
    random.shuffle(data)

    return data


@pytest.fixture
def random_data():
    xs = list(range(10_000))
    random.shuffle(xs)
    return xs


@pytest.fixture
def populated_tree(tree_factory, random_data):
    """Create a populated tree that is likely somewhat balanced"""
    tree = tree_factory[int]()

    for value in random_data:
        tree.insert(value)

    return tree
