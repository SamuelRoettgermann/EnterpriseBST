def test_mixed_lookup(benchmark, populated_tree):
    def runner():
        for _ in range(500):
            _ = populated_tree.minimum
            _ = populated_tree.maximum

    benchmark(runner)


def test_only_minimum_lookup(benchmark, populated_tree):
    def runner():
        for _ in range(1000):
            _ = populated_tree.minimum

    benchmark(runner)


def test_only_maximum_lookup(benchmark, populated_tree):
    def runner():
        for _ in range(1000):
            _ = populated_tree.maximum

    benchmark(runner)
