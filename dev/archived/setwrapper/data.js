window.BENCHMARK_DATA = {
  "lastUpdate": 1782508518733,
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
          "id": "db0a5a54a0b29c2586033f1c0f4f762c1e4b790d",
          "message": "Merge pull request #22 from SamuelRoettgermann/add-tree-listwrapper\n\nAdd Tree - ListWrapper",
          "timestamp": "2026-06-23T04:20:05+02:00",
          "tree_id": "9d76733109df79219e1ea8932c3858c9a020dd04",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/db0a5a54a0b29c2586033f1c0f4f762c1e4b790d"
        },
        "date": 1782181320078,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[SetWrapper]",
            "value": 1698.5566783863014,
            "unit": "iter/sec",
            "range": "stddev: 0.000012480566628203257",
            "extra": "mean: 588.7351377347272 usec\nrounds: 1757"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[SetWrapper]",
            "value": 16887.60066115904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037127580851022074",
            "extra": "mean: 59.2150430404225 usec\nrounds: 17774"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[SetWrapper]",
            "value": 17819.106797923243,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031997318719884194",
            "extra": "mean: 56.11953569505216 usec\nrounds: 18546"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[SetWrapper]",
            "value": 3212.1443512221704,
            "unit": "iter/sec",
            "range": "stddev: 0.000019831748824762798",
            "extra": "mean: 311.318512077303 usec\nrounds: 3312"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[SetWrapper]",
            "value": 5.154170925913868,
            "unit": "iter/sec",
            "range": "stddev: 0.002761779455304101",
            "extra": "mean: 194.01762463333395 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[SetWrapper]",
            "value": 5.342413571070771,
            "unit": "iter/sec",
            "range": "stddev: 0.0006053187521939881",
            "extra": "mean: 187.18131546666683 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[SetWrapper]",
            "value": 5.45786445138202,
            "unit": "iter/sec",
            "range": "stddev: 0.00013589106273557435",
            "extra": "mean: 183.22184600000165 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[SetWrapper]",
            "value": 180990.53140497126,
            "unit": "iter/sec",
            "range": "stddev: 7.618447485207344e-7",
            "extra": "mean: 5.525150913903184 usec\nrounds: 188041"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[SetWrapper]",
            "value": 121226.32549764453,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010037985950356757",
            "extra": "mean: 8.249033334095657 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[SetWrapper]",
            "value": 214119.7323327553,
            "unit": "iter/sec",
            "range": "stddev: 5.041410937973395e-7",
            "extra": "mean: 4.670284186820943 usec\nrounds: 109004"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[SetWrapper]",
            "value": 216547.23194643937,
            "unit": "iter/sec",
            "range": "stddev: 5.739985828470266e-7",
            "extra": "mean: 4.617930190155186 usec\nrounds: 114640"
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
          "id": "282cc05949956b07c9282916198f1dace44ff13c",
          "message": "added pytest-timeout to optional dependencies",
          "timestamp": "2026-06-26T23:05:41+02:00",
          "tree_id": "4f666568893477d28cef488dabfbfaa0cafe8469",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/282cc05949956b07c9282916198f1dace44ff13c"
        },
        "date": 1782508072540,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[SetWrapper]",
            "value": 1690.9460106068288,
            "unit": "iter/sec",
            "range": "stddev: 0.000012249926438903973",
            "extra": "mean: 591.3849370277237 usec\nrounds: 3573"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[SetWrapper]",
            "value": 15851.556579601529,
            "unit": "iter/sec",
            "range": "stddev: 0.00000683224256320129",
            "extra": "mean: 63.085287238405556 usec\nrounds: 31963"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[SetWrapper]",
            "value": 16281.904334625226,
            "unit": "iter/sec",
            "range": "stddev: 0.000002874881310673452",
            "extra": "mean: 61.4178771382038 usec\nrounds: 33672"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[SetWrapper]",
            "value": 3151.714116305498,
            "unit": "iter/sec",
            "range": "stddev: 0.000018530101125431102",
            "extra": "mean: 317.287660967239 usec\nrounds: 6492"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[SetWrapper]",
            "value": 2698.1222452697243,
            "unit": "iter/sec",
            "range": "stddev: 0.000035250718316755486",
            "extra": "mean: 370.6281291565544 usec\nrounds: 5443"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[SetWrapper]",
            "value": 5252.641289525231,
            "unit": "iter/sec",
            "range": "stddev: 0.000005544511857598681",
            "extra": "mean: 190.38040956541064 usec\nrounds: 11312"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[SetWrapper]",
            "value": 4837.240214172188,
            "unit": "iter/sec",
            "range": "stddev: 0.00001941354748407848",
            "extra": "mean: 206.72944814073767 usec\nrounds: 9950"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[SetWrapper]",
            "value": 188326.80902042607,
            "unit": "iter/sec",
            "range": "stddev: 7.700918549171355e-7",
            "extra": "mean: 5.309918461431263 usec\nrounds: 374743"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[SetWrapper]",
            "value": 115949.64695446561,
            "unit": "iter/sec",
            "range": "stddev: 0.000001941439826283291",
            "extra": "mean: 8.624433331760883 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[SetWrapper]",
            "value": 228986.31743027552,
            "unit": "iter/sec",
            "range": "stddev: 4.869372829321812e-7",
            "extra": "mean: 4.367073156257434 usec\nrounds: 238011"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[SetWrapper]",
            "value": 216862.53879980993,
            "unit": "iter/sec",
            "range": "stddev: 5.414036737399334e-7",
            "extra": "mean: 4.611215959816461 usec\nrounds: 224896"
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
          "id": "303b684771ec6d68cf006d8f87bb8e072882369f",
          "message": "Merge pull request #23 from SamuelRoettgermann/add-tree-trie\n\nAdd Tree - Trie",
          "timestamp": "2026-06-26T23:13:12+02:00",
          "tree_id": "1c40088b874b04fc41e7dc7e0400e5560ec97a73",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/303b684771ec6d68cf006d8f87bb8e072882369f"
        },
        "date": 1782508518224,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[SetWrapper]",
            "value": 1632.8696044153346,
            "unit": "iter/sec",
            "range": "stddev: 0.000011503246877717583",
            "extra": "mean: 612.4187732418842 usec\nrounds: 3356"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[SetWrapper]",
            "value": 17038.043800954387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030101810944052343",
            "extra": "mean: 58.69218389636872 usec\nrounds: 34514"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[SetWrapper]",
            "value": 18994.915254723095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026262622974838897",
            "extra": "mean: 52.64566788479614 usec\nrounds: 39405"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[SetWrapper]",
            "value": 2903.98553455397,
            "unit": "iter/sec",
            "range": "stddev: 0.000010175537788733686",
            "extra": "mean: 344.3543323825793 usec\nrounds: 5960"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[SetWrapper]",
            "value": 3178.571397795226,
            "unit": "iter/sec",
            "range": "stddev: 0.000010241918068578705",
            "extra": "mean: 314.60674461918234 usec\nrounds: 6226"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[SetWrapper]",
            "value": 6581.588843665242,
            "unit": "iter/sec",
            "range": "stddev: 0.000006489543432236271",
            "extra": "mean: 151.9389958493832 usec\nrounds: 12528"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[SetWrapper]",
            "value": 6096.2601185897865,
            "unit": "iter/sec",
            "range": "stddev: 0.000008830117700375332",
            "extra": "mean: 164.0349953163292 usec\nrounds: 11743"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[SetWrapper]",
            "value": 206984.74775509862,
            "unit": "iter/sec",
            "range": "stddev: 4.999529496633854e-7",
            "extra": "mean: 4.831273853971045 usec\nrounds: 210793"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[SetWrapper]",
            "value": 117140.36927939754,
            "unit": "iter/sec",
            "range": "stddev: 6.321782107470048e-7",
            "extra": "mean: 8.536766668498785 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[SetWrapper]",
            "value": 213890.45456331523,
            "unit": "iter/sec",
            "range": "stddev: 4.820830757652153e-7",
            "extra": "mean: 4.675290452028952 usec\nrounds: 218413"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[SetWrapper]",
            "value": 217886.5603026693,
            "unit": "iter/sec",
            "range": "stddev: 4.769988104147278e-7",
            "extra": "mean: 4.589544204153234 usec\nrounds: 224040"
          }
        ]
      }
    ]
  }
}