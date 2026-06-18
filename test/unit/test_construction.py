def test_tree_construction(tree_factory):
    assert tree_factory[int]() is not None
    assert tree_factory[str]() is not None
    assert tree_factory[float]() is not None


def test_empty_tree_length(tree):
    assert len(tree) == 0


def test_single_insert_length(tree):
    tree.insert(10)
    assert len(tree) == 1


def test_multiple_inserts_length(tree):
    values = [15, 10, 20, 8, 12, 18, 25]

    expected_len = 0
    for v in values:
        tree.insert(v)
        expected_len += 1
        assert len(tree) == expected_len


def test_duplicate_insert_ignores(tree):
    tree.insert(10)
    tree.insert(10)
    assert len(tree) == 1
