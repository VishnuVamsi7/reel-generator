# Memory Tax — Fact-check (from the supplied PDF, arXiv:2610.34073v1)

Checked against the paper itself, not secondary summaries.

## Verified claims used in the script

1. Agents rewrite history into memory, and that process can drop evidence.
   Paper, Abstract + §1 + §4: memory processes change how raw information
   is organised and accessed; some changes "may also remove or obscure
   evidence, giving rise to memory tax." §4.2: loss during construction
   "can not be recovered later."
2. "In one long-memory test, plain retrieval scored eighty-one percent,
   beating every fancy memory system in that test."
   Paper, Table 1, LongMemEval-s, Qwen3.6-27B column: RAG (2rd) = 81.4%.
   Every memory system listed in that column is below it: A-Mem 79.4%,
   MemOS 76.6%, SimpleMem 73.6%, MemoryOS 73.4%, LightMem 78.8%.
   Voiceover rounds 81.4% to "eighty-one percent"; overlay shows 81.4%.
   Scope is stated in the script ("in one long-memory test") and in the
   overlay (LongMemEval-s, Qwen3.6-27B, RAG 2 rounds) — it is NOT a
   claim about all benchmarks or all models.
3. "Rewriting helps sometimes."
   Paper, §1 + §4.1: memory is "not uniformly worse"; it "does solve some
   queries RAG misses, where organization or restructuring may help."
   Benefit cases include extraction, aggregation, and preference inference
   (Appendix D.1, as summarised in §4.1).
4. "Keep a way back to the raw history" / "never delete the source."
   Paper, §6.1: "Make memory deviations more recoverable" — retrieve
   from source history alongside normal memory retrieval and jointly
   rerank. Proof of concept, Qwen3.6-27B, LongMemEval-s: SimpleMem
   73.6% / tax 12.0% → 82.8% / tax 5.2% with source augmentation.
   The script states this as a design recommendation from the paper,
   not as a guaranteed fix for every system.

## Claims NOT made, and why

- NOT "all memory fails": the paper says "many" systems underperform
  "in many cases", with negative net value "in these cases" — and that
  benefit exists alongside tax.
- NOT "81% overall": 81.4% is one column (LongMemEval-s, Qwen3.6-27B,
  RAG 2-round, judge accuracy). Other benchmarks/columns differ, and
  the paper's benchmarks are primarily static, offline, English-language,
  with stratified subsets for some benchmarks (Limitations).
- NOT "memory is useless": the paper's point is net value — benefit
  minus tax — and shifting evaluation from standalone performance to
  that balance, not abolishing memory.

## Caveats to carry into the description

- Preprint, submitted 25 Oct 2026, not peer-reviewed.
- Answers scored by an LLM-as-Judge (Qwen3.6-27B) in the main setup;
  see Appendix F.2 in the paper.
- Baseline selection is representative, not exhaustive (Limitations);
  further system-specific tuning could improve some systems.
