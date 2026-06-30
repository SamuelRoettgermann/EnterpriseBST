window.BENCHMARK_DATA = {
  "lastUpdate": 1782851156517,
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
          "id": "78838fae4a13fb2c9921f52a42a4c9732a661829",
          "message": "Merge pull request #27 from SamuelRoettgermann/parameterize-benchmarks\n\nParameterize Benchmarks",
          "timestamp": "2026-06-30T22:18:13+02:00",
          "tree_id": "7856793507b67588799d313fd7296aa01cc29672",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/78838fae4a13fb2c9921f52a42a4c9732a661829"
        },
        "date": 1782851155975,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[Trie-Type=int-N=100]",
            "value": 2218.2403206210765,
            "unit": "iter/sec",
            "range": "stddev: 0.000010739760379361484",
            "extra": "mean: 450.80778250393263 usec\nrounds: 4561"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[Trie-Type=int-N=1000]",
            "value": 164.69907005238625,
            "unit": "iter/sec",
            "range": "stddev: 0.00004364355236497263",
            "extra": "mean: 6.071679698506661 msec\nrounds: 335"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[Trie-Type=int-N=5000]",
            "value": 29.360647976073132,
            "unit": "iter/sec",
            "range": "stddev: 0.0004203587307842645",
            "extra": "mean: 34.05919381666678 msec\nrounds: 60"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[Trie-Type=str-N=100]",
            "value": 807.7506201685715,
            "unit": "iter/sec",
            "range": "stddev: 0.00002291537548251076",
            "extra": "mean: 1.238005858530084 msec\nrounds: 1647"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[Trie-Type=str-N=1000]",
            "value": 80.23618358662104,
            "unit": "iter/sec",
            "range": "stddev: 0.00013196603377649963",
            "extra": "mean: 12.463204944442854 msec\nrounds: 162"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[Trie-Type=str-N=5000]",
            "value": 15.524851615337216,
            "unit": "iter/sec",
            "range": "stddev: 0.0006470362020303295",
            "extra": "mean: 64.41285396970146 msec\nrounds: 33"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[Trie-Type=int-N=100]",
            "value": 2210.4466607080562,
            "unit": "iter/sec",
            "range": "stddev: 0.000023599654644887245",
            "extra": "mean: 452.3972542633883 usec\nrounds: 4515"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[Trie-Type=int-N=1000]",
            "value": 165.14661094595073,
            "unit": "iter/sec",
            "range": "stddev: 0.00005626829972216785",
            "extra": "mean: 6.055225682634689 msec\nrounds: 334"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[Trie-Type=int-N=5000]",
            "value": 29.702599220398493,
            "unit": "iter/sec",
            "range": "stddev: 0.00013407404087812616",
            "extra": "mean: 33.667087266667295 msec\nrounds: 60"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[Trie-Type=str-N=100]",
            "value": 808.700496963063,
            "unit": "iter/sec",
            "range": "stddev: 0.00001618430441453317",
            "extra": "mean: 1.2365517317663706 msec\nrounds: 1659"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[Trie-Type=str-N=1000]",
            "value": 79.42012472297542,
            "unit": "iter/sec",
            "range": "stddev: 0.00006542240607932759",
            "extra": "mean: 12.591267055901644 msec\nrounds: 161"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[Trie-Type=str-N=5000]",
            "value": 15.906368551639789,
            "unit": "iter/sec",
            "range": "stddev: 0.0009719391899354269",
            "extra": "mean: 62.86790078788347 msec\nrounds: 33"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[Trie-Type=int-N=100]",
            "value": 6389.937611271044,
            "unit": "iter/sec",
            "range": "stddev: 0.000005569694343724621",
            "extra": "mean: 156.49605064001346 usec\nrounds: 13132"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[Trie-Type=int-N=1000]",
            "value": 632.3642028889408,
            "unit": "iter/sec",
            "range": "stddev: 0.000018613656645320275",
            "extra": "mean: 1.5813671859215366 msec\nrounds: 1307"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[Trie-Type=int-N=5000]",
            "value": 120.50860042102596,
            "unit": "iter/sec",
            "range": "stddev: 0.0005427833299736011",
            "extra": "mean: 8.298162923693894 msec\nrounds: 249"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[Trie-Type=str-N=100]",
            "value": 1038.6896708542643,
            "unit": "iter/sec",
            "range": "stddev: 0.000022225563428162946",
            "extra": "mean: 962.7514627901862 usec\nrounds: 2150"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[Trie-Type=str-N=1000]",
            "value": 112.6146598383726,
            "unit": "iter/sec",
            "range": "stddev: 0.00004845063467797257",
            "extra": "mean: 8.879838570175723 msec\nrounds: 228"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[Trie-Type=str-N=5000]",
            "value": 24.7089549516729,
            "unit": "iter/sec",
            "range": "stddev: 0.00024242697017250037",
            "extra": "mean: 40.47115719607947 msec\nrounds: 51"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[Trie-Type=int-N=100]",
            "value": 10296.93705821934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055379116538921855",
            "extra": "mean: 97.1162583927585 usec\nrounds: 21239"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[Trie-Type=int-N=1000]",
            "value": 1012.7293642639077,
            "unit": "iter/sec",
            "range": "stddev: 0.00001795294639476243",
            "extra": "mean: 987.4306357521687 usec\nrounds: 2081"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[Trie-Type=int-N=5000]",
            "value": 198.49568279096778,
            "unit": "iter/sec",
            "range": "stddev: 0.00004631860652419096",
            "extra": "mean: 5.03789294527419 msec\nrounds: 402"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[Trie-Type=str-N=100]",
            "value": 1785.3137088250573,
            "unit": "iter/sec",
            "range": "stddev: 0.000011778213708639255",
            "extra": "mean: 560.1256490984521 usec\nrounds: 3662"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[Trie-Type=str-N=1000]",
            "value": 184.54232847414463,
            "unit": "iter/sec",
            "range": "stddev: 0.00003705421844478101",
            "extra": "mean: 5.418811002702316 msec\nrounds: 370"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[Trie-Type=str-N=5000]",
            "value": 40.65385965301947,
            "unit": "iter/sec",
            "range": "stddev: 0.000520500055811672",
            "extra": "mean: 24.597910469879025 msec\nrounds: 83"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[Trie-Type=int-N=100]",
            "value": 2698.3422363276563,
            "unit": "iter/sec",
            "range": "stddev: 0.000008870256026275164",
            "extra": "mean: 370.59791250236776 usec\nrounds: 5543"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[Trie-Type=int-N=1000]",
            "value": 272.08866501306784,
            "unit": "iter/sec",
            "range": "stddev: 0.000034790765882049055",
            "extra": "mean: 3.675272543793664 msec\nrounds: 548"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[Trie-Type=int-N=5000]",
            "value": 52.95624661018733,
            "unit": "iter/sec",
            "range": "stddev: 0.00009709216560432094",
            "extra": "mean: 18.88351354205733 msec\nrounds: 107"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[Trie-Type=str-N=100]",
            "value": 424.4744624030185,
            "unit": "iter/sec",
            "range": "stddev: 0.000025433083322034997",
            "extra": "mean: 2.3558543294662266 msec\nrounds: 862"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[Trie-Type=str-N=1000]",
            "value": 46.99843730641253,
            "unit": "iter/sec",
            "range": "stddev: 0.00013360184902197665",
            "extra": "mean: 21.277303189473464 msec\nrounds: 95"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[Trie-Type=str-N=5000]",
            "value": 10.498761964514316,
            "unit": "iter/sec",
            "range": "stddev: 0.0007414273271662825",
            "extra": "mean: 95.24932590909171 msec\nrounds: 22"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[Trie-Type=int-N=100]",
            "value": 6483.68573001825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058437277789253295",
            "extra": "mean: 154.23326201178867 usec\nrounds: 13091"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[Trie-Type=int-N=1000]",
            "value": 645.6491203620941,
            "unit": "iter/sec",
            "range": "stddev: 0.00002004379016456642",
            "extra": "mean: 1.5488288738613603 msec\nrounds: 1316"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[Trie-Type=int-N=5000]",
            "value": 124.70411991400584,
            "unit": "iter/sec",
            "range": "stddev: 0.00005194940286619444",
            "extra": "mean: 8.018981254906297 msec\nrounds: 255"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[Trie-Type=str-N=100]",
            "value": 1088.0697228396884,
            "unit": "iter/sec",
            "range": "stddev: 0.00001675237737410918",
            "extra": "mean: 919.0587505644028 usec\nrounds: 2217"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[Trie-Type=str-N=1000]",
            "value": 115.1112404481291,
            "unit": "iter/sec",
            "range": "stddev: 0.00007395653181522366",
            "extra": "mean: 8.687248926403635 msec\nrounds: 231"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[Trie-Type=str-N=5000]",
            "value": 25.347632504062656,
            "unit": "iter/sec",
            "range": "stddev: 0.0004508253521110343",
            "extra": "mean: 39.45141621568494 msec\nrounds: 51"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[Trie-Type=int-N=100]",
            "value": 4596.03470565693,
            "unit": "iter/sec",
            "range": "stddev: 0.000007031333899234119",
            "extra": "mean: 217.57886178909214 usec\nrounds: 9471"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[Trie-Type=int-N=1000]",
            "value": 461.6368940866789,
            "unit": "iter/sec",
            "range": "stddev: 0.00015266311733695416",
            "extra": "mean: 2.1662046790658716 msec\nrounds: 941"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[Trie-Type=int-N=5000]",
            "value": 91.05343048059997,
            "unit": "iter/sec",
            "range": "stddev: 0.00006104229982958895",
            "extra": "mean: 10.98256259782614 msec\nrounds: 184"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[Trie-Type=str-N=100]",
            "value": 811.131684233533,
            "unit": "iter/sec",
            "range": "stddev: 0.00002764729183755815",
            "extra": "mean: 1.2328454422846709 msec\nrounds: 1646"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[Trie-Type=str-N=1000]",
            "value": 84.18412955056172,
            "unit": "iter/sec",
            "range": "stddev: 0.000047604726294824616",
            "extra": "mean: 11.878723523528164 msec\nrounds: 170"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[Trie-Type=str-N=5000]",
            "value": 17.790391279406474,
            "unit": "iter/sec",
            "range": "stddev: 0.0006267928443078862",
            "extra": "mean: 56.21011838888358 msec\nrounds: 36"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[Trie-Type=int-N=100]",
            "value": 12848.93370067309,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038741087289361436",
            "extra": "mean: 77.8274698349183 usec\nrounds: 26156"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[Trie-Type=int-N=1000]",
            "value": 11822.743495804769,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037291762954046737",
            "extra": "mean: 84.58273668500412 usec\nrounds: 24127"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[Trie-Type=int-N=5000]",
            "value": 11471.096916721906,
            "unit": "iter/sec",
            "range": "stddev: 0.000004129880186398086",
            "extra": "mean: 87.17562123830176 usec\nrounds: 23627"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[Trie-Type=str-N=100]",
            "value": 16115.602306813202,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035951842599286963",
            "extra": "mean: 62.05166775412605 usec\nrounds: 32795"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[Trie-Type=str-N=1000]",
            "value": 15271.242541850457,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035671047842830256",
            "extra": "mean: 65.4825563315837 usec\nrounds: 31075"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[Trie-Type=str-N=5000]",
            "value": 14600.664534700394,
            "unit": "iter/sec",
            "range": "stddev: 0.000003716858647373454",
            "extra": "mean: 68.49003328741433 usec\nrounds: 29741"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[Trie-Type=int-N=100]",
            "value": 711.1099311971202,
            "unit": "iter/sec",
            "range": "stddev: 0.00001521755189157852",
            "extra": "mean: 1.4062523333298789 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[Trie-Type=int-N=1000]",
            "value": 44.7685220511638,
            "unit": "iter/sec",
            "range": "stddev: 0.00011679619249282235",
            "extra": "mean: 22.33712336666258 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[Trie-Type=int-N=5000]",
            "value": 28.28738014327489,
            "unit": "iter/sec",
            "range": "stddev: 0.00018954530716361423",
            "extra": "mean: 35.35145336666119 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[Trie-Type=str-N=100]",
            "value": 567.3668193846536,
            "unit": "iter/sec",
            "range": "stddev: 0.000007419410238469899",
            "extra": "mean: 1.762528166671018 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[Trie-Type=str-N=1000]",
            "value": 70.88530208529237,
            "unit": "iter/sec",
            "range": "stddev: 0.00021295595432849383",
            "extra": "mean: 14.107296866658697 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[Trie-Type=str-N=5000]",
            "value": 13.747990910998132,
            "unit": "iter/sec",
            "range": "stddev: 0.004445158084958875",
            "extra": "mean: 72.73790086666547 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[Trie-Type=int-N=100]",
            "value": 13475.285103471011,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040692017500710065",
            "extra": "mean: 74.20993265236493 usec\nrounds: 27811"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[Trie-Type=int-N=1000]",
            "value": 12367.071063490837,
            "unit": "iter/sec",
            "range": "stddev: 0.000004068466936145909",
            "extra": "mean: 80.85988952971466 usec\nrounds: 25482"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[Trie-Type=int-N=5000]",
            "value": 11924.167737403415,
            "unit": "iter/sec",
            "range": "stddev: 0.000004239920699229267",
            "extra": "mean: 83.86329528586104 usec\nrounds: 24627"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[Trie-Type=str-N=100]",
            "value": 11343.948310677975,
            "unit": "iter/sec",
            "range": "stddev: 0.000005433914369637255",
            "extra": "mean: 88.1527288923476 usec\nrounds: 23463"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[Trie-Type=str-N=1000]",
            "value": 11043.360712699383,
            "unit": "iter/sec",
            "range": "stddev: 0.000005580544865442771",
            "extra": "mean: 90.55214495077061 usec\nrounds: 23132"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[Trie-Type=str-N=5000]",
            "value": 11226.120551760994,
            "unit": "iter/sec",
            "range": "stddev: 0.000005431239244280531",
            "extra": "mean: 89.07796735205505 usec\nrounds: 23340"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[Trie-Type=int-N=100]",
            "value": 14241.112108294115,
            "unit": "iter/sec",
            "range": "stddev: 0.000003720596027897708",
            "extra": "mean: 70.21923515492821 usec\nrounds: 29185"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[Trie-Type=int-N=1000]",
            "value": 13106.119194437699,
            "unit": "iter/sec",
            "range": "stddev: 0.000004029093520888673",
            "extra": "mean: 76.30023694766983 usec\nrounds: 26681"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[Trie-Type=int-N=5000]",
            "value": 12681.779358626743,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047135542294744095",
            "extra": "mean: 78.85328799067561 usec\nrounds: 26112"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[Trie-Type=str-N=100]",
            "value": 18698.65362085356,
            "unit": "iter/sec",
            "range": "stddev: 0.000004811609100534107",
            "extra": "mean: 53.479786313852884 usec\nrounds: 38346"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[Trie-Type=str-N=1000]",
            "value": 17519.581168123776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030844972248284003",
            "extra": "mean: 57.07899009706138 usec\nrounds: 35949"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[Trie-Type=str-N=5000]",
            "value": 16569.25409048902,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039607694384740485",
            "extra": "mean: 60.35274699384408 usec\nrounds: 33766"
          }
        ]
      }
    ]
  }
}