window.BENCHMARK_DATA = {
  "lastUpdate": 1675789310540,
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