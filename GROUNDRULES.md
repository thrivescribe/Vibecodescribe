# Ground Rules

## Working Principles

### 1. YAGNI (You Ain't Gonna Need It)
- Only build what's needed for the MVP
- No premature optimization
- No features "just in case"
- If it's not in the MVP list, don't build it

### 2. Handover Manifest
- All project knowledge lives in `HANDOVER.md`
- Every code change must update the manifest
- Any agent can take over by reading this file
- Document decisions, not just code

### 3. Ask Before Assuming
- If unclear, ask the user
- Never guess at requirements
- If missing info, request it explicitly
- Better to ask than to build wrong

### 4. Progressive Disclosure
- Start simple, add complexity only when needed
- Each feature should be testable independently
- Build in small, verifiable increments

### 5. Language Policy
- All code comments in English
- All documentation in English
- No Chinese or other languages in the repository
- UI text in English

---

## File Convention

| File | Purpose |
|------|---------|
| `HANDOVER.md` | Master project documentation |
| `GROUNDRULES.md` | This file |
| `product-brief.md` | Original product brief |
| `src/` | All source code |
| `public/` | Static assets |

---

## Decision Log

All important decisions must be recorded in `HANDOVER.md` under "Open Questions" until resolved, then moved to a "Decisions Made" section.

---

## When to Ask

Ask the user when:
- Tech stack choice is unclear
- Design direction is ambiguous
- Feature scope is uncertain
- Deadline pressure requires prioritization
- Any assumption would change the outcome

Don't ask when:
- Following explicit instructions
- Implementing documented decisions
- Using standard best practices
- Small implementation details (e.g., variable names)
