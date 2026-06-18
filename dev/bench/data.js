window.BENCHMARK_DATA = {
  "lastUpdate": 1781817089827,
  "repoUrl": "https://github.com/SamuelRoettgermann/EnterpriseBST",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "SamuelRoettgermann",
            "username": "SamuelRoettgermann"
          },
          "committer": {
            "name": "SamuelRoettgermann",
            "username": "SamuelRoettgermann"
          },
          "id": "90e9b058878236a1016cce019f455e9db080b929",
          "message": "Add Benchmarks",
          "timestamp": "2026-06-18T18:30:21Z",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/pull/10/commits/90e9b058878236a1016cce019f455e9db080b929"
        },
        "date": 1781812997884,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/test_benchmark_bst.py::test_insertion_random",
            "value": 8.153384972092233,
            "unit": "iter/sec",
            "range": "stddev: 0.0010159426318693656",
            "extra": "mean: 122.64844643333343 msec\nrounds: 30"
          },
          {
            "name": "test/test_benchmark_bst.py::test_insertion_sorted",
            "value": 2.6278704309195478,
            "unit": "iter/sec",
            "range": "stddev: 0.0012067011324040262",
            "extra": "mean: 380.53626549999984 msec\nrounds: 30"
          },
          {
            "name": "test/test_benchmark_bst.py::test_search_hit",
            "value": 6562.168408622416,
            "unit": "iter/sec",
            "range": "stddev: 0.000005132012488596675",
            "extra": "mean: 152.3886523067652 usec\nrounds: 6871"
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
          "id": "d808b88c7f1b7f0970d9c6300f211d1d705b4410",
          "message": "Merge pull request #10 from SamuelRoettgermann/add-benchmarks\n\nAdd Benchmarks",
          "timestamp": "2026-06-18T22:22:12+02:00",
          "tree_id": "89905d4166b0d714ba971b6b318d4211ebe3cd22",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/d808b88c7f1b7f0970d9c6300f211d1d705b4410"
        },
        "date": 1781814188172,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/test_benchmark_bst.py::test_insertion_random",
            "value": 8.1727304733047,
            "unit": "iter/sec",
            "range": "stddev: 0.0027492355570172926",
            "extra": "mean: 122.35812783333391 msec\nrounds: 30"
          },
          {
            "name": "test/test_benchmark_bst.py::test_insertion_sorted",
            "value": 2.64806515293147,
            "unit": "iter/sec",
            "range": "stddev: 0.0013272934621938249",
            "extra": "mean: 377.6342129999998 msec\nrounds: 30"
          },
          {
            "name": "test/test_benchmark_bst.py::test_search_hit",
            "value": 6658.830673816693,
            "unit": "iter/sec",
            "range": "stddev: 0.000006071582551945833",
            "extra": "mean: 150.17651731738997 usec\nrounds: 6814"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "SamuelRoettgermann",
            "username": "SamuelRoettgermann"
          },
          "committer": {
            "name": "SamuelRoettgermann",
            "username": "SamuelRoettgermann"
          },
          "id": "98ddbaf4000966f22be0d61101a94d927f0f04bd",
          "message": "Generalized Tree structure and Dynamic Benchmarks",
          "timestamp": "2026-06-18T20:22:18Z",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/pull/11/commits/98ddbaf4000966f22be0d61101a94d927f0f04bd"
        },
        "date": 1781817089510,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/test_benchmark_bst.py::test_insertion_random",
            "value": 7.70000670986289,
            "unit": "iter/sec",
            "range": "stddev: 0.0014742280129167874",
            "extra": "mean: 129.87001669999927 msec\nrounds: 30"
          },
          {
            "name": "test/test_benchmark_bst.py::test_insertion_sorted",
            "value": 2.495698392413477,
            "unit": "iter/sec",
            "range": "stddev: 0.0019434819096861102",
            "extra": "mean: 400.68944349999975 msec\nrounds: 30"
          },
          {
            "name": "test/test_benchmark_bst.py::test_search_hit",
            "value": 5774.847456832966,
            "unit": "iter/sec",
            "range": "stddev: 0.000012579831985453748",
            "extra": "mean: 173.16474720328262 usec\nrounds: 5989"
          }
        ]
      }
    ]
  }
}