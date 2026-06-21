window.BENCHMARK_DATA = {
  "lastUpdate": 1782077210739,
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
          "id": "9a3e47d9f8b633c0d80af6b4d9f3e877c855d0ae",
          "message": "trigger all benchmarks - Baseline",
          "timestamp": "2026-06-20T01:09:42+02:00",
          "tree_id": "ad5890db9c5fa1b31b9ae71f192de494fc92acaa",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/9a3e47d9f8b633c0d80af6b4d9f3e877c855d0ae"
        },
        "date": 1781910657749,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST]",
            "value": 25.49817778802434,
            "unit": "iter/sec",
            "range": "stddev: 0.0003708909457999121",
            "extra": "mean: 39.218488799998376 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[BST]",
            "value": 307.2443920330024,
            "unit": "iter/sec",
            "range": "stddev: 0.00003204298221921861",
            "extra": "mean: 3.254738006389994 msec\nrounds: 313"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[BST]",
            "value": 11.921403621261904,
            "unit": "iter/sec",
            "range": "stddev: 0.0005422328858069118",
            "extra": "mean: 83.88273996666746 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST]",
            "value": 188.69502169813694,
            "unit": "iter/sec",
            "range": "stddev: 0.00027501975415820793",
            "extra": "mean: 5.299556877551018 msec\nrounds: 196"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST]",
            "value": 4468.020624821931,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058991411642301725",
            "extra": "mean: 223.81275378285753 usec\nrounds: 4626"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST]",
            "value": 1888.0808602122236,
            "unit": "iter/sec",
            "range": "stddev: 0.00003258451825449567",
            "extra": "mean: 529.6383333326086 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST]",
            "value": 6745.363403848001,
            "unit": "iter/sec",
            "range": "stddev: 0.000005478100669707692",
            "extra": "mean: 148.2499815250182 usec\nrounds: 6820"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST]",
            "value": 9453.070836784105,
            "unit": "iter/sec",
            "range": "stddev: 0.00000445498419152102",
            "extra": "mean: 105.78573008347368 usec\nrounds: 9703"
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
          "id": "57de8e2dea17290503b1ef3f4fae88fdf757f63d",
          "message": "Merge branch 'main' of github.com:SamuelRoettgermann/EnterpriseBST",
          "timestamp": "2026-06-21T19:07:21+02:00",
          "tree_id": "736ac5feb13c66400c39afbd917fe645c58a56e8",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/57de8e2dea17290503b1ef3f4fae88fdf757f63d"
        },
        "date": 1782061727161,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST]",
            "value": 25.87680611890861,
            "unit": "iter/sec",
            "range": "stddev: 0.0003863522762477849",
            "extra": "mean: 38.64464553333278 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[BST]",
            "value": 321.73167281354824,
            "unit": "iter/sec",
            "range": "stddev: 0.00003091942082463381",
            "extra": "mean: 3.108180152905013 msec\nrounds: 327"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[BST]",
            "value": 11.745809095706196,
            "unit": "iter/sec",
            "range": "stddev: 0.0002784044682962872",
            "extra": "mean: 85.13674893333321 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST]",
            "value": 189.6032651098992,
            "unit": "iter/sec",
            "range": "stddev: 0.0004045131405689139",
            "extra": "mean: 5.27417077664972 msec\nrounds: 197"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST]",
            "value": 6323.065271449003,
            "unit": "iter/sec",
            "range": "stddev: 0.000004986810431279219",
            "extra": "mean: 158.15114300897267 usec\nrounds: 6587"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST]",
            "value": 1768.611600979876,
            "unit": "iter/sec",
            "range": "stddev: 0.000022503561464288563",
            "extra": "mean: 565.4152666679124 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST]",
            "value": 7167.725862260819,
            "unit": "iter/sec",
            "range": "stddev: 0.000010589980392056447",
            "extra": "mean: 139.51426424734714 usec\nrounds: 7440"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST]",
            "value": 8047.312460799895,
            "unit": "iter/sec",
            "range": "stddev: 0.000004920382112582519",
            "extra": "mean: 124.26508910536339 usec\nrounds: 8316"
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
          "id": "d47e01cc36675f1d9a00a3c9f1c4e2530b90879d",
          "message": "Merge pull request #17 from SamuelRoettgermann/add-tree-native\n\nAdd Tree - Native",
          "timestamp": "2026-06-21T20:06:32+02:00",
          "tree_id": "f7ad873ad10137b758377b8079300a194c7d48d7",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/d47e01cc36675f1d9a00a3c9f1c4e2530b90879d"
        },
        "date": 1782065270615,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST]",
            "value": 25.132881271324226,
            "unit": "iter/sec",
            "range": "stddev: 0.0009278175859888413",
            "extra": "mean: 39.78851406666877 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[BST]",
            "value": 300.45804652450505,
            "unit": "iter/sec",
            "range": "stddev: 0.00003545434477060934",
            "extra": "mean: 3.3282516862747458 msec\nrounds: 306"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[BST]",
            "value": 11.885108943294448,
            "unit": "iter/sec",
            "range": "stddev: 0.0003450090741646984",
            "extra": "mean: 84.13890059999811 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST]",
            "value": 195.0469901960948,
            "unit": "iter/sec",
            "range": "stddev: 0.00003381040420130785",
            "extra": "mean: 5.126969654823322 msec\nrounds: 197"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST]",
            "value": 5161.215389766376,
            "unit": "iter/sec",
            "range": "stddev: 0.000010434720910609848",
            "extra": "mean: 193.75281294843722 usec\nrounds: 5437"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST]",
            "value": 1134.7117281883204,
            "unit": "iter/sec",
            "range": "stddev: 0.00001554194820413304",
            "extra": "mean: 881.2810999993795 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST]",
            "value": 7232.650113653483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048501279330406414",
            "extra": "mean: 138.26190736259224 usec\nrounds: 7416"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST]",
            "value": 12816.064419521323,
            "unit": "iter/sec",
            "range": "stddev: 0.000003431486759416683",
            "extra": "mean: 78.02707346545546 usec\nrounds: 13571"
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
          "id": "5d9def68d396eda681a33bb95bc0a9e15f1b8cf0",
          "message": "Merge pull request #18 from SamuelRoettgermann/add-minimum-and-maximum\n\n`Tree.minimum` and `Tree.maximum`",
          "timestamp": "2026-06-21T23:25:05+02:00",
          "tree_id": "592a6d4db96f0821eec0951847faeb9949bd3b07",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/5d9def68d396eda681a33bb95bc0a9e15f1b8cf0"
        },
        "date": 1782077210094,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST]",
            "value": 23.516054922169797,
            "unit": "iter/sec",
            "range": "stddev: 0.0016356577442943289",
            "extra": "mean: 42.52413949999957 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[BST]",
            "value": 289.8484359281471,
            "unit": "iter/sec",
            "range": "stddev: 0.00004135008213124009",
            "extra": "mean: 3.4500789931738605 msec\nrounds: 293"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[BST]",
            "value": 11.5699176971977,
            "unit": "iter/sec",
            "range": "stddev: 0.0007176780297536448",
            "extra": "mean: 86.43103833333281 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST]",
            "value": 187.8610220971166,
            "unit": "iter/sec",
            "range": "stddev: 0.00031502452809462756",
            "extra": "mean: 5.323083994949416 msec\nrounds: 198"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[BST]",
            "value": 1735.2945297760052,
            "unit": "iter/sec",
            "range": "stddev: 0.000010468244005275627",
            "extra": "mean: 576.271049577435 usec\nrounds: 1775"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[BST]",
            "value": 2686.527679543134,
            "unit": "iter/sec",
            "range": "stddev: 0.000013636676703461961",
            "extra": "mean: 372.22769287456515 usec\nrounds: 2849"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[BST]",
            "value": 1760.690539026062,
            "unit": "iter/sec",
            "range": "stddev: 0.000009202195149593294",
            "extra": "mean: 567.9589785000816 usec\nrounds: 1814"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST]",
            "value": 5332.116334342674,
            "unit": "iter/sec",
            "range": "stddev: 0.000005525856185305958",
            "extra": "mean: 187.54279488601532 usec\nrounds: 5436"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST]",
            "value": 2278.307745923034,
            "unit": "iter/sec",
            "range": "stddev: 0.000019840801580500838",
            "extra": "mean: 438.92226666457645 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST]",
            "value": 6881.080015656708,
            "unit": "iter/sec",
            "range": "stddev: 0.0000142912367127044",
            "extra": "mean: 145.32602407248174 usec\nrounds: 7062"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST]",
            "value": 12063.412655216736,
            "unit": "iter/sec",
            "range": "stddev: 0.000005115055075926467",
            "extra": "mean: 82.89528250263056 usec\nrounds: 12499"
          }
        ]
      }
    ]
  }
}