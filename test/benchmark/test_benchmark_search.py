import random


def test_search_hit(benchmark, tree_and_data):
    tree, dataset = tree_and_data

    sample_size = min(100, len(dataset.inserted))
    lookups = random.sample(dataset.inserted, sample_size)

    benchmark(lambda: [tree.search(value) for value in lookups])


def test_search_miss(benchmark, tree_and_data):
    tree, dataset = tree_and_data

    sample_size = min(100, len(dataset.misses))
    lookups = random.sample(dataset.misses, sample_size)

    benchmark(lambda: [tree.search(value) for value in lookups])
