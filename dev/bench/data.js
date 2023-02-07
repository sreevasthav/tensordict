window.BENCHMARK_DATA = {
  "lastUpdate": 1675789523981,
  "repoUrl": "https://github.com/sreevasthav/tensordict",
  "entries": {
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ae3066d104ed615836c8a088d0b02f93d3ee29f",
          "message": "[BugFix] Using set_interaction_mode as decorator (#191)",
          "timestamp": "2023-01-26T13:44:36Z",
          "tree_id": "13f68c9bfd7fcf4cb9a42a1f846c7481d1a94d44",
          "url": "https://github.com/sreevasthav/tensordict/commit/1ae3066d104ed615836c8a088d0b02f93d3ee29f"
        },
        "date": 1674748899809,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1282.2656867376863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 779.8695780000003 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 230656.16489165663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.335457499996664 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 117152.74865063239,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.535864600003151 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 50194.703246109675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.922420799997553 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 63805.20078235388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.672703599994977 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 45587.64272180682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.935768999998118 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 40068.51507721407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.957251300003236 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 40587.792574413885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.637949899999967 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7545.104081405858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.53627640000332 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 39217.41122542345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.498878400003377 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 26370.042574723797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.921819700000015 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 33183.46585100766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.135489899998902 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18174.345882119458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.022612999999865 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 35528.59525739704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.146342200000163 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 25482.958443551128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.24191149999956 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 39148.18436514478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.543968800002403 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 141696.78183794336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.057323300000462 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 37201.95080482671,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.880310799998597 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 9013.334280767034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.94673389999912 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 30426.105652201408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.866513099997974 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10499.576242352145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.24193900000455 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27624.71384249356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.19947000000252 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 11309.290403945559,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.42287749999969 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12376.084450698785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.80100002416657 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1513.4985522940565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 660.7208169999694 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 17789.846093105767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.211840999992546 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2950.5937043466024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 338.91484229999946 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3066.465764422746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 326.1083203999988 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Sree Vasthav S V",
            "username": "sreevasthav",
            "email": "sreevasthav.s.v@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b8a22ecf924deda62fba65ae04e77b1a48be896e",
          "message": "[Feature] Added support to save non-tensor data in tensor class (#157)\n\nCo-authored-by: Vincent Moens <vincentmoens@gmail.com>",
          "timestamp": "2023-02-07T16:53:39Z",
          "url": "https://github.com/sreevasthav/tensordict/commit/b8a22ecf924deda62fba65ae04e77b1a48be896e"
        },
        "date": 1675789521927,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1276.5884401504438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 783.3378154999991 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 228476.37717661986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.376820099992074 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 114790.12571188385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.711550700013504 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 50030.55891553596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.987783900000977 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 62619.167014382525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.96955130000879 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 45010.51934097434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.217028699992625 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 39053.71962542906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.605755600008706 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 40355.4162852626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.779821199990693 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7497.949220912852,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.36980159999712 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 38807.124110922574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.768464500015398 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25983.516436525893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.48593790000905 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 31904.971985311127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.34307720001743 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 17642.47511132144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.681389299978946 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2208.160167554755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.86570000371285 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2298.3438823374718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.09590000212484 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 37157.554537534335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.912427699994623 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 132334.2205546561,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.556624400012879 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 25906.937102784785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.59969999666646 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 35114.19342878495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.47851259998606 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 24760.73748885916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.3865192000012 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 39097.44670292271,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.57711780000318 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 142189.6861887881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.032858899992789 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 37281.88651714985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.822676999995565 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8331.055657429215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.03280750000158 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 30469.973440845926,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.819195000001855 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10145.210024459082,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.56868389999818 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 26605.450363302003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.586283499990714 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18442.15464479966,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.22359910000978 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 17452.311561418668,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.29899999096233 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1500.8069546335614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 666.308213000093 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 16746.861244636377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.712682000053974 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2877.8767388264123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 347.47839839999415 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3006.261413012308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 332.6390697999841 usec\nrounds: 1"
          }
        ]
      }
    ],
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "name": "Sree Vasthav S V",
            "username": "sreevasthav",
            "email": "sreevasthav.s.v@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b8a22ecf924deda62fba65ae04e77b1a48be896e",
          "message": "[Feature] Added support to save non-tensor data in tensor class (#157)\n\nCo-authored-by: Vincent Moens <vincentmoens@gmail.com>",
          "timestamp": "2023-02-07T16:53:39Z",
          "url": "https://github.com/sreevasthav/tensordict/commit/b8a22ecf924deda62fba65ae04e77b1a48be896e"
        },
        "date": 1675789309847,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1063.6422646134158,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 940.1657241999999 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 180162.4203855392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.550547100000358 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 93424.2204010292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.703862400001185 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 36152.81091810788,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.66036649999819 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50679.57303757071,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.731815800000163 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38619.766317819354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.893476199999554 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 31635.42656166742,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.610131700000466 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 33064.24974583751,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.24414610000008 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6196.223115126259,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.38863649999848 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 30471.737075346704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.817295500001364 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 19936.524538127414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.159193899997945 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 24496.53670536247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.822097099999155 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14597.137137354688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.50658390000035 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1850.3229368617149,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 540.4462000001331 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1976.1838230325984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 506.0258000014528 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 33070.73406711477,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.23821600000076 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 124232.67532794904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.049412099998676 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 19880.478562784516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.3006000002415 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29434.49098980287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.97374870000078 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20759.907659182965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.16977110000096 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31852.4297823385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.394779199999334 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 111698.61604520978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.952662400000122 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30965.677503708754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.29381950000061 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6443.311324287685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.1997024000002 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26034.29109776112,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.41087879999918 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9149.904154342219,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.29076230000021 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23574.042308008546,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.41953869999975 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 14549.192513413383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.73233680000226 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 11627.771770140429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.00099999966915 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1206.0079417842055,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 829.1819359999977 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13795.290905712667,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.48850400000606 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2579.5748394380776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 387.66078219999827 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2495.6397984541145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 400.6988511000003 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}