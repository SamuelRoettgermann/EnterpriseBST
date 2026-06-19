window.BENCHMARK_DATA = {
  "lastUpdate": 1781901262532,
  "repoUrl": "https://github.com/SamuelRoettgermann/EnterpriseBST",
  "entries": {
    "bst": [
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
          "id": "446a06a1af224e1cac2ea9b8f5b21b60ce2cf695",
          "message": "Merge pull request #13 from SamuelRoettgermann/add-hypothesis-tests\n\nAdd hypothesis Tests",
          "timestamp": "2026-06-19T18:15:48+02:00",
          "tree_id": "e599e09e887cfd8490c140d2c3d6058b8b90f36d",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/446a06a1af224e1cac2ea9b8f5b21b60ce2cf695"
        },
        "date": 1781885807955,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST]",
            "value": 26.286719590010225,
            "unit": "iter/sec",
            "range": "stddev: 0.00016959838018857815",
            "extra": "mean: 38.042023333334875 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[BST]",
            "value": 301.4352779671985,
            "unit": "iter/sec",
            "range": "stddev: 0.00002576341437413804",
            "extra": "mean: 3.3174617342195023 msec\nrounds: 301"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[BST]",
            "value": 11.83524197519168,
            "unit": "iter/sec",
            "range": "stddev: 0.0005183526143623904",
            "extra": "mean: 84.49341399999592 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST]",
            "value": 195.43477888157238,
            "unit": "iter/sec",
            "range": "stddev: 0.00003448969641728021",
            "extra": "mean: 5.116796538071506 msec\nrounds: 197"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST]",
            "value": 6350.292996632868,
            "unit": "iter/sec",
            "range": "stddev: 0.000006838137708969317",
            "extra": "mean: 157.47304896486392 usec\nrounds: 6617"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST]",
            "value": 1437.2615223830903,
            "unit": "iter/sec",
            "range": "stddev: 0.00001212065464279119",
            "extra": "mean: 695.7675999994232 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST]",
            "value": 7013.791764226739,
            "unit": "iter/sec",
            "range": "stddev: 0.000005204441639796472",
            "extra": "mean: 142.5762317467731 usec\nrounds: 7081"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST]",
            "value": 10185.19260660065,
            "unit": "iter/sec",
            "range": "stddev: 0.000003688366199457493",
            "extra": "mean: 98.18174664187858 usec\nrounds: 10274"
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
          "id": "a745a110e131e952bdca4a98d758624d40d90199",
          "message": "Merge pull request #15 from SamuelRoettgermann/add-tree-avl\n\nAdd AVL tree",
          "timestamp": "2026-06-19T21:21:29+02:00",
          "tree_id": "d80a8fc7d4c2a8b99f636624d40f03ef93c8c20a",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/a745a110e131e952bdca4a98d758624d40d90199"
        },
        "date": 1781896944933,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST]",
            "value": 26.22273416807953,
            "unit": "iter/sec",
            "range": "stddev: 0.0012103783858668192",
            "extra": "mean: 38.134848699998734 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[BST]",
            "value": 320.04767414488526,
            "unit": "iter/sec",
            "range": "stddev: 0.000027909981437825005",
            "extra": "mean: 3.12453450152961 msec\nrounds: 327"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[BST]",
            "value": 11.745359626092343,
            "unit": "iter/sec",
            "range": "stddev: 0.001139622733178372",
            "extra": "mean: 85.14000693333372 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST]",
            "value": 196.28308920689392,
            "unit": "iter/sec",
            "range": "stddev: 0.00005573122245314731",
            "extra": "mean: 5.094682400000039 msec\nrounds: 200"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST]",
            "value": 7931.130563908951,
            "unit": "iter/sec",
            "range": "stddev: 0.000003897293461989212",
            "extra": "mean: 126.08542904974423 usec\nrounds: 8365"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST]",
            "value": 1453.0350730252965,
            "unit": "iter/sec",
            "range": "stddev: 0.000021288612245107134",
            "extra": "mean: 688.2146333315593 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST]",
            "value": 6755.2627684503805,
            "unit": "iter/sec",
            "range": "stddev: 0.000006869905136177485",
            "extra": "mean: 148.03273155714626 usec\nrounds: 6981"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST]",
            "value": 9997.879567664693,
            "unit": "iter/sec",
            "range": "stddev: 0.000003960748417886174",
            "extra": "mean: 100.02120882053995 usec\nrounds: 10521"
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
        "date": 1781899106827,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST]",
            "value": 26.257752998721447,
            "unit": "iter/sec",
            "range": "stddev: 0.0018384513369434897",
            "extra": "mean: 38.083989899999914 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[BST]",
            "value": 322.8102387529189,
            "unit": "iter/sec",
            "range": "stddev: 0.000024241785761248118",
            "extra": "mean: 3.0977951748469996 msec\nrounds: 326"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[BST]",
            "value": 11.71858429189397,
            "unit": "iter/sec",
            "range": "stddev: 0.00034069089380727444",
            "extra": "mean: 85.3345400000002 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST]",
            "value": 198.9719787663754,
            "unit": "iter/sec",
            "range": "stddev: 0.00007959809620645298",
            "extra": "mean: 5.025833316831805 msec\nrounds: 202"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST]",
            "value": 4043.0454323843956,
            "unit": "iter/sec",
            "range": "stddev: 0.000006931749981359196",
            "extra": "mean: 247.33830394041547 usec\nrounds: 4162"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST]",
            "value": 1397.5672639811487,
            "unit": "iter/sec",
            "range": "stddev: 0.000017048986985068825",
            "extra": "mean: 715.529066666439 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST]",
            "value": 6575.301925073497,
            "unit": "iter/sec",
            "range": "stddev: 0.000004441156078806729",
            "extra": "mean: 152.08427101829582 usec\nrounds: 6756"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST]",
            "value": 8274.583677775488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042180596930662716",
            "extra": "mean: 120.85200161621142 usec\nrounds: 8662"
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
        "date": 1781900363570,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST]",
            "value": 26.34641355102715,
            "unit": "iter/sec",
            "range": "stddev: 0.00019735796662877702",
            "extra": "mean: 37.95583023333412 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[BST]",
            "value": 320.46598918071936,
            "unit": "iter/sec",
            "range": "stddev: 0.00003050416855335392",
            "extra": "mean: 3.1204559415385367 msec\nrounds: 325"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[BST]",
            "value": 11.731923171601915,
            "unit": "iter/sec",
            "range": "stddev: 0.00041489019655247005",
            "extra": "mean: 85.23751693333472 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST]",
            "value": 197.96877179832495,
            "unit": "iter/sec",
            "range": "stddev: 0.00022862959799235517",
            "extra": "mean: 5.051301732672876 msec\nrounds: 202"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST]",
            "value": 11274.812906184741,
            "unit": "iter/sec",
            "range": "stddev: 0.00000355038694783352",
            "extra": "mean: 88.69326775714879 usec\nrounds: 11615"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST]",
            "value": 1869.63892723316,
            "unit": "iter/sec",
            "range": "stddev: 0.000008671186911303594",
            "extra": "mean: 534.8626333320301 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST]",
            "value": 6918.946580056992,
            "unit": "iter/sec",
            "range": "stddev: 0.000004659615691151264",
            "extra": "mean: 144.53067218099014 usec\nrounds: 7254"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST]",
            "value": 13438.51635135548,
            "unit": "iter/sec",
            "range": "stddev: 0.000004411190969726464",
            "extra": "mean: 74.4129763922291 usec\nrounds: 13809"
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
        "date": 1781901262251,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST]",
            "value": 26.144714720729848,
            "unit": "iter/sec",
            "range": "stddev: 0.0004902403282704301",
            "extra": "mean: 38.248648366666295 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[BST]",
            "value": 320.75040293599426,
            "unit": "iter/sec",
            "range": "stddev: 0.000017448408879663003",
            "extra": "mean: 3.1176889907120398 msec\nrounds: 323"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[BST]",
            "value": 14.90309488333996,
            "unit": "iter/sec",
            "range": "stddev: 0.0008928500411341361",
            "extra": "mean: 67.10015656666666 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST]",
            "value": 195.55531302725683,
            "unit": "iter/sec",
            "range": "stddev: 0.0003243155133209564",
            "extra": "mean: 5.1136427055838585 msec\nrounds: 197"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST]",
            "value": 4798.768739541713,
            "unit": "iter/sec",
            "range": "stddev: 0.000004688179419989186",
            "extra": "mean: 208.38678716897303 usec\nrounds: 4910"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST]",
            "value": 830.4273910822911,
            "unit": "iter/sec",
            "range": "stddev: 0.000061400793734422",
            "extra": "mean: 1.204199200000744 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST]",
            "value": 7506.847484797887,
            "unit": "iter/sec",
            "range": "stddev: 0.000006732188307512754",
            "extra": "mean: 133.21171131091975 usec\nrounds: 7780"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST]",
            "value": 14484.646880399123,
            "unit": "iter/sec",
            "range": "stddev: 0.000003380159394381409",
            "extra": "mean: 69.03861780387739 usec\nrounds: 15199"
          }
        ]
      }
    ]
  }
}
