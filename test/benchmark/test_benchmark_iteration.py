def test_iteration_full_sweep(benchmark, populated_tree):
    def runner():
        list(populated_tree)

    benchmark(runner)
