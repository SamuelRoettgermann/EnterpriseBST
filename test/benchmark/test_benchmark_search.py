import random


def execute_search_benchmark(benchmark, tree, lookups):
    """Measures read and traversal latency on an established tree structure."""

    def runner():
        for value in lookups:
            tree.search(value)

    benchmark(runner)


def test_search_hit(benchmark, populated_tree, random_data):
    existing_values = random.sample(random_data, 100)

    execute_search_benchmark(benchmark, populated_tree, existing_values)


def test_search_miss(benchmark, populated_tree):
    non_existent_values = list(range(10_000, 10_100))
    execute_search_benchmark(benchmark, populated_tree, non_existent_values)
