window.BENCHMARK_DATA = {
  "lastUpdate": 1782181309098,
  "repoUrl": "https://github.com/SamuelRoettgermann/EnterpriseBST",
  "entries": {
    "listwrapper": [
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
          "id": "db0a5a54a0b29c2586033f1c0f4f762c1e4b790d",
          "message": "Merge pull request #22 from SamuelRoettgermann/add-tree-listwrapper\n\nAdd Tree - ListWrapper",
          "timestamp": "2026-06-23T04:20:05+02:00",
          "tree_id": "9d76733109df79219e1ea8932c3858c9a020dd04",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/db0a5a54a0b29c2586033f1c0f4f762c1e4b790d"
        },
        "date": 1782181308563,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[ListWrapper]",
            "value": 86.20841391208435,
            "unit": "iter/sec",
            "range": "stddev: 0.00008332460056509425",
            "extra": "mean: 11.599795827583645 msec\nrounds: 87"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[ListWrapper]",
            "value": 1864.4748370432535,
            "unit": "iter/sec",
            "range": "stddev: 0.000008703468052875544",
            "extra": "mean: 536.3440579256267 usec\nrounds: 1899"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[ListWrapper]",
            "value": 2726.2643926441797,
            "unit": "iter/sec",
            "range": "stddev: 0.000008473395106483006",
            "extra": "mean: 366.8022817956071 usec\nrounds: 2807"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[ListWrapper]",
            "value": 3936.3288785677714,
            "unit": "iter/sec",
            "range": "stddev: 0.000007462482654846902",
            "extra": "mean: 254.04381362663196 usec\nrounds: 4051"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[ListWrapper]",
            "value": 18936.65851175247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027090326035742075",
            "extra": "mean: 52.807627036173244 usec\nrounds: 19951"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[ListWrapper]",
            "value": 19037.97171747605,
            "unit": "iter/sec",
            "range": "stddev: 0.000002596799545005867",
            "extra": "mean: 52.52660392819275 usec\nrounds: 19653"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[ListWrapper]",
            "value": 15048.640114768326,
            "unit": "iter/sec",
            "range": "stddev: 0.000003080942238902476",
            "extra": "mean: 66.45118710883564 usec\nrounds: 15499"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[ListWrapper]",
            "value": 34700.27347635537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019979121370542603",
            "extra": "mean: 28.81821668297214 usec\nrounds: 34502"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[ListWrapper]",
            "value": 6916.904915236741,
            "unit": "iter/sec",
            "range": "stddev: 0.000004892856687183452",
            "extra": "mean: 144.57333334121358 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[ListWrapper]",
            "value": 31401.679370645797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029139617743252158",
            "extra": "mean: 31.84543056429005 usec\nrounds: 34622"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[ListWrapper]",
            "value": 43098.73492350673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017988607736741088",
            "extra": "mean: 23.202537192213132 usec\nrounds: 45023"
          }
        ]
      }
    ]
  }
}