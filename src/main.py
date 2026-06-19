from trees import BST

if __name__ == "__main__":
    bst = BST[int]()
    bst.insert(1)
    bst.insert(2)
    bst.insert(3)
    bst.insert(0)
    bst.insert(4)

    print(bst)
