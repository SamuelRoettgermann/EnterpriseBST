window.BENCHMARK_DATA = {
  "lastUpdate": 1782508508770,
  "repoUrl": "https://github.com/SamuelRoettgermann/EnterpriseBST",
  "entries": {
    "trie": [
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
          "id": "303b684771ec6d68cf006d8f87bb8e072882369f",
          "message": "Merge pull request #23 from SamuelRoettgermann/add-tree-trie\n\nAdd Tree - Trie",
          "timestamp": "2026-06-26T23:13:12+02:00",
          "tree_id": "1c40088b874b04fc41e7dc7e0400e5560ec97a73",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/303b684771ec6d68cf006d8f87bb8e072882369f"
        },
        "date": 1782508508277,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[Trie]",
            "value": 14.644055430872067,
            "unit": "iter/sec",
            "range": "stddev: 0.0013100038743256344",
            "extra": "mean: 68.28709469999932 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[Trie]",
            "value": 189.85786618695644,
            "unit": "iter/sec",
            "range": "stddev: 0.00029460799291592066",
            "extra": "mean: 5.267098067010203 msec\nrounds: 388"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[Trie]",
            "value": 194.1379269473048,
            "unit": "iter/sec",
            "range": "stddev: 0.00016809685048393202",
            "extra": "mean: 5.150977017857164 msec\nrounds: 392"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[Trie]",
            "value": 69.05077669579045,
            "unit": "iter/sec",
            "range": "stddev: 0.00014690675184683634",
            "extra": "mean: 14.482096333334413 msec\nrounds: 141"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[Trie]",
            "value": 30.108626988359617,
            "unit": "iter/sec",
            "range": "stddev: 0.0002928135299328822",
            "extra": "mean: 33.213072133332844 msec\nrounds: 60"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[Trie]",
            "value": 70.00326512125848,
            "unit": "iter/sec",
            "range": "stddev: 0.000982095136863977",
            "extra": "mean: 14.285047965517276 msec\nrounds: 145"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[Trie]",
            "value": 50.308989822473585,
            "unit": "iter/sec",
            "range": "stddev: 0.001292090046408523",
            "extra": "mean: 19.877163177569688 msec\nrounds: 107"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[Trie]",
            "value": 11720.68500113065,
            "unit": "iter/sec",
            "range": "stddev: 0.000004000399475067773",
            "extra": "mean: 85.31924541129924 usec\nrounds: 24571"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[Trie]",
            "value": 15.76062088146342,
            "unit": "iter/sec",
            "range": "stddev: 0.0010995487618972967",
            "extra": "mean: 63.449277000002745 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[Trie]",
            "value": 12649.899879542834,
            "unit": "iter/sec",
            "range": "stddev: 0.000004574751602199903",
            "extra": "mean: 79.05200906903461 usec\nrounds: 26243"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[Trie]",
            "value": 13360.257034652044,
            "unit": "iter/sec",
            "range": "stddev: 0.000007220656165223982",
            "extra": "mean: 74.84885937496068 usec\nrounds: 28160"
          }
        ]
      }
    ]
  }
}