window.BENCHMARK_DATA = {
  "lastUpdate": 1782851183055,
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
          "id": "78838fae4a13fb2c9921f52a42a4c9732a661829",
          "message": "Merge pull request #27 from SamuelRoettgermann/parameterize-benchmarks\n\nParameterize Benchmarks",
          "timestamp": "2026-06-30T22:18:13+02:00",
          "tree_id": "7856793507b67588799d313fd7296aa01cc29672",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/78838fae4a13fb2c9921f52a42a4c9732a661829"
        },
        "date": 1782851182524,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST-Type=int-N=100]",
            "value": 2506.915639554772,
            "unit": "iter/sec",
            "range": "stddev: 0.00001001680690545855",
            "extra": "mean: 398.89655009595776 usec\nrounds: 5210"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST-Type=int-N=1000]",
            "value": 199.88334313334508,
            "unit": "iter/sec",
            "range": "stddev: 0.00010149541620737342",
            "extra": "mean: 5.002918123762246 msec\nrounds: 404"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST-Type=int-N=5000]",
            "value": 34.14118316364841,
            "unit": "iter/sec",
            "range": "stddev: 0.0002539811255255873",
            "extra": "mean: 29.29013898571457 msec\nrounds: 70"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST-Type=str-N=100]",
            "value": 2384.1228816518,
            "unit": "iter/sec",
            "range": "stddev: 0.000011676241980956004",
            "extra": "mean: 419.4414674243496 usec\nrounds: 4927"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST-Type=str-N=1000]",
            "value": 187.0077431918187,
            "unit": "iter/sec",
            "range": "stddev: 0.00048786568080575604",
            "extra": "mean: 5.347372161880346 msec\nrounds: 383"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[BST-Type=str-N=5000]",
            "value": 33.2639507163891,
            "unit": "iter/sec",
            "range": "stddev: 0.00042455794820423843",
            "extra": "mean: 30.062574602941 msec\nrounds: 68"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[BST-Type=int-N=100]",
            "value": 926.2911307184348,
            "unit": "iter/sec",
            "range": "stddev: 0.000015418225455514647",
            "extra": "mean: 1.0795741930772849 msec\nrounds: 1849"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[BST-Type=int-N=1000]",
            "value": 7.946232003908892,
            "unit": "iter/sec",
            "range": "stddev: 0.00078641724525258",
            "extra": "mean: 125.84580962499992 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[BST-Type=int-N=5000]",
            "value": 0.2951000293106267,
            "unit": "iter/sec",
            "range": "stddev: 0.009385262164127257",
            "extra": "mean: 3.3886814662000093 sec\nrounds: 5"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[BST-Type=str-N=100]",
            "value": 849.8887960177062,
            "unit": "iter/sec",
            "range": "stddev: 0.000025293598867866653",
            "extra": "mean: 1.1766245239208524 msec\nrounds: 1714"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[BST-Type=str-N=1000]",
            "value": 7.2896106046597,
            "unit": "iter/sec",
            "range": "stddev: 0.0006345590324998191",
            "extra": "mean: 137.1815387999978 msec\nrounds: 15"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[BST-Type=str-N=5000]",
            "value": 0.2717453685121732,
            "unit": "iter/sec",
            "range": "stddev: 0.01313559771587214",
            "extra": "mean: 3.679915523400001 sec\nrounds: 5"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST-Type=int-N=100]",
            "value": 18502.91667925397,
            "unit": "iter/sec",
            "range": "stddev: 0.000003347860616938505",
            "extra": "mean: 54.04553332509087 usec\nrounds: 40675"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST-Type=int-N=1000]",
            "value": 1846.6162607027159,
            "unit": "iter/sec",
            "range": "stddev: 0.00002871501620416837",
            "extra": "mean: 541.5310269278457 usec\nrounds: 4085"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST-Type=int-N=5000]",
            "value": 360.9653281331661,
            "unit": "iter/sec",
            "range": "stddev: 0.00002676750226430142",
            "extra": "mean: 2.7703491777777707 msec\nrounds: 765"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST-Type=str-N=100]",
            "value": 18455.89488693876,
            "unit": "iter/sec",
            "range": "stddev: 0.000003012037557698491",
            "extra": "mean: 54.1832301346547 usec\nrounds: 40485"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST-Type=str-N=1000]",
            "value": 1823.5253970657648,
            "unit": "iter/sec",
            "range": "stddev: 0.000040917923358324576",
            "extra": "mean: 548.3883041108725 usec\nrounds: 4038"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[BST-Type=str-N=5000]",
            "value": 357.6722292541144,
            "unit": "iter/sec",
            "range": "stddev: 0.000048923870124405435",
            "extra": "mean: 2.7958558652579444 msec\nrounds: 757"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[BST-Type=int-N=100]",
            "value": 199134.12660944174,
            "unit": "iter/sec",
            "range": "stddev: 6.046303293817678e-7",
            "extra": "mean: 5.021740959354909 usec\nrounds: 220338"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[BST-Type=int-N=1000]",
            "value": 27158.68360202168,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027552624368885564",
            "extra": "mean: 36.82063588404412 usec\nrounds: 58388"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[BST-Type=int-N=5000]",
            "value": 5589.822325907082,
            "unit": "iter/sec",
            "range": "stddev: 0.000008458723917856254",
            "extra": "mean: 178.89656266270077 usec\nrounds: 11897"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[BST-Type=str-N=100]",
            "value": 200806.9197419039,
            "unit": "iter/sec",
            "range": "stddev: 6.524378801198083e-7",
            "extra": "mean: 4.979908069329956 usec\nrounds: 222075"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[BST-Type=str-N=1000]",
            "value": 28148.78373028503,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025552586012442106",
            "extra": "mean: 35.52551362722321 usec\nrounds: 61311"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[BST-Type=str-N=5000]",
            "value": 5575.135958202476,
            "unit": "iter/sec",
            "range": "stddev: 0.000006129492681843432",
            "extra": "mean: 179.3678230445196 usec\nrounds: 11890"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[BST-Type=int-N=100]",
            "value": 522975.2377721775,
            "unit": "iter/sec",
            "range": "stddev: 2.0516590458270834e-7",
            "extra": "mean: 1.9121364220988755 usec\nrounds: 115062"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[BST-Type=int-N=1000]",
            "value": 594800.1796439197,
            "unit": "iter/sec",
            "range": "stddev: 1.8775723627490075e-7",
            "extra": "mean: 1.6812368829455553 usec\nrounds: 132118"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[BST-Type=int-N=5000]",
            "value": 456116.8032064778,
            "unit": "iter/sec",
            "range": "stddev: 2.2135418885948547e-7",
            "extra": "mean: 2.192420873272046 usec\nrounds: 101436"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[BST-Type=str-N=100]",
            "value": 487214.5284288336,
            "unit": "iter/sec",
            "range": "stddev: 3.110525006818447e-7",
            "extra": "mean: 2.05248395039613 usec\nrounds: 108850"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[BST-Type=str-N=1000]",
            "value": 350905.6232947258,
            "unit": "iter/sec",
            "range": "stddev: 4.836133289911198e-7",
            "extra": "mean: 2.8497690934981104 usec\nrounds: 391390"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[BST-Type=str-N=5000]",
            "value": 349415.2773914289,
            "unit": "iter/sec",
            "range": "stddev: 7.303788854081192e-7",
            "extra": "mean: 2.8619240906280132 usec\nrounds: 394556"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[BST-Type=int-N=100]",
            "value": 802374.5256475748,
            "unit": "iter/sec",
            "range": "stddev: 2.397357372823193e-7",
            "extra": "mean: 1.2463007835311408 usec\nrounds: 175871"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[BST-Type=int-N=1000]",
            "value": 883165.1171930326,
            "unit": "iter/sec",
            "range": "stddev: 1.4190248960507576e-7",
            "extra": "mean: 1.132291097703569 usec\nrounds: 194006"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[BST-Type=int-N=5000]",
            "value": 796497.0418709113,
            "unit": "iter/sec",
            "range": "stddev: 2.2012559255672937e-7",
            "extra": "mean: 1.2554974437206643 usec\nrounds: 177133"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[BST-Type=str-N=100]",
            "value": 2144962.934221653,
            "unit": "iter/sec",
            "range": "stddev: 1.1094379812479564e-7",
            "extra": "mean: 466.2085223224951 nsec\nrounds: 380301"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[BST-Type=str-N=1000]",
            "value": 1358894.5316042718,
            "unit": "iter/sec",
            "range": "stddev: 1.9052798148333736e-7",
            "extra": "mean: 735.8922835751121 nsec\nrounds: 295771"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[BST-Type=str-N=5000]",
            "value": 745270.1643245119,
            "unit": "iter/sec",
            "range": "stddev: 1.8746132179460909e-7",
            "extra": "mean: 1.3417952950073706 usec\nrounds: 162827"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[BST-Type=int-N=100]",
            "value": 997975.8759614454,
            "unit": "iter/sec",
            "range": "stddev: 2.2572445416073853e-7",
            "extra": "mean: 1.0020282294264924 usec\nrounds: 221804"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[BST-Type=int-N=1000]",
            "value": 805018.0649493042,
            "unit": "iter/sec",
            "range": "stddev: 1.8206155596483676e-7",
            "extra": "mean: 1.2422081485376042 usec\nrounds: 178891"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[BST-Type=int-N=5000]",
            "value": 800273.6668357832,
            "unit": "iter/sec",
            "range": "stddev: 1.811056945058224e-7",
            "extra": "mean: 1.2495725417955068 usec\nrounds: 175270"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[BST-Type=str-N=100]",
            "value": 1012509.8685521854,
            "unit": "iter/sec",
            "range": "stddev: 1.4458350988609918e-7",
            "extra": "mean: 987.6446946931258 nsec\nrounds: 224040"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[BST-Type=str-N=1000]",
            "value": 895040.6778453224,
            "unit": "iter/sec",
            "range": "stddev: 1.5639755119258984e-7",
            "extra": "mean: 1.117267655820238 usec\nrounds: 199025"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[BST-Type=str-N=5000]",
            "value": 426694.99083930015,
            "unit": "iter/sec",
            "range": "stddev: 2.172344197961047e-7",
            "extra": "mean: 2.3435944210008675 usec\nrounds: 90823"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST-Type=int-N=100]",
            "value": 4242.121195593138,
            "unit": "iter/sec",
            "range": "stddev: 0.000006850910078345521",
            "extra": "mean: 235.73112457014068 usec\nrounds: 8726"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST-Type=int-N=1000]",
            "value": 2906.2469716588253,
            "unit": "iter/sec",
            "range": "stddev: 0.000008446607817644698",
            "extra": "mean: 344.08638004677925 usec\nrounds: 5944"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST-Type=int-N=5000]",
            "value": 2123.7090841200165,
            "unit": "iter/sec",
            "range": "stddev: 0.00000948153935908831",
            "extra": "mean: 470.87428663251285 usec\nrounds: 4354"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST-Type=str-N=100]",
            "value": 3575.0992578851888,
            "unit": "iter/sec",
            "range": "stddev: 0.000012677720306975576",
            "extra": "mean: 279.71251365802334 usec\nrounds: 7285"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST-Type=str-N=1000]",
            "value": 2253.850855341628,
            "unit": "iter/sec",
            "range": "stddev: 0.000008728452681668678",
            "extra": "mean: 443.6850813042927 usec\nrounds: 4600"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[BST-Type=str-N=5000]",
            "value": 1934.0555334210949,
            "unit": "iter/sec",
            "range": "stddev: 0.000011517457323631164",
            "extra": "mean: 517.0482350272171 usec\nrounds: 3974"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST-Type=int-N=100]",
            "value": 3899.2562169018875,
            "unit": "iter/sec",
            "range": "stddev: 0.000018391804476432743",
            "extra": "mean: 256.45916666500545 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST-Type=int-N=1000]",
            "value": 2352.212820697399,
            "unit": "iter/sec",
            "range": "stddev: 0.000011656884732385899",
            "extra": "mean: 425.1315999984703 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST-Type=int-N=5000]",
            "value": 1910.758167186315,
            "unit": "iter/sec",
            "range": "stddev: 0.00001018981444916614",
            "extra": "mean: 523.352466666438 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST-Type=str-N=100]",
            "value": 3528.6437657147926,
            "unit": "iter/sec",
            "range": "stddev: 0.000006327321982777917",
            "extra": "mean: 283.39500000432355 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST-Type=str-N=1000]",
            "value": 2265.43617238462,
            "unit": "iter/sec",
            "range": "stddev: 0.000006747699942019991",
            "extra": "mean: 441.4160999942851 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[BST-Type=str-N=5000]",
            "value": 1760.270931540324,
            "unit": "iter/sec",
            "range": "stddev: 0.000015111524577723116",
            "extra": "mean: 568.0943666580636 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST-Type=int-N=100]",
            "value": 14086.862845570224,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034908056399268217",
            "extra": "mean: 70.98812638148611 usec\nrounds: 28770"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST-Type=int-N=1000]",
            "value": 8097.502816077516,
            "unit": "iter/sec",
            "range": "stddev: 0.000015581896243829347",
            "extra": "mean: 123.49486288717421 usec\nrounds: 16862"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST-Type=int-N=5000]",
            "value": 6713.2775209128295,
            "unit": "iter/sec",
            "range": "stddev: 0.000004837046530022804",
            "extra": "mean: 148.95853729938253 usec\nrounds: 13700"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST-Type=str-N=100]",
            "value": 12414.159710068836,
            "unit": "iter/sec",
            "range": "stddev: 0.000004346762600270129",
            "extra": "mean: 80.55317664303314 usec\nrounds: 25577"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST-Type=str-N=1000]",
            "value": 6776.839253574335,
            "unit": "iter/sec",
            "range": "stddev: 0.000004738374647662699",
            "extra": "mean: 147.56141655161235 usec\nrounds: 13751"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[BST-Type=str-N=5000]",
            "value": 5704.181481109072,
            "unit": "iter/sec",
            "range": "stddev: 0.000005961085481716356",
            "extra": "mean: 175.30999027849455 usec\nrounds: 11624"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST-Type=int-N=100]",
            "value": 9413.192608587015,
            "unit": "iter/sec",
            "range": "stddev: 0.000004360808209892117",
            "extra": "mean: 106.23388276234442 usec\nrounds: 19678"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST-Type=int-N=1000]",
            "value": 6847.274548888699,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048239321721317804",
            "extra": "mean: 146.04350867781375 usec\nrounds: 14174"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST-Type=int-N=5000]",
            "value": 5119.017436673101,
            "unit": "iter/sec",
            "range": "stddev: 0.000009803099668757748",
            "extra": "mean: 195.3499890107641 usec\nrounds: 10465"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST-Type=str-N=100]",
            "value": 9872.209291536748,
            "unit": "iter/sec",
            "range": "stddev: 0.000003863687762985718",
            "extra": "mean: 101.29444893933523 usec\nrounds: 20319"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST-Type=str-N=1000]",
            "value": 6852.44494580432,
            "unit": "iter/sec",
            "range": "stddev: 0.00000496285982296132",
            "extra": "mean: 145.93331400820512 usec\nrounds: 14006"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[BST-Type=str-N=5000]",
            "value": 5177.499299895931,
            "unit": "iter/sec",
            "range": "stddev: 0.00001510934368880226",
            "extra": "mean: 193.1434350981178 usec\nrounds: 10747"
          }
        ]
      }
    ]
  }
}