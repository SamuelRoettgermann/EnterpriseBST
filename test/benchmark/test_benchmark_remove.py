import random


def test_remove_miss(benchmark, tree_and_data):
    tree, data = tree_and_data
    sample_size = min(100, len(data.misses))
    non_existent_values = random.sample(data.misses, sample_size)

    def runner():
        for value in non_existent_values:
            tree.remove(value)

    benchmark(runner)


def test_remove_hit(benchmark, tree_factory, benchmark_payload):
    sample_size = min(100, len(benchmark_payload.inserted))
    targets_to_remove = random.sample(benchmark_payload.inserted, sample_size)

    t_type = type(benchmark_payload.inserted[0])

    def setup_pristine_tree():
        tree = tree_factory[t_type]()

        for value in benchmark_payload.inserted:
            tree.insert(value)

        return (tree,), {}

    def runner(tree):
        for value in targets_to_remove:
            tree.remove(value)

    benchmark.pedantic(runner, setup=setup_pristine_tree, rounds=30, iterations=1)
