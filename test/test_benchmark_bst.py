import random
import pytest
import sys
from trees.bst.bst import BST

sys.setrecursionlimit(1_000_000)


@pytest.fixture
def sorted_data_small():
    return list(range(2_000))


@pytest.fixture
def random_data():
    xs = list(range(20_000))
    random.shuffle(xs)
    return xs


@pytest.fixture
def shuffled_bst(random_data):
    tree = BST[int]()

    for value in random_data:
        tree.insert(value)

    return tree


def test_insertion_random(benchmark, random_data):
    """Benchmark average-case insertion layout."""

    def run_insert():
        tree = BST[int]()
        for value in random_data:
            tree.insert(value)

    benchmark(run_insert)


def test_insertion_sorted(benchmark, sorted_data_small):
    """Benchmark worst-case linear degeneration layout."""

    def run_insert():
        tree = BST[int]()
        for value in sorted_data_small:
            tree.insert(value)

    benchmark(run_insert)


def test_search_hit(benchmark, shuffled_bst, random_data):
    """Benchmark lookup speed in a populated tree."""
    # Pick a random sample of existing keys to search for
    existing_values = random.sample(random_data, 100)

    def run_search():
        for value in existing_values:
            shuffled_bst.search(value)

    benchmark(run_search)
