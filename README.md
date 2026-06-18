# EnterpriseBST

A robust, type-safe, and educational implementation of a Binary Search Tree (BST) in Python.

## Why this project?

EnterpriseBST was born out of a desire to create a Binary Search Tree that is "over-engineered", both for the sake of complexity but also to ensure code clarity, modularity, and type safety. 
It's a toy project that takes its structure seriously.

The long-term vision is for this project to become a comprehensive library for various tree data structures, including tests, comparisons, and benchmarks. 

## Features

- **BST Implementation**: Core operations include `insert`, `search`, and `remove`.
- **Dunder methods**: Supports `__iter__`, `__len__`, and `__str__`.
- **Type Safety**: Fully typed with generics.
- **Tested**: Comprehensive unit tests covering various scenarios.

## Getting Started

### Prerequisites

- Python 3.13+
- `pytest` (for running tests)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:SamuelRoettgermann/EnterpriseBST.git  -- or https://github.com/SamuelRoettgermann/EnterpriseBST.git if you use HTTPS
   cd EnterpriseBST
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Running Tests

Run the test suite using `pytest`:

```bash
pytest test
```

## Contributing

I welcome contributions! 
Whether you want to fix a bug or help me expand the library to include new types of trees, feel free to open an issue or submit a pull request.

## Roadmap

- [x] Basic Binary Search Tree implementation
- [ ] Support for other tree types
- [ ] Benchmarking utilities for comparing different tree implementations

### API
```py
class BST[T](collections.abc.Iterable):
    def __init__(self): ...

    def insert(self, value: T):
        """Inserts a value into the BST. Does not modify the tree if the value is already present."""
        ...

    def search(self, value: T) -> bool:
        """Returns True if the value is in the BST, False otherwise."""
        ...

    def remove(self, value: T) -> bool:
        """Removes the value from the BST and returns True if the value was in the BST, False otherwise."""
        ...

    def __len__(self): ...

    def __str__(self): ...

    def __iter__(self): ...
```
