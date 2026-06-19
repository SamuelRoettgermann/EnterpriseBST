import pytest

from trees import BST


@pytest.fixture
def bst():
    return BST[int]()


def test_bst_linear_degeneration(bst):
    dataset = list(range(100))

    for value in dataset:
        bst.insert(value)

    assert bst.depth() == 100


def test_remove_leaf_node(bst):
    bst.insert(15)
    bst.insert(10)

    assert bst.remove(10)
    assert not bst.search(10)
    assert bst.search(15)


def test_remove_node_with_one_child(bst):
    bst.insert(15)
    bst.insert(10)
    bst.insert(5)

    assert bst.remove(10)
    assert not bst.search(10)
    assert bst.search(5)
    assert bst.search(15)


def test_remove_node_with_two_children(bst):
    bst.insert(15)
    bst.insert(10)
    bst.insert(5)
    bst.insert(12)

    assert bst.remove(10)
    assert not bst.search(10)
    assert bst.search(5)
    assert bst.search(12)
    assert bst.search(15)


def test_remove_root(bst):
    bst.insert(10)

    assert bst.remove(10)
    assert not bst.search(10)


def test_remove_root_with_two_children(bst):
    bst.insert(15)
    bst.insert(10)
    bst.insert(20)

    assert bst.remove(15)
    assert not bst.search(15)
    assert bst.search(10)
    assert bst.search(20)
