window.BENCHMARK_DATA = {
  "lastUpdate": 1782067492812,
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
      },
      {
        "commit": {
          "author": {
            "email": "samu.roettgermann@t-online.de",
            "name": "Samuel Rötttgermann",
            "username": "SamuelRoettgermann"
          },
          "committer": {
            "email": "samu.roettgermann@t-online.de",
            "name": "Samuel Rötttgermann",
            "username": "SamuelRoettgermann"
          },
          "distinct": true,
          "id": "d0e0a4bf39d5cb9c73ab5a49b60c235c6c0adea7",
          "message": "fixed __str__ of Native",
          "timestamp": "2026-06-21T20:43:45+02:00",
          "tree_id": "7365d098d8582cd60b498caa8e14932194dfa570",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/d0e0a4bf39d5cb9c73ab5a49b60c235c6c0adea7"
        },
        "date": 1782067492286,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[Native]",
            "value": 1603.463755136423,
            "unit": "iter/sec",
            "range": "stddev: 0.000030032142803780333",
            "extra": "mean: 623.649893423952 usec\nrounds: 1764"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[Native]",
            "value": 16621.20004784003,
            "unit": "iter/sec",
            "range": "stddev: 0.000005455300908778526",
            "extra": "mean: 60.164127567308405 usec\nrounds: 18453"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[Native]",
            "value": 17485.803213714167,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026358231200892204",
            "extra": "mean: 57.18925163333058 usec\nrounds: 18980"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[Native]",
            "value": 3195.218828225518,
            "unit": "iter/sec",
            "range": "stddev: 0.00002703740665557907",
            "extra": "mean: 312.96760996972324 usec\nrounds: 3310"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[Native]",
            "value": 190543.0825397716,
            "unit": "iter/sec",
            "range": "stddev: 7.568147521677425e-7",
            "extra": "mean: 5.248156934751344 usec\nrounds: 183554"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[Native]",
            "value": 102859.49392806973,
            "unit": "iter/sec",
            "range": "stddev: 0.000004228168838449898",
            "extra": "mean: 9.722000000304357 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[Native]",
            "value": 213658.6314466053,
            "unit": "iter/sec",
            "range": "stddev: 5.177186439381956e-7",
            "extra": "mean: 4.680363218791404 usec\nrounds: 108308"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[Native]",
            "value": 214451.87938208022,
            "unit": "iter/sec",
            "range": "stddev: 5.657297351496483e-7",
            "extra": "mean: 4.663050764028701 usec\nrounds: 113870"
          }
        ]
      }
    ]
  }
}