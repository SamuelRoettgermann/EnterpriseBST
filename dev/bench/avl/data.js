window.BENCHMARK_DATA = {
  "lastUpdate": 1781909716586,
  "repoUrl": "https://github.com/SamuelRoettgermann/EnterpriseBST",
  "entries": {
    "avl": [
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
          "id": "1e9218bc526cfd4448ce9c557c02228e9c3253db",
          "message": "run all tests",
          "timestamp": "2026-06-19T22:18:10+02:00",
          "tree_id": "30704854eb31dd6f2c8b3e251d99c4cbc114fe5e",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/1e9218bc526cfd4448ce9c557c02228e9c3253db"
        },
        "date": 1781900373703,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[AVL]",
            "value": 11.840238048270097,
            "unit": "iter/sec",
            "range": "stddev: 0.0006618342027467063",
            "extra": "mean: 84.45776140000021 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[AVL]",
            "value": 154.8308212199834,
            "unit": "iter/sec",
            "range": "stddev: 0.000038006525763518376",
            "extra": "mean: 6.458662378204412 msec\nrounds: 156"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[AVL]",
            "value": 148.8088792819409,
            "unit": "iter/sec",
            "range": "stddev: 0.00004014540069266972",
            "extra": "mean: 6.720029105960465 msec\nrounds: 151"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[AVL]",
            "value": 125.04908530740273,
            "unit": "iter/sec",
            "range": "stddev: 0.00016465278231918634",
            "extra": "mean: 7.996859773438114 msec\nrounds: 128"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[AVL]",
            "value": 1118.6803720536116,
            "unit": "iter/sec",
            "range": "stddev: 0.000019535427451937885",
            "extra": "mean: 893.9103831456837 usec\nrounds: 1151"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[AVL]",
            "value": 798.8712694581521,
            "unit": "iter/sec",
            "range": "stddev: 0.00001402341592377506",
            "extra": "mean: 1.251766133332429 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[AVL]",
            "value": 7836.246168050916,
            "unit": "iter/sec",
            "range": "stddev: 0.00000828694496340119",
            "extra": "mean: 127.61212174230697 usec\nrounds: 8058"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[AVL]",
            "value": 7041.643264420688,
            "unit": "iter/sec",
            "range": "stddev: 0.000008152380940422884",
            "extra": "mean: 142.01230628264005 usec\nrounds: 7258"
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
          "id": "1164790a48c95750ca206aca41eddb7205ec8ecd",
          "message": "trigger benchmarks",
          "timestamp": "2026-06-19T22:33:14+02:00",
          "tree_id": "701808ff8904569f930082838669a701e4b6ebf8",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/1164790a48c95750ca206aca41eddb7205ec8ecd"
        },
        "date": 1781901272402,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[AVL]",
            "value": 12.061923337990216,
            "unit": "iter/sec",
            "range": "stddev: 0.0006303238999266558",
            "extra": "mean: 82.90551780000138 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[AVL]",
            "value": 158.31932263266233,
            "unit": "iter/sec",
            "range": "stddev: 0.00004571217391640103",
            "extra": "mean: 6.316348398737358 msec\nrounds: 158"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[AVL]",
            "value": 154.96885452732715,
            "unit": "iter/sec",
            "range": "stddev: 0.00004712361803960569",
            "extra": "mean: 6.452909541405046 msec\nrounds: 157"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[AVL]",
            "value": 126.18371501305027,
            "unit": "iter/sec",
            "range": "stddev: 0.000160539024145824",
            "extra": "mean: 7.924952914063255 msec\nrounds: 128"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[AVL]",
            "value": 1240.2098668240747,
            "unit": "iter/sec",
            "range": "stddev: 0.00002156264154658865",
            "extra": "mean: 806.3151461299019 usec\nrounds: 1266"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[AVL]",
            "value": 917.828441160375,
            "unit": "iter/sec",
            "range": "stddev: 0.000013677261654557685",
            "extra": "mean: 1.0895282333327336 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[AVL]",
            "value": 7693.784076389702,
            "unit": "iter/sec",
            "range": "stddev: 0.000004371388874259355",
            "extra": "mean: 129.97505389691784 usec\nrounds: 7904"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[AVL]",
            "value": 6716.423259091503,
            "unit": "iter/sec",
            "range": "stddev: 0.000007575022392994768",
            "extra": "mean: 148.8887703207771 usec\nrounds: 6914"
          }
        ]
      }
    ]
  }
}