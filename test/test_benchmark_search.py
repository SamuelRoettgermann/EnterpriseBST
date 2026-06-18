import random


def execute_search_benchmark(benchmark, tree_instance, lookups):
    """Measures read and traversal latency on an established tree structure."""

    def runner():
        for value in lookups:
            tree_instance.search(value)

    benchmark(runner)


def test_search_hit(benchmark, populated_tree, random_data):
    existing_values = random.sample(random_data, 100)

    execute_search_benchmark(benchmark, populated_tree, existing_values)
