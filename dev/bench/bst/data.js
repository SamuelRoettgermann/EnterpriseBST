window.BENCHMARK_DATA = {
  "lastUpdate": 1781896945734,
  "repoUrl": "https://github.com/SamuelRoettgermann/EnterpriseBST",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "38440557+SamuelRoettgermann@users.noreply.github.com",
            "name": "Samuel Röttgermann",
            "username": "SamuelRoettgermann"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "446a06a1af224e1cac2ea9b8f5b21b60ce2cf695",
          "message": "Merge pull request #13 from SamuelRoettgermann/add-hypothesis-tests\n\nAdd hypothesis Tests",
          "timestamp": "2026-06-19T18:15:48+02:00",
          "tree_id": "e599e09e887cfd8490c140d2c3d6058b8b90f36d",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/446a06a1af224e1cac2ea9b8f5b21b60ce2cf695"
        },
        "date": 1781885807955,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST]",
            "value": 26.286719590010225,
            "unit": "iter/sec",
            "range": "stddev: 0.00016959838018857815",
            "extra": "mean: 38.042023333334875 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[BST]",
            "value": 301.4352779671985,
            "unit": "iter/sec",
            "range": "stddev: 0.00002576341437413804",
            "extra": "mean: 3.3174617342195023 msec\nrounds: 301"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[BST]",
            "value": 11.83524197519168,
            "unit": "iter/sec",
            "range": "stddev: 0.0005183526143623904",
            "extra": "mean: 84.49341399999592 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST]",
            "value": 195.43477888157238,
            "unit": "iter/sec",
            "range": "stddev: 0.00003448969641728021",
            "extra": "mean: 5.116796538071506 msec\nrounds: 197"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST]",
            "value": 6350.292996632868,
            "unit": "iter/sec",
            "range": "stddev: 0.000006838137708969317",
            "extra": "mean: 157.47304896486392 usec\nrounds: 6617"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST]",
            "value": 1437.2615223830903,
            "unit": "iter/sec",
            "range": "stddev: 0.00001212065464279119",
            "extra": "mean: 695.7675999994232 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST]",
            "value": 7013.791764226739,
            "unit": "iter/sec",
            "range": "stddev: 0.000005204441639796472",
            "extra": "mean: 142.5762317467731 usec\nrounds: 7081"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST]",
            "value": 10185.19260660065,
            "unit": "iter/sec",
            "range": "stddev: 0.000003688366199457493",
            "extra": "mean: 98.18174664187858 usec\nrounds: 10274"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "38440557+SamuelRoettgermann@users.noreply.github.com",
            "name": "Samuel Röttgermann",
            "username": "SamuelRoettgermann"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a745a110e131e952bdca4a98d758624d40d90199",
          "message": "Merge pull request #15 from SamuelRoettgermann/add-tree-avl\n\nAdd AVL tree",
          "timestamp": "2026-06-19T21:21:29+02:00",
          "tree_id": "d80a8fc7d4c2a8b99f636624d40f03ef93c8c20a",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/a745a110e131e952bdca4a98d758624d40d90199"
        },
        "date": 1781896944933,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST]",
            "value": 26.22273416807953,
            "unit": "iter/sec",
            "range": "stddev: 0.0012103783858668192",
            "extra": "mean: 38.134848699998734 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[BST]",
            "value": 320.04767414488526,
            "unit": "iter/sec",
            "range": "stddev: 0.000027909981437825005",
            "extra": "mean: 3.12453450152961 msec\nrounds: 327"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[BST]",
            "value": 11.745359626092343,
            "unit": "iter/sec",
            "range": "stddev: 0.001139622733178372",
            "extra": "mean: 85.14000693333372 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST]",
            "value": 196.28308920689392,
            "unit": "iter/sec",
            "range": "stddev: 0.00005573122245314731",
            "extra": "mean: 5.094682400000039 msec\nrounds: 200"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST]",
            "value": 7931.130563908951,
            "unit": "iter/sec",
            "range": "stddev: 0.000003897293461989212",
            "extra": "mean: 126.08542904974423 usec\nrounds: 8365"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST]",
            "value": 1453.0350730252965,
            "unit": "iter/sec",
            "range": "stddev: 0.000021288612245107134",
            "extra": "mean: 688.2146333315593 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST]",
            "value": 6755.2627684503805,
            "unit": "iter/sec",
            "range": "stddev: 0.000006869905136177485",
            "extra": "mean: 148.03273155714626 usec\nrounds: 6981"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST]",
            "value": 9997.879567664693,
            "unit": "iter/sec",
            "range": "stddev: 0.000003960748417886174",
            "extra": "mean: 100.02120882053995 usec\nrounds: 10521"
          }
        ]
      }
    ]
  }
}