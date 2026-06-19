import random


def test_remove_miss(benchmark, populated_tree):
    non_existent_values = list(range(10_000, 10_100))

    def runner():
        for value in non_existent_values:
            populated_tree.remove(value)

    benchmark(runner)


def test_remove_hit(benchmark, tree_factory, random_data):
    targets_to_remove = random.sample(random_data, 100)

    def setup_pristine_tree():
        tree = tree_factory[int]()

        for value in random_data:
            tree.insert(value)

        return (tree,), {}

    def runner(tree):
        for value in targets_to_remove:
            tree.remove(value)

    benchmark.pedantic(runner, setup=setup_pristine_tree, rounds=30, iterations=1)
