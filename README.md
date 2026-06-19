# EnterpriseBST

A small lab for tree data structures in Python — implement, test, and benchmark different kinds of trees. The Binary Search Tree (BST) happened to be the first resident; the project is now about the more general idea of a `Tree` and building out a comparative suite around it.

## Why?

EnterpriseBST was born out of a desire to create a Binary Search Tree that is "over-engineered", both for the sake of complexity but also to ensure code clarity, modularity, and type safety, as contradicting as that may sound. 
It's a toy project that takes its structure seriously.

## What’s in the repo today

- General scaffolding for adding tree implementations (module layout, tests, and benchmarking hooks)
- A reference, unbalanced Binary Search Tree for comparable values
  - Operations: `insert` / `search` (`in`) / `remove` / `depth`
  - Duplicate inserts are ignored (idempotent, set‑like semantics)
  - size via `len(bst)`
  - Readable ASCII representation via `str(bst)`
  - `__iter__` is in-order (subject to change later)
- Fully typed using Python generics (PEP 695)
- Comprehensive unit tests and micro‑benchmarks (pytest + pytest‑benchmark)

### Implemented trees
- [x] Binary Search Tree (unbalanced)
- [ ] Binary Search Tree (balanced)
- [ ] Native Python (wrapper around `set`; I know it's not a tree... suggest something better)

## Getting Started

### Prerequisites

- Python 3.12+ (uses PEP 695 type parameters like `class Tree[T]`)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:SamuelRoettgermann/EnterpriseBST.git
   # or: https://github.com/SamuelRoettgermann/EnterpriseBST.git
   cd EnterpriseBST
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Quick start (BST example)

```py
from trees import BST

bst = BST[int]()
for v in [15, 10, 20, 8, 12, 18, 25]:
    bst.insert(v)

assert 18 in bst
assert bst.search(18)
assert bst.remove(10)

assert len(bst) == 6
assert bst.depth() == 3

print(list(bst))             # in-order: [8, 12, 15, 18, 20, 25]
print(bst)                   # ASCII pretty-print
```

### Running tests and benchmarks

- Run tests and benchmarks:
  ```bash
  pytest
  ```
  
- Run only functionality tests:
  ```bash
  pytest --benchmark-skip
  # or: pytest test/unit
  ```

- Run only benchmarks (uses pytest-benchmark):
  ```bash
  pytest --benchmark-only
  # or: pytest test/benchmark
  ```

## Contributing

Whether you want to tune an implementation detail, add a traversal, or introduce a whole new tree, you’re very welcome. Issues and PRs of any size are appreciated — from a phrasing fix to a new data structure. If unsure where to start, open an issue to discuss.

Suggested path for adding a new tree:
- Create a new subpackage under `src/trees/` (e.g., `avl`, `rb`, `btree`, …)
- Create your class inheriting from `Tree[T]`
- Add/Edit the `__init__.py` file to export your class
- Add focused unit tests under `test/unit/structural` if necessary/applicable
- Implement the tree's operations

### API:

```py
class Tree[T](collections.abc.Iterable[T]):
    def __init__(self): ...

    def insert(self, value: T): ...
    
    def search(self, value: T) -> bool: ...
    
    def __contains__(self, value: T) -> bool: ...
    
    def remove(self, value: T) -> bool: ...
    
    def depth(self) -> int: ...
    
    def __len__(self) -> int: ...
    
    def __str__(self) -> str: ...

```
