# Notes on METR raw data for `coding-capabilities-progress.html`

This file documents a raw-data audit for the post:

- `posts/coding-capabilities-progress.html`

The analysis below is based on the METR raw run data in:

- `/home/clement/Documents/Projets/METR/eval-analysis-public/reports/time-horizon-1-1/data/raw/runs.jsonl`
- `/home/clement/Documents/Projets/METR/eval-analysis-public/reports/time-horizon-1-0/data/raw/runs.jsonl`

It is intended to answer two questions:

1. Why do some token-conditioned time horizon curves stay flat over a wide token range?
2. For each model, how many tasks was it evaluated on, and what information is missing in the raw data?

---

## Main conclusion on the flat token-budget curves

For the main flat examples in the post, the raw data suggest that the answer is **not**:

- that there are no successful runs between 50k and 2.5M tokens, or
- that the plateau is mainly caused by missing `tokens_count` values.

For example:

| Experiment | Model | Flat segment in plotted curve | Missing `tokens_count` in raw runs | Successful runs with 50k–2.5M tokens | Successful tasks with 50k–2.5M tokens |
|---|---|---|---:|---:|---:|
| TH 1.0 | GPT-5.1-Codex-Max | 50,119–2,454,709 tokens at 48.7 sec | 0 | 230 | 64 |
| TH 1.1 | GPT-5 | 147,911–707,946 tokens at 47.3 sec | 0 | 332 | 106 |
| TH 1.1 | GPT-5.2 | 50,119–676,083 tokens at 37.9 sec | 0 | 415 | 110 |
| TH 1.1 | o1 | 70,795–1,258,925 tokens at 37.4 sec | 0 | 253 | 90 |

So for these models:

- there are many successful runs in that token range,
- `tokens_count` is fully present,
- and the plateau is therefore more plausibly a feature of the horizon-estimation procedure.

The most likely interpretation is that the budget-conditioned 50% time horizon is effectively **piecewise constant**:

- increasing the token budget changes the curve only when it improves performance on tasks near the current 50% frontier;
- many newly successful runs can occur on shorter or easier tasks without moving the estimated 50% time horizon.

---

## Important note on missingness

The field `fatal_error_from` is `null` in most rows, but this usually appears to mean that **no fatal error occurred**. It should therefore not be treated as problematic missing data in the same way as fields such as `tokens_count` or `generation_cost`.

The fields that matter most for this audit are:

- `tokens_count`
- `generation_cost`
- `started_at`
- `completed_at`
- `task_version`
- `time_limit`
- `cloned`
- `scaffold`
- `model`

---

## Global missingness overview

### Time Horizon 1.1

| Field | Missing runs | Distinct tasks affected | Models affected |
|---|---:|---:|---:|
| `tokens_count` | 1,829 | 188 | 3 |
| `generation_cost` | 773 | 188 | 1 |
| `started_at` | 1,056 | 66 | 2 |
| `completed_at` | 1,056 | 66 | 2 |
| `task_version` | 1,829 | 188 | 3 |
| `time_limit` | 20,821 | 223 | 20 |
| `cloned` | 1,829 | 188 | 3 |
| `scaffold` | 1,829 | 188 | 3 |
| `model` | 0 | 0 | 0 |

Affected models:

- `tokens_count`: `GPT-4 0314`, `o1-preview`, `human`
- `generation_cost`: `human`
- `started_at` / `completed_at`: `GPT-4 0314`, `o1-preview`
- `time_limit`: almost every non-human model

### Time Horizon 1.0

| Field | Missing runs | Distinct tasks affected | Models affected |
|---|---:|---:|---:|
| `tokens_count` | 16,852 | 170 | 31 |
| `generation_cost` | 793 | 170 | 1 |
| `started_at` | 16,059 | 153 | 30 |
| `completed_at` | 16,059 | 153 | 30 |
| `task_version` | 17,085 | 170 | 31 |
| `time_limit` | 17,115 | 153 | 33 |
| `cloned` | 16,852 | 170 | 31 |
| `scaffold` | 16,852 | 170 | 31 |
| `model` | 660 | 66 | 1 |

Affected models:

- `generation_cost`: `human`
- `model`: `GPT-2`
- `tokens_count`, `cloned`, `scaffold`, `task_version`: missing for many models on a recurring subset of tasks

---

## How many tasks was each model evaluated on?

Below, “runs” means raw rows in `runs.jsonl`; “tasks” means distinct `task_id`s.

### Time Horizon 1.1

| Model | Runs | Unique tasks | Missing `tokens_count` runs | Missing `tokens_count` tasks |
|---|---:|---:|---:|---:|
| Claude 3 Opus (Inspect) | 1038 | 228 | 0 | 0 |
| Claude 3.5 Sonnet (New) (Inspect) | 1016 | 226 | 0 | 0 |
| Claude 3.5 Sonnet (Old) (Inspect) | 1005 | 223 | 0 | 0 |
| Claude 3.7 Sonnet (Inspect) | 1043 | 228 | 0 | 0 |
| Claude 4 Opus (Inspect) | 1368 | 228 | 0 | 0 |
| Claude 4.1 Opus (Inspect) | 1043 | 228 | 0 | 0 |
| Claude Opus 4.5 (Inspect) | 1044 | 228 | 0 | 0 |
| Claude Opus 4.6 (Inspect) | 1391 | 228 | 0 | 0 |
| GPT-4 0314 | 1401 | 213 | 528 | 66 |
| GPT-4 1106 (Inspect) | 1029 | 228 | 0 | 0 |
| GPT-4 Turbo (Inspect) | 1032 | 228 | 0 | 0 |
| GPT-4o (Inspect) | 1044 | 228 | 0 | 0 |
| GPT-5 (Inspect) | 1056 | 228 | 0 | 0 |
| GPT-5.1-Codex-Max (Inspect) | 1369 | 228 | 0 | 0 |
| GPT-5.2 | 961 | 228 | 0 | 0 |
| GPT-5.3-Codex | 1602 | 228 | 0 | 0 |
| Gemini 3 Pro | 1044 | 228 | 0 | 0 |
| human | 773 | 188 | 773 | 188 |
| o1 (Inspect) | 1044 | 228 | 0 | 0 |
| o1-preview | 1661 | 213 | 528 | 66 |
| o3 (Inspect) | 1044 | 228 | 0 | 0 |

### Time Horizon 1.0

| Model | Runs | Unique tasks | Missing `tokens_count` runs | Missing `tokens_count` tasks |
|---|---:|---:|---:|---:|
| Claude 3 Opus | 1381 | 170 | 528 | 66 |
| Claude 3.5 Sonnet (New) | 1384 | 170 | 528 | 66 |
| Claude 3.5 Sonnet (Old) | 1381 | 170 | 528 | 66 |
| Claude 3.7 Sonnet | 1353 | 169 | 528 | 66 |
| Claude 4 Opus | 1147 | 170 | 528 | 66 |
| Claude 4 Sonnet | 1152 | 170 | 528 | 66 |
| Claude 4.1 Opus | 1151 | 170 | 528 | 66 |
| Claude Opus 4.5 | 798 | 169 | 0 | 0 |
| Claude Sonnet 4.5 | 1149 | 170 | 528 | 66 |
| DeepSeek-R1 | 1346 | 170 | 528 | 66 |
| DeepSeek-R1-0528 | 1355 | 170 | 528 | 66 |
| DeepSeek-V3 | 1342 | 170 | 528 | 66 |
| DeepSeek-V3-0324 | 1345 | 170 | 528 | 66 |
| GPT-2 | 747 | 153 | 747 | 153 |
| GPT-4 0125 | 1382 | 170 | 528 | 66 |
| GPT-4 0314 | 1286 | 170 | 528 | 66 |
| GPT-4 1106 | 1378 | 170 | 528 | 66 |
| GPT-4 Turbo | 1375 | 170 | 528 | 66 |
| GPT-4o | 1369 | 170 | 528 | 66 |
| GPT-5 | 1154 | 170 | 528 | 66 |
| GPT-5.1-Codex-Max | 662 | 168 | 0 | 0 |
| Gemini 2.5 Pro Preview | 1359 | 170 | 528 | 66 |
| Grok 4 | 1452 | 170 | 528 | 66 |
| Kimi K2 Thinking | 1006 | 169 | 0 | 0 |
| Qwen2-72B | 1073 | 165 | 528 | 66 |
| Qwen2.5-72B | 1315 | 170 | 528 | 66 |
| davinci-002 (GPT-3) | 1483 | 153 | 528 | 66 |
| gpt-3.5-turbo-instruct | 1067 | 167 | 528 | 66 |
| gpt-oss-120b | 1146 | 170 | 528 | 66 |
| human | 793 | 170 | 793 | 170 |
| o1 | 1345 | 170 | 528 | 66 |
| o1-preview | 1345 | 170 | 528 | 66 |
| o3 | 1288 | 170 | 528 | 66 |
| o4-mini | 1320 | 169 | 528 | 66 |

---

## Per-model missing-information summary

### Time Horizon 1.1

| Model | Missing fields |
|---|---|
| Claude 3 Opus (Inspect) | `time_limit` 1018 runs |
| Claude 3.5 Sonnet (New) (Inspect) | `time_limit` 996 |
| Claude 3.5 Sonnet (Old) (Inspect) | `time_limit` 985 |
| Claude 3.7 Sonnet (Inspect) | `time_limit` 1023 |
| Claude 4 Opus (Inspect) | `time_limit` 1348 |
| Claude 4.1 Opus (Inspect) | `time_limit` 1023 |
| Claude Opus 4.5 (Inspect) | `time_limit` 1024 |
| Claude Opus 4.6 (Inspect) | `time_limit` 1352 |
| GPT-4 0314 | `tokens_count` 528; `started_at` 528; `completed_at` 528; `task_version` 528; `time_limit` 528; `cloned` 528; `scaffold` 528 |
| GPT-4 1106 (Inspect) | `time_limit` 1010 |
| GPT-4 Turbo (Inspect) | `time_limit` 1012 |
| GPT-4o (Inspect) | `time_limit` 1024 |
| GPT-5 (Inspect) | `time_limit` 1036 |
| GPT-5.1-Codex-Max (Inspect) | `time_limit` 1339 |
| GPT-5.2 | `time_limit` 941 |
| GPT-5.3-Codex | `time_limit` 1562 |
| Gemini 3 Pro | `time_limit` 1024 |
| human | `tokens_count` 773; `generation_cost` 773; `task_version` 773; `cloned` 773; `scaffold` 773 |
| o1 (Inspect) | `time_limit` 1024 |
| o1-preview | `tokens_count` 528; `started_at` 528; `completed_at` 528; `task_version` 528; `time_limit` 528; `cloned` 528; `scaffold` 528 |
| o3 (Inspect) | `time_limit` 1024 |

### Time Horizon 1.0

| Model | Missing fields |
|---|---|
| Claude 3 Opus | `tokens_count` 528; `started_at` 528; `completed_at` 528; `task_version` 552; `time_limit` 528; `cloned` 528; `scaffold` 528 |
| Claude 3.5 Sonnet (New) | same pattern as above |
| Claude 3.5 Sonnet (Old) | same pattern as above |
| Claude 3.7 Sonnet | `tokens_count` 528; `started_at` 528; `completed_at` 528; `task_version` 528; `time_limit` 528; `cloned` 528; `scaffold` 528 |
| Claude 4 Opus | same pattern as Claude 3.7 Sonnet |
| Claude 4 Sonnet | same pattern as Claude 3.7 Sonnet |
| Claude 4.1 Opus | same pattern as Claude 3.7 Sonnet |
| Claude Opus 4.5 | only `time_limit` 396 |
| Claude Sonnet 4.5 | same 528-pattern |
| DeepSeek-R1 | same 528-pattern |
| DeepSeek-R1-0528 | same 528-pattern |
| DeepSeek-V3 | same 528-pattern |
| DeepSeek-V3-0324 | same 528-pattern |
| GPT-2 | `tokens_count` 747; `started_at` 747; `completed_at` 747; `task_version` 747; `time_limit` 747; `cloned` 747; `scaffold` 747; `model` 660 |
| GPT-4 0125 | same as Claude 3 Opus pattern |
| GPT-4 0314 | same 528-pattern |
| GPT-4 1106 | same as Claude 3 Opus pattern |
| GPT-4 Turbo | same as Claude 3 Opus pattern |
| GPT-4o | same as Claude 3 Opus pattern |
| GPT-5 | same 528-pattern |
| GPT-5.1-Codex-Max | only `time_limit` 264 |
| Gemini 2.5 Pro Preview | same 528-pattern |
| Grok 4 | same 528-pattern |
| Kimi K2 Thinking | only `time_limit` 396 |
| Qwen2-72B | same 528-pattern |
| Qwen2.5-72B | same 528-pattern |
| davinci-002 (GPT-3) | same as Claude 3 Opus pattern |
| gpt-3.5-turbo-instruct | `tokens_count` 528; `started_at` 528; `completed_at` 528; `task_version` 549; `time_limit` 528; `cloned` 528; `scaffold` 528 |
| gpt-oss-120b | same 528-pattern |
| human | `tokens_count` 793; `generation_cost` 793; `task_version` 793; `cloned` 793; `scaffold` 793 |
| o1 | same 528-pattern |
| o1-preview | same as gpt-3.5-turbo-instruct pattern |
| o3 | same 528-pattern |
| o4-mini | same 528-pattern |

---

## Interpretation

The missingness is highly structured rather than random.

In TH 1.0, many models share the same repeated pattern of missing values:

- `528` missing `tokens_count`
- `528` missing `started_at`
- `528` missing `completed_at`
- `528` missing `cloned`
- `528` missing `scaffold`
- often `528` or `552` missing `task_version`

In TH 1.1, most frontier models have complete `tokens_count`, and the main recurring missing field is `time_limit`.

This matters for the interpretation of the token-conditioned graphs:

- for models such as `GPT-5.1-Codex-Max`, `GPT-5`, `GPT-5.2`, and `o1`, the flat token-conditioned horizons cannot be explained by missing `tokens_count`, because these models have zero missing `tokens_count` in the relevant raw data;
- for some older models, especially `GPT-4 0314` and `o1-preview`, missing token metadata could distort the shape somewhat;
- but the broad plateau behavior for the newer models appears to come from the task-level success frontier, not from missing token data.

---

## Why exact plateaus can still appear after fixing the token conversion

After correcting the website’s token-axis conversion, some exact plateaus still remain in the token-conditioned curves. These residual plateaus are not, in themselves, evidence that the logistic regression is malfunctioning.

The reason is that the budget-conditioned horizon procedure is inherently piecewise constant. For a given token threshold `T`, each run is treated as:

- its original `score_binarized` value if `tokens_count <= T`,
- and as a failure (`0`) if `tokens_count > T`.

Therefore, the fitted logistic regression changes only when increasing the threshold causes at least one run to switch from “censored failure” to its original outcome. If nothing changes in the underlying success/failure vector used by the regression, then the fitted coefficient, intercept, and 50% horizon all remain exactly the same.

In practice, this means that exact plateaus can arise for two simple reasons:

1. **there are no runs at all in that token interval**, or
2. **the only runs in that interval are failures**, so uncensoring them does not alter the binary outcome vector used by the fit.

For the low-token plateaus that looked suspicious at first glance, the raw data indicate that the main explanation is often the first one: there are simply no runs in the relevant interval.

Examples:

| Experiment | Model | Plateau interval | Plateau value | Raw runs in interval | Successful runs | Failed runs | Explanation |
|---|---|---|---:|---:|---:|---:|---|
| TH 1.0 | GPT-5.1-Codex-Max | 644–34,611 tokens | 48.7 sec | 0 | 0 | 0 | No runs in the interval, so the fitted dataset is identical throughout it |
| TH 1.1 | GPT-5.2 | 576–10,479 tokens | 37.9 sec | 0 | 0 | 0 | No runs in the interval, so the fitted dataset is identical throughout it |

There are also some higher-token plateaus with a different explanation: runs do exist in the interval, but they are all failures.

| Experiment | Model | Plateau interval | Plateau value | Raw runs in interval | Successful runs | Failed runs | Explanation |
|---|---|---|---:|---:|---:|---:|---|
| TH 1.0 | GPT-5.1-Codex-Max | 19.46M–27.49M tokens | 7272.5 sec | 8 | 0 | 8 | Newly uncensored runs are all failures, so the fit does not change |
| TH 1.0 | GPT-5 | 4.93M–8.00M tokens | 5656.6 sec | 31 | 0 | 31 | Newly uncensored runs are all failures, so the fit does not change |
| TH 1.0 | o1 | 2.23M–8.17M tokens | 2493.1 sec | 68 | 0 | 68 | Newly uncensored runs are all failures, so the fit does not change |
| TH 1.0 | o3 | 8.69M–15.80M tokens | 4537.9 sec | 26 | 0 | 26 | Newly uncensored runs are all failures, so the fit does not change |

So the correct interpretation is not that “the model solves new tasks but the logistic estimate refuses to move.” Rather, these exact plateaus are explained by intervals in which there is **no newly uncensored success**. In the low-token cases above, there are no runs at all in the interval; in the higher-token examples, the newly admitted runs are all failures. In both situations, the regression is being fit on an unchanged binary dataset, so an unchanged 50% horizon is expected.

## Practical takeaway for the post

A plateau in the token-conditioned 50% time horizon curve should not automatically be read as meaning that the estimation procedure is broken. In several cases, the raw data show that the plateau is explained by the structure of the token distribution itself: either there are no runs in that token interval, or there are runs but no successes. In those cases, the absence of newly uncensored successes in the interval explains why the fitted 50% horizon remains exactly constant.
