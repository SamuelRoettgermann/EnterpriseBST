window.BENCHMARK_DATA = {
  "lastUpdate": 1782065263222,
  "repoUrl": "https://github.com/SamuelRoettgermann/EnterpriseBST",
  "entries": {
    "native": [
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
          "id": "d47e01cc36675f1d9a00a3c9f1c4e2530b90879d",
          "message": "Merge pull request #17 from SamuelRoettgermann/add-tree-native\n\nAdd Tree - Native",
          "timestamp": "2026-06-21T20:06:32+02:00",
          "tree_id": "f7ad873ad10137b758377b8079300a194c7d48d7",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/d47e01cc36675f1d9a00a3c9f1c4e2530b90879d"
        },
        "date": 1782065262317,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[Native]",
            "value": 1531.044292640174,
            "unit": "iter/sec",
            "range": "stddev: 0.000013501901222941059",
            "extra": "mean: 653.1489681958012 usec\nrounds: 1635"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[Native]",
            "value": 16523.460227300242,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031871058694645154",
            "extra": "mean: 60.520011319892255 usec\nrounds: 17138"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[Native]",
            "value": 18137.543561364728,
            "unit": "iter/sec",
            "range": "stddev: 0.000003284007844435577",
            "extra": "mean: 55.13425765824911 usec\nrounds: 18738"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[Native]",
            "value": 2927.4404242102064,
            "unit": "iter/sec",
            "range": "stddev: 0.000014412147483631853",
            "extra": "mean: 341.5953375959102 usec\nrounds: 3128"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[Native]",
            "value": 202692.11979391778,
            "unit": "iter/sec",
            "range": "stddev: 5.412615080466137e-7",
            "extra": "mean: 4.933590911263474 usec\nrounds: 104954"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[Native]",
            "value": 115305.23217590484,
            "unit": "iter/sec",
            "range": "stddev: 7.106055932289162e-7",
            "extra": "mean: 8.672633332669951 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[Native]",
            "value": 210365.72277490486,
            "unit": "iter/sec",
            "range": "stddev: 5.232140693511279e-7",
            "extra": "mean: 4.753626145976349 usec\nrounds: 111149"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[Native]",
            "value": 213537.3875753153,
            "unit": "iter/sec",
            "range": "stddev: 4.966091526799512e-7",
            "extra": "mean: 4.683020670782052 usec\nrounds: 114195"
          }
        ]
      }
    ]
  }
}