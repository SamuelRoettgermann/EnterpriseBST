import random
import pytest


def populate_tree(tree, size: int):
    insert_sequence = list(range(size))
    random.shuffle(insert_sequence)

    for value in insert_sequence:
        tree.insert(value)


def test_for_loop_single_element(tree):
    tree.insert(10)

    for value in tree:
        assert value == 10


def test_for_loop_multiple_elements(tree):
    populate_tree(tree, 100)

    i = 0
    for value in tree:
        assert value == i
        i += 1


def test_iter_returns_a_fresh_iterator(tree):
    populate_tree(tree, 100)

    i = 0
    for value in tree:
        assert value == i
        i += 1

        j = 0
        for inner_value in tree:
            assert inner_value == j
            j += 1


def test_enumerate(tree):
    populate_tree(tree, 1000)

    for i, value in enumerate(tree):
        assert value == i


def test_zip(tree):
    populate_tree(tree, 1000)

    for i, value in zip(range(1000), tree):
        assert value == i


def test_empty_iterator(tree):
    for _ in tree:
        pytest.fail("An empty tree iterator should not yield any iterations.")


def test_list_comprehension(tree):
    populate_tree(tree, 1000)

    assert [value for value in tree] == list(range(1000))
