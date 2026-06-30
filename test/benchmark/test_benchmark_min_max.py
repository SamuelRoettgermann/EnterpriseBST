def test_mixed_lookup(benchmark, tree_and_data):
    tree, _ = tree_and_data

    def runner():
        _ = tree.minimum
        _ = tree.maximum

    benchmark(runner)


def test_only_minimum_lookup(benchmark, tree_and_data):
    tree, _ = tree_and_data

    benchmark(lambda: tree.minimum)


def test_only_maximum_lookup(benchmark, tree_and_data):
    tree, _ = tree_and_data

    benchmark(lambda: tree.maximum)
