def test_iteration_full_sweep(benchmark, tree_and_data):
    tree, _ = tree_and_data

    def runner():
        list(tree)

    benchmark(runner)


def test_iteration_partial_sweep(benchmark, tree_and_data):
    tree, _ = tree_and_data
    iteration_count = len(tree) // 10

    def runner():
        tree_iter = iter(tree)
        _ = [next(tree_iter) for _ in range(iteration_count)]

    benchmark(runner)
