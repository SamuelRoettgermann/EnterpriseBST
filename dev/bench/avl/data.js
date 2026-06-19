window.BENCHMARK_DATA = {
  "lastUpdate": 1781899117528,
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
          "id": "a745a110e131e952bdca4a98d758624d40d90199",
          "message": "Merge pull request #15 from SamuelRoettgermann/add-tree-avl\n\nAdd AVL tree",
          "timestamp": "2026-06-19T21:21:29+02:00",
          "tree_id": "d80a8fc7d4c2a8b99f636624d40f03ef93c8c20a",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/a745a110e131e952bdca4a98d758624d40d90199"
        },
        "date": 1781896943056,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[AVL]",
            "value": 12.425395152499508,
            "unit": "iter/sec",
            "range": "stddev: 0.0007461376582655665",
            "extra": "mean: 80.48033786666646 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[AVL]",
            "value": 168.28832600302408,
            "unit": "iter/sec",
            "range": "stddev: 0.00002865535057577224",
            "extra": "mean: 5.942182822485443 msec\nrounds: 169"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[AVL]",
            "value": 161.59187707176469,
            "unit": "iter/sec",
            "range": "stddev: 0.000024564526435556894",
            "extra": "mean: 6.188429877300635 msec\nrounds: 163"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[AVL]",
            "value": 123.9794258737659,
            "unit": "iter/sec",
            "range": "stddev: 0.0005259036912309809",
            "extra": "mean: 8.065854418604792 msec\nrounds: 129"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[AVL]",
            "value": 1115.088484914208,
            "unit": "iter/sec",
            "range": "stddev: 0.00006556598886856777",
            "extra": "mean: 896.7898185021053 usec\nrounds: 1135"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[AVL]",
            "value": 837.2390535175655,
            "unit": "iter/sec",
            "range": "stddev: 0.00004036979442507585",
            "extra": "mean: 1.1944020000006124 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[AVL]",
            "value": 8383.853125439173,
            "unit": "iter/sec",
            "range": "stddev: 0.000003304649641774418",
            "extra": "mean: 119.27689870492773 usec\nrounds: 8648"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[AVL]",
            "value": 7385.465964747766,
            "unit": "iter/sec",
            "range": "stddev: 0.000008642399998777834",
            "extra": "mean: 135.40107080219315 usec\nrounds: 7641"
          }
        ]
      }
    ],
    "avl Architecture": [
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
          "id": "c7651a825d6999f91790e123f2abaee874e5844e",
          "message": "Merge pull request #16 from SamuelRoettgermann/add-tree-avl\n\nUpdated workflow and trigger all CI benchmarks",
          "timestamp": "2026-06-19T21:57:22+02:00",
          "tree_id": "a5d63de41781c2895c6e91b1c55d9916051dbdb9",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/c7651a825d6999f91790e123f2abaee874e5844e"
        },
        "date": 1781899116634,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[AVL]",
            "value": 11.969968751283393,
            "unit": "iter/sec",
            "range": "stddev: 0.0013258935958892597",
            "extra": "mean: 83.54240689999983 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[AVL]",
            "value": 159.10947999233883,
            "unit": "iter/sec",
            "range": "stddev: 0.00004145365664784093",
            "extra": "mean: 6.284980631249315 msec\nrounds: 160"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[AVL]",
            "value": 152.8869020175074,
            "unit": "iter/sec",
            "range": "stddev: 0.000039235806056131794",
            "extra": "mean: 6.54078267532354 msec\nrounds: 154"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[AVL]",
            "value": 124.44109681999213,
            "unit": "iter/sec",
            "range": "stddev: 0.0002897750751895378",
            "extra": "mean: 8.035930456692542 msec\nrounds: 127"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[AVL]",
            "value": 1203.2263489140905,
            "unit": "iter/sec",
            "range": "stddev: 0.000012964998428648172",
            "extra": "mean: 831.0988210177562 usec\nrounds: 1218"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[AVL]",
            "value": 640.3176658624594,
            "unit": "iter/sec",
            "range": "stddev: 0.000030381032378460836",
            "extra": "mean: 1.5617248333342104 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[AVL]",
            "value": 7701.231374046796,
            "unit": "iter/sec",
            "range": "stddev: 0.000007998180404621294",
            "extra": "mean: 129.849364527601 usec\nrounds: 7854"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[AVL]",
            "value": 6678.868149479839,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071334965080795745",
            "extra": "mean: 149.72596817589243 usec\nrounds: 6913"
          }
        ]
      }
    ]
  }
}