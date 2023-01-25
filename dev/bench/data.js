window.BENCHMARK_DATA = {
  "lastUpdate": 1674650104089,
  "repoUrl": "https://github.com/sreevasthav/tensordict",
  "entries": {
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "tomcbegley@gmail.com",
            "name": "Tom Begley",
            "username": "tcbegley"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c3d61300cbe78ced72c355695e82bae356b8d0c",
          "message": "[Refactor] Generate test_tensorclass.py from test_tensorclass_nofuture.py (#187)",
          "timestamp": "2023-01-25T11:32:46Z",
          "tree_id": "46cb28238d63bcb5c17f625bd3a99fa9b06c306c",
          "url": "https://github.com/sreevasthav/tensordict/commit/3c3d61300cbe78ced72c355695e82bae356b8d0c"
        },
        "date": 1674650102731,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1215.9280249907217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 822.4170998999966 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 245234.29451516242,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.077733100001524 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 118205.26301372431,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.459860199997138 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 48152.67000487334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.76728040000262 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 64729.77403639461,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.448841199997787 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 47777.070050727256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.930542600001445 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 40366.00241907323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.773322599997982 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 41157.97738898962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.296626400001742 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6445.8793891575915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.13787020000223 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 38162.61044039918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.203658200000746 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25250.56061862805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.60308110000028 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 31786.01936565618,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.460372200001533 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18123.982806190576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.1755103000005 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 37059.96232973273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.983297800001083 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 26295.872426312715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.02878199999782 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 41103.09933152563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.32906559999992 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 145121.16361862858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.890793700000586 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 39712.4721704973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.18100599999684 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 9286.661091989265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.68132809999997 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 32472.704800080326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.795094100000142 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 11079.569239421786,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.25621650000062 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 28097.746801221176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.59004240000263 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 11169.268549264165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.53137760000232 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12690.35533269537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.79999998294807 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1461.9483142499905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 684.0187100000321 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 18900.93233196622,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.90744299998096 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2938.2208822280136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 340.3420097000037 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3007.620966555141,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 332.4887048999983 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}