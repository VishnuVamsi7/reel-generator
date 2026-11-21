# Day 4 — "Prefix Executability" — fact-check (from the PDF itself)

Paper: "Prefix Executability: Evaluating Tool-Using Agents Beyond Final Success",
Amir H. Rezaeian, Weiyi Sun, Yassine Benajiba, Dan Roth (Oracle AI),
arXiv:2610.40444v1 [cs.AI], submitted 29 Oct 2026.
Status: FACT-CHECK ONLY. Nothing is voiced or posted from this file until
Vishnu approves the script and the finished reel.

## Source

- PDF downloaded 2026-11-21 21:41 UTC from https://arxiv.org/pdf/2610.40444
  (1,663,000+ bytes, 1.7 MB, PDF 1.7, verified PDF by `file`).
  Extracted with `pdftotext -layout` → `paper.txt` (98,747 bytes, 1,274 lines).
  All citations below are to `paper.txt` line numbers.
- arXiv abs page (checked same day): Comments field reads
  "21 pages, 2 figures. Accepted to NeurIPS 2026". The PDF footer (line 57)
  reads "40th Conference on Neural Information Processing Systems (NeurIPS
  2026). Track on Evaluations and Datasets."
- Venue wording to use, exactly: **"Accepted to NeurIPS 2026"** — that is
  what arXiv says. Do NOT call it a peer-reviewed journal publication.
  (NeurIPS is a conference; the arXiv record does not use the word
  "peer-reviewed", so neither do we.)

## Core claim, in the paper's own terms

Tool-use benchmarks usually score agents by final task success, but a terminal
outcome "can obscure whether the intermediate tool-call trajectory was
executable" (abstract, lines 13–16). The protocol scores **every prefix** of a
predicted tool-call sequence for executability — under tool schemas, state
preconditions, and data dependencies — and summarises reliability with five
measures (abstract, lines 16–20; §1, lines 72–75).

## The five terms — each verified in the PDF, with what it measures

| Term | What it measures (per the PDF) | Citation |
|---|---|---|
| PEC — Prefix Executability Curve | Fixed-cohort survival curve over first-error depth: PEC(k) = Pr[FED > k], the fraction of all started rollouts that reach depth k with an executable prefix (§2.2, Eq. 3–4) | lines 146–155 |
| FED — First-Error Depth | The depth k of the first non-executable prefix; FED = T+1 if every prefix through the full trajectory is executable (§2.2, Eq. 1–2) | lines 141–144 |
| TER — Trajectory Executability Rate | Probability the FULL predicted trajectory is executable: TER = Pr[FED = T+1] (§2.2, Eq. 8) | lines 188–193 |
| AUC-PEC — horizon-normalised AUC-PEC | Horizon-normalised area under the executable-prefix profile; in [0,1], equals 1 for fully executable trajectories, rewards later first failures more than earlier ones (§2.2, Eq. 10–11) | lines 208–224 |
| RR — Recovery Rate | Final success conditional on having experienced at least one invalid prefix: RR = Pr[Y = 1 \| FED ≤ T] (§2.2, Eq. 9) | lines 198–205 |

An action is executable if the tool is available, arguments conform to its
schema, all explicit preconditions hold in the current state, and any
referenced intermediate values are present and type-consistent (§2.1,
lines 116–120). The benchmark-side scorer is deterministic and uses no LLM
judge (lines 125–129).

## Headline numbers to use (all from §3.1 text + Table 2, BFCL-v3, GPT-5.4, N = 200 stratified tasks)

The reel's comparison is the BFCL-v3 GPT-5.4 (high) block, stated in the
§3.1 prose (lines ~347–360) and Table 2 (lines 367–380):

- **Plan-Conditioned ReAct** (agent follows a generated plan that is never
  checked): final success **0.94**, TER **0.47**, AUC-PEC **0.54**,
  mean FED 4.11. §3.1 text: "reaches the highest or tied-highest final
  success on BFCL and ToolSandbox (0.94 and 0.69), but its prefix
  reliability is much weaker than Dual-Loop's: TER is 0.47 and 0.48, and
  AUC-PEC is 0.54 and 0.52."
- **Dual-Loop** (same plan-conditioned executor + pre-execution plan
  checking): final success **0.94**, TER **0.94**, AUC-PEC **0.96**,
  mean FED 6.41. §3.1 text: "Dual-Loop instead attains TER of 0.94 on
  both datasets and AUC-PEC of 0.96 and 0.95."
- **The divergence, spoken plainly:** same final success (94 in a hundred),
  but valid-all-the-way runs go from 47 in a hundred to 94 in a hundred —
  exactly double; the script says "nearly double" to stay conservative.
- Outcome-only and prefix-level rankings diverge — abstract (lines 22–26):
  "agents whose execution is conditioned on an unverified plan often achieve
  higher point-estimate final success than non-plan-conditioned baselines
  while substantially lowering TER and AUC-PEC."

## Supporting verified numbers (description only, not voiceover)

- Llama-4 Maverick, BFCL-v3, Plan-Conditioned ReAct (§3.1, lines ~424–432):
  TER 0.05, final success 0.74, RR 0.73. "Of 200 episodes, 10 were fully
  executable and all 10 succeeded; 138 of the 190 episodes with a prefix
  failure also succeeded. Thus TER is 10/200 = 0.05, RR is 138/190 ≈ 0.7263,
  and final success is (10 + 138)/200 = 0.74. Fully 138/148 = 93.2% of
  successful episodes reached the objective after an earlier invalid prefix."
- ToolSandbox, GPT-5.4: Plan-Cond. ReAct final success 0.69 (highest) but
  TER 0.48, mean FED 2.88, AUC-PEC 0.52; Dual-Loop TER 0.94, mean FED 4.32,
  AUC-PEC 0.95, final success 0.63 (§3.1 text + Table 2).
- Scale: BFCL-v3 and ToolSandbox each 200 stratified tasks; τ³-bench all 164
  Airline/Retail base-split tasks; 6,768 rollouts across the three benchmarks
  (§1, lines 103–106; §2.6). Three LLM conditions: GPT-5.4, GPT-4.1,
  Llama-4-Maverick-Instruct (§2.7). Model names are NOT spoken in the reel.

## Honest limits (description must carry these; voiceover must not overclaim)

1. **Samples, not a full leaderboard.** BFCL-v3 and ToolSandbox each
   contribute 200 sampled tasks; τ³ coverage is complete only for the
   Airline/Retail base splits (Limitations, lines ~516–520).
2. **Validation benefit is environment-dependent.** "The Airline/Retail audit
   does not establish the consistent validation advantage observed on
   BFCL-v3 and ToolSandbox" (§3.3); on τ³-bench with GPT-5.4, Plan-Cond.
   ReAct had the highest final success (0.51) while ReAct had the highest
   TER/AUC-PEC (0.95/0.95). Do not claim checking always helps.
3. **Executable ≠ correct or safe.** "Prefix executability exposes whether
   and where a trajectory becomes invalid, but it does not by itself certify
   semantic correctness, safety, privacy, or fairness" (Conclusion/
   Limitations, lines ~508–512). An executable run can still be wrong,
   unsafe, or biased.
4. **Intervals are marginal, task-level.** 95% task-level CIs from 10,000
   bootstrap resamples; marginal-interval overlap does not establish paired
   significance (§3.1, Table 2 caption). The reel reports point estimates
   only, as the paper's prose does.
5. **No model names in the reel.** The comparison is between methods
   (unchecked plan vs checked plan), not between models.

## Shortlist context — RESOLVED

- Shortlist said only: "outcome-only and prefix-level rankings diverge"
  (unverified). **VERIFIED** — abstract lines 22–26 and §3.1 as above.
  Nothing from the shortlist is used beyond this verified claim.
- No disputed numbers were found. Every number in the script and
  description traces to Table 2 or §3.1 prose above. No number is used
  that was not found in the PDF.
