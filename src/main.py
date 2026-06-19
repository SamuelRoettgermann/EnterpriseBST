from trees import BST

bst = BST[int]()
for v in [15, 10, 20, 8, 12, 18, 25]:
    bst.insert(v)

assert 18 in bst
assert bst.search(18)
assert bst.remove(10)

assert len(bst) == 6
assert bst.depth() == 3

print(list(bst))  # in-order: [8, 12, 15, 18, 20, 25]
print(bst)  # ASCII pretty-print
