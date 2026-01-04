export interface Product {
    slug: string;
    title: string;
    category: "Prompt" | "Toolkit" | "Agent";
    priceEUR: number;
    stripePriceId?: string;
    shortDescription: string;
    longDescription: string;
    whoFor: string;
    deliverables: string[];
    preview: string; // Markdown content for preview
    license: string;
    version: string;
    updatedAt: string;
    featured: boolean;
}

export const products: Product[] = [
    {
        slug: "linkedin-ghostwriter-pro",
        title: "LinkedIn Ghostwriter (No-Cringe Edition)",
        category: "Prompt",
        priceEUR: 29,
        stripePriceId: "price_1SluM5LeWKadfqKYd5S0Z1gv",
        shortDescription: "A rigorous system for writing high-engagement LinkedIn posts without the fluff.",
        longDescription:
            "Stop sounding like a generic AI bot. This prompt engineering system uses a strict 'negative constraint' engine to eliminate buzzwords, corporate jargon, and 'bro-etry'. It focuses on value-first communication, specifically designed for founders and technical leaders who want to build authority, not just impressions.",
        whoFor: "Founders, CTOs, and Senior Consultants who need to maintain professional credibility.",
        deliverables: [
            "Ghostwriter_Pro_Prompt.md (V3.1)",
            "Banned_Phrases_Database.csv",
            "5_Post_Archetypes.pdf",
            "Revision_Loop_Checklist.md",
        ],
        preview: `
### Excerpt from "Voice Calibration" Module

> **Rule #4: The "So What?" Test**
> *Before outputting any paragraph, the model must conceptually ask "So what?". If the sentence conveys generic sentiment (e.g., "In today's fast-paced world..."), DELETE IT instantly.*

**Supported Archetypes:**
1. The "Contrarian Take" (Industry myth-busting)
2. The "Technical Deep Dive" (How-to without simplification)
3. The "Failure Story" (Vulnerability with a lesson)
...
    `,
        license: "Personal & Commercial Use (Single User)",
        version: "3.1.0",
        updatedAt: "2024-01-15",
        featured: true,
    },
    {
        slug: "business-strategy-audit",
        title: "Evidence-Based Business Strategy Audit",
        category: "Prompt",
        priceEUR: 49,
        stripePriceId: "price_REPLACE_ME_2",
        shortDescription: "Turn LLMs into a ruthless McKinsey-style consultant that rips apart your business plan.",
        longDescription:
            "Most AI business advice is overly optimistic sycophancy. This prompt forces the AI to adopt the persona of a critical, evidence-based auditor. It requires you to input your strategy, and it outputs a confidence-scored risk assessment, competitive gaps, and logical fallacies. It refuses to validate bad ideas.",
        whoFor: "Entrepreneurs and Product Managers seeking honest feedback before execution.",
        deliverables: [
            "Strategy_Audit_Master_Prompt.md",
            "Output_Schema_JSON.json",
            "Competitor_Mapping_Template.xlsx",
        ],
        preview: `
### Audit Output Structure (Preview)

**Section 1: The Logic Stress Test**
- *Claim Identifiction*: [Extracts core value prop]
- *Evidence Rating*: [0-10 Score based on provided data]
- *Fallacy Check*: [Identifies circular reasoning, survivorship bias, etc.]

**Section 2: The "Pre-Mortem"**
- *Scenario A*: Market saturation within 6 months.
- *Scenario B*: CAC increases by 300%.
...
    `,
        license: "Personal Use Only",
        version: "2.0.5",
        updatedAt: "2023-12-10",
        featured: false,
    },
    {
        slug: "rag-pipeline-blueprint",
        title: "RAG Pipeline Blueprint",
        category: "Toolkit",
        priceEUR: 89,
        stripePriceId: "price_REPLACE_ME_3",
        shortDescription: "A production-grade architecture for Retrieval-Augmented Generation systems.",
        longDescription:
            "Don't start from scratch. This blueprint provides the exact architecture used in enterprise RAG systems. It covers advanced chunking strategies (semantic vs. fixed), vector database selection criteria, and a hybrid search ranking algorithm. Includes Python pseudocode for the critical ingestion pipeline.",
        whoFor: "AI Engineers and Technical Architects building internal knowledge bases.",
        deliverables: [
            "Architecture_Diagrams.fig (Figma)",
            "Ingestion_Pipeline_Pseudocode.py",
            "Chunking_Strategy_Guide.pdf",
            "Evaluation_Checklist.md",
        ],
        preview: `
### Component: Hybrid Search Ranker

\`\`\`python
def weighted_rank(keyword_score, semantic_score, current_weight=0.7):
    # Implements Reciprocal Rank Fusion (RRF)
    # Priority given to semantic match unless exact keyword exists in title
    if keyword_score > 0.9:
        return (keyword_score * 0.8) + (semantic_score * 0.2)
    return (keyword_score * (1 - current_weight)) + (semantic_score * current_weight)
\`\`\`
...
    `,
        license: "Commercial Team License",
        version: "1.2.0",
        updatedAt: "2024-02-01",
        featured: true,
    },
    {
        slug: "decision-architect-framework",
        title: "Decision Architect Framework",
        category: "Toolkit",
        priceEUR: 39,
        stripePriceId: "price_REPLACE_ME_4",
        shortDescription: "A systematic framework to minimize regret and maximize expected value in high-stakes decisions.",
        longDescription:
            "Based on decision theory and probabilistic thinking, this framework guides you through a structured process for making complex choices. It includes templates for Bayesian updating, a trade-off matrix, and a 'time-horizon' impact analysis to ensure you aren't optimizing for the short term at the expense of the long term.",
        whoFor: "Executives, Investors, and anyone facing career-defining choices.",
        deliverables: [
            "Decision_Matrix_Template.notion",
            "Cognitive_Bias_Checklist.pdf",
            "Regret_Minimization_Worksheet.docx",
        ],
        preview: `
### Phase 2: Bias Removal

*   **Sunk Cost Scan**: Are you continuing this path solely because of past investment?
*   **Confirmation Bias Check**: List 3 pieces of evidence that specifically *disprove* your preferred option.
*   **Base Rate Neglect**: What is the historical success rate of this class of action? (Ignore your 'unique' circumstances for a moment).
...
    `,
        license: "Personal Use",
        version: "1.0.0",
        updatedAt: "2023-11-20",
        featured: false,
    },
    {
        slug: "multi-agent-orchestrator",
        title: "Multi-Agent Content Orchestrator",
        category: "Agent",
        priceEUR: 149,
        stripePriceId: "price_REPLACE_ME_5",
        shortDescription: "A complete system prompt configuration for a 3-agent autonomous content team.",
        longDescription:
            "Turn your LLM interface into a newsroom. This system defines three distinct agents: The Researcher (facts & sources), The Writer (narrative & flow), and The Editor (style & compliance). It includes specific 'handoff' protocols ensures the Writer doesn't start until the Researcher has signed off on the data.",
        whoFor: "Content Agencies and automated news desks.",
        deliverables: [
            "System_Prompt_Researcher.md",
            "System_Prompt_Writer.md",
            "System_Prompt_Editor.md",
            "Orchestration_Script.py (LangChain compatible)",
        ],
        preview: `
### Agent Handoff Protocol (Snippet)

**FROM: Researcher**
**TO: Writer**

*Condition*: Research verification score > 8/10.

*Payload*:
1.  Verified Facts List (with URLs)
2.  Key Quotes (verbatim)
3.  Tone Constraints (from User Brief)

*Constraint*: The Writer MAY NOT invent facts. If a data gap exists, it must call the Researcher back.
...
    `,
        license: "Developer License",
        version: "2.1.0",
        updatedAt: "2024-02-15",
        featured: true,
    },
    {
        slug: "crypto-risk-sentinel",
        title: "Crypto Risk Sentinel (Non-Custodial)",
        category: "Agent",
        priceEUR: 79,
        stripePriceId: "price_REPLACE_ME_6",
        shortDescription: "An automated risk-management agent that monitors on-chain metrics and flags anomalies.",
        longDescription:
            "This is NOT a trading bot. It is a watchdog. The Sentinel monitors specified wallet addresses and contract interactions for 'red flags' like liquidity removal, unauthorized minting functions, or rapid sophisticated phishing patterns. It helps you stay safe in DeFi by analyzing smart contract risk before you click confirm.",
        whoFor: "DeFi users and DAO treasurers.",
        deliverables: [
            "Sentinel_Logic_Core.py",
            "Risk_Scoring_Model.pdf",
            "Notification_Webhook_Setup.md",
        ],
        preview: `
### Module: Liquidity Analysis

*   **Check 1**: Is LP locked? (Duration > 30 days)
*   **Check 2**: Top 5 holders concentration (Warning if > 20% excluding burn/lock)
*   **Check 3**: Honeypot simulation (Can sell check)

*Output*: Generates a 'Safety Score' (0-100). If Score < 60, triggers high-priority alert via Webhook.
...
    `,
        license: "Personal & Commercial Use",
        version: "1.5.2",
        updatedAt: "2024-01-20",
        featured: false,
    },
];
