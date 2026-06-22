window.BENCHMARK_DATA = {
  "lastUpdate": 1782128125137,
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
          "id": "14082a60e053bb63738e0f82d60d2eaaa719813a",
          "message": "Merge pull request #21 from SamuelRoettgermann/add-type-checking\n\nAdd type checking",
          "timestamp": "2026-06-22T13:33:24+02:00",
          "tree_id": "a9af306c0fa516dc547a673d9d69d654c2ae2119",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/14082a60e053bb63738e0f82d60d2eaaa719813a"
        },
        "date": 1782128124598,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[SetWrapper]",
            "value": 1610.0386843589622,
            "unit": "iter/sec",
            "range": "stddev: 0.00001735440428859814",
            "extra": "mean: 621.1030888355025 usec\nrounds: 1666"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[SetWrapper]",
            "value": 17205.61623680082,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033821077623126943",
            "extra": "mean: 58.12055704585087 usec\nrounds: 17670"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[SetWrapper]",
            "value": 18112.71870829044,
            "unit": "iter/sec",
            "range": "stddev: 0.000004675469750587312",
            "extra": "mean: 55.20982333493018 usec\nrounds: 18453"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[SetWrapper]",
            "value": 2851.720699105242,
            "unit": "iter/sec",
            "range": "stddev: 0.000013427632254183687",
            "extra": "mean: 350.6654772726378 usec\nrounds: 2992"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[SetWrapper]",
            "value": 5.98477280012698,
            "unit": "iter/sec",
            "range": "stddev: 0.0012223288519604282",
            "extra": "mean: 167.09072063333514 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[SetWrapper]",
            "value": 6.375343339573161,
            "unit": "iter/sec",
            "range": "stddev: 0.003217706718480169",
            "extra": "mean: 156.85429736666566 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[SetWrapper]",
            "value": 6.2874498985341045,
            "unit": "iter/sec",
            "range": "stddev: 0.0023208718646429024",
            "extra": "mean: 159.04699299999928 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[SetWrapper]",
            "value": 203611.0568863308,
            "unit": "iter/sec",
            "range": "stddev: 5.002697679626092e-7",
            "extra": "mean: 4.911324636747337 usec\nrounds: 106191"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[SetWrapper]",
            "value": 110042.88003915283,
            "unit": "iter/sec",
            "range": "stddev: 9.641617919276256e-7",
            "extra": "mean: 9.087366666922966 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[SetWrapper]",
            "value": 212990.02857845207,
            "unit": "iter/sec",
            "range": "stddev: 5.157622130879502e-7",
            "extra": "mean: 4.69505547594996 usec\nrounds: 106758"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[SetWrapper]",
            "value": 221386.87714807587,
            "unit": "iter/sec",
            "range": "stddev: 4.969030269600284e-7",
            "extra": "mean: 4.516979564832762 usec\nrounds: 114851"
          }
        ]
      }
    ]
  }
}