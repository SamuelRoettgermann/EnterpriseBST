def execute_insert_benchmark(benchmark, tree_factory, dataset):
    def runner():
        tree = tree_factory[int]()

        for value in dataset:
            tree.insert(value)

    benchmark(runner)


def test_insertion_average_case(benchmark, tree_factory, random_data):
    execute_insert_benchmark(benchmark, tree_factory, random_data)


def test_insertion_worst_case(benchmark, tree_factory, sorted_data_small):
    execute_insert_benchmark(benchmark, tree_factory, sorted_data_small)
