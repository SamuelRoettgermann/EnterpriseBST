window.BENCHMARK_DATA = {
  "lastUpdate": 1782851191865,
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
          "id": "78838fae4a13fb2c9921f52a42a4c9732a661829",
          "message": "Merge pull request #27 from SamuelRoettgermann/parameterize-benchmarks\n\nParameterize Benchmarks",
          "timestamp": "2026-06-30T22:18:13+02:00",
          "tree_id": "7856793507b67588799d313fd7296aa01cc29672",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/78838fae4a13fb2c9921f52a42a4c9732a661829"
        },
        "date": 1782851191546,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[AVL-Type=int-N=100]",
            "value": 2178.7910959038577,
            "unit": "iter/sec",
            "range": "stddev: 0.000011307236232162252",
            "extra": "mean: 458.97011506977736 usec\nrounds: 4519"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[AVL-Type=int-N=1000]",
            "value": 156.92165372593774,
            "unit": "iter/sec",
            "range": "stddev: 0.00010449247987607941",
            "extra": "mean: 6.372606815286889 msec\nrounds: 314"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[AVL-Type=int-N=5000]",
            "value": 26.358680300285446,
            "unit": "iter/sec",
            "range": "stddev: 0.0001415046933694127",
            "extra": "mean: 37.938166425925765 msec\nrounds: 54"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[AVL-Type=str-N=100]",
            "value": 2163.938943818242,
            "unit": "iter/sec",
            "range": "stddev: 0.00002129969932386356",
            "extra": "mean: 462.12024736498023 usec\nrounds: 4459"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[AVL-Type=str-N=1000]",
            "value": 153.7914676563398,
            "unit": "iter/sec",
            "range": "stddev: 0.00032680832287440076",
            "extra": "mean: 6.502311313099539 msec\nrounds: 313"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[AVL-Type=str-N=5000]",
            "value": 25.786228350611623,
            "unit": "iter/sec",
            "range": "stddev: 0.00027862850941607573",
            "extra": "mean: 38.78039030769232 msec\nrounds: 52"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[AVL-Type=int-N=100]",
            "value": 2082.1335447519878,
            "unit": "iter/sec",
            "range": "stddev: 0.000026773943389856708",
            "extra": "mean: 480.2765905772458 usec\nrounds: 4245"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[AVL-Type=int-N=1000]",
            "value": 155.22046517997396,
            "unit": "iter/sec",
            "range": "stddev: 0.00004171238842880767",
            "extra": "mean: 6.442449446601818 msec\nrounds: 309"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[AVL-Type=int-N=5000]",
            "value": 25.94727313375062,
            "unit": "iter/sec",
            "range": "stddev: 0.001714759998585731",
            "extra": "mean: 38.539695283018446 msec\nrounds: 53"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[AVL-Type=str-N=100]",
            "value": 2020.0275795950372,
            "unit": "iter/sec",
            "range": "stddev: 0.000022324763110371523",
            "extra": "mean: 495.04274600076207 usec\nrounds: 4126"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[AVL-Type=str-N=1000]",
            "value": 149.55536021615765,
            "unit": "iter/sec",
            "range": "stddev: 0.000045879255918983886",
            "extra": "mean: 6.686487188119935 msec\nrounds: 303"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[AVL-Type=str-N=5000]",
            "value": 25.23665830966351,
            "unit": "iter/sec",
            "range": "stddev: 0.00021510028257242585",
            "extra": "mean: 39.62489754901838 msec\nrounds: 51"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[AVL-Type=int-N=100]",
            "value": 14011.180214918826,
            "unit": "iter/sec",
            "range": "stddev: 0.000003069981409078814",
            "extra": "mean: 71.37157503228886 usec\nrounds: 29374"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[AVL-Type=int-N=1000]",
            "value": 1344.3101038254215,
            "unit": "iter/sec",
            "range": "stddev: 0.000013470681740832621",
            "extra": "mean: 743.8759830446568 usec\nrounds: 2772"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[AVL-Type=int-N=5000]",
            "value": 254.901926410542,
            "unit": "iter/sec",
            "range": "stddev: 0.00028191411328562114",
            "extra": "mean: 3.923077452107647 msec\nrounds: 522"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[AVL-Type=str-N=100]",
            "value": 14037.412596213499,
            "unit": "iter/sec",
            "range": "stddev: 0.000003249275306257123",
            "extra": "mean: 71.23819957174612 usec\nrounds: 28957"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[AVL-Type=str-N=1000]",
            "value": 1336.4909850547774,
            "unit": "iter/sec",
            "range": "stddev: 0.000013384353348141863",
            "extra": "mean: 748.2280173846544 usec\nrounds: 2761"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[AVL-Type=str-N=5000]",
            "value": 254.37941569287645,
            "unit": "iter/sec",
            "range": "stddev: 0.00005497474296007666",
            "extra": "mean: 3.9311356906619537 msec\nrounds: 514"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[AVL-Type=int-N=100]",
            "value": 118041.32214578844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010689087742652773",
            "extra": "mean: 8.471609617900903 usec\nrounds: 248016"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[AVL-Type=int-N=1000]",
            "value": 15614.497030189252,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034871853138662574",
            "extra": "mean: 64.0430491015233 usec\nrounds: 32667"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[AVL-Type=int-N=5000]",
            "value": 3069.1756576021007,
            "unit": "iter/sec",
            "range": "stddev: 0.00004415357114643211",
            "extra": "mean: 325.82038682702324 usec\nrounds: 6574"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[AVL-Type=str-N=100]",
            "value": 106367.7398468219,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014538251692500353",
            "extra": "mean: 9.401346700043458 usec\nrounds: 222792"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[AVL-Type=str-N=1000]",
            "value": 15513.674095117212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034241770925371",
            "extra": "mean: 64.45926309066535 usec\nrounds: 32141"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[AVL-Type=str-N=5000]",
            "value": 3280.540382564232,
            "unit": "iter/sec",
            "range": "stddev: 0.00001211685081971581",
            "extra": "mean: 304.8278281574911 usec\nrounds: 6698"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[AVL-Type=int-N=100]",
            "value": 509776.33418038714,
            "unit": "iter/sec",
            "range": "stddev: 1.9327734655208904e-7",
            "extra": "mean: 1.9616446134318672 usec\nrounds: 111583"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[AVL-Type=int-N=1000]",
            "value": 334248.7178745316,
            "unit": "iter/sec",
            "range": "stddev: 5.067806464551691e-7",
            "extra": "mean: 2.991784101249341 usec\nrounds: 369004"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[AVL-Type=int-N=5000]",
            "value": 295403.49139331956,
            "unit": "iter/sec",
            "range": "stddev: 5.700661276449186e-7",
            "extra": "mean: 3.385200341686329 usec\nrounds: 322529"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[AVL-Type=str-N=100]",
            "value": 460526.5037963557,
            "unit": "iter/sec",
            "range": "stddev: 2.1220455962264296e-7",
            "extra": "mean: 2.1714276849573 usec\nrounds: 101333"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[AVL-Type=str-N=1000]",
            "value": 311992.06632752815,
            "unit": "iter/sec",
            "range": "stddev: 5.301708197662779e-7",
            "extra": "mean: 3.2052097086026654 usec\nrounds: 342995"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[AVL-Type=str-N=5000]",
            "value": 317941.5285156856,
            "unit": "iter/sec",
            "range": "stddev: 5.330348200608249e-7",
            "extra": "mean: 3.145232410086577 usec\nrounds: 342995"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[AVL-Type=int-N=100]",
            "value": 903407.2529906951,
            "unit": "iter/sec",
            "range": "stddev: 1.782327515222947e-7",
            "extra": "mean: 1.1069204909408668 usec\nrounds: 195906"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[AVL-Type=int-N=1000]",
            "value": 748229.6361565933,
            "unit": "iter/sec",
            "range": "stddev: 1.9165340243299978e-7",
            "extra": "mean: 1.3364880935973977 usec\nrounds: 163895"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[AVL-Type=int-N=5000]",
            "value": 593157.8524470284,
            "unit": "iter/sec",
            "range": "stddev: 2.209834491770601e-7",
            "extra": "mean: 1.6858918682009765 usec\nrounds: 129467"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[AVL-Type=str-N=100]",
            "value": 898580.607115895,
            "unit": "iter/sec",
            "range": "stddev: 1.6305669379458197e-7",
            "extra": "mean: 1.1128662159865914 usec\nrounds: 197259"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[AVL-Type=str-N=1000]",
            "value": 745822.3877891273,
            "unit": "iter/sec",
            "range": "stddev: 1.9133648230194622e-7",
            "extra": "mean: 1.3408017999625113 usec\nrounds: 163226"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[AVL-Type=str-N=5000]",
            "value": 556799.6461972164,
            "unit": "iter/sec",
            "range": "stddev: 2.3481877994505644e-7",
            "extra": "mean: 1.795978152697683 usec\nrounds: 120912"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[AVL-Type=int-N=100]",
            "value": 977266.3931645425,
            "unit": "iter/sec",
            "range": "stddev: 1.408409062685957e-7",
            "extra": "mean: 1.0232624461400361 usec\nrounds: 216521"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[AVL-Type=int-N=1000]",
            "value": 730871.5921374032,
            "unit": "iter/sec",
            "range": "stddev: 1.5575459375212104e-7",
            "extra": "mean: 1.368229400017508 usec\nrounds: 160721"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[AVL-Type=int-N=5000]",
            "value": 555229.7759979743,
            "unit": "iter/sec",
            "range": "stddev: 1.912477015956747e-7",
            "extra": "mean: 1.8010561450934295 usec\nrounds: 119396"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[AVL-Type=str-N=100]",
            "value": 855994.5792492983,
            "unit": "iter/sec",
            "range": "stddev: 3.8088327329832275e-7",
            "extra": "mean: 1.1682316970710183 usec\nrounds: 192308"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[AVL-Type=str-N=1000]",
            "value": 738480.9334193312,
            "unit": "iter/sec",
            "range": "stddev: 1.6235775425945166e-7",
            "extra": "mean: 1.3541311017601732 usec\nrounds: 161904"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[AVL-Type=str-N=5000]",
            "value": 588940.2143821847,
            "unit": "iter/sec",
            "range": "stddev: 1.730560797228241e-7",
            "extra": "mean: 1.697965218844886 usec\nrounds: 127641"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[AVL-Type=int-N=100]",
            "value": 2141.6181003840097,
            "unit": "iter/sec",
            "range": "stddev: 0.000017546071240981733",
            "extra": "mean: 466.93665869778175 usec\nrounds: 4392"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[AVL-Type=int-N=1000]",
            "value": 1474.8015517147865,
            "unit": "iter/sec",
            "range": "stddev: 0.000014753582559653577",
            "extra": "mean: 678.0573283485337 usec\nrounds: 3009"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[AVL-Type=int-N=5000]",
            "value": 1212.758311897793,
            "unit": "iter/sec",
            "range": "stddev: 0.000010814137233035608",
            "extra": "mean: 824.5666017618493 usec\nrounds: 2496"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[AVL-Type=str-N=100]",
            "value": 2029.586732437408,
            "unit": "iter/sec",
            "range": "stddev: 0.000009793194500050713",
            "extra": "mean: 492.7111436125038 usec\nrounds: 4164"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[AVL-Type=str-N=1000]",
            "value": 1399.0107766143444,
            "unit": "iter/sec",
            "range": "stddev: 0.000011007395249590755",
            "extra": "mean: 714.7907769660184 usec\nrounds: 2874"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[AVL-Type=str-N=5000]",
            "value": 1191.3200018434952,
            "unit": "iter/sec",
            "range": "stddev: 0.000029778594563485124",
            "extra": "mean: 839.4050284160098 usec\nrounds: 2393"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[AVL-Type=int-N=100]",
            "value": 2557.8212546649092,
            "unit": "iter/sec",
            "range": "stddev: 0.000007376621427533353",
            "extra": "mean: 390.9577333350474 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[AVL-Type=int-N=1000]",
            "value": 1387.516596432351,
            "unit": "iter/sec",
            "range": "stddev: 0.000018573273297544206",
            "extra": "mean: 720.7121000002795 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[AVL-Type=int-N=5000]",
            "value": 1169.6967140217785,
            "unit": "iter/sec",
            "range": "stddev: 0.000009960517809239203",
            "extra": "mean: 854.9224666637656 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[AVL-Type=str-N=100]",
            "value": 2399.153194866825,
            "unit": "iter/sec",
            "range": "stddev: 0.000008373654631861749",
            "extra": "mean: 416.81373333706995 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[AVL-Type=str-N=1000]",
            "value": 1341.6515730802073,
            "unit": "iter/sec",
            "range": "stddev: 0.000008322245161236353",
            "extra": "mean: 745.3500000034788 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[AVL-Type=str-N=5000]",
            "value": 1104.3534089910997,
            "unit": "iter/sec",
            "range": "stddev: 0.000014475703947606682",
            "extra": "mean: 905.5072333353564 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[AVL-Type=int-N=100]",
            "value": 16902.208773509203,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034402626422617774",
            "extra": "mean: 59.16386511372987 usec\nrounds: 34555"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[AVL-Type=int-N=1000]",
            "value": 10557.804835877014,
            "unit": "iter/sec",
            "range": "stddev: 0.000006533911796853844",
            "extra": "mean: 94.71665895943153 usec\nrounds: 21452"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[AVL-Type=int-N=5000]",
            "value": 8690.989465513252,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043659109565406115",
            "extra": "mean: 115.06169740144131 usec\nrounds: 17548"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[AVL-Type=str-N=100]",
            "value": 15079.073104411716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030464666337657254",
            "extra": "mean: 66.31707354130592 usec\nrounds: 31003"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[AVL-Type=str-N=1000]",
            "value": 9564.777668306495,
            "unit": "iter/sec",
            "range": "stddev: 0.000004118630110635662",
            "extra": "mean: 104.55026082974874 usec\nrounds: 19599"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[AVL-Type=str-N=5000]",
            "value": 7553.271379246171,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057717536122845694",
            "extra": "mean: 132.39296588067273 usec\nrounds: 15475"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[AVL-Type=int-N=100]",
            "value": 12411.843001239557,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033512759345056034",
            "extra": "mean: 80.56821214223633 usec\nrounds: 25926"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[AVL-Type=int-N=1000]",
            "value": 8488.841756521055,
            "unit": "iter/sec",
            "range": "stddev: 0.000004580937165957317",
            "extra": "mean: 117.8017011840053 usec\nrounds: 17479"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[AVL-Type=int-N=5000]",
            "value": 7108.125490101184,
            "unit": "iter/sec",
            "range": "stddev: 0.000009321917710021198",
            "extra": "mean: 140.68406662102487 usec\nrounds: 14680"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[AVL-Type=str-N=100]",
            "value": 10727.661431028033,
            "unit": "iter/sec",
            "range": "stddev: 0.000004306642363914712",
            "extra": "mean: 93.21696125752636 usec\nrounds: 22456"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[AVL-Type=str-N=1000]",
            "value": 7808.8611384432625,
            "unit": "iter/sec",
            "range": "stddev: 0.000004456530398672769",
            "extra": "mean: 128.05964688973268 usec\nrounds: 15995"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[AVL-Type=str-N=5000]",
            "value": 6275.749579530144,
            "unit": "iter/sec",
            "range": "stddev: 0.000006332762104721393",
            "extra": "mean: 159.3435154362658 usec\nrounds: 12989"
          }
        ]
      }
    ]
  }
}