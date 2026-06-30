# test/benchmark/conftest.py
import pytest
import random
import string
from typing import NamedTuple, Any


class BenchmarkPayload(NamedTuple):
    inserted: list[Any]
    misses: list[Any]


@pytest.fixture(params=[100, 1000, 5000], ids=lambda n: f"N={n}")
def scale(request):
    return request.param


@pytest.fixture(params=["int", "str"], ids=lambda t: f"Type={t}")
def benchmark_payload(request, scale) -> BenchmarkPayload:
    """Generates randomized datasets containing sparse insertions and internal gaps."""
    data_type = request.param

    if data_type == "int":
        inserted = list(range(0, scale * 2, 2))
        misses = list(range(1, scale * 2, 2))

        random.shuffle(inserted)
        random.shuffle(misses)
        return BenchmarkPayload(inserted=inserted, misses=misses)

    if data_type == "str":
        required_size = scale * 2
        pool = {
            "".join(random.choices(string.ascii_lowercase, k=random.randint(3, 12)))
            for _ in range(required_size)
        }
        pool_list = list(pool)

        inserted = pool_list[:scale]
        misses = pool_list[scale:]
        return BenchmarkPayload(inserted=inserted, misses=misses)

    raise TypeError(f"Unsupported data type: {data_type}")


@pytest.fixture
def tree_and_data(tree_factory, benchmark_payload):
    sample_element = benchmark_payload.inserted[0]
    element_type = type(sample_element)

    tree = tree_factory[element_type]()
    for value in benchmark_payload.inserted:
        tree.insert(value)

    return tree, benchmark_payload
