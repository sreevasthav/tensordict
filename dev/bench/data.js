window.BENCHMARK_DATA = {
  "lastUpdate": 1674748708066,
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
    ],
    "CPU Benchmark Results": [
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
        "date": 1674748707373,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1127.433647746756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 886.9701574000032 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 172618.89709123858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.793108500000699 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 90995.40087408051,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.98956639999642 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 40139.25705117009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.91326630000117 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50235.5661237371,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.906215399998928 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38601.825363744734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.905510699999468 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33496.32836528407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.854018300000007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34223.6638887398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.219548300000042 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7150.429948702833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.8517302000016 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32001.068886902933,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.248956199999608 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21216.4695339808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.13319520000141 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 26543.896051003456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.67344469999898 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15175.534159226398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.89553879999812 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28881.556330260926,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.624172899998484 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20782.32510799331,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.117811400004484 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31327.097160880123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.921246799998922 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 114099.60934693352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.764271899997311 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30771.760965438356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.49732770000264 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7385.194634744251,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.40604539999777 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25609.83784916013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.04749440000046 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9109.908260080985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.770589499999 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23060.706220661683,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.363806399997884 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 9419.788468401266,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.1594963999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 16234.029775457431,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.59899999147456 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1263.8964993539018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 791.204026999992 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13659.32776028279,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.21004499999617 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2626.1253709447174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 380.78913180000313 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2563.787272173382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 390.0479617999963 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}