def test_search_empty_tree(tree):
    assert not tree.search(10)
    assert not tree.search(0)


def test_search_hit_and_miss_single(tree):
    tree.insert(10)
    assert tree.search(10)
    assert not tree.search(5)


def test_search_multiple_elements(tree):
    values = [15, 10, 20, 8, 12, 18, 25]
    for v in values:
        tree.insert(v)

    for v in values:
        assert tree.search(v), f"Value {v} should be found in the tree structure"

    assert not tree.search(0)
    assert not tree.search(11)
