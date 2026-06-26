def test_mixed_lookup(benchmark, populated_tree):
    def runner():
        _ = populated_tree.minimum
        _ = populated_tree.maximum

    benchmark(runner)


def test_only_minimum_lookup(benchmark, populated_tree):
    benchmark(lambda: populated_tree.minimum)


def test_only_maximum_lookup(benchmark, populated_tree):
    benchmark(lambda: populated_tree.maximum)
