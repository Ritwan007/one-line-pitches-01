# one-line-pitches-01

[![A Day of One-Line Pitches](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![Rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/Ritwan007/one-line-pitches-01/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![Reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/Ritwan007/one-line-pitches-01/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

A one-program entry for make.fun's **A Day of One-Line Pitches**
([bounty page](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)).
`main.ts` (Node 22, standard library only) writes a single one-sentence pitch
to `/output/entry.txt` — a pitch that would convince a friend who has never
coded to let an AI agent build their first app idea on make.fun. Deterministic:
same bytes on every run, no trailing newline, 160 characters (gate: 1–240).

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
