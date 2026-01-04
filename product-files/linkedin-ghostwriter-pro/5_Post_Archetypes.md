# 5 POST ARCHETYPES
## LinkedIn Ghostwriter Pro - Quick Reference Guide

---

## ARCHETYPE 1: THE CONTRARIAN TAKE
**Use When:** Challenging industry common wisdom

### Structure Template
```
[Bold claim contradicting mainstream belief]

Most people believe X.
But after [specific experience], I learned Y.

Here's what actually works:
→ [Concrete framework point 1]
→ [Counter-intuitive insight]
→ [Practical next step]

The lesson: [One-sentence takeaway]
```

### Real Example
```
Stop asking customers what they want.

Every founder is told "talk to users."
But after 50+ user interviews that led nowhere, 
I realized we were asking the wrong question.

Here's what works instead:
→ Watch what they DO, not what they SAY
→ Track their current painful workarounds
→ Build the thing that eliminates friction

The lesson: Users can't design your product. 
They can only show you their pain.
```

### Key Success Factors
✅ Claim must be genuinely controversial
✅ Backed by specific experience ($, time, numbers)
✅ Avoids strawman arguments
✅ Ends with broadly applicable insight

### Common Mistakes
❌ "Hot take" that's actually common opinion
❌ Contrarian for shock value without substance
❌ Missing the "here's what works instead" section
❌ Vague claim without supporting data

---

## ARCHETYPE 2: THE TECHNICAL DEEP DIVE
**Use When:** Teaching specific implementation

### Structure Template
```
[Problem statement with metrics]

Here's how we solved it:

**The Setup:**
[Technical context in plain English]

**The Approach:**
1. [Step with reasoning]
2. [Step with reasoning]
3. [Step with reasoning]

**The Results:**
[Specific metrics + unexpected learning]

**What I'd do differently:**
[Honest reflection]
```

### Real Example
```
Our Postgres database was taking 8+ seconds 
to load user dashboards. 

Here's how we got it down to 340ms:

**The Setup:**
JOIN hell. We were joining 6 tables on every request 
with no caching layer.

**The Approach:**
1. Added Redis cache for user metadata (95% hit rate)
2. Denormalized most-queried data into single table
3. Implemented database connection pooling (pgBouncer)

**The Results:**
→ 8.2s → 340ms average response time
→ Handled 10x traffic with same infrastructure
→ AWS bill dropped $940/month

**What I'd do differently:**
Denormalize earlier. We over-optimized for "proper" 
schema design when speed mattered more.
```

### Key Success Factors
✅ Actual technical detail (not surface-level)
✅ Specific tools/frameworks mentioned
✅ Plain English explanations of complex concepts
✅ Includes honest "what I'd change" section

### Common Mistakes
❌ Too technical (loses non-expert audience)
❌ Too simple (experts find it basic)
❌ Missing concrete metrics
❌ No admission of tradeoffs/limitations

---

## ARCHETYPE 3: THE FAILURE STORY
**Use When:** Sharing expensive lessons learned

### Structure Template
```
[Admission of failure with cost]

What I learned:

❌ What we did wrong:
[Specific decision]

✅ What we should have done:
[Actionable alternative]

The real lesson: [Insight that applies broadly]
```


### Real Example
```
I spent $43,000 on a feature nobody used.

What I learned:

❌ What we did wrong:
Built "advanced analytics dashboard" because 
competitors had it. Never validated demand.

✅ What we should have done:
Ship basic version. Wait for 10 users to ask 
for advanced features. Then build it.

The real lesson: FOMO-driven product decisions 
cost money. Competitor features aren't user needs.
```

### Key Success Factors
✅ Real cost stated (time, money, opportunity)
✅ NO redemption arc or silver lining
✅ Specific mistake identified
✅ Actionable lesson that transfers

### Common Mistakes
❌ Humble-brag disguised as failure
❌ "But we recovered!" ending (ruins authenticity)
❌ Vague lesson ("trust your gut")
❌ Blame shifted to external factors

---

## ARCHETYPE 4: SIGNAL VS NOISE FILTER
**Use When:** Cutting through trend hype

### Structure Template
```
Everyone is talking about [trending topic].

Here's what actually matters:

🚫 Ignore: [Common advice]
✅ Focus: [Contrarian alternative]

🚫 Ignore: [Common advice]
✅ Focus: [Contrarian alternative]

The pattern: [Meta-observation]
```

### Real Example
```
Everyone is talking about AI agents.

Here's what actually matters:

🚫 Ignore: "AI will replace developers"
✅ Focus: Learning prompt engineering fundamentals

🚫 Ignore: Complex agent frameworks
✅ Focus: Single-purpose AI tools that solve ONE problem

🚫 Ignore: Fear of being "left behind"
✅ Focus: Identifying where AI saves YOU time

The pattern: Hype cycles reward early adopters 
of SIMPLE applications, not complex ones.
```

### Key Success Factors
✅ Addresses real trending topic
✅ Each "ignore" paired with specific "focus"
✅ Backed by experience, not theory
✅ Meta-pattern ties it together

### Common Mistakes
❌ Ignoring advice nobody actually gives
❌ Alternative is still vague
❌ Missing the broader pattern
❌ Comes across as contrarian-for-sake-of-it

---

## ARCHETYPE 5: THE EXACT PLAYBOOK
**Use When:** Sharing repeatable system

### Structure Template
```
[Specific achievement with timeline]

Here's the exact system:

STEP 1: [Action with example]
→ Why it works: [Psychology/data]

STEP 2: [Action with example]
→ Why it works: [Psychology/data]

STEP 3: [Action with example]
→ Why it works: [Psychology/data]

Skip this if: [Honest limitations]
```

### Real Example
```
Went from 200 to 2,400 newsletter subscribers 
in 6 weeks without paid ads.

Here's the exact system:

STEP 1: Write 1 actionable post per week
→ Why it works: Consistency > perfection. 
Weekly rhythm builds trust.

STEP 2: End each post with newsletter tease
→ Why it works: Warm traffic converts 
at 12% vs 2% for cold.

STEP 3: Deliver immediate value in welcome email
→ Why it works: First impression determines 
open rates for next 10 emails.

Skip this if: You're not willing to write 
for 6+ months with zero results.
```

### Key Success Factors
✅ Specific outcome with timeline
✅ Each step includes "why it works"
✅ Honest about who this WON'T work for
✅ Actually repeatable (not luck-based)

### Common Mistakes
❌ Steps are too vague to execute
❌ Missing the psychological reason
❌ Overpromising results
❌ No disclaimer about limitations

---

## QUICK SELECTION GUIDE

| Situation | Best Archetype | Backup Option |
|-----------|---------------|---------------|
| Disagree with industry norm | Contrarian Take | Signal vs Noise |
| Solved hard technical problem | Technical Deep Dive | Exact Playbook |
| Made expensive mistake | Failure Story | Contrarian Take |
| Trend everyone is obsessing over | Signal vs Noise | Contrarian Take |
| Built repeatable system | Exact Playbook | Technical Deep Dive |

---

## MIXING ARCHETYPES

### Can You Combine?
**Sometimes**. Natural combinations:
- Contrarian + Exact Playbook
- Failure Story + What We Do Now (playbook)
- Technical Deep Dive + Honest Limitations (failure)

### Don't Force It
If you're combining more than 2 archetypes, 
you probably have 2 separate posts.

---

## ADAPTATION GUIDELINES

### For Different Industries

**SaaS/Tech:**
- Heavy on Technical Deep Dive
- Exact Playbook for growth tactics
- Contrarian for product philosophy

**Finance/Consulting:**
- Signal vs Noise for market trends
- Exact Playbook for frameworks
- Less Failure Story (industry culture)

**Marketing/Agency:**
- Exact Playbook for campaign tactics  
- Contrarian for strategy
- Technical Deep Dive for tools/data

**Product/Design:**
- Failure Story resonates strongly
- Contrarian for UX philosophy
- Technical Deep Dive for research methods

---

## ARCHETYPE FATIGUE

### Rotate Strategically
Don't use same archetype 3 posts in a row.

**Ideal Mix (Monthly):**
- Week 1: Contrarian Take
- Week 2: Technical Deep Dive
- Week 3: Exact Playbook
- Week 4: Failure Story

### When to Break Pattern
Special occasions override rotation:
- Major product launch → Exact Playbook
- Industry controversy → Contrarian Take
- Public failure → Failure Story

---

## SUCCESS METRICS BY ARCHETYPE

### Contrarian Take
**Good:** High comment debate, polarized reactions
**Bad:** Universal agreement (claim wasn't bold enough)

### Technical Deep Dive
**Good:** Questions asking for more detail
**Bad:** "Thanks for sharing!" (too surface-level)

### Failure Story
**Good:** Others sharing similar failures
**Bad:** "Inspiring!" (came across as humble-brag)

### Signal vs Noise
**Good:** "Needed this" from overwhelmed people
**Bad:** Argument about what you chose to ignore

### Exact Playbook
**Good:** "Saved this to try" comments
**Bad:** "Too specific to my situation" (wasn't)

---

**Remember:** Archetype is a STARTING POINT, not a rigid template. 
Adapt based on your voice, audience, and specific content.

**Version:** V3.1  
**Last Updated:** January 2026  
**Created by:** Viktor Seto - The AI Architect
