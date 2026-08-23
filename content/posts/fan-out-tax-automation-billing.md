---
title: "The Fan-Out Tax (Why a 3-Step Zap Can Cost 20x a 30-Step One)"
description: "Automation bills scale with items processed, not workflow length. The arithmetic behind the fan-out tax, and how to cut it without rebuilding anything."
date: 2026-08-23
lastmod: 2026-08-23
slug: "fan-out-tax-automation-billing"
keywords: ["fan out tax", "why is my zapier bill so high", "zapier task usage explained", "automation cost per item", "zapier vs n8n billing model", "reduce zapier task usage"]
author: "G Mohan Jayanth"
authorURL: "/about/"
draft: false
copy_qa: passed
status: "ready_for_offer_check"
tags: ["automation", "workflow tools", "pricing", "freelance tools"]
categories: ["Guides"]
affiliate_disclosure: true
schema_type: "Article"
secondary_schema: "FAQPage"
brief_id: "directive-2026-08-19-finding-2"
multimedia: true
concept_name: "The Fan-Out Tax"
cover:
  image: "/img/fan-out-tax-automation-billing.webp"
  alt: "Two automation workflows compared: 30 actions processing 1 item costs 30 tasks, while 3 actions processing 200 items costs 600 tasks"
  caption: ""
  relative: false
---

*This page contains one affiliate link, marked where it appears. It costs you nothing extra.*

Three actions processing 200 spreadsheet rows costs 600 tasks on [Zapier's published task definition](https://zapier.com/pricing). Thirty actions processing one form submission costs 30. The shorter workflow is 20 times more expensive, and nothing on the pricing page tells you that.

Those two figures are not estimates. They follow directly from the billing unit each vendor publishes: Zapier counts one task per successful action, [n8n](https://n8n.io/pricing/) counts one execution per workflow run, and [Make](https://www.make.com/en/pricing) counts one credit per module action. Every number on this page is arithmetic on those three definitions, read on 23 August 2026.

We are calling this the **fan-out tax**: the gap between what your automation looks like it should cost and what it actually costs, created entirely by how many items each run touches. It is the single most common reason a freelancer's automation bill arrives higher than expected, and it is invisible if you are counting steps.

> **Key Takeaways**
> - Zapier and Make bill **per item processed**, not per workflow. Four actions looping over 20 rows is 80 billable units per run, not 4.
> - n8n bills **per execution**. The same run counts once whether the workflow has 3 nodes or 30, and whether it processes 1 item or 200. This is the whole difference between the models.
> - Zapier does **not** bill the trigger, its built-in tools (Formatter, Paths, Filter, Delay, Looping, Digest, Storage, Tables), or failed actions. Most people over-count.
> - The fix is almost never a shorter workflow. It is filtering earlier, batching, or moving the fan-out heavy job to per-execution billing.

## What the fan-out tax actually is

Fan-out is how many items a single run processes. A form submission is one item. A run that loops over 20 spreadsheet rows is 20 items.

On Zapier and Make, every action inside that loop is billed **once per item**. So four actions over 20 items is 80 billable units for a single run, not four. On n8n, the same run counts once regardless.

The tax is the difference between those two models, and it compounds with volume. It is why the billing unit matters more than any individual price on any pricing page.

<svg viewBox="0 72 960 296" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="fan-out-tax-title fan-out-tax-desc">
  <title id="fan-out-tax-title">The Fan-Out Tax</title>
  <desc id="fan-out-tax-desc">A single automation run passes through a loop over N items and then A actions per item. Zapier and Make attach their billing meter at the per-item actions, so the cost multiplies with item count, while n8n meters the whole run once regardless of items or steps.</desc>

  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#4A4A47"/>
    </marker>
    <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#E8A045"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#FAFAF8"/>

  <!-- connectors first, so boxes sit on top -->
  <line x1="180" y1="136" x2="248" y2="136" stroke="#4A4A47" stroke-width="1" marker-end="url(#arrow)"/>
  <line x1="416" y1="136" x2="484" y2="136" stroke="#E8A045" stroke-width="1" marker-end="url(#arrow-accent)"/>
  <line x1="652" y1="136" x2="720" y2="136" stroke="#4A4A47" stroke-width="1" marker-end="url(#arrow)"/>

  <!-- arrow labels, mask bottom at y=128, stroke at y=136, an 8px visible gap -->
  <rect x="192" y="116" width="44" height="12" rx="2" fill="#FAFAF8"/>
  <text x="214" y="125" fill="#4A4A47" font-size="8" font-family="ui-monospace, monospace" text-anchor="middle" letter-spacing="0.06em">1 RUN</text>

  <rect x="424" y="116" width="52" height="12" rx="2" fill="#FAFAF8"/>
  <text x="450" y="125" fill="#4A4A47" font-size="8" font-family="ui-monospace, monospace" text-anchor="middle" letter-spacing="0.06em">N ITEMS</text>

  <rect x="660" y="116" width="52" height="12" rx="2" fill="#FAFAF8"/>
  <text x="686" y="125" fill="#4A4A47" font-size="8" font-family="ui-monospace, monospace" text-anchor="middle" letter-spacing="0.06em">A X N</text>

  <!-- step 1, trigger -->
  <rect x="40" y="100" width="140" height="72" rx="6" fill="#FAFAF8"/>
  <rect x="40" y="100" width="140" height="72" rx="6" fill="#ffffff" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="48" y="106" width="36" height="12" rx="2" fill="transparent" stroke="rgba(26,26,26,0.40)" stroke-width="0.8"/>
  <text x="66" y="115" fill="rgba(26,26,26,0.80)" font-size="7" font-family="ui-monospace, monospace" text-anchor="middle" letter-spacing="0.08em">STEP 1</text>
  <text x="110" y="140" fill="#1A1A1A" font-size="12" font-weight="600" font-family="system-ui, sans-serif" text-anchor="middle">Trigger fires</text>
  <text x="110" y="158" fill="#4A4A47" font-size="9" font-family="ui-monospace, monospace" text-anchor="middle">free on zapier</text>

  <!-- step 2, the fan-out, FOCAL -->
  <rect x="248" y="100" width="168" height="72" rx="6" fill="#FAFAF8"/>
  <rect x="248" y="100" width="168" height="72" rx="6" fill="rgba(232,160,69,0.12)" stroke="#E8A045" stroke-width="1"/>
  <rect x="256" y="106" width="36" height="12" rx="2" fill="transparent" stroke="rgba(232,160,69,0.60)" stroke-width="0.8"/>
  <text x="274" y="115" fill="#C8852F" font-size="7" font-family="ui-monospace, monospace" text-anchor="middle" letter-spacing="0.08em">STEP 2</text>
  <text x="332" y="140" fill="#1A1A1A" font-size="12" font-weight="600" font-family="system-ui, sans-serif" text-anchor="middle">Loop over N items</text>
  <text x="332" y="158" fill="#4A4A47" font-size="9" font-family="ui-monospace, monospace" text-anchor="middle">the multiplier</text>

  <!-- step 3, per-item actions -->
  <rect x="484" y="100" width="168" height="72" rx="6" fill="#FAFAF8"/>
  <rect x="484" y="100" width="168" height="72" rx="6" fill="#ffffff" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="492" y="106" width="36" height="12" rx="2" fill="transparent" stroke="rgba(26,26,26,0.40)" stroke-width="0.8"/>
  <text x="510" y="115" fill="rgba(26,26,26,0.80)" font-size="7" font-family="ui-monospace, monospace" text-anchor="middle" letter-spacing="0.08em">STEP 3</text>
  <text x="568" y="140" fill="#1A1A1A" font-size="12" font-weight="600" font-family="system-ui, sans-serif" text-anchor="middle">A actions per item</text>
  <text x="568" y="158" fill="#4A4A47" font-size="9" font-family="ui-monospace, monospace" text-anchor="middle">billed once each</text>

  <!-- step 4, total -->
  <rect x="720" y="100" width="200" height="72" rx="6" fill="#FAFAF8"/>
  <rect x="720" y="100" width="200" height="72" rx="6" fill="rgba(26,26,26,0.05)" stroke="#4A4A47" stroke-width="1"/>
  <rect x="728" y="106" width="36" height="12" rx="2" fill="transparent" stroke="rgba(74,74,71,0.40)" stroke-width="0.8"/>
  <text x="746" y="115" fill="#4A4A47" font-size="7" font-family="ui-monospace, monospace" text-anchor="middle" letter-spacing="0.08em">RESULT</text>
  <text x="820" y="140" fill="#1A1A1A" font-size="12" font-weight="600" font-family="system-ui, sans-serif" text-anchor="middle">Billable units</text>
  <text x="820" y="158" fill="#4A4A47" font-size="9" font-family="ui-monospace, monospace" text-anchor="middle">scales with N, not steps</text>

  <!-- meter attachment: Zapier and Make, at the per-item actions -->
  <line x1="568" y1="172" x2="568" y2="212" stroke="#E8A045" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="568" y="228" fill="#C8852F" font-size="8" font-family="ui-monospace, monospace" text-anchor="middle" letter-spacing="0.08em">ZAPIER AND MAKE METER HERE</text>

  <!-- meter attachment: n8n, across the whole run -->
  <line x1="40" y1="280" x2="920" y2="280" stroke="#4A4A47" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="40" y1="280" x2="40" y2="268" stroke="#4A4A47" stroke-width="1"/>
  <line x1="920" y1="280" x2="920" y2="268" stroke="#4A4A47" stroke-width="1"/>
  <rect x="376" y="272" width="208" height="16" rx="2" fill="#FAFAF8"/>
  <text x="480" y="284" fill="#4A4A47" font-size="8" font-family="ui-monospace, monospace" text-anchor="middle" letter-spacing="0.08em">N8N METERS THE WHOLE RUN ONCE</text>

  <!-- legend -->
  <line x1="40" y1="332" x2="920" y2="332" stroke="rgba(26,26,26,0.10)" stroke-width="0.8"/>
  <text x="40" y="352" fill="#4A4A47" font-size="8" font-family="ui-monospace, monospace" letter-spacing="0.14em">LEGEND</text>

  <rect x="140" y="344" width="12" height="10" rx="2" fill="rgba(232,160,69,0.12)" stroke="#E8A045" stroke-width="1"/>
  <text x="160" y="352" fill="#4A4A47" font-size="8" font-family="ui-monospace, monospace" letter-spacing="0.06em">THE STEP THAT MULTIPLIES THE BILL</text>

  <rect x="480" y="344" width="12" height="10" rx="2" fill="#ffffff" stroke="#1A1A1A" stroke-width="1"/>
  <text x="500" y="352" fill="#4A4A47" font-size="8" font-family="ui-monospace, monospace" letter-spacing="0.06em">FLOW STEP</text>

  <line x1="640" y1="349" x2="664" y2="349" stroke="#4A4A47" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="672" y="352" fill="#4A4A47" font-size="8" font-family="ui-monospace, monospace" letter-spacing="0.06em">WHERE THE METER ATTACHES</text>
</svg>

*Where each platform attaches its billing meter. The loop is the only step that multiplies, and n8n is the one platform whose meter sits outside it.*

## Why counting steps misleads you

The intuition almost everyone brings to automation pricing is that a bigger workflow costs more. It is a reasonable intuition and it is wrong on two of the three major platforms.

Here is the arithmetic, using the billing formulas each vendor publishes. `R` is runs per month, `A` is billable actions inside the loop, `I` is items per run, `B` is billable actions outside the loop:

| Platform | What one run costs | Why |
|---|---|---|
| **Zapier** | (B + A × I) | One task per successful action. The trigger is free, and so are the built-in tools. |
| **n8n** | 1 | One execution per run, whether the workflow has three nodes or thirty. |
| **Make** | (1 + B + A × I) | One credit per module action. The extra 1 is the trigger module, which Make does bill. |

Notice what is missing from the n8n row: `A` and `I` do not appear at all. Workflow length and item count are both irrelevant to the bill. That is not a discount, it is a different unit of account.

Now the two workflows from the opening, on Zapier:

- **The "big" workflow.** 30 actions, 1 item per run: 30 tasks.
- **The "small" workflow.** 3 actions, 200 items per run: 600 tasks.

The three-step automation costs 20 times more than the thirty-step one. Both look identical on a pricing page, which advertises a task allowance and says nothing about what generates tasks.

## What each platform actually bills

Most people over-count their Zapier usage, which is its own kind of expensive because it pushes you onto a higher plan than you need.

**Zapier does not bill:** the trigger step, failed actions, or any of its built-in tools. That list is longer than most people realise: Formatter, Paths, Filter, Delay, Looping, Sub-Zap, Digest, Zapier Manager, Storage, Tables and Forms. A Zap that looks like eight steps may only have four billable actions.

**n8n does not bill by node.** The Community edition has no execution limit at all. The real cost is hosting, and it is worth being honest about the catch: running n8n on your own machine only works while that machine is on, which defeats the purpose for anything scheduled overnight. A small always-on VPS is roughly five dollars a month.

**Make bills the trigger.** This is the one asymmetry people miss when moving from Zapier. Make charges one credit per module action *including* the trigger module, which is why the Make formula carries that extra `+ 1`. Routers and error handlers are free, and filters live on connections rather than being modules, so they do not count. One naming note worth knowing: [Make's pricing page](https://www.make.com/en/pricing) now uses the word credits, while a lot of older writing about the platform still uses operations. They are the same unit.

## How to work out your own number

You need four numbers, and the third one is the one that decides your bill:

1. **Runs per month.** How many times the trigger fires.
2. **Billable actions outside the loop.** Steps that happen once per run no matter how many items came in: a summary email, a final log entry.
3. **Items per run.** The fan-out. This is the field that usually decides everything.
4. **Billable actions inside the loop.** Steps that touch each item: create a record, send an email, update a row.

Then apply the formula for your platform from the table above. If you would rather not do the arithmetic by hand, [our automation cost calculator](/tools/automation-cost-calculator/) does exactly this for all three platforms at once and tells you which plan tier the result lands in. It runs in your browser and needs no signup.

A worked example, at 500 runs a month with four billable actions and no fan-out at all:

| Platform | Counted as | Monthly usage |
|---|---|---|
| **Zapier** | trigger free, filter free, 4 actions billable | 4 × 500 = **2,000 tasks** |
| **n8n** | the whole run counts once | **500 executions** |
| **Make** | trigger module + 4 action modules | 5 × 500 = **2,500 credits** |

Now raise items per run from 1 to 20 and the Zapier figure becomes 40,000 tasks while the n8n figure stays at 500. Nothing about the workflow changed except what it was pointed at.

## How to cut the fan-out tax

The instinct is to shorten the workflow. That is usually the least effective move available, because it attacks `A` when the problem is `I`.

**Filter before the loop, not inside it.** A filter that runs per item still costs you the actions that ran before it. Moving the filter upstream so fewer items enter the loop reduces `I` directly, and on Zapier the filter step itself is free.

**Batch where the destination allows it.** Many APIs accept an array. One action writing 20 rows is one billable action; twenty actions writing one row each is twenty. This single change is often the difference between two plan tiers.

**Move the fan-out heavy job, not everything.** You do not have to migrate your whole automation stack. If one workflow is generating most of your usage because it loops over large lists, that specific workflow is the candidate for per-execution billing. Leave the small, infrequent, trigger-once automations where they are.

**Count what is actually billable before you upgrade.** Given how much Zapier does not charge for, the honest first step is recounting. Plenty of workflows that look like they need a higher tier do not.

If you want to test a per-execution style builder without committing, [Make's free plan](/go/make/) gives you 1,000 credits a month, which is enough to find out whether the builder suits you before any money changes hands. *(That is an affiliate link. It costs you nothing extra, and we use it because Make is the one of the three whose affiliate program we are actually in.)*

## Where this leaves you

The fan-out tax is not a pricing trick and none of these vendors are hiding it. It is a mismatch between how people estimate automation cost and how automation cost is actually generated. Steps are visible, so people count steps. Items are invisible until the invoice arrives.

The practical version is one sentence: **your bill scales with how many things you process, not with how long your workflow is.** Once you know which of the four numbers above is large, the fix is usually obvious and rarely involves rebuilding anything.

For the wider picture of where each platform makes sense, [how the three platforms price at volume](/comparisons/n8n-vs-zapier-freelancers-2026/) works through the full comparison. If you are earlier than that and still deciding what to automate at all, [the manual parts of client work worth handing to a machine](/posts/automate-client-work-with-ai/) is the better starting point.

{{< faq-section >}}
{{< faq question="What is the fan-out tax?" >}}The fan-out tax is the gap between what an automation looks like it should cost and what it actually costs, caused by how many items each run processes. On Zapier and Make, every action inside a loop is billed once per item, so four actions over 20 items is 80 billable units rather than 4. Workflow length is not what drives the bill.{{< /faq >}}
{{< faq question="Does Zapier charge for the trigger step?" >}}No. Zapier bills one task per successful action and the trigger is not an action. Its built-in tools are also free: Formatter, Paths, Filter, Delay, Looping, Sub-Zap, Digest, Zapier Manager, Storage, Tables and Forms. Failed actions are not billed either.{{< /faq >}}
{{< faq question="Why does my n8n usage not change when I add steps?" >}}Because n8n bills per workflow execution rather than per action. One full run counts once whether the workflow has three nodes or thirty, and whether it processes one item or two hundred. That is the entire difference in the billing model.{{< /faq >}}
{{< faq question="Is a shorter workflow cheaper?" >}}Not reliably. A three-action workflow processing 200 items costs 600 Zapier tasks, while a thirty-action workflow processing one item costs 30. Reducing items per run lowers the bill far more than reducing steps.{{< /faq >}}
{{< faq question="Are Make credits the same as Make operations?" >}}Yes. Make's pricing page now says credits where the community and most older articles still say operations. It is one credit per module action either way, and unlike Zapier, Make does bill the trigger module.{{< /faq >}}
{{< /faq-section >}}
