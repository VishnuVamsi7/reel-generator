# Fact-check — Day 2: "Who Verifies the Tools?"

Paper: "Who Verifies the Tools? How Warped Formatters Mislead Agents and Their
Verifiers", William Jeffries, arXiv:2610.32110, submitted 23 Oct 2026, v1.
Preprint, NOT peer-reviewed. arXiv comment line: accepted as a poster at the
Who Verifies the Agents? workshop at NeurIPS 2026 (non-archival) — a workshop
poster, non-archival, is not peer-reviewed publication.

## How this was checked (read this first)

- The Day 1 shortlist summary was treated as UNVERIFIED and was not used as a
  source for any figure in the script.
- Figures below were read in the full text of arXiv:2610.32110 v1 via arXiv's
  HTML rendering (arxiv.org/html/2610.32110), reached from the abstract page
  (arxiv.org/abs/2610.32110). Section numbers below are the paper's own.
- Transparency limit: the browser text tool did not cleanly return the PDF
  binary itself (the abstract page's "View PDF" link did not resolve to readable
  text in this tool), so this file does NOT claim a PDF-binary parse. The HTML
  rendering is arXiv's full text of the same v1 paper, and every figure below
  is cited to its section. If the coordinator applies a strict PDF-only gate,
  re-confirm the two headline figures (20 of 4,772; 90/90) against a downloaded
  PDF before posting — they are the only figures the script depends on.
- No figure from a secondary summary (including the Research Radar summary that
  repeats the 90/90 line) is cited as evidence here; secondary sources were
  only a pointer to the paper itself.

## Script claims, traced line by line

### 1. "The tool worked. Its printout misled the agent."
- VERIFIED — Abstract and §1: "that text can misrepresent what the tool
  actually did, even when the tool's computation is correct"; "Each tool did
  its job correctly, but its output omitted search limits, result caps, or
  identifier namespaces."
- Scope: a claim about the production system studied, not about all tools.

### 2. "It said found twenty documents, hiding they were the first twenty of four thousand seven hundred seventy-two."
- VERIFIED — §1 (worked example) and §2 (completeness defect):
  - The date_range_search tool "fetched at most 20 results, its formatter
    opened with 'Found 20 document(s)', and for the year 1920 the archive
    actually held 4,772 matches."
  - §1: "Its database contains 4,772 matching documents, but the tool only
    returns up to 20… 'Found 20 document(s)', then lists them… It just did
    not specify that they were the first 20 of 4,772."
- Wording note: the script says "said found twenty documents" (spoken words,
  no digits in voiceover). The paper's literal formatter text is
  "Found 20 document(s)". The paraphrase is faithful; a designed overlay
  should use "20 of 4,772" only if Vishnu approves that exact overlay text.
- Do NOT generalise this example: 4,772 is the 1920-year case, not a rate that
  applies to every search. A different production incident in §2 had 191
  matches behind a 10-result fetch ("Found 10 document(s)") — that figure is
  verified but deliberately NOT used in the script, to keep one example.

### 3. "The checker saw only that printout, so it approved the wrong answer."
- VERIFIED as the paper's mechanism — §1: a typical verifier "would not have
  database and codebase access either. It would simply compare the agent's
  answer to the data returned by the tool and conclude that it was accurate.
  And with the information given, the verifier would be right. Neither agents
  nor verifiers can recover a fact that the tool's formatter simply leaves out."
- Script wording is a simplification of that mechanism for one beat; it is not
  a claim that every verifier in every system works this way. The empirical
  backing is claim 4, not this sentence alone.

### 4. "In one fixed-answer test, across three kinds of error, all ninety verdicts flipped from accept to reject."
- VERIFIED — with a scope correction to the shortlist version (see below).
  - Abstract: "In one test, verifiers went from accepting incorrect answers
    90 out of 90 times to rejecting them 90 out of 90 times."
  - §4.2 (the precise statement, which governs): "In the fixed-answer measure
    the answer stays fixed and only the formatter's wording differs, so any
    verdict change is caused by the wording. Verifiers accepted the false
    answer 30/30 under the warped wording and 0/30 under the clear wording in
    each of the three families: 90/90 flips."
  - §1: "In a fixed-answer measure, the paired wording changed all 90 verifier
    verdicts, 30 unsupported answers each judged by three verifiers, from
    acceptance to rejection."
  - §3.2 defines the fixed-answer measure: one false answer per case, shown to
    the verifier under both formatter versions, nothing else varying.
- Exact scope of "90/90" — read carefully:
  - It is 30 verdicts per family × 3 families (scope, completeness,
    uncertainty) = 90 verdicts total that flipped. It is NOT 90 separate
    answers, NOT 90 verifiers, and NOT a result for all four defect families.
  - The script's phrase "across three kinds of error" carries that pooling
    honestly. An overlay or caption that says only "90/90" with no scope note
    would overstate it and must be paired with the three-family scope.
  - The three verifier/model families in the agent experiment (§3.1) were
    anthropic/claude-sonnet-5, openai/gpt-5.6-sol, and google/gemini-3.1-pro-preview
    (temperature 1.0 for agents, 0.0 for graders/verifiers). The script does
    not name models, which is correct for a faceless reel and avoids implying
    the result holds for all models — §6 Limitations: "We tested three model
    families; other models may behave differently."
- What the shortlist got wrong / imprecise: the shortlist phrasing "verifiers
  went 90/90 accept-wrong to 90/90 reject after the formatter stated missing
  limits/caps" omits (a) the three-family pooling, (b) the provenance
  exception, and (c) that the clear wording also contained instructions (claim 5).
  The script fixes (a) with "across three kinds of error" and (c) with
  "and how to handle them"; (b) is carried here and must go in the description.

### 5. "Rewrite the printout to state its limits and caps, and how to handle them, and the checker catches the error."
- VERIFIED as a statement about the paper's Condition B, with the caveat
  stated in the script-check flags:
  - §3: Condition A = warped wording; Condition B = "the clear wording that
    ships today… disclosing its scope, completeness, uncertainty, and
    provenance. For some families the shipped wording also instructs the model
    how to handle the disclosure, so the measured effect belongs to the
    complete text, not the disclosures alone."
  - §1 and §6 repeat: "These agent-side effects apply to the complete repaired
    wording, which combines factual disclosures with behavioral instructions;
    they do not isolate disclosure alone" / "The experiment does not isolate
    the effect of the disclosure fields by themselves."
  - So the script must NOT be read as "stating limits alone flips verifiers."
    It says "state its limits and caps, AND how to handle them" — that second
    clause is the instruction component, and it is why the clause stays in.
  - "The checker catches the error" refers to the fixed-answer result in
    claim 4 (0/30 accepted under clear wording in each of the three families).
    It does not mean verifiers catch every error in general.

### 6. "Check what your tool hides, not just what it shows. Follow for the next paper."
- Takeaway + paper-series follow line. No factual claim. "Follow for the next
  paper" is the paper-reel follow line (not a tool-reel CTA); no handle,
  no personal info, no employer name is spoken.

## Other paper figures — VERIFIED but deliberately NOT in the script

These are true in the paper and may be used in the description or as overlays
only if Vishnu approves them separately; they are not needed for the one idea
in this reel, and adding them would break the 80–90 word cap:

- 1,200 agent runs across three model families (§1, §3.1: 3 models × 40 cases ×
  2 conditions × 5 replicates).
- Agent overclaim under warped wording 62–100% depending on family; clear
  wording cut scope to 8%, completeness to 0%, uncertainty to 20% (§4.1).
  Note: completeness "remained at 62% under A" in one reading because grading
  permits search-scoped counts — the 62–100% range and the cut figures are
  the §4.1 headline, not a single clean percentage.
- Unsupported-claim reduction of 62 to 92 percentage points for scope,
  completeness, and uncertainty (§1, §4.1); provenance effect only +6 points.
- Frequency measure (answers agents actually wrote, §4.2 Table 2): verifiers
  accepted 229/240 scope, 136/148 completeness, 220/240 uncertainty, 120/240
  provenance warped-wording overclaims. These are frequency rates, NOT causal
  flips — never present them as "verifiers fail 95% of the time" in general.
- Control (§4.2 Table 1): 46 warped-wording false answers; with verified facts
  AND the correctness question, false acceptance fell to 0/92; facts alone or
  question alone did not eliminate it. This supports "given the missing facts
  and asked about correctness, verifiers could catch the errors" (Abstract)
  — it does not establish general verifier competence (§4.2: "it does not
  establish general verifier competence").
- Production archive: 17,807 documents (§2); scope cap: first 1,000,000
  characters per field (§2, "Searched the FULL text" after scanning no more
  than 1,000,000 characters); 14 documents had a transcript longer than the
  cap, and in 7 of 14 a term first appeared beyond it (§2).
- Audit-prompt demonstration (§5, exploratory, NOT a measured experiment):
  the prompt rediscovered the live defects in the authors' own system plus
  twelve more uncatalogued instances; pointed at OpenClaw it found a warped
  formatter whose fix was merged, and at Hermes it found a 500-character
  truncation without a marker, fix still open at writing. Deliberately omitted
  from the script: system names, length, and the paper's own warning that the
  exercise "remains an unevaluated demonstration" and was run with prior
  knowledge of the system's defects.
- Cost: total API spend $74.44 across pilots and full run (§4.3). Not used.

## Claims deliberately NOT made, and why

- NO "all verifiers fail" / "verifiers always accept wrong answers."
  The flip is for three families in one fixed-answer measure with three model
  families and frozen cases. Provenance did not flip (see below).
- NO "all tools are warped" / "every formatter hides limits."
  The study covers four known failure families in a single production system,
  with cases selected adversarially from failures already identified there.
  §6: "The resulting rates measure performance under a stress test and provide
  no estimate of how often such defects occur."
- NO "the fix is just to state the missing details."
  Condition B combined disclosures with handling instructions; disclosure
  alone was not isolated (§3, §6).
- NO "this fixes identifiers / ID mix-ups."
  Provenance is the exception: agent overclaim stayed at 94% under clear
  wording (§4.1), and verifier acceptance moved only 18/30 (60%) → 14/30 (47%)
  (§4.2). Only 7/120 clear-condition provenance answers correctly said no
  scan ID was present (§4.1). The paper's own conclusion (§5): identifier
  namespaces "needed enforcement through types or validation rather than
  clearer formatting alone." The Pic 3 image must not be captioned as if it
  fixes this family.
- NO "the tool lied / was deceptive."
  §6: "The study makes no claim that any output was intentionally deceptive."
  The script says "misled" and "hid," not "lied" — the earlier draft word
  "lied" was removed for this reason.
- NO production-system name, employer name, or personal detail in the script.
  The paper's production system (a research assistant for a digitised
  historical archive, used by the Pilsudski Institute in New York, per the
  Abstract) is named in the paper but is NOT named in the reel, per the
  faceless rule. Do not add it to the voiceover, overlays, or description.
- NO peer-review claim. Preprint only; workshop poster (non-archival) only.
- NO model names in the script. Naming Claude/GPT/Gemini would invite a
  "these models fail" reading the paper does not support beyond its three
  tested families and prompts (§7: "This result is limited to those cases,
  models, and prompts").
- NO claim that the harness matches deployment. §6: agents got one tool output,
  answered once, could not enter a tool loop, and did not get the production
  system prompt (which included warnings aimed partly at these defects).
  Production agents "can investigate further."

## Caveats to carry into the description (100–120 words, 6-block structure, separate draft)

1. Preprint, not peer-reviewed; workshop poster (non-archival) only.
2. One production system, four failure families, adversarially selected
   stress-test cases — rates are not prevalence estimates.
3. The 90/90 flip is the fixed-answer measure pooled across scope, completeness,
   and uncertainty (30/30 → 0/30 in each); the identifier/provenance family
   did NOT flip (18/30 → 14/30).
4. Clear wording = disclosures PLUS handling instructions; disclosure alone
   was not isolated.
5. Three model families and frozen prompts only; other models/prompts may differ.
6. The audit-prompt OpenClaw/Hermes finding is an exploratory demonstration,
   not part of the measured experiment — do not present it as a measured result
   in the description unless it is labelled exploratory.

## Verification status summary

| Figure in script | Status |
|---|---|
| Tool computation correct, printout omitted limits/caps/namespaces | VERIFIED (Abstract, §1, §2) |
| Found 20, first 20 of 4,772 (1920 case) | VERIFIED (§1, §2) |
| Checker judging only the printout approves the wrong answer (mechanism) | VERIFIED as paper's mechanism (§1), backed by fixed-answer test (§4.2) |
| 90 verdicts flipped, fixed-answer test, three families | VERIFIED with pooling scope (§1, §4.2) — see scope note above |
| Rewrite stating limits/caps + handling → checker catches the error | VERIFIED for Condition B as a whole, three families only (§3, §4.2) |
| Anything about provenance being fixed | NOT claimed — and must not be added (see §4.1, §4.2) |

Nothing in the script rests on the Day 1 shortlist summary alone. No figure
that could not be traced to the paper text above was kept in the script.

---

## Phase 2 verification — Screenwriter-Checker, 2026-11-04 (evening CST)

This section APPENDS Phase 1; Phase 1 content above is untouched. This check
closes Phase 1's transparency limit: Phase 1 verified figures from arXiv's HTML
rendering and flagged that the PDF binary had not been cleanly returned. This
Phase 2 check verified the same figures against the PDF itself. No script
words were changed by this check — Vishnu approved the script as FINAL on
2026-11-04 20:43 CST, and this check does not rewrite it.

### Source used (PDF, not HTML-only)

- PDF binary downloaded 2026-11-04 via `curl -L https://arxiv.org/pdf/2610.32110`
  to `/tmp/day2pdf/paper.pdf`: HTTP 200, 115,118 bytes, PDF document v1.7.
- Text extracted with `pdftotext -layout` (697 lines). All citations below are
  to that PDF text. Header confirms: "Who Verifies the Tools? How Warped
  Formatters Mislead Agents and Their Verifiers", William Jeffries,
  arXiv:2610.32110v1 [cs.AI] 23 Oct 2026.
- Verdict basis: PDF > HTML. Where PDF and Phase 1's HTML citations agree
  (they do, on every headline figure), the PDF citation governs.

### Headline figure (a): 20 of 4,772 — CONFIRMED in PDF

- §1 Introduction (worked example): "Its database contains 4,772 matching
  documents, but the tool only returns up to 20. In the tool's own words, the
  output begins 'Found 20 document(s)', then lists them… It just did not
  specify that they were the first 20 of 4,772."
- §2 (date_range_search defect): "it fetched at most 20 results, its formatter
  opened with 'Found 20 document(s)', and for the year 1920 the archive
  actually held 4,772 matches."
- Figures 1–2 (case F2-1920) repeat the same pair: warped "Found 20
  document(s) from 1920-1920" vs clear "Showing the first 20 of 4772
  documents with dates in 1920-1920."
- Scope note (unchanged from Phase 1): 4,772 is the 1920-year case, not a
  rate for every search. The script's "first twenty of four thousand seven
  hundred seventy-two" matches this case exactly. CONFIRMS.

### Headline figure (b): 90/90 flip, three families only — CONFIRMED in PDF

- Abstract: "In one test, verifiers went from accepting incorrect answers
  90 out of 90 times to rejecting them 90 out of 90 times."
- §4.2 Verifier acceptance (governing precise statement): "Verifiers accepted
  the false answer 30/30 under the warped wording and 0/30 under the clear
  wording in each of the three families: 90/90 flips." Preceding sentence
  names the three families: "scope, completeness, and uncertainty."
- §1 restates: "the paired wording changed all 90 verifier verdicts, 30
  unsupported answers each judged by three verifiers, from acceptance to
  rejection" (fixed-answer measure, §3.2: answer fixed, only wording varies).
- NOT 90 answers, NOT 90 verifiers, NOT all four families. The script's
  "In one fixed-answer test, across three kinds of error, all ninety verdicts
  flipped from accept to reject" carries the pooling and the fixed-answer
  scope honestly. CONFIRMS.

### Provenance limit — CONFIRMED in PDF, and it MUST stay in the description

- §4.2, immediately after the 90/90 sentence: "Provenance again moved little,
  from 18/30 (60%) to 14/30 (47%)."
- §4.1 Agent overclaim: "the clear wording cut scope, completeness, and
  uncertainty to 8%, 0%, and 20%, while provenance stayed at 94%"
  (Appendix C, Table 3: Provenance 120/120 (100%) warped → 113/120 (94%) clear).
- Consequence, unchanged from Phase 1: Pic 3 must not read as "everything
  fixed." The approved Beat 3 overlay "Say what's left out." does not claim
  a full fix, which is consistent — but the guard only holds if the
  description carries the provenance limit verbatim in numbers. The
  description draft in `description-draft.md` does: "identifier errors barely
  moved, 18/30 to 14/30, and overclaim stayed at 94%. Clearer wording helps;
  it does not fix everything."
- Do NOT add an overlay or caption reading only "90/90" with no scope note;
  any numeric overlay must be paired with the three-family scope
  (scope, completeness, uncertainty).

### Script drift check — NO DRIFT

- Script text in `script.md` (code block) compared programmatically against
  the approved text supplied for this check: exact match, character for
  character, 89 words by Python `split()` in both.
- Beat map reconciles: Pic 1 = 25 words, Pic 2 = 29 words, Pic 3 = 35 words;
  25 + 29 + 35 = 89. Concatenated beat lines equal the full script exactly.
- Checker checklist (role guide): 80–90 words PASS (89); hook 8 words
  ("The tool worked. Its printout misled the agent.") PASS (8–10 beat);
  one idea per reel PASS; paper follow-line CTA PASS; preprint flagged
  (description, not voiceover — arXiv ID spoken aloud would slow pace)
  PASS via description draft; no upgraded claims in voiceover PASS with
  the provenance guard above; no employer / portfolio / personal info /
  handle in script or description PASS.
- Residual note (accepted by Vishnu's 20:43 final approval, not a new flag):
  "the checker catches the error" is scoped to the fixed-answer result in
  the three families only, and "state its limits and caps, AND how to handle
  them" must stay intact — Condition B combined disclosures with handling
  instructions; disclosure alone was not isolated (§3, §6). Cutting the
  handling clause would upgrade the claim and is NOT approved by this check.

### Clearance

- NO STOP. Both headline figures CONFIRM against the PDF, the script has
  zero drift from the approved text, and the description draft carries the
  provenance limit honestly.
- The reel may proceed to final delivery ON THE NUMBERS, provided the
  posted description is the draft in `description-draft.md` (or any edit
  that keeps the provenance numbers and the preprint flag), and no new
  numeric overlay is added without the three-family scope note.
