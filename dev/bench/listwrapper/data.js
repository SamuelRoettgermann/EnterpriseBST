window.BENCHMARK_DATA = {
  "lastUpdate": 1782851147736,
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
          "id": "78838fae4a13fb2c9921f52a42a4c9732a661829",
          "message": "Merge pull request #27 from SamuelRoettgermann/parameterize-benchmarks\n\nParameterize Benchmarks",
          "timestamp": "2026-06-30T22:18:13+02:00",
          "tree_id": "7856793507b67588799d313fd7296aa01cc29672",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/78838fae4a13fb2c9921f52a42a4c9732a661829"
        },
        "date": 1782851147461,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[ListWrapper-Type=int-N=100]",
            "value": 32660.33432363131,
            "unit": "iter/sec",
            "range": "stddev: 0.000002952363376936214",
            "extra": "mean: 30.61818014754529 usec\nrounds: 68183"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[ListWrapper-Type=int-N=1000]",
            "value": 1915.6356773538469,
            "unit": "iter/sec",
            "range": "stddev: 0.000033168094648946536",
            "extra": "mean: 522.0199288527267 usec\nrounds: 4062"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[ListWrapper-Type=int-N=5000]",
            "value": 232.00261550150685,
            "unit": "iter/sec",
            "range": "stddev: 0.00008925085538773562",
            "extra": "mean: 4.310296234541826 msec\nrounds: 469"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[ListWrapper-Type=str-N=100]",
            "value": 27651.21051592304,
            "unit": "iter/sec",
            "range": "stddev: 0.000002401444682524733",
            "extra": "mean: 36.164781987542526 usec\nrounds: 57749"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[ListWrapper-Type=str-N=1000]",
            "value": 1707.8375694540944,
            "unit": "iter/sec",
            "range": "stddev: 0.00002987908101587012",
            "extra": "mean: 585.5357780421982 usec\nrounds: 3780"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[ListWrapper-Type=str-N=5000]",
            "value": 203.3231695133084,
            "unit": "iter/sec",
            "range": "stddev: 0.000037889197687081856",
            "extra": "mean: 4.918278631961547 msec\nrounds: 413"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[ListWrapper-Type=int-N=100]",
            "value": 34736.8876184748,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037708437417683264",
            "extra": "mean: 28.787841069219755 usec\nrounds: 71119"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[ListWrapper-Type=int-N=1000]",
            "value": 2972.8246986377385,
            "unit": "iter/sec",
            "range": "stddev: 0.000007373003793074628",
            "extra": "mean: 336.3804130321704 usec\nrounds: 5801"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[ListWrapper-Type=int-N=5000]",
            "value": 552.3325821215324,
            "unit": "iter/sec",
            "range": "stddev: 0.00015550158591071862",
            "extra": "mean: 1.8105033676611264 msec\nrounds: 1039"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[ListWrapper-Type=str-N=100]",
            "value": 30836.78679169258,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025179183688060097",
            "extra": "mean: 32.42880027530624 usec\nrounds: 65390"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[ListWrapper-Type=str-N=1000]",
            "value": 2519.026767577921,
            "unit": "iter/sec",
            "range": "stddev: 0.000008612419326327869",
            "extra": "mean: 396.97871133045317 usec\nrounds: 5269"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[ListWrapper-Type=str-N=5000]",
            "value": 432.5884807446393,
            "unit": "iter/sec",
            "range": "stddev: 0.000022735913626599232",
            "extra": "mean: 2.3116658082957797 msec\nrounds: 892"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[ListWrapper-Type=int-N=100]",
            "value": 338061.9301423103,
            "unit": "iter/sec",
            "range": "stddev: 6.314967244400861e-7",
            "extra": "mean: 2.9580378943557495 usec\nrounds: 359196"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[ListWrapper-Type=int-N=1000]",
            "value": 42449.711386914634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016028751695406562",
            "extra": "mean: 23.557286194135486 usec\nrounds: 88716"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[ListWrapper-Type=int-N=5000]",
            "value": 8360.549742383486,
            "unit": "iter/sec",
            "range": "stddev: 0.000005129491231704771",
            "extra": "mean: 119.6093595293786 usec\nrounds: 18107"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[ListWrapper-Type=str-N=100]",
            "value": 353924.2149826186,
            "unit": "iter/sec",
            "range": "stddev: 5.11300204808639e-7",
            "extra": "mean: 2.8254636378839195 usec\nrounds: 365765"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[ListWrapper-Type=str-N=1000]",
            "value": 42346.13943047302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016802502882854966",
            "extra": "mean: 23.614903588599216 usec\nrounds: 87666"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[ListWrapper-Type=str-N=5000]",
            "value": 8525.120906751277,
            "unit": "iter/sec",
            "range": "stddev: 0.000005574049792843201",
            "extra": "mean: 117.3003891602373 usec\nrounds: 17399"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[ListWrapper-Type=int-N=100]",
            "value": 723786.8719422935,
            "unit": "iter/sec",
            "range": "stddev: 1.5011389142043877e-7",
            "extra": "mean: 1.381622185708459 usec\nrounds: 150944"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[ListWrapper-Type=int-N=1000]",
            "value": 156760.73017646922,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011620864333060138",
            "extra": "mean: 6.379148648225079 usec\nrounds: 330088"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[ListWrapper-Type=int-N=5000]",
            "value": 33724.98209776594,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021621898679508076",
            "extra": "mean: 29.651609513122427 usec\nrounds: 69147"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[ListWrapper-Type=str-N=100]",
            "value": 705007.6084029488,
            "unit": "iter/sec",
            "range": "stddev: 2.047013699568809e-7",
            "extra": "mean: 1.4184244085894284 usec\nrounds: 147276"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[ListWrapper-Type=str-N=1000]",
            "value": 156386.059986472,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013860025464108922",
            "extra": "mean: 6.394431831625554 usec\nrounds: 340774"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[ListWrapper-Type=str-N=5000]",
            "value": 34163.33335017503,
            "unit": "iter/sec",
            "range": "stddev: 0.000001988275019323544",
            "extra": "mean: 29.271148390292446 usec\nrounds: 69607"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[ListWrapper-Type=int-N=100]",
            "value": 5610005.791329788,
            "unit": "iter/sec",
            "range": "stddev: 1.4427751727451318e-8",
            "extra": "mean: 178.2529354150562 nsec\nrounds: 115367"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[ListWrapper-Type=int-N=1000]",
            "value": 5748631.345216648,
            "unit": "iter/sec",
            "range": "stddev: 1.4886182311166052e-8",
            "extra": "mean: 173.95444931985168 nsec\nrounds: 114640"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[ListWrapper-Type=int-N=5000]",
            "value": 5728919.469336376,
            "unit": "iter/sec",
            "range": "stddev: 1.969486773467258e-8",
            "extra": "mean: 174.55298601288206 nsec\nrounds: 117960"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[ListWrapper-Type=str-N=100]",
            "value": 5772685.503978592,
            "unit": "iter/sec",
            "range": "stddev: 1.3950239968462278e-8",
            "extra": "mean: 173.22959986487916 nsec\nrounds: 118660"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[ListWrapper-Type=str-N=1000]",
            "value": 6017280.483366128,
            "unit": "iter/sec",
            "range": "stddev: 1.8414445958670267e-8",
            "extra": "mean: 166.18803174695785 nsec\nrounds: 116987"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[ListWrapper-Type=str-N=5000]",
            "value": 6036205.178105805,
            "unit": "iter/sec",
            "range": "stddev: 1.4082181586623884e-8",
            "extra": "mean: 165.66699946303115 nsec\nrounds: 124891"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[ListWrapper-Type=int-N=100]",
            "value": 9123231.175600711,
            "unit": "iter/sec",
            "range": "stddev: 1.1111572419455339e-8",
            "extra": "mean: 109.61028836739479 nsec\nrounds: 186290"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[ListWrapper-Type=int-N=1000]",
            "value": 9205745.1710759,
            "unit": "iter/sec",
            "range": "stddev: 1.1197189274907145e-8",
            "extra": "mean: 108.62781680531 nsec\nrounds: 190006"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[ListWrapper-Type=int-N=5000]",
            "value": 8936979.712890632,
            "unit": "iter/sec",
            "range": "stddev: 1.1148977624816903e-8",
            "extra": "mean: 111.89462571539772 nsec\nrounds: 180718"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[ListWrapper-Type=str-N=100]",
            "value": 8964736.181619283,
            "unit": "iter/sec",
            "range": "stddev: 1.8114742732411894e-8",
            "extra": "mean: 111.54817941551201 nsec\nrounds: 183875"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[ListWrapper-Type=str-N=1000]",
            "value": 8846572.341744652,
            "unit": "iter/sec",
            "range": "stddev: 1.384685962424265e-8",
            "extra": "mean: 113.03813063069214 nsec\nrounds: 181045"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[ListWrapper-Type=str-N=5000]",
            "value": 9019209.782556977,
            "unit": "iter/sec",
            "range": "stddev: 2.256160679850604e-8",
            "extra": "mean: 110.87445841807403 nsec\nrounds: 186463"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[ListWrapper-Type=int-N=100]",
            "value": 7752376.2825095225,
            "unit": "iter/sec",
            "range": "stddev: 1.2124595443542482e-8",
            "extra": "mean: 128.99270669512572 nsec\nrounds: 158869"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[ListWrapper-Type=int-N=1000]",
            "value": 7725472.950130899,
            "unit": "iter/sec",
            "range": "stddev: 1.2136654360663526e-8",
            "extra": "mean: 129.44191332429116 nsec\nrounds: 155776"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[ListWrapper-Type=int-N=5000]",
            "value": 7623851.601560661,
            "unit": "iter/sec",
            "range": "stddev: 2.326395061435655e-8",
            "extra": "mean: 131.16729604171366 nsec\nrounds: 154799"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[ListWrapper-Type=str-N=100]",
            "value": 7791681.943770831,
            "unit": "iter/sec",
            "range": "stddev: 1.2584541058802348e-8",
            "extra": "mean: 128.34199434943102 nsec\nrounds: 154321"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[ListWrapper-Type=str-N=1000]",
            "value": 7725203.33102425,
            "unit": "iter/sec",
            "range": "stddev: 1.245809686518501e-8",
            "extra": "mean: 129.44643100642045 nsec\nrounds: 157246"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[ListWrapper-Type=str-N=5000]",
            "value": 7783345.08998659,
            "unit": "iter/sec",
            "range": "stddev: 1.2529974615105475e-8",
            "extra": "mean: 128.47946332053522 nsec\nrounds: 154692"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[ListWrapper-Type=int-N=100]",
            "value": 41468.3609518046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018607534081311648",
            "extra": "mean: 24.114770322420533 usec\nrounds: 84980"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[ListWrapper-Type=int-N=1000]",
            "value": 33112.42287322124,
            "unit": "iter/sec",
            "range": "stddev: 0.000002076173765501152",
            "extra": "mean: 30.20014584341161 usec\nrounds: 74292"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[ListWrapper-Type=int-N=5000]",
            "value": 31340.67740306016,
            "unit": "iter/sec",
            "range": "stddev: 0.000002119296558524007",
            "extra": "mean: 31.907414991047965 usec\nrounds: 69028"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[ListWrapper-Type=str-N=100]",
            "value": 34807.34431221986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022182446005658716",
            "extra": "mean: 28.729568996418053 usec\nrounds: 80526"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[ListWrapper-Type=str-N=1000]",
            "value": 29111.787163657136,
            "unit": "iter/sec",
            "range": "stddev: 0.00000355396033659049",
            "extra": "mean: 34.35034731390143 usec\nrounds: 63660"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[ListWrapper-Type=str-N=5000]",
            "value": 27258.19138619191,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022303976963907917",
            "extra": "mean: 36.68621978003158 usec\nrounds: 59100"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[ListWrapper-Type=int-N=100]",
            "value": 27755.188139276008,
            "unit": "iter/sec",
            "range": "stddev: 0.000005831614584418895",
            "extra": "mean: 36.02929999904821 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[ListWrapper-Type=int-N=1000]",
            "value": 16781.1514111748,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030532697723582874",
            "extra": "mean: 59.59066666510656 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[ListWrapper-Type=int-N=5000]",
            "value": 10108.072137916974,
            "unit": "iter/sec",
            "range": "stddev: 0.000001907832245518459",
            "extra": "mean: 98.93083333357329 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[ListWrapper-Type=str-N=100]",
            "value": 25914.277298616922,
            "unit": "iter/sec",
            "range": "stddev: 0.000002582669853013928",
            "extra": "mean: 38.588766666218056 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[ListWrapper-Type=str-N=1000]",
            "value": 14783.422854730046,
            "unit": "iter/sec",
            "range": "stddev: 0.000010228364775538288",
            "extra": "mean: 67.64333333535433 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[ListWrapper-Type=str-N=5000]",
            "value": 9097.285460874009,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030430636379245448",
            "extra": "mean: 109.92290000141716 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[ListWrapper-Type=int-N=100]",
            "value": 56462.33845327237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014062100826129183",
            "extra": "mean: 17.710920719792526 usec\nrounds: 119084"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[ListWrapper-Type=int-N=1000]",
            "value": 43537.78509062983,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017005018738598428",
            "extra": "mean: 22.96855473741633 usec\nrounds: 90605"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[ListWrapper-Type=int-N=5000]",
            "value": 40699.32434059585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017580162907899768",
            "extra": "mean: 24.57043246299159 usec\nrounds: 87589"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[ListWrapper-Type=str-N=100]",
            "value": 51601.66676266457,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018778871551576349",
            "extra": "mean: 19.379218981421182 usec\nrounds: 108886"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[ListWrapper-Type=str-N=1000]",
            "value": 38770.00693062092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018423888881591948",
            "extra": "mean: 25.793134414174954 usec\nrounds: 81911"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[ListWrapper-Type=str-N=5000]",
            "value": 34780.10376810837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028519370845092023",
            "extra": "mean: 28.752070628292675 usec\nrounds: 73285"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[ListWrapper-Type=int-N=100]",
            "value": 56091.42480695741,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013868855927277246",
            "extra": "mean: 17.828037056316017 usec\nrounds: 117821"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[ListWrapper-Type=int-N=1000]",
            "value": 42195.858722063575,
            "unit": "iter/sec",
            "range": "stddev: 0.000001988173932802511",
            "extra": "mean: 23.699008155914484 usec\nrounds: 90241"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[ListWrapper-Type=int-N=5000]",
            "value": 40973.392459783754,
            "unit": "iter/sec",
            "range": "stddev: 0.000001747705985618805",
            "extra": "mean: 24.406082581068215 usec\nrounds: 86412"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[ListWrapper-Type=str-N=100]",
            "value": 50215.20282629357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023525671669307916",
            "extra": "mean: 19.9142877797236 usec\nrounds: 107829"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[ListWrapper-Type=str-N=1000]",
            "value": 40703.43353772889,
            "unit": "iter/sec",
            "range": "stddev: 0.000003807841378987948",
            "extra": "mean: 24.567951965847755 usec\nrounds: 84190"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[ListWrapper-Type=str-N=5000]",
            "value": 38709.767003693094,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021343545246212335",
            "extra": "mean: 25.833273548368172 usec\nrounds: 74963"
          }
        ]
      }
    ]
  }
}