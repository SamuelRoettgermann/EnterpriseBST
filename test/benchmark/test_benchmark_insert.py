def _run_insertion_benchmark(benchmark, tree_factory, dataset):
    t_type = type(dataset[0])

    def runner():
        tree = tree_factory[t_type]()

        for value in dataset:
            tree.insert(value)

    benchmark(runner)


def test_insertion_random_sequence(benchmark, tree_factory, benchmark_payload):
    dataset = benchmark_payload.inserted
    _run_insertion_benchmark(benchmark, tree_factory, dataset)


def test_insertion_sorted_sequence(benchmark, tree_factory, benchmark_payload):
    dataset = sorted(benchmark_payload.inserted)
    _run_insertion_benchmark(benchmark, tree_factory, dataset)
