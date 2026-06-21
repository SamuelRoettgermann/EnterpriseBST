window.BENCHMARK_DATA = {
  "lastUpdate": 1782077250887,
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
        "date": 1781910666653,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[AVL]",
            "value": 12.247970465057957,
            "unit": "iter/sec",
            "range": "stddev: 0.0017023194447016578",
            "extra": "mean: 81.6461798999993 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[AVL]",
            "value": 156.58948603650146,
            "unit": "iter/sec",
            "range": "stddev: 0.00004013407270448807",
            "extra": "mean: 6.386124798742216 msec\nrounds: 159"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[AVL]",
            "value": 153.36323853000837,
            "unit": "iter/sec",
            "range": "stddev: 0.00011839511512600974",
            "extra": "mean: 6.520467418300713 msec\nrounds: 153"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[AVL]",
            "value": 127.33631991031021,
            "unit": "iter/sec",
            "range": "stddev: 0.00010082697351386058",
            "extra": "mean: 7.8532189457364066 msec\nrounds: 129"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[AVL]",
            "value": 1051.3649926905875,
            "unit": "iter/sec",
            "range": "stddev: 0.000023251139135716937",
            "extra": "mean: 951.1444711896509 usec\nrounds: 1076"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[AVL]",
            "value": 937.5682373878852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057529786377005235",
            "extra": "mean: 1.0665890333337795 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[AVL]",
            "value": 7690.893339432334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066124598084846745",
            "extra": "mean: 130.0239069592675 usec\nrounds: 8018"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[AVL]",
            "value": 7063.245247070349,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041938123410519995",
            "extra": "mean: 141.5779808034804 usec\nrounds: 7293"
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
        "date": 1782061717760,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[AVL]",
            "value": 12.131082788710787,
            "unit": "iter/sec",
            "range": "stddev: 0.0016713016676942474",
            "extra": "mean: 82.43287243333317 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[AVL]",
            "value": 161.72064046576511,
            "unit": "iter/sec",
            "range": "stddev: 0.00005532876285916079",
            "extra": "mean: 6.1835025950920075 msec\nrounds: 163"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[AVL]",
            "value": 156.38030376281662,
            "unit": "iter/sec",
            "range": "stddev: 0.0003138005410000145",
            "extra": "mean: 6.394667205127756 msec\nrounds: 156"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[AVL]",
            "value": 124.26693839491784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000877898753731862",
            "extra": "mean: 8.047192703999997 msec\nrounds: 125"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[AVL]",
            "value": 1249.9381041204883,
            "unit": "iter/sec",
            "range": "stddev: 0.000014151363442560492",
            "extra": "mean: 800.0396153245078 usec\nrounds: 1279"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[AVL]",
            "value": 683.2670807202148,
            "unit": "iter/sec",
            "range": "stddev: 0.00006406055628369334",
            "extra": "mean: 1.4635565333338243 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[AVL]",
            "value": 7748.124584906537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044206236401837586",
            "extra": "mean: 129.0634900151212 usec\nrounds: 7912"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[AVL]",
            "value": 6739.3903090811455,
            "unit": "iter/sec",
            "range": "stddev: 0.000005275946389586165",
            "extra": "mean: 148.3813748927002 usec\nrounds: 6994"
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
        "date": 1782065280646,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[AVL]",
            "value": 12.329106774979236,
            "unit": "iter/sec",
            "range": "stddev: 0.0004977200287028606",
            "extra": "mean: 81.1088765999988 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[AVL]",
            "value": 162.61096715299507,
            "unit": "iter/sec",
            "range": "stddev: 0.00007526170891379935",
            "extra": "mean: 6.149646715151348 msec\nrounds: 165"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[AVL]",
            "value": 159.43959406168892,
            "unit": "iter/sec",
            "range": "stddev: 0.00003806843481447536",
            "extra": "mean: 6.2719678000001 msec\nrounds: 160"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[AVL]",
            "value": 126.50209184496313,
            "unit": "iter/sec",
            "range": "stddev: 0.00006399371914910074",
            "extra": "mean: 7.905007620155148 msec\nrounds: 129"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[AVL]",
            "value": 1252.3159035055014,
            "unit": "iter/sec",
            "range": "stddev: 0.0000159582652641128",
            "extra": "mean: 798.5205627436217 usec\nrounds: 1283"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[AVL]",
            "value": 775.7764326103395,
            "unit": "iter/sec",
            "range": "stddev: 0.000017634524006302417",
            "extra": "mean: 1.2890311666663952 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[AVL]",
            "value": 8071.787837332853,
            "unit": "iter/sec",
            "range": "stddev: 0.000004733984348547677",
            "extra": "mean: 123.88829094031641 usec\nrounds: 8146"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[AVL]",
            "value": 6843.982322803981,
            "unit": "iter/sec",
            "range": "stddev: 0.000006212702310566721",
            "extra": "mean: 146.1137613795443 usec\nrounds: 7162"
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
        "date": 1782077250580,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[AVL]",
            "value": 12.06058857136378,
            "unit": "iter/sec",
            "range": "stddev: 0.001051237807645786",
            "extra": "mean: 82.91469310000039 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[AVL]",
            "value": 159.39018840912735,
            "unit": "iter/sec",
            "range": "stddev: 0.00006211789804684434",
            "extra": "mean: 6.273911901234292 msec\nrounds: 162"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[AVL]",
            "value": 158.0172086554443,
            "unit": "iter/sec",
            "range": "stddev: 0.00004125933374861787",
            "extra": "mean: 6.328424660256433 msec\nrounds: 156"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[AVL]",
            "value": 127.52973439811481,
            "unit": "iter/sec",
            "range": "stddev: 0.0003927484132707464",
            "extra": "mean: 7.841308575757392 msec\nrounds: 132"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[AVL]",
            "value": 547.0082651678188,
            "unit": "iter/sec",
            "range": "stddev: 0.000018638727627219273",
            "extra": "mean: 1.828125941923759 msec\nrounds: 551"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[AVL]",
            "value": 566.2659489283494,
            "unit": "iter/sec",
            "range": "stddev: 0.000015110275742044165",
            "extra": "mean: 1.7659546753473105 msec\nrounds: 576"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[AVL]",
            "value": 571.842425272762,
            "unit": "iter/sec",
            "range": "stddev: 0.00016088720908772025",
            "extra": "mean: 1.7487334898648208 msec\nrounds: 592"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[AVL]",
            "value": 1152.4513943971237,
            "unit": "iter/sec",
            "range": "stddev: 0.00005732234536547663",
            "extra": "mean: 867.7155538721224 usec\nrounds: 1188"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[AVL]",
            "value": 1047.9942228980356,
            "unit": "iter/sec",
            "range": "stddev: 0.000021909187049448026",
            "extra": "mean: 954.2037333323112 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[AVL]",
            "value": 7815.422933389971,
            "unit": "iter/sec",
            "range": "stddev: 0.000003854062035684116",
            "extra": "mean: 127.95212856973897 usec\nrounds: 8089"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[AVL]",
            "value": 6582.69547298361,
            "unit": "iter/sec",
            "range": "stddev: 0.000005007343252646309",
            "extra": "mean: 151.9134530989855 usec\nrounds: 6599"
          }
        ]
      }
    ]
  }
}