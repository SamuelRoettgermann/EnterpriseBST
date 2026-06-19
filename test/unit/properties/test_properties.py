import hypothesis
from hypothesis import given, strategies as st
import pytest

import trees

TYPE_PERMUTATIONS: list[tuple[type, st.SearchStrategy]] = [
    (int, st.integers()),
    (str, st.text()),
    (float, st.floats(allow_nan=False, allow_infinity=False)),
]

suppress_fixture_warning = hypothesis.settings(
    suppress_health_check=[hypothesis.HealthCheck.function_scoped_fixture]
)


@pytest.mark.parametrize("t_type, element_strategy", TYPE_PERMUTATIONS)
@given(data=st.data())
@suppress_fixture_warning
def test_tree_sorting_and_uniqueness_properties(
    tree_factory, t_type, element_strategy, data
):
    values = data.draw(st.lists(element_strategy))

    tree = tree_factory[t_type]()

    for value in values:
        tree.insert(value)

    assert len(tree) == len(set(values))
    assert list(tree) == sorted(list(set(values)))


@pytest.mark.parametrize("t_type, element_strategy", TYPE_PERMUTATIONS)
@given(data=st.data())
@suppress_fixture_warning
def test_containment_and_search_hit_properties(
    tree_factory, t_type, element_strategy, data
):
    values = data.draw(st.lists(element_strategy))

    tree = tree_factory[t_type]()

    for value in values:
        tree.insert(value)

    for value in values:
        assert tree.search(value) is True
        assert value in tree


@pytest.mark.parametrize("t_type, element_strategy", TYPE_PERMUTATIONS)
@given(data=st.data())
@suppress_fixture_warning
def test_search_miss_properties(tree_factory, t_type, element_strategy, data):
    values = data.draw(st.lists(element_strategy))

    tree = tree_factory[t_type]()

    for value in values:
        tree.insert(value)

    guaranteed_miss = data.draw(element_strategy.filter(lambda x: x not in values))
    assert tree.search(guaranteed_miss) is False
    assert guaranteed_miss not in tree


@pytest.mark.parametrize("t_type, element_strategy", TYPE_PERMUTATIONS)
@given(data=st.data())
@suppress_fixture_warning
def test_removal_and_empty_state_unification_properties(
    tree_factory, t_type, element_strategy, data
):
    values = data.draw(st.lists(element_strategy))

    tree = tree_factory[t_type]()

    for value in values:
        tree.insert(value)

    unique_elements = set(values)
    expected_length = len(unique_elements)

    for element in unique_elements:
        print(f"Removing {element}")
        assert element in tree

        assert tree.remove(element) is True
        expected_length -= 1

        assert element not in tree
        assert len(tree) == expected_length

        assert tree.remove(element) is False

    assert len(tree) == 0
    assert tree.depth() == 0
    assert list(tree) == []


@pytest.mark.parametrize("t_type, element_strategy", TYPE_PERMUTATIONS)
@given(data=st.data())
@suppress_fixture_warning
def test_structural_depth_boundary_properties(
    tree_factory, t_type, element_strategy, data
):
    values = data.draw(st.lists(element_strategy))

    tree = tree_factory[t_type]()

    for value in values:
        tree.insert(value)

    current_len = len(tree)
    current_depth = tree.depth()

    assert 0 <= current_depth <= current_len

    if current_len == 0:
        assert current_depth == 0
