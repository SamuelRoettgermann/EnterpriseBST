window.BENCHMARK_DATA = {
  "lastUpdate": 1782084125084,
  "repoUrl": "https://github.com/SamuelRoettgermann/EnterpriseBST",
  "entries": {
    "setwrapper": [
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
          "id": "ab97fa0388ad89e015928dba61ae1427ec96bbb7",
          "message": "Merge pull request #19 from SamuelRoettgermann/rename-native-to-setwrapper\n\nRenamed the `Native` tree to `SetWrapper`",
          "timestamp": "2026-06-22T01:20:23+02:00",
          "tree_id": "19bc3a0d70ac1a70d7e083144c2dbdebee704472",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/ab97fa0388ad89e015928dba61ae1427ec96bbb7"
        },
        "date": 1782084124504,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[SetWrapper]",
            "value": 1625.4050112264767,
            "unit": "iter/sec",
            "range": "stddev: 0.000013101911227173624",
            "extra": "mean: 615.2312765699135 usec\nrounds: 1656"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[SetWrapper]",
            "value": 17412.80008943855,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027966742714727107",
            "extra": "mean: 57.42901743910411 usec\nrounds: 17604"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[SetWrapper]",
            "value": 18549.112200169362,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029784108235701173",
            "extra": "mean: 53.91093596333249 usec\nrounds: 19114"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[SetWrapper]",
            "value": 2954.115310068014,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075685929974166205",
            "extra": "mean: 338.5108213588915 usec\nrounds: 3090"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[SetWrapper]",
            "value": 5.923010837022826,
            "unit": "iter/sec",
            "range": "stddev: 0.0007896531372882553",
            "extra": "mean: 168.83305256666478 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[SetWrapper]",
            "value": 6.129321790617432,
            "unit": "iter/sec",
            "range": "stddev: 0.003961486093906787",
            "extra": "mean: 163.1501875999997 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[SetWrapper]",
            "value": 5.861951333335622,
            "unit": "iter/sec",
            "range": "stddev: 0.011666944124747376",
            "extra": "mean: 170.5916584999983 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[SetWrapper]",
            "value": 204313.67835394788,
            "unit": "iter/sec",
            "range": "stddev: 4.954817681136594e-7",
            "extra": "mean: 4.894434910361827 usec\nrounds: 103972"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[SetWrapper]",
            "value": 115777.81467473658,
            "unit": "iter/sec",
            "range": "stddev: 5.023527887280263e-7",
            "extra": "mean: 8.63723333187257 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[SetWrapper]",
            "value": 212614.04646662832,
            "unit": "iter/sec",
            "range": "stddev: 4.75226908800687e-7",
            "extra": "mean: 4.703358111181798 usec\nrounds: 105854"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[SetWrapper]",
            "value": 214887.66381758082,
            "unit": "iter/sec",
            "range": "stddev: 4.925731689084274e-7",
            "extra": "mean: 4.65359426518269 usec\nrounds: 109314"
          }
        ]
      }
    ]
  }
}