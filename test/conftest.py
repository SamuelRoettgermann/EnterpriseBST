import random
import sys
import pytest

from trees import BST


sys.setrecursionlimit(1_000_000)


@pytest.fixture(params=[BST], ids=["BST"])
def tree_factory(request):
    """Provides the class constructors for the trees under test."""
    return request.param
