window.BENCHMARK_DATA = {
  "lastUpdate": 1782510029891,
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
          "id": "303b684771ec6d68cf006d8f87bb8e072882369f",
          "message": "Merge pull request #23 from SamuelRoettgermann/add-tree-trie\n\nAdd Tree - Trie",
          "timestamp": "2026-06-26T23:13:12+02:00",
          "tree_id": "1c40088b874b04fc41e7dc7e0400e5560ec97a73",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/303b684771ec6d68cf006d8f87bb8e072882369f"
        },
        "date": 1782508508277,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[Trie]",
            "value": 14.644055430872067,
            "unit": "iter/sec",
            "range": "stddev: 0.0013100038743256344",
            "extra": "mean: 68.28709469999932 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[Trie]",
            "value": 189.85786618695644,
            "unit": "iter/sec",
            "range": "stddev: 0.00029460799291592066",
            "extra": "mean: 5.267098067010203 msec\nrounds: 388"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[Trie]",
            "value": 194.1379269473048,
            "unit": "iter/sec",
            "range": "stddev: 0.00016809685048393202",
            "extra": "mean: 5.150977017857164 msec\nrounds: 392"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[Trie]",
            "value": 69.05077669579045,
            "unit": "iter/sec",
            "range": "stddev: 0.00014690675184683634",
            "extra": "mean: 14.482096333334413 msec\nrounds: 141"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[Trie]",
            "value": 30.108626988359617,
            "unit": "iter/sec",
            "range": "stddev: 0.0002928135299328822",
            "extra": "mean: 33.213072133332844 msec\nrounds: 60"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[Trie]",
            "value": 70.00326512125848,
            "unit": "iter/sec",
            "range": "stddev: 0.000982095136863977",
            "extra": "mean: 14.285047965517276 msec\nrounds: 145"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[Trie]",
            "value": 50.308989822473585,
            "unit": "iter/sec",
            "range": "stddev: 0.001292090046408523",
            "extra": "mean: 19.877163177569688 msec\nrounds: 107"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[Trie]",
            "value": 11720.68500113065,
            "unit": "iter/sec",
            "range": "stddev: 0.000004000399475067773",
            "extra": "mean: 85.31924541129924 usec\nrounds: 24571"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[Trie]",
            "value": 15.76062088146342,
            "unit": "iter/sec",
            "range": "stddev: 0.0010995487618972967",
            "extra": "mean: 63.449277000002745 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[Trie]",
            "value": 12649.899879542834,
            "unit": "iter/sec",
            "range": "stddev: 0.000004574751602199903",
            "extra": "mean: 79.05200906903461 usec\nrounds: 26243"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[Trie]",
            "value": 13360.257034652044,
            "unit": "iter/sec",
            "range": "stddev: 0.000007220656165223982",
            "extra": "mean: 74.84885937496068 usec\nrounds: 28160"
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
          "id": "e69c240d2c2dec42bdd8ced7c74d99a481074e89",
          "message": "simplified trie code a bit",
          "timestamp": "2026-06-26T23:38:22+02:00",
          "tree_id": "01a199f478e7724b64d1d81dc1cc071d2f37f133",
          "url": "https://github.com/SamuelRoettgermann/EnterpriseBST/commit/e69c240d2c2dec42bdd8ced7c74d99a481074e89"
        },
        "date": 1782510028774,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence[Trie]",
            "value": 14.472400568898243,
            "unit": "iter/sec",
            "range": "stddev: 0.0006346090301301242",
            "extra": "mean: 69.09703716666324 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_random_sequence_small[Trie]",
            "value": 191.0459864603237,
            "unit": "iter/sec",
            "range": "stddev: 0.000050256194758196605",
            "extra": "mean: 5.234341838464528 msec\nrounds: 390"
          },
          {
            "name": "test/benchmark/test_benchmark_insert.py::test_insertion_sorted_sequence_small[Trie]",
            "value": 190.50019917094144,
            "unit": "iter/sec",
            "range": "stddev: 0.00012687134139616988",
            "extra": "mean: 5.249338343749817 msec\nrounds: 384"
          },
          {
            "name": "test/benchmark/test_benchmark_iteration.py::test_iteration_full_sweep[Trie]",
            "value": 67.42774442046354,
            "unit": "iter/sec",
            "range": "stddev: 0.00024474012669500986",
            "extra": "mean: 14.830690372263314 msec\nrounds: 137"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_mixed_lookup[Trie]",
            "value": 28.623933819847288,
            "unit": "iter/sec",
            "range": "stddev: 0.00014996249637684255",
            "extra": "mean: 34.9357990517229 msec\nrounds: 58"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_minimum_lookup[Trie]",
            "value": 68.7506334450025,
            "unit": "iter/sec",
            "range": "stddev: 0.00011208816012213674",
            "extra": "mean: 14.54532052857311 msec\nrounds: 140"
          },
          {
            "name": "test/benchmark/test_benchmark_min_max.py::test_only_maximum_lookup[Trie]",
            "value": 48.53347497937742,
            "unit": "iter/sec",
            "range": "stddev: 0.0020969241246310273",
            "extra": "mean: 20.60433547000116 msec\nrounds: 100"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_miss[Trie]",
            "value": 11427.2398276798,
            "unit": "iter/sec",
            "range": "stddev: 0.000003845776077232188",
            "extra": "mean: 87.51019625734425 usec\nrounds: 23780"
          },
          {
            "name": "test/benchmark/test_benchmark_remove.py::test_remove_hit[Trie]",
            "value": 15.488540992680575,
            "unit": "iter/sec",
            "range": "stddev: 0.0005236139128721384",
            "extra": "mean: 64.56386050000256 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_hit[Trie]",
            "value": 11968.856971408895,
            "unit": "iter/sec",
            "range": "stddev: 0.000004323243230818584",
            "extra": "mean: 83.55016710357485 usec\nrounds: 24799"
          },
          {
            "name": "test/benchmark/test_benchmark_search.py::test_search_miss[Trie]",
            "value": 12766.038669704498,
            "unit": "iter/sec",
            "range": "stddev: 0.000009777575653330418",
            "extra": "mean: 78.33283494378978 usec\nrounds: 26385"
          }
        ]
      }
    ]
  }
}