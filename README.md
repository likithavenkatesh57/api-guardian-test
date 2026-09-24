# API Guardian test repo
 
A controlled repo for pressure-testing api-guardian's Stripe ecosystem
adapter, built from reading the actual pipeline source rather than guessing
at behavior.
 
No real Stripe account is needed. `process.env.STRIPE_SECRET_KEY` is never
read at scan time — the tool only pattern-matches file text, it never
executes this code.
 
## What each file tests
 
| File | Hypothesis |
|---|---|
| `checkout.js` | Ambiguous migration (`charges.create`) routes to the AI model with `targetVersion` + `selectionReason`, not a silent codemod. |
| `refunds.js` | Blast radius reports two separate flows, not one. Also confirms every Stripe fix is tagged `"agent"`, since Stripe never registers `getCodemods`. |
| `healthy-control.js` | The interesting one: does a non-deprecated call (`paymentIntents.create`) get left alone? The pipeline's structure alone doesn't guarantee it — only the model choosing `"no_change"` does. |
| `provenance-edge-case.js` | A real import elsewhere in the file should not "launder" a comment-only mention into `"resolved"` provenance — but based on `classifyProvenance()`, it likely will. |
 
## Suggested run order
 
1. `POST /api/scan` with `dryRun: true`. Read `usagesFound`, `fixesGenerated`,
   and the per-fix `tier`, `targetVersion`, and `provenance` fields.
2. Confirm `healthy-control.js` produced no fix, or if it did, read the
   model's own explanation for why it didn't say `"no_change"`.
3. Confirm `provenance-edge-case.js`'s commented line is marked `resolved`
   despite not being real code.
4. Run again without `dryRun` and inspect the real PR body for the
   provenance notes and the absence of a "Fix method" row (no codemods used).
5. Run the exact same scan a second time and confirm it returns the existing
   PR (`prAlreadyExisted: true`) instead of opening a duplicate.
