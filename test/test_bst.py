import random
import sys
import unittest
from trees.bst.bst import BST


class TestBST(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        sys.setrecursionlimit(10_000_000)

    def setUp(self):
        """Create a fresh BST before each test."""
        self.bst = BST[int]()

    def _set_up_int_tree(self, size: int):
        """Used to obtain a somewhat non-deformed tree"""
        insert_sequence = list(range(size))
        random.shuffle(insert_sequence)

        for value in insert_sequence:
            self.bst.insert(value)

    def test_empty_tree(self):
        """An empty tree should not find any values."""
        self.assertFalse(self.bst.search(10))
        self.assertFalse(self.bst.search(0))
        self.assertEqual(len(self.bst), 0)

    def test_single_insert(self):
        """Inserting a single element should make it searchable."""
        self.bst.insert(10)
        self.assertTrue(self.bst.search(10))
        self.assertFalse(self.bst.search(5))

    def test_multiple_inserts(self):
        """Test inserting multiple elements and searching for them."""
        values = [15, 10, 20, 8, 12, 18, 25]

        expected_len = 0
        for v in values:
            self.bst.insert(v)
            expected_len += 1
            self.assertEqual(len(self.bst), expected_len)

        for v in values:
            self.assertTrue(self.bst.search(v), f"Value {v} should be in the tree")

        self.assertFalse(self.bst.search(100))

    def test_duplicate_insert(self):
        """Inserting a duplicate value should not alter the tree structure."""
        self.bst.insert(10)
        self.bst.insert(10)
        self.assertTrue(self.bst.search(10))
        self.assertEqual(len(self.bst), 1)

        self.assertTrue(self.bst.remove(10))
        self.assertFalse(self.bst.search(10))

    def test_remove_from_empty(self):
        """Removing from an empty tree should return False."""
        self.assertFalse(self.bst.remove(10))

    def test_remove_non_existent(self):
        """Removing an element not in the tree should return False."""
        self.bst.insert(10)
        self.bst.insert(20)
        self.assertFalse(self.bst.remove(15))

    def test_remove_leaf_node(self):
        """Removing a leaf node (node with no children)."""
        self.bst.insert(15)
        self.bst.insert(10)

        self.assertTrue(self.bst.remove(10))
        self.assertFalse(self.bst.search(10))
        self.assertTrue(self.bst.search(15))

    def test_remove_node_with_one_child(self):
        """Removing a node that has exactly one child."""
        self.bst.insert(15)
        self.bst.insert(10)
        self.bst.insert(5)

        self.assertTrue(self.bst.remove(10))
        self.assertFalse(self.bst.search(10))
        self.assertTrue(self.bst.search(5))
        self.assertTrue(self.bst.search(15))

    def test_remove_node_with_two_children(self):
        """Removing a node that has two children (requires finding successor/predecessor)."""
        self.bst.insert(15)
        self.bst.insert(10)
        self.bst.insert(5)
        self.bst.insert(12)

        self.assertTrue(self.bst.remove(10))
        self.assertFalse(self.bst.search(10))
        self.assertTrue(self.bst.search(5))
        self.assertTrue(self.bst.search(12))
        self.assertTrue(self.bst.search(15))

    def test_remove_root(self):
        """Removing the root node specifically."""
        self.bst.insert(10)
        self.assertTrue(self.bst.remove(10))
        self.assertFalse(self.bst.search(10))

    def test_for_loop_single_element(self):
        self.bst.insert(10)

        for value in self.bst:
            self.assertEqual(value, 10)

    def test_for_loop_multiple_elements(self):
        self._set_up_int_tree(100)

        i = 0
        for value in self.bst:
            self.assertEqual(value, i)
            i += 1

    def test_iterators_do_not_influence_other_iterators(self):
        self._set_up_int_tree(100)

        i = 0
        for value in self.bst:
            self.assertEqual(value, i)
            i += 1

            j = 0
            for inner_value in self.bst:
                self.assertEqual(inner_value, j)
                j += 1

    def test_enumerate(self):
        self._set_up_int_tree(1000)

        for i, value in enumerate(self.bst):
            self.assertEqual(value, i)

    def test_zip(self):
        self._set_up_int_tree(1000)

        for i, value in zip(range(1000), self.bst):
            self.assertEqual(value, i)

    def test_empty_iterator(self):
        for _ in self.bst:
            self.assertFalse(True)

    def test_list_comprehension(self):
        self._set_up_int_tree(1000)

        self.assertEqual([value for value in self.bst], list(range(1000)))


if __name__ == "__main__":
    unittest.main()
