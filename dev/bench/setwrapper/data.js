window.BENCHMARK_DATA = {
  "lastUpdate": 1782851171720,
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
          "id": "78838fae4a13fb2c9921f52a42a4c9732a661829",
          "message": "Merge pull request #27 from SamuelRoettgermann/parameterize-benchmarks\n\nParameterize Benchmarks",
          "timestamp": "2026-06-30T22:18:13+02:00",
          "tree_id": "7856793507b67588799d313fd7296aa01cc29672",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/78838fae4a13fb2c9921f52a42a4c9732a661829"
        },
        "date": 1782851170856,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[SetWrapper-Type=int-N=100]",
            "value": 148799.5087339095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011424230721030408",
            "extra": "mean: 6.720452295230682 usec\nrounds: 318878"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[SetWrapper-Type=int-N=1000]",
            "value": 17437.757861399776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033170506780496505",
            "extra": "mean: 57.34682222039567 usec\nrounds: 36489"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[SetWrapper-Type=int-N=5000]",
            "value": 3089.4998369186965,
            "unit": "iter/sec",
            "range": "stddev: 0.000014072175633903739",
            "extra": "mean: 323.6769874690613 usec\nrounds: 6464"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[SetWrapper-Type=str-N=100]",
            "value": 143061.16487684275,
            "unit": "iter/sec",
            "range": "stddev: 9.399083901885914e-7",
            "extra": "mean: 6.99001717804319 usec\nrounds: 297531"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[SetWrapper-Type=str-N=1000]",
            "value": 16623.553051142855,
            "unit": "iter/sec",
            "range": "stddev: 0.000003858544238045629",
            "extra": "mean: 60.15561155448961 usec\nrounds: 34324"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[SetWrapper-Type=str-N=5000]",
            "value": 2426.376396085299,
            "unit": "iter/sec",
            "range": "stddev: 0.000012267818205351556",
            "extra": "mean: 412.1372107037449 usec\nrounds: 5045"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[SetWrapper-Type=int-N=100]",
            "value": 151964.90506321605,
            "unit": "iter/sec",
            "range": "stddev: 9.258867008207759e-7",
            "extra": "mean: 6.580466717522765 usec\nrounds: 309502"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[SetWrapper-Type=int-N=1000]",
            "value": 18491.82621179325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030312078741530917",
            "extra": "mean: 54.07794711818378 usec\nrounds: 38501"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[SetWrapper-Type=int-N=5000]",
            "value": 3533.186302798022,
            "unit": "iter/sec",
            "range": "stddev: 0.000009988541835813211",
            "extra": "mean: 283.0306455133923 usec\nrounds: 7422"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[SetWrapper-Type=str-N=100]",
            "value": 138775.15061276272,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017490924029587618",
            "extra": "mean: 7.205901024675473 usec\nrounds: 288476"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[SetWrapper-Type=str-N=1000]",
            "value": 16444.17250487956,
            "unit": "iter/sec",
            "range": "stddev: 0.000004375252237357026",
            "extra": "mean: 60.81181644763608 usec\nrounds: 34230"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence[SetWrapper-Type=str-N=5000]",
            "value": 2508.236421955864,
            "unit": "iter/sec",
            "range": "stddev: 0.000011626815507209015",
            "extra": "mean: 398.68649990347535 usec\nrounds: 5199"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[SetWrapper-Type=int-N=100]",
            "value": 236913.14520338038,
            "unit": "iter/sec",
            "range": "stddev: 5.24471370518759e-7",
            "extra": "mean: 4.220956161556761 usec\nrounds: 251446"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[SetWrapper-Type=int-N=1000]",
            "value": 30232.3038438945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022194466748962646",
            "extra": "mean: 33.077201299759786 usec\nrounds: 64625"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[SetWrapper-Type=int-N=5000]",
            "value": 5476.641884054356,
            "unit": "iter/sec",
            "range": "stddev: 0.00000738574733979656",
            "extra": "mean: 182.59364427525804 usec\nrounds: 11433"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[SetWrapper-Type=str-N=100]",
            "value": 124012.93040594763,
            "unit": "iter/sec",
            "range": "stddev: 0.000002991625603386866",
            "extra": "mean: 8.063675269397876 usec\nrounds: 263366"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[SetWrapper-Type=str-N=1000]",
            "value": 9978.708344730805,
            "unit": "iter/sec",
            "range": "stddev: 0.000005191503575400296",
            "extra": "mean: 100.21337085455993 usec\nrounds: 20655"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[SetWrapper-Type=str-N=5000]",
            "value": 995.8311024158584,
            "unit": "iter/sec",
            "range": "stddev: 0.00002204231020878505",
            "extra": "mean: 1.0041863500487462 msec\nrounds: 2054"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[SetWrapper-Type=int-N=100]",
            "value": 368169.84194419684,
            "unit": "iter/sec",
            "range": "stddev: 4.3425051972009626e-7",
            "extra": "mean: 2.7161377333876495 usec\nrounds: 386101"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[SetWrapper-Type=int-N=1000]",
            "value": 71220.86796174775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017915336684876797",
            "extra": "mean: 14.040828602890565 usec\nrounds: 146146"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[SetWrapper-Type=int-N=5000]",
            "value": 12372.858492826588,
            "unit": "iter/sec",
            "range": "stddev: 0.000005654153231728602",
            "extra": "mean: 80.82206715447121 usec\nrounds: 25970"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[SetWrapper-Type=str-N=100]",
            "value": 158883.6341935159,
            "unit": "iter/sec",
            "range": "stddev: 9.838729013875935e-7",
            "extra": "mean: 6.2939144429565825 usec\nrounds: 328354"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[SetWrapper-Type=str-N=1000]",
            "value": 10703.50054102837,
            "unit": "iter/sec",
            "range": "stddev: 0.000006247506144288674",
            "extra": "mean: 93.42737884366213 usec\nrounds: 25789"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_partial_sweep[SetWrapper-Type=str-N=5000]",
            "value": 1144.1563036700609,
            "unit": "iter/sec",
            "range": "stddev: 0.00002729744169581994",
            "extra": "mean: 874.0064594254676 usec\nrounds: 2366"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[SetWrapper-Type=int-N=100]",
            "value": 265024.9277567615,
            "unit": "iter/sec",
            "range": "stddev: 4.5311902752603154e-7",
            "extra": "mean: 3.773229969211782 usec\nrounds: 268349"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[SetWrapper-Type=int-N=1000]",
            "value": 31596.61899343791,
            "unit": "iter/sec",
            "range": "stddev: 0.000002173801450650816",
            "extra": "mean: 31.648955864793106 usec\nrounds: 64982"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[SetWrapper-Type=int-N=5000]",
            "value": 5392.884413698343,
            "unit": "iter/sec",
            "range": "stddev: 0.000006278211102966791",
            "extra": "mean: 185.42952588783893 usec\nrounds: 11067"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[SetWrapper-Type=str-N=100]",
            "value": 212702.82254431737,
            "unit": "iter/sec",
            "range": "stddev: 5.734293832427675e-7",
            "extra": "mean: 4.701395063958996 usec\nrounds: 221068"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[SetWrapper-Type=str-N=1000]",
            "value": 22312.321264919727,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027200867057092338",
            "extra": "mean: 44.81828618935483 usec\nrounds: 46906"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[SetWrapper-Type=str-N=5000]",
            "value": 3254.7120710712065,
            "unit": "iter/sec",
            "range": "stddev: 0.000010908664463623347",
            "extra": "mean: 307.2468403236896 usec\nrounds: 6557"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[SetWrapper-Type=int-N=100]",
            "value": 476367.08192108007,
            "unit": "iter/sec",
            "range": "stddev: 1.638217125377082e-7",
            "extra": "mean: 2.0992214574676895 usec\nrounds: 96675"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[SetWrapper-Type=int-N=1000]",
            "value": 62085.52128546287,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015047046227863627",
            "extra": "mean: 16.1068149110338 usec\nrounds: 126912"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[SetWrapper-Type=int-N=5000]",
            "value": 10414.80969671232,
            "unit": "iter/sec",
            "range": "stddev: 0.000004898914062766512",
            "extra": "mean: 96.01711688651149 usec\nrounds: 22355"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[SetWrapper-Type=str-N=100]",
            "value": 448634.97577956476,
            "unit": "iter/sec",
            "range": "stddev: 1.844080786982325e-7",
            "extra": "mean: 2.22898359242358 usec\nrounds: 93853"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[SetWrapper-Type=str-N=1000]",
            "value": 46985.621929469096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016962798302839418",
            "extra": "mean: 21.283106595909633 usec\nrounds: 103972"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[SetWrapper-Type=str-N=5000]",
            "value": 6746.646712775592,
            "unit": "iter/sec",
            "range": "stddev: 0.000006544481114214731",
            "extra": "mean: 148.22178225315682 usec\nrounds: 14076"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[SetWrapper-Type=int-N=100]",
            "value": 475762.2754348632,
            "unit": "iter/sec",
            "range": "stddev: 1.643560963823902e-7",
            "extra": "mean: 2.1018900649194294 usec\nrounds: 95017"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[SetWrapper-Type=int-N=1000]",
            "value": 66417.04552192238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014436508608627277",
            "extra": "mean: 15.056375846617996 usec\nrounds: 120049"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[SetWrapper-Type=int-N=5000]",
            "value": 10491.299977714862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045981497815718575",
            "extra": "mean: 95.3170724432772 usec\nrounds: 20692"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[SetWrapper-Type=str-N=100]",
            "value": 445442.6654903885,
            "unit": "iter/sec",
            "range": "stddev: 2.1093916986942197e-7",
            "extra": "mean: 2.244957830653915 usec\nrounds: 90331"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[SetWrapper-Type=str-N=1000]",
            "value": 44490.062818964165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035919536849645573",
            "extra": "mean: 22.476929377895683 usec\nrounds: 100266"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[SetWrapper-Type=str-N=5000]",
            "value": 6869.1504952880005,
            "unit": "iter/sec",
            "range": "stddev: 0.000008169454838315719",
            "extra": "mean: 145.57840895842438 usec\nrounds: 14422"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[SetWrapper-Type=int-N=100]",
            "value": 205698.39504502076,
            "unit": "iter/sec",
            "range": "stddev: 6.734977848755659e-7",
            "extra": "mean: 4.86148664301018 usec\nrounds: 212360"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[SetWrapper-Type=int-N=1000]",
            "value": 194847.36922183717,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017151213771505722",
            "extra": "mean: 5.132222231142789 usec\nrounds: 398486"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[SetWrapper-Type=int-N=5000]",
            "value": 201037.09506201153,
            "unit": "iter/sec",
            "range": "stddev: 5.191934898725469e-7",
            "extra": "mean: 4.974206375651925 usec\nrounds: 207728"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[SetWrapper-Type=str-N=100]",
            "value": 213363.91718043617,
            "unit": "iter/sec",
            "range": "stddev: 5.350507404095831e-7",
            "extra": "mean: 4.686828087967314 usec\nrounds: 215587"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[SetWrapper-Type=str-N=1000]",
            "value": 171342.95550337262,
            "unit": "iter/sec",
            "range": "stddev: 8.23632911085621e-7",
            "extra": "mean: 5.836248108725524 usec\nrounds: 352672"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[SetWrapper-Type=str-N=5000]",
            "value": 214241.731927262,
            "unit": "iter/sec",
            "range": "stddev: 4.777451276155815e-7",
            "extra": "mean: 4.667624701332762 usec\nrounds: 218891"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[SetWrapper-Type=int-N=100]",
            "value": 116166.95509128626,
            "unit": "iter/sec",
            "range": "stddev: 0.000004384154527277193",
            "extra": "mean: 8.6083000041981 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[SetWrapper-Type=int-N=1000]",
            "value": 125148.61396833304,
            "unit": "iter/sec",
            "range": "stddev: 2.1353700468192926e-7",
            "extra": "mean: 7.990500000687462 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[SetWrapper-Type=int-N=5000]",
            "value": 118526.94702539941,
            "unit": "iter/sec",
            "range": "stddev: 2.3137033827871685e-7",
            "extra": "mean: 8.436900005411493 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[SetWrapper-Type=str-N=100]",
            "value": 139170.45126710832,
            "unit": "iter/sec",
            "range": "stddev: 2.1832412919827483e-7",
            "extra": "mean: 7.185433336568773 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[SetWrapper-Type=str-N=1000]",
            "value": 131314.5904138382,
            "unit": "iter/sec",
            "range": "stddev: 2.794526842072245e-7",
            "extra": "mean: 7.615299997117593 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[SetWrapper-Type=str-N=5000]",
            "value": 100124.15389612314,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031464018183643776",
            "extra": "mean: 9.987600005464023 usec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[SetWrapper-Type=int-N=100]",
            "value": 181039.19047240063,
            "unit": "iter/sec",
            "range": "stddev: 8.226931408956162e-7",
            "extra": "mean: 5.523665883561547 usec\nrounds: 376719"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[SetWrapper-Type=int-N=1000]",
            "value": 178260.4829074281,
            "unit": "iter/sec",
            "range": "stddev: 8.32670053265759e-7",
            "extra": "mean: 5.60976826546188 usec\nrounds: 369686"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[SetWrapper-Type=int-N=5000]",
            "value": 179049.5891938122,
            "unit": "iter/sec",
            "range": "stddev: 8.313325605033287e-7",
            "extra": "mean: 5.585044928070458 usec\nrounds: 372440"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[SetWrapper-Type=str-N=100]",
            "value": 178763.77004086022,
            "unit": "iter/sec",
            "range": "stddev: 8.367538398657905e-7",
            "extra": "mean: 5.593974661484421 usec\nrounds: 369004"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[SetWrapper-Type=str-N=1000]",
            "value": 176078.723759742,
            "unit": "iter/sec",
            "range": "stddev: 8.326883447981951e-7",
            "extra": "mean: 5.67927787439266 usec\nrounds: 367648"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[SetWrapper-Type=str-N=5000]",
            "value": 178891.33065810232,
            "unit": "iter/sec",
            "range": "stddev: 8.190576064301578e-7",
            "extra": "mean: 5.589985810498572 usec\nrounds: 369004"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[SetWrapper-Type=int-N=100]",
            "value": 182848.6815883735,
            "unit": "iter/sec",
            "range": "stddev: 8.021886424968265e-7",
            "extra": "mean: 5.469003064792047 usec\nrounds: 382410"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[SetWrapper-Type=int-N=1000]",
            "value": 178630.55579248164,
            "unit": "iter/sec",
            "range": "stddev: 8.672080745091283e-7",
            "extra": "mean: 5.598146384103055 usec\nrounds: 371058"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[SetWrapper-Type=int-N=5000]",
            "value": 178608.36892694648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010076817117368229",
            "extra": "mean: 5.598841790045208 usec\nrounds: 369686"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[SetWrapper-Type=str-N=100]",
            "value": 188772.99075240007,
            "unit": "iter/sec",
            "range": "stddev: 8.032615468062337e-7",
            "extra": "mean: 5.297367997478135 usec\nrounds: 389864"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[SetWrapper-Type=str-N=1000]",
            "value": 170717.3306780348,
            "unit": "iter/sec",
            "range": "stddev: 8.842673234779793e-7",
            "extra": "mean: 5.8576361054165895 usec\nrounds: 371058"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[SetWrapper-Type=str-N=5000]",
            "value": 186602.6088232647,
            "unit": "iter/sec",
            "range": "stddev: 8.279613528893607e-7",
            "extra": "mean: 5.35898188297636 usec\nrounds: 386101"
          }
        ]
      }
    ]
  }
}