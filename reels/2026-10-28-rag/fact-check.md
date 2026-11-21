# RAG reel — fact-check

**Checked: 2026-10-27.** Every claim in the PROPOSED trimmed script, against authoritative sources. Anything a source disagrees on, or that could not be verified, stays out of the voiceover.

## Claim-by-claim

| # | Claim in the trimmed script | Verdict | Evidence |
|---|---|---|---|
| 1 | "RAG — Retrieval-Augmented Generation" | **Confirmed** | The term was introduced by Lewis et al. (Meta AI Research), "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", NeurIPS 2020, arXiv:2005.11401. Multiple explainers confirm the name and the paper. |
| 2 | "works like an open-book exam" | **Confirmed as an established analogy** (not a factual claim) | Several explainers use exactly this analogy: "turns every model query into an open-book exam instead of a closed-book one" (temperature2, 2026); "the model answers using retrieved passages instead of relying only on what it memorized" (same source). Safe. |
| 3 | "Before answering, it searches your PDFs and notes — and finds the relevant pages" | **Confirmed** | The RAG pipeline is retrieve-then-generate: index documents, embed the query, retrieve the most relevant chunks (top-k), pass them to the LLM for grounded generation. IBM, AWS, and NVIDIA all describe the same pattern. |
| 4 | "It writes its answer from what it found — with sources" | **Confirmed** | RAG grounds generation in retrieved text; a mature implementation cites the specific sources behind each answer, and "providing provenance for decisions" is listed in the original paper as a motivation. Citations are a design feature of grounded RAG, not an add-on. |
| 5 | "so it makes things up far less" | **Confirmed — this is the accurate wording** | RAG *reduces* ungrounded hallucinations; it does not stop them. Sources: "RAG reduces ungrounded hallucinations. It does not stop them." (ragexplainedbetter.com); "No architecture eliminates hallucinations completely. IBM explicitly says RAG lowers the risk rather than making a model error-proof." (fastbots.ai, citing IBM). A model can still misread retrieved text or answer when it should say it doesn't know. |
| 6 | "No RAG, it guesses from memory" | **Confirmed as an explainer simplification** | Without retrieval, an LLM answers from parametric memory — what it absorbed in training. Sources describe LLMs as generating "from statistical patterns, not verifiable facts" and answering from "what it memorized during training". "Guesses" is the page's established framing (same as the hallucinations reel). |
| 7 | "That's how companies build chatbots that know their business" | **Confirmed as a general claim** | RAG is the standard pattern for customer-support and internal-knowledge chatbots (IBM, AWS, NVIDIA docs; "RAG has become the reference architecture for any production-grade GenAI system"). No company, number, or result is named in the line, so no specific verification is needed. |

## Overclaim caught and fixed

- **Original line:** "That's why the answers come with sources, and why it stops making things up."
- **Problem:** "stops" is absolute. RAG lowers hallucination risk; it does not eliminate it. A wrong, stale, or out-of-context retrieved chunk produces a wrong answer that *looks* cited. The original line would have been an upgraded claim — the kind the rules forbid.
- **Fix in the draft:** "— with sources, so it makes things up far less." (Beat 4.)
- If Vishnu prefers the original wording, it is his call — but it stays flagged as an overclaim.

## Left out of the voiceover (deliberately)

- **"RAG reduces hallucinations by 40–60%"** (one Medium source, attributed to "Facebook AI Research, 2022") — single-source, no primary citation found in the check; not needed for the reel. Not used.
- **Enterprise adoption/failure numbers** (71% implementing, 72–80% failing in production) — survey figures, not needed for a 40-second explainer. Not used.
- **The 2020 paper's benchmark results** (state-of-the-art on three open-domain QA tasks) — paper-specific results; the reel is about the mechanism, not the paper. Not used.

## Sources (checked 2026-10-27)

- Lewis et al., "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", arXiv:2005.11401 (NeurIPS 2020) — https://arxiv.org/abs/2005.11401
- Atlan, "Retrieval-Augmented Generation: How RAG Works at Enterprise Scale" — https://atlan.com/know/what-is-retrieval-augmented-generation/
- EIMT, "What is Retrieval-Augmented Generation" — https://www.eimt.edu.eu/what-is-retrieval-augmented-generation
- temperature2, "What is RAG?" (open-book exam analogy) — http://temperature2.com/p/2026-07-20-learning-what-is-rag/
- ragexplainedbetter.com, "Does RAG stop hallucinations?" — https://ragexplainedbetter.com/
- FastBots, "What Is RAG? Retrieval-Augmented Generation Explained for Businesses" (IBM limitation note) — https://blog.fastbots.ai/what-is-rag-retrieval-augmented-generation-explained-for-businesses-in-2026/
- CustomGPT, "RAG vs Vector Search" / "RAG AI Systems" (IBM/AWS/NVIDIA pattern, citations) — https://customgpt.ai/pros-and-cons-of-rag-vs-vector-search/
- Pandromeda, "RAG (Retrieval-Augmented Generation) Explained [2026]" — https://pandromeda.com/ai/what-is-rag-retrieval-augmented-generation-explained
