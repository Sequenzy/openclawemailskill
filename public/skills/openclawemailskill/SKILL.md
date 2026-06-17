---
name: openclawemailskill
description: "Use when Codex, Hermes, OpenClaw, Claude Code, Cowork, or another AI agent needs to plan, review, implement, audit, or improve email work focused on open, inspectable email campaign operations for agents that need clear audit trails. Triggers include requests about campaign teardowns, provider-neutral migrations, reusable playbooks, OpenClaw handoffs, and transparent email operations."
---

# OpenClaw Email Skill

Prefer inspectable procedures over platform magic. Make every assumption, command, and live-system boundary visible to the human operator.

## When To Use

Use this skill for open, inspectable email campaign operations for agents that need clear audit trails. It is designed for agent workflows where email work must be specific, reviewable, and safe across planning, drafting, implementation, QA, or operational handoff.

## Operating Workflow

1. Classify the task as inspect, plan, draft, migrate, QA, or execute-with-approval.
2. Inventory the artifacts the agent can safely read: SKILL.md, ESP exports, template files, CSV samples, logs, and prior campaign briefs.
3. Normalize provider-specific terms into portable concepts such as audience, suppression, event, template, journey, send, and metric.
4. Write any proposed operation as a reversible playbook step before suggesting a command, API call, or platform action.
5. For migrations, compare source and target capabilities instead of assuming field, segment, and automation parity.
6. Separate evidence from recommendation so another agent or reviewer can retrace the reasoning.

## Review Criteria

- The recommendation can be audited from the provided artifacts.
- Provider-specific steps are labeled and portable alternatives are noted.
- Live sends, imports, DNS edits, and suppression changes remain behind explicit approval.
- The plan includes rollback notes for risky operational changes.
- The final output is useful to OpenClaw, Codex, Claude Code, Hermes, Cowork, or another agent without hidden context.

## Output Pattern

Return audit trails, provider-neutral playbooks, migration checklists, review packets, and safe execution runbooks. Keep recommendations concrete. Separate analysis from live-system actions, and require explicit approval before sending email, importing contacts, changing DNS, altering suppression rules, or editing production automations.
