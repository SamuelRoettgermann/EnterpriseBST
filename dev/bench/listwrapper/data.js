window.BENCHMARK_DATA = {
  "lastUpdate": 1782508500987,
  "repoUrl": "https://github.com/SamuelRoettgermann/EnterpriseBST",
  "entries": {
    "listwrapper": [
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
        "date": 1782181308563,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[ListWrapper]",
            "value": 86.20841391208435,
            "unit": "iter/sec",
            "range": "stddev: 0.00008332460056509425",
            "extra": "mean: 11.599795827583645 msec\nrounds: 87"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[ListWrapper]",
            "value": 1864.4748370432535,
            "unit": "iter/sec",
            "range": "stddev: 0.000008703468052875544",
            "extra": "mean: 536.3440579256267 usec\nrounds: 1899"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[ListWrapper]",
            "value": 2726.2643926441797,
            "unit": "iter/sec",
            "range": "stddev: 0.000008473395106483006",
            "extra": "mean: 366.8022817956071 usec\nrounds: 2807"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[ListWrapper]",
            "value": 3936.3288785677714,
            "unit": "iter/sec",
            "range": "stddev: 0.000007462482654846902",
            "extra": "mean: 254.04381362663196 usec\nrounds: 4051"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[ListWrapper]",
            "value": 18936.65851175247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027090326035742075",
            "extra": "mean: 52.807627036173244 usec\nrounds: 19951"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[ListWrapper]",
            "value": 19037.97171747605,
            "unit": "iter/sec",
            "range": "stddev: 0.000002596799545005867",
            "extra": "mean: 52.52660392819275 usec\nrounds: 19653"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[ListWrapper]",
            "value": 15048.640114768326,
            "unit": "iter/sec",
            "range": "stddev: 0.000003080942238902476",
            "extra": "mean: 66.45118710883564 usec\nrounds: 15499"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[ListWrapper]",
            "value": 34700.27347635537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019979121370542603",
            "extra": "mean: 28.81821668297214 usec\nrounds: 34502"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[ListWrapper]",
            "value": 6916.904915236741,
            "unit": "iter/sec",
            "range": "stddev: 0.000004892856687183452",
            "extra": "mean: 144.57333334121358 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[ListWrapper]",
            "value": 31401.679370645797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029139617743252158",
            "extra": "mean: 31.84543056429005 usec\nrounds: 34622"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[ListWrapper]",
            "value": 43098.73492350673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017988607736741088",
            "extra": "mean: 23.202537192213132 usec\nrounds: 45023"
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
        "date": 1782508063308,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[ListWrapper]",
            "value": 82.43675695839978,
            "unit": "iter/sec",
            "range": "stddev: 0.00039868614091228036",
            "extra": "mean: 12.130511156626794 msec\nrounds: 166"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[ListWrapper]",
            "value": 1934.8551240589316,
            "unit": "iter/sec",
            "range": "stddev: 0.00001616521336482799",
            "extra": "mean: 516.8345617020689 usec\nrounds: 3995"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[ListWrapper]",
            "value": 3098.931979988837,
            "unit": "iter/sec",
            "range": "stddev: 0.000007529800758081097",
            "extra": "mean: 322.69181978095634 usec\nrounds: 6026"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[ListWrapper]",
            "value": 4305.05908795742,
            "unit": "iter/sec",
            "range": "stddev: 0.000011972546749014281",
            "extra": "mean: 232.28484895766215 usec\nrounds: 8779"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[ListWrapper]",
            "value": 6317071.055327489,
            "unit": "iter/sec",
            "range": "stddev: 1.4902435204709695e-8",
            "extra": "mean: 158.30121131163344 nsec\nrounds: 115701"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[ListWrapper]",
            "value": 9069535.852642782,
            "unit": "iter/sec",
            "range": "stddev: 1.2987413015343631e-8",
            "extra": "mean: 110.25922563706597 nsec\nrounds: 184061"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[ListWrapper]",
            "value": 8148451.375665697,
            "unit": "iter/sec",
            "range": "stddev: 1.3182406666062119e-8",
            "extra": "mean: 122.72270568937446 nsec\nrounds: 163426"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[ListWrapper]",
            "value": 37794.02987216767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025161406728840446",
            "extra": "mean: 26.45920541901305 usec\nrounds: 69755"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[ListWrapper]",
            "value": 7254.591672934968,
            "unit": "iter/sec",
            "range": "stddev: 0.00001104936918817556",
            "extra": "mean: 137.84373333246927 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[ListWrapper]",
            "value": 43261.982731487165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018317291954380809",
            "extra": "mean: 23.114983106684445 usec\nrounds: 95008"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[ListWrapper]",
            "value": 47767.183001971316,
            "unit": "iter/sec",
            "range": "stddev: 0.000002925513080842666",
            "extra": "mean: 20.93487489012552 usec\nrounds: 101271"
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
        "date": 1782508500723,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[ListWrapper]",
            "value": 83.09666135339829,
            "unit": "iter/sec",
            "range": "stddev: 0.00006009247088983161",
            "extra": "mean: 12.034177832333626 msec\nrounds: 167"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[ListWrapper]",
            "value": 1952.2240316312102,
            "unit": "iter/sec",
            "range": "stddev: 0.000032782164756939495",
            "extra": "mean: 512.2362924527852 usec\nrounds: 4028"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[ListWrapper]",
            "value": 2910.268464454685,
            "unit": "iter/sec",
            "range": "stddev: 0.000011732565674277831",
            "extra": "mean: 343.61091157525783 usec\nrounds: 6186"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[ListWrapper]",
            "value": 4467.609666784615,
            "unit": "iter/sec",
            "range": "stddev: 0.000006147304631679825",
            "extra": "mean: 223.8333414476002 usec\nrounds: 9120"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[ListWrapper]",
            "value": 5731026.140974725,
            "unit": "iter/sec",
            "range": "stddev: 1.597398446886403e-8",
            "extra": "mean: 174.4888219668671 nsec\nrounds: 114963"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[ListWrapper]",
            "value": 8460475.127156196,
            "unit": "iter/sec",
            "range": "stddev: 1.452765579027672e-8",
            "extra": "mean: 118.19667157819873 nsec\nrounds: 177826"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[ListWrapper]",
            "value": 7380061.752308122,
            "unit": "iter/sec",
            "range": "stddev: 2.561214883887565e-8",
            "extra": "mean: 135.50022121254594 nsec\nrounds: 147820"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[ListWrapper]",
            "value": 33292.4164109304,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019210874504854076",
            "extra": "mean: 30.03687048897073 usec\nrounds: 67832"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[ListWrapper]",
            "value": 7629.188870622281,
            "unit": "iter/sec",
            "range": "stddev: 0.000003781926253034701",
            "extra": "mean: 131.07553331792587 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[ListWrapper]",
            "value": 38483.05638966214,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019484507330068474",
            "extra": "mean: 25.98546201409912 usec\nrounds: 80688"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[ListWrapper]",
            "value": 45353.68482777745,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023774182601573326",
            "extra": "mean: 22.048925104924155 usec\nrounds: 95320"
          }
        ]
      }
    ]
  }
}