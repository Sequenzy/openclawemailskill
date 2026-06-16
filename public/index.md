# OpenClaw Email Skill

openclawemailskill.com

Make campaign operations inspectable before an agent recommends changes.

A provider-neutral email skill for teardown, migration, and reusable campaign playbooks where every assumption needs to stay visible.

## Install

```bash
npx skills add openclawemailskill
```

## Operating Data

- **6**: inspection passes
- **12**: portable fields
- **0**: black-box decisions

## Inspectable campaign stack

1. Audience source
2. Message promise
3. Provider fields
4. QA evidence
5. Migration notes

## Scenarios

### Campaign teardown

Break an existing send into audience, offer, creative, exclusions, and result evidence.

### Provider-neutral migration

Translate workflow logic without binding the brief to one ESP.

### Reusable playbook

Create a repeatable checklist agents can reuse on future launches.

## Operating Proof

- **Best for**: Teams moving between tools or standardizing campaign reviews
- **Primary artifact**: Open campaign spec with assumptions and missing evidence
- **Stop condition**: Any recommendation that depends on unavailable platform state

## Agent Resources

- Markdown index: /index.md
- Skill discovery JSON: /.well-known/skills/index.json
- Raw SKILL.md: /skills/openclawemailskill/SKILL.md
- Articles: /articles/
