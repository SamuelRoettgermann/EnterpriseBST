import pytest


@pytest.fixture
def tree(tree_factory):
    return tree_factory[int]()
