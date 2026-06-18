window.BENCHMARK_DATA = {
  "lastUpdate": 1781812998229,
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
      }
    ]
  }
}