---
title: "Automation Cost Calculator: Zapier vs n8n vs Make"
description: "Work out what one workflow really costs on Zapier, n8n and Make. Free, no signup, and it counts only what each vendor actually bills you for."
date: 2026-08-09
lastmod: 2026-08-11
slug: "automation-cost-calculator"
keywords: ["zapier cost calculator", "zapier task calculator", "make credits calculator", "n8n vs zapier cost", "how many zapier tasks will i use", "automation cost calculator", "make vs zapier pricing calculator"]
author: "G Mohan Jayanth"
authorURL: "/about/"
draft: false
tags: ["automation", "workflow tools", "freelance tools", "free tools"]
categories: ["Tools & Software"]
affiliate_disclosure: true
schema_type: "Article"
brief_id: "tool-001"
multimedia: true
cover:
  image: "/img/automation-cost-calculator.webp"
  alt: "The same workflow billed three ways: 2,000 Zapier tasks, 500 n8n executions, 2,500 Make credits"
  caption: ""
  relative: false
pricing_verified: 2026-08-03
pricing_sources:
  - "https://zapier.com/pricing"
  - "https://n8n.io/pricing/"
  - "https://www.make.com/en/pricing"
sitemap:
  priority: 0.8
---

*This page contains one affiliate link, marked where it appears. The calculator itself is free, needs no signup, and does not send your numbers anywhere. Everything runs in your browser.*

Every automation tool advertises a monthly price, and none of those prices tell you what you will pay. The reason is that the three big options do not count the same thing. Zapier counts tasks, n8n counts workflow executions, Make counts credits. Feed the same workflow into all three and you get three numbers that are not even the same order of magnitude.

This calculator does that arithmetic for you. Describe one workflow, get the monthly usage on each of the three, and see which plan it lands in.

{{< automation-cost-calculator >}}

## The one field people get wrong

It is the second one, items per run.

Most people size their automation by counting the boxes on the canvas. That is the wrong unit. **Your bill scales with how many items you process, not with how long your workflow is.** A three-step workflow that loops over 200 spreadsheet rows will cost you far more than a fifteen-step workflow that runs once and finishes.

This is where surprise bills come from, and it is well documented by the people it happens to. One Zapier user described a loop processing spreadsheet rows: "each step within the loop is consuming tasks individually. For example, if 5 rows are processed, the number of tasks used is significantly higher than expected." A Zapier community manager confirmed in the same thread that the Looping, Filter and Delay actions themselves are not billed, and helped restructure the Zap down to two tasks per row. ([Zapier Community](https://community.zapier.com/troubleshooting-99/excessive-task-usage-in-zap-how-to-optimize-for-email-sending-automation-49372), May 2025)

Set items per run to 1, then to 20, and watch what happens. Zapier and Make climb together. n8n does not move at all, because it charges for the run and not for what is inside it. That single behaviour is most of the reason people migrate to n8n at volume, and it is invisible if you only compare the headline prices.

## How each number is calculated

The formulas are deliberately simple, and they are all here so you can check them.

Let **R** be runs per month, **I** items per run, **A** billable actions inside the loop, and **B** billable actions outside it.

| Tool | Formula | Why |
|---|---|---|
| **Zapier** | (B + A × I) × R | One task per successful action. The trigger is free and so are the built-in tools. |
| **n8n** | R | One execution per run, whether the workflow has three nodes or thirty. |
| **Make** | (1 + B + A × I) × R | One credit per module action. The extra 1 is the trigger module, which is billable. |

### What is not billable, and why it matters

Getting this right is the difference between a useful number and a scary one.

**Zapier does not bill the trigger, and it does not bill its own built-in tools.** Formatter, Paths, Filter, Delay, Looping, Sub-Zap, Digest, Zapier Manager, Storage, Tables and Forms are all free, and failed actions are not counted either.

This matters because the standard argument against Zapier counts every visible step in a Zap and arrives at a frightening number. That number is wrong. If you read a comparison claiming a six-step Zap costs six tasks per run, the author did not read the pricing page. The real gap on a typical freelancer workflow is closer to four to one against n8n rather than six to one, and four to one is still decisive. It is also defensible line by line, which the inflated version is not.

**n8n bills per workflow execution.** Node count does not enter into it.

**Make bills one credit per module action.** Its pricing page now says credits where the community and most articles still say operations. They are the same thing. Routers and error handlers are free, and filters sit on connections rather than being modules, so none of those count.

## A worked example you can check by hand

A form submission arrives. A filter drops the incomplete ones. Then four things happen: create a CRM record, draft an invoice, send an email, append a row to a sheet. Six visible steps. It fires 500 times a month, one submission at a time.

| | What actually gets billed | Monthly total |
|---|---|---|
| **Zapier** | trigger free, filter free, 4 actions billable | 4 × 500 = **2,000 tasks** |
| **n8n** | the whole run counts once | **500 executions** |
| **Make** | trigger module + 4 action modules | 5 × 500 = **2,500 credits** |

Now watch what that does to the plans. 2,000 tasks puts you past Zapier's entry tier. 500 executions sits comfortably inside n8n's Starter plan. 2,500 credits fits inside Make's entry paid plan. Three tools, one workflow, and the cheapest option depends entirely on a billing rule that none of the marketing pages lead with.

## Not sure what to automate yet?

Costing a workflow is the second decision. The first is whether the job is worth automating at all, and a surprising number are not. If you are still at that stage, read [how to automate the manual parts of client work with AI](/posts/automate-client-work-with-ai/) first. It covers which jobs are genuinely worth handing over, the review step that keeps the output yours, and the two things that broke in my own workflow.

## What the calculator deliberately does not do

It does not predict your invoice, and any tool that claims to is guessing.

It gives you **usage**, which is arithmetic and does not go stale, and it tells you which plan that usage lands in based on the tier limits published on the vendor pages, read on 3 August 2026 and re-checked where possible on 9 August. Prices and tier limits change, sometimes quietly. Above the entry paid tier all three vendors price by volume, so the calculator says to go and read the live page instead of inventing a figure.

It also assumes one workflow. If you run five, add up the usage from five passes.

## Which one should you actually pick

Usage is one input to that decision and it is not the only one.

Pick **Zapier** if your automations are small and you never want to think about them again. It has the most guided builder, instant triggers as standard, and the largest app library. You are paying for not having to care.

Pick **n8n** if you run high-volume or fan-out heavy workflows and you are comfortable hosting something. Per-execution billing is the cheapest model that exists once you are past toy automations. The catch is real though: self-hosting on your own machine only runs while that machine is on, which quietly defeats the purpose for anything that has to fire at 2am. Budget around five dollars a month for a small VPS that is genuinely always on.

Pick **Make** if you want most of n8n's power without the setup cost. It sits in the middle on both price and learning curve, and the human approval step is built in rather than something you assemble yourself. If you land here, [Make's free plan](/go/make/) gives you 1,000 credits a month to test with, which is enough to find out whether the builder suits you before any money changes hands. *(That is an affiliate link. It costs you nothing extra and we only use it because Make is the one of the three whose program we are actually in.)*

For the full picture, including where the learning curve genuinely bites and what broke on a production workflow, read the longer comparison: [n8n vs Zapier vs Make for freelancers](/comparisons/n8n-vs-zapier-freelancers-2026/).

{{< faq-section >}}
{{< faq question="Does Zapier charge for the trigger step?" >}}No. Zapier bills one task per successful action, and the trigger is not an action. Its built-in tools are also free: Formatter, Paths, Filter, Delay, Looping, Sub-Zap, Digest, Zapier Manager, Storage, Tables and Forms. Failed actions are not billed either. Leave all of those out when you count billable actions.{{< /faq >}}
{{< faq question="Why does n8n's number not change when I add steps?" >}}Because n8n bills per workflow execution rather than per action. One full run counts once, whether the workflow has three nodes or thirty, and whether it processes one item or two hundred. That is the whole difference in the billing model, and it is why n8n pulls away from the other two on high-volume or fan-out heavy work.{{< /faq >}}
{{< faq question="What is fan-out and why does it decide my bill?" >}}Fan-out is how many items a single run processes. A form submission is one item. A run that loops over 20 spreadsheet rows is 20. On Zapier and Make, every action inside that loop is billed once per item, so 4 actions over 20 items is 80 billable units per run rather than 4. Your bill scales with how many items you process, not with how long your workflow is.{{< /faq >}}
{{< faq question="Are Make credits the same as Make operations?" >}}Yes. Make's pricing page now says credits where the community and most older articles still say operations. It is one credit per module action either way. Routers and error handlers are free, and filters live on connections rather than being modules, so they do not count.{{< /faq >}}
{{< faq question="Is self-hosted n8n really free?" >}}The software is free and there is no execution limit on the Community edition. The cost is hosting. Running it on your own machine costs nothing but only works while that machine is on and n8n is running, which defeats the point for anything that has to fire on a schedule or at 2am. A small always-on VPS is roughly five dollars a month, which is still far below any of the cloud plans.{{< /faq >}}
{{< faq question="Will this calculator tell me my exact bill?" >}}No, and be wary of any that claims to. It gives you monthly usage, which is exact arithmetic, and the plan tier that usage falls into based on published limits read on 3 August 2026. Above the entry paid tier all three vendors price by volume, so check the live pricing page before you buy.{{< /faq >}}
{{< /faq-section >}}

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Automation Cost Calculator: Zapier vs n8n vs Make",
  "url": "https://solobrief.co/tools/automation-cost-calculator/",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any modern browser",
  "description": "Free calculator that works out the monthly usage of one automation workflow on Zapier, n8n and Make, counting only what each vendor actually bills and including the fan-out effect.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "isAccessibleForFree": true,
  "publisher": {
    "@type": "Organization",
    "name": "SoloBrief",
    "url": "https://solobrief.co"
  }
}
</script>
