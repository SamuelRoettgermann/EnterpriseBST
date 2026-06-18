def test_remove_from_empty(tree):
    assert not tree.remove(10)


def test_remove_non_existent(tree):
    tree.insert(10)
    tree.insert(20)
    assert not tree.remove(15)


def test_remove_leaf_node(tree):
    tree.insert(15)
    tree.insert(10)

    assert tree.remove(10)
    assert not tree.search(10)
    assert tree.search(15)


def test_remove_node_with_one_child(tree):
    tree.insert(15)
    tree.insert(10)
    tree.insert(5)

    assert tree.remove(10)
    assert not tree.search(10)
    assert tree.search(5)
    assert tree.search(15)


def test_remove_node_with_two_children(tree):
    tree.insert(15)
    tree.insert(10)
    tree.insert(5)
    tree.insert(12)

    assert tree.remove(10)
    assert not tree.search(10)
    assert tree.search(5)
    assert tree.search(12)
    assert tree.search(15)


def test_remove_root(tree):
    tree.insert(10)

    assert tree.remove(10)
    assert not tree.search(10)


def test_remove_root_multiple_elements(tree):
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
