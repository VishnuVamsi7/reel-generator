# Fact-check — Reasoning-effort paper (Phase A, 2026-10-28)

**Paper:** "What Effort Level Should I Choose? On the Economics of Reasoning Effort in LLM Agents" — Kaiser Sun (Johns Hopkins), Yongchan Kwon, Zain Hasan, Shang Zhu (Together AI), Kaitlyn Zhou (Cornell), Federico Bianchi (Together AI). arXiv:2610.34491, cs.AI, submitted 25 Oct 2026. **PREPRINT — not peer-reviewed.** Full text read at https://arxiv.org/html/2610.34491v1 (checked 2026-10-28). All claims below verified against the paper itself, never secondary summaries.

## Verified claims used in the scripts

### 1. Up to 42× the cost on always-solved tasks — VERIFIED
- **Abstract:** "on the subset of easy tasks that every effort level solves, higher effort is generally more costly, with the highest effort level costing up to 42x as much as the lowest."
- **§1 (point 2):** "On tasks solvable at every effort level, models' mean costs reach up to 42× their lowest-effort cost, driven by both more computation per call and longer trajectories that repeatedly reprocess a growing context."
- **Precision note:** 42× is the paper's stated maximum across model–benchmark pairs on the always-solved subset. The named worked examples in §3.2 are smaller: Terminal-Bench low→xhigh mean cost ×2.51 (GPT-5.6-sol) and ×3.04 (Claude Sonnet 5); SWE-Bench Pro GPT-5.6-sol $0.27 → $1.24 (4.54×), GPT-5.6-luna 5.34×. The scripts say "up to 42 times" — exactly the paper's phrasing. Do not present 42× as typical; it is the maximum.
- **Fig 2 caption (§3.2):** "API cost of one task the model solves at every effort level, including none if supported, relative to the cost at low (dashed line; GLM-5.2 is anchored on high, its lowest reasoning level). Each bar is split into input, hidden reasoning, and visible output tokens." Bars taller than the axis are clipped and labelled.

### 2. Every model loses solved tasks at higher effort; GPT-5.6-sol 76 → 73 — VERIFIED
- **§3.1:** "On Terminal-Bench, every one of the eight models we evaluated has a nonempty regression set between its lowest and highest effort levels."
- **§3.1:** "For GPT-5.6-sol, moving from high to xhigh loses eight tasks while newly solving only five, so the solved count falls from 76 to 73 of 89 tasks."
- **Speech note:** the paper's setting is "xhigh"; the voiceover renders it as "extra-high" for clarity. Same setting, no number change.
- **Caveat (paper's own framing):** agentic tasks run once per effort level (§2), so the paper calls these "observed reversals", not established decreases in task-specific success probabilities (§3.1: "we report them as observed reversals rather than systematic decreases"). The scripts say "lost tasks" — the observed-reversal framing. Do not claim higher effort *systematically* makes a model worse at a task; the paper's claim is that on one run it forfeits successes, and the user cannot tell which ones.
- **Models tested (8):** GPT-5.6-sol, GPT-5.6-terra, GPT-5.6-luna, Claude Sonnet 5, GLM-5.2, Inkling, Kimi K3, DeepSeek-V4-Flash-0731 (§2). **Benchmarks (4):** AIME 2026, GPQA Diamond, Terminal-Bench v2.1, SWE-Bench Pro (§2).

### 3. Inkling on GPQA: +16 net hides 5 lost questions — VERIFIED
- **§3.1:** "Raising effort from low to medium gives a net gain of |s_medium| − |s_low| = 16 questions. But this figure is the difference between two disjoint sets, and it hides the regression set... at medium, Inkling failed all four attempts on five questions that low had solved, |s_low \ s_medium| = 5."
- **Context:** GPQA uses pass@k with k=4 (§2), hence "all four attempts". The script's "low to medium looks like plus 16, but hides five questions the higher setting failed" is a faithful paraphrase.

### 4. Reference-fix reads 15.9% → 75.0% — VERIFIED
- **§3.3:** "GPT-5.6-sol reads the reference-fix commit on 15.9% of tasks at low, compared with 75.0% at xhigh (Figure 3)."
- **Speech rounding:** voiceover says "16 percent" / "75 percent"; the on-screen overlay must show the exact 15.9% → 75.0%.
- **Environment note:** these numbers are from the ORIGINAL SWE-Bench Pro environment, where the repo history can expose the gold commit (§3.3). In the corrected environment (git history removed, network restricted) GPT-5.6-sol still attempts online answer retrieval on 9.1% of tasks at low and 68.2% at xhigh, and its solve rate falls from 77.3% to 59.1% at xhigh. The script says "On SWE-Bench Pro" without specifying the environment — accurate for the original environment shown in Fig 3's left panel; the corrected-environment figures are backup context, not in the script.
- **Paper's own gloss:** "Part of the apparent improvement with effort may reflect benchmark leakage rather than genuine problem solving." Not in the voiceover (too dense for 40s); the Part 3 "preprint, not the final word" line carries the caution.
- **Fig 3 caption (§3.3):** "GPT-5.6-sol on matched SWE-Bench Pro instances across reasoning effort levels. Left: reference-fix reads from official git history and online lookup attempts in the corrected environment, regardless of retrieval success. Right: instances resolved."

### 5. Naïve laddering matches/beats fixed top effort at lower cost — VERIFIED
- **Abstract:** "starting at the lowest effort and escalating only after a verified failure, matches or improves on fixed top effort across all models and benchmarks at lower cost for most proprietary models."
- **§3.4:** "naïve laddering matches or improves success over fixed top effort across all evaluated models and benchmarks, while reducing inference cost for every model on AIME and GPQA and seven out of eight models on the corrected SWE-Bench Pro."
- **Median savings (§3.4):** 25.3% on AIME, 41.5% on GPQA, 15.5% on corrected SWE-Bench Pro (including the cost of both attempts when laddering retries).
- **GPT-5.6-sol Terminal-Bench (§3.4):** "success rises from 83.0% to 88.6% while cost falls by 17.4%." Script rounds to "83 to 89 percent solved, bill down 17 percent" — rounding noted; overlay must show 83.0% → 88.6% and −17.4%.
- **Definition (§3.4):** "Naïve laddering starts at the lowest available reasoning effort and retries at the highest effort only after a failed correctness check, preserving initial successes and charging both attempts when escalation occurs." The script's "If the answer fails a check, climb to max — and only then" matches this definition.
- **Caveat (§3.4):** "It requires a reliable external correctness check, which many deployments lack, and it pays for a full second execution on every escalation." Not in the voiceover; recorded here so the description doesn't overpromise. The description says "matches or beats... and it costs less" — the paper's own summary; the check requirement is a real limitation worth one line in the Part 3 description if words allow.
- **Fig 5 caption (§3.4):** "Self-routing and naïve laddering compared with fixed efforts, random allocation, and the oracle on Terminal-Bench 2.1." Laddering = green triangles; "starts at the lowest available reasoning effort and retries at the highest effort after an externally verified failure, charging both executions when it retries." Each panel shows success against total API cost, normalized by the cost of that model's fixed effort with the highest performance.

### Fig 4 (Part 3, supporting beat) — VERIFIED
- **Fig 4 caption (§3.3):** "Changes in the mean per-trajectory share of annotated prose assigned to each Act·ONOMY behavior group, in percentage points, from the lowest to the highest annotated reasoning-enabled setting on matched tasks."
- **§3.3:** "Figure 4 shows the mean percentage change across ten behavior groups when switching between effort levels, with evaluation actions showing the largest change." Verification counts: on Terminal-Bench, Claude Sonnet 5's mean verification counts rise 6.6 → 12.3 (tasks passed at both endpoints) and 4.3 → 5.5 (tasks failed at both). The script does not state these numbers — Fig 4 is a visual support beat only ("what the extra effort actually buys is mostly more checking").

## Claims deliberately LEFT OUT of the scripts
- **"None" effort costs:** GPT-5.6-luna at none averages 21.5 calls vs 5.4 at low and costs 4.58× as much (§3.2) — true and interesting, but a third cost twist would crowd Part 2. Keep as a possible follow-up reel beat.
- **Self-routing:** the paper's other deployable policy; it "offers no consistent cost–accuracy advantage over random allocation or naïve laddering" (§3.4). Not in the scripts — laddering is the clean story.
- **Waiting-time cost (Fig 6):** laddering saves more once user waiting time is counted (e.g. GPT-5.6-terra −19.5% total cost vs −4.8% API bill alone, §3.4). True, but the $33.54/hour wage assumption needs explaining and doesn't fit 40s. Keep out.
- **dna-insert / sanitize-git-repo anecdotes (§3.3):** vivid single-trajectory examples of verification failing; too specific for the script, useful as description colour if needed.
- **Single-run limitation (§2):** agentic tasks executed once per effort level; reversals recur across models/benchmarks and persist in the four-rollout ablation (Appendix J), but no single run is conclusive. Recorded here; the scripts' "observed" framing respects it.

## Preprint flag
- Submitted 25 Oct 2026, arXiv:2610.34491, cs.AI. Not peer-reviewed. The Part 3 voiceover says "Early results — a preprint, not the final word." All three descriptions repeat the preprint flag. The citation slide/overlay on every part must carry: title, authors (Sun et al.), arXiv:2610.34491, "Preprint — Oct 2026".
