def test_remove_from_empty(tree):
    assert not tree.remove(10)


def test_remove_non_existent(tree):
    tree.insert(10)
    tree.insert(20)

    assert not tree.remove(15)


def test_remove_single_item_collection(tree):
    tree.insert(10)

    assert tree.remove(10)
    assert not tree.search(10)


def test_remove_linear_edge_element(tree):
    tree.insert(15)
    tree.insert(10)

    assert tree.remove(10)
    assert not tree.search(10)
    assert tree.search(15)


def test_remove_interior_element_from_small_set(tree):
    tree.insert(15)
    tree.insert(10)
    tree.insert(5)

    assert tree.remove(10)
    assert not tree.search(10)
    assert tree.search(5)
    assert tree.search(15)


def test_remove_element_with_complex_neighbors(tree):
    tree.insert(15)
    tree.insert(10)
    tree.insert(5)
    tree.insert(12)

    assert tree.remove(10)
    assert not tree.search(10)
    assert tree.search(5)
    assert tree.search(12)
    assert tree.search(15)


def test_remove_initial_element_multiple_items(tree):
    tree.insert(15)
    tree.insert(10)
    tree.insert(20)

    assert tree.remove(15)
    assert not tree.search(15)
    assert tree.search(10)
    assert tree.search(20)


def test_remove_clears_duplicate_insert_attempts(tree):
    tree.insert(10)
    tree.insert(10)

    assert tree.remove(10)
    assert not tree.search(10)


def test_remove_element_repeatedly(tree):
    tree.insert(10)

    assert tree.remove(10)
    assert not tree.remove(10)
    assert not tree.remove(10)
