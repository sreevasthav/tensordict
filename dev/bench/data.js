window.BENCHMARK_DATA = {
  "lastUpdate": 1674748900484,
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
    ]
  }
}