---
title: "Zapier vs n8n vs Make Cost Calculator: What One Workflow Bills"
description: "Count what one workflow uses on Zapier (tasks), n8n (executions) and Make (credits), using each vendor's own billing rules. Free, no signup, runs in your browser."
date: 2026-08-09
lastmod: 2026-10-12
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
avatar: "overage-refusenik"
multimedia: true
cover:
  image: "/img/automation-cost-calculator.webp"
  alt: "The same workflow billed three ways: 2,000 Zapier tasks, 500 n8n executions, 2,500 Make credits"
  caption: ""
  relative: false
pricing_verified: 2026-08-03
products_compared:
  - name: "Zapier"
    application_category: "BusinessApplication"
    price_model: "Task-based subscription: Free USD 0 (100 tasks, two-step Zaps only); Professional starting from $19.99 /month (pricing page, 2026-10-09)"
    url: "https://zapier.com/pricing"
  - name: "n8n"
    application_category: "BusinessApplication"
    price_model: "Execution-based subscription, billed annually: Starter USD 20 per month (2,500 executions); Pro USD 50 per month (10,000); Business USD 800 per month (40,000, self-hosted only); Community Edition self-hosted (pricing page, 2026-10-09)"
    url: "https://n8n.io/pricing/"
pricing_sources:
  - "https://zapier.com/pricing"
  - "https://n8n.io/pricing/"
  - "https://www.make.com/en/pricing"
sitemap:
  priority: 0.8
---

*Disclosure: this page contains one affiliate link, to Make, and it is labelled where it appears. If you sign up through it we may earn a commission at no extra cost to you. Zapier and n8n are linked only to their own pricing pages, with no affiliate arrangement. The calculator is free, needs no signup, and runs entirely in your browser.*

## TL;DR

- **Each tool counts a different unit.** Zapier bills tasks for successful actions, n8n bills one execution per workflow run, and Make bills credits for module operations ([Zapier](https://zapier.com/pricing), [n8n](https://n8n.io/pricing/), [Make Help Center](https://help.make.com/credits)).
- **Items processed drive the bill, not the number of steps.** On Zapier and Make every action repeats for every item; on n8n one run counts once however many steps or items it has.
- **Six visible steps at 500 runs a month is 2,000 Zapier tasks, 500 n8n executions and 2,500 Make credits,** for standard (non-AI) apps and an instant trigger. The worked example below shows the arithmetic.
- **AI steps, code and some connectors cost more than one unit on Zapier and Make.** Both vendors say so on their own pages, so the calculator's numbers are a floor for workflows that use them.
- **This gives you usage, not an invoice.** Prices change, and Make's pricing page loads its prices with JavaScript that our checker cannot read, so this page quotes no Make plan price. The one Make plan figure it uses, 1,000 credits a month on Free, was read on the page by the owner on 12 October 2026, not by script ([Make pricing](https://www.make.com/en/pricing)).

Zapier, n8n and Make do not bill the same thing, so one workflow produces three different monthly numbers. This calculator applies each vendor's published billing rule to your workflow and gives you all three. Every rule below links to the vendor page it comes from, read on 9 October 2026.

{{< automation-cost-calculator >}}

## How to fill in the calculator

The field that decides the answer is the second one, items per run.

Most people size an automation by counting the boxes on the canvas. That is the wrong unit, because your bill scales with how many items you process, not with how long the workflow is. A three-step workflow that loops over 200 spreadsheet rows bills far more on Zapier and Make than a fifteen-step workflow that runs once. Make's own help page gives the mechanism: each bundle (one email, one contact, one row) triggers its own module run, so "bundles in earlier modules have a multiplying effect on the operations in the rest of the scenario" ([Make Help Center, Operations](https://help.make.com/operations)). If your number came out higher than expected, [why a shorter workflow can cost more](/posts/fan-out-tax-automation-billing/) shows which part generates the charge.

Zapier users report the same effect. One described a loop over spreadsheet rows where "each step within the loop is consuming tasks individually. For example, if 5 rows are processed, the number of tasks used is significantly higher than expected," and a Zapier community manager replied in the same thread that the Looping, Filter and Delay steps themselves are not billed ([Zapier Community](https://community.zapier.com/troubleshooting-99/excessive-task-usage-in-zap-how-to-optimize-for-email-sending-automation-49372), May 2025).

Try items per run at 1, then at 20. Zapier and Make climb together; n8n does not move, because n8n prices "based on monthly workflow executions, regardless of complexity" ([n8n pricing](https://n8n.io/pricing/)).

Then run it twice: once at this month's runs, once at the runs you expect after two more clients. The gap between those answers is usually where one tool crosses a plan limit and the others do not.

## How each tool counts, from its own pricing page

Let **R** be runs per month, **I** items per run, **A** billable actions inside a loop, and **B** billable actions outside it. These formulas assume standard apps and an instant (webhook) trigger; the exceptions are listed under each tool.

| Tool | Formula | Billing rule it applies |
|---|---|---|
| **Zapier** | (B + A × I) × R | One task per successful action; triggers and built-in tools are free |
| **n8n** | R | One execution per workflow run, any number of steps |
| **Make** | (1 + B + A × I) × R | One credit per module operation, including the trigger's run |

### Zapier: tasks

Zapier's pricing page says "each successful action in a Zap counts as a separate task," that "triggers don't count toward your task limit," that checking (polling) for new data never uses a task, and that a failed action "doesn't count against your task limit" ([Zapier pricing, FAQ](https://zapier.com/pricing), read 9 October 2026).

The same page lists the built-in tools that do not count as a task: Zapier Tables, Zapier Forms, Filter, Formatter, Path, Delay, Looping, Sub-Zap, Digest, Zapier Manager and Storage ([Zapier pricing, FAQ](https://zapier.com/pricing)). Leave those out when you count billable actions.

**The exception that changed since this page first went up:** Zapier now states that "AI model tier, code runtime, and connector type each affect how many tasks an action uses," and that "some apps or actions may use more than one task" ([Zapier pricing, About task usage rates](https://zapier.com/pricing)). The calculator counts one task per action, so if your Zap uses AI steps or code, treat its Zapier number as the minimum.

**Plan limits that matter here:** the Free plan includes 100 tasks a month and is limited to two-step Zaps, so any workflow with more than one action needs a paid plan. Professional is listed as "starting from $19.99 /month" and is sold in task tiers (750, 1.5K, 2K, 5K and up). When you reach your tier's limit, Zapier switches you to pay-per-task billing, which "is charged at a higher per-task rate than your base subscription tasks," or pauses your Zaps if you have turned that off ([Zapier pricing](https://zapier.com/pricing), read 9 October 2026).

### n8n: executions

n8n's pricing page says plans are priced "based on monthly workflow executions, regardless of complexity," and describes each tier's allowance as "workflow executions with unlimited steps" ([n8n pricing](https://n8n.io/pricing/), read 9 October 2026). Node count and item count do not enter into it.

The plans on that page: Starter at $20 a month billed annually for 2,500 executions, Pro at $50 a month billed annually for 10,000, and Business at $800 a month billed annually for 40,000, which the page marks as self-hosted only ([n8n pricing](https://n8n.io/pricing/), read 9 October 2026).

The free option is the Community Edition, which the same page describes as "a standard, self-hosted version of n8n" available on GitHub ([n8n pricing](https://n8n.io/pricing/)). The software costs nothing; running it does. A copy on your own laptop only runs while the laptop is on, so anything that has to fire on a schedule needs an always-on server, which is a cost of its own to price before you treat n8n as free.

### Make: credits

Make renamed operations to credits. Its help centre says "credits replaced operations as the term for Make's billing unit" and that for non-AI apps "1 operation equals 1 credit" ([Make Help Center, Credits](https://help.make.com/credits), read 9 October 2026).

An operation is "a single module run to process data or check for new data." Each module runs once per bundle it processes, except trigger modules, which run once per check "regardless of the number of bundles returned" ([Make Help Center, Operations](https://help.make.com/operations)). That is why the Make formula adds 1 for the trigger.

**Two exceptions to know about.** First, a scheduled (polling) trigger uses an operation every time it checks, even when it finds nothing ([Make Help Center, Operations](https://help.make.com/operations)), so a scenario that polls often uses credits on empty checks the calculator does not count. Second, some modules use more than one credit: Make AI modules are billed on tokens, some Content Extractor modules use 2 or 10 credits per operation ([Make Help Center, Credits](https://help.make.com/credits)), and the Make Code app uses "2 credits per 1 sec of code execution time" ([Make pricing](https://www.make.com/en/pricing)).

**What we could not read by script:** Make's pricing page loads its plan prices and credit allowances with JavaScript, and our price checker could not read them on 9 October 2026. This page therefore quotes no Make plan price. The Free plan is the one exception: the owner read Make's pricing page by hand on 12 October 2026 and found Free listed at up to 1,000 credits a month, with routers and filters, 3,500+ apps and a 15 minute minimum interval between runs ([Make pricing](https://www.make.com/en/pricing), read by the owner on 12 October 2026; our script cannot read it). The page text we could read on 9 October 2026 also showed a limit of 2 active scenarios on the free plan ([Make pricing](https://www.make.com/en/pricing)).

## A worked example you can check by hand

A form submission arrives through an instant trigger. A filter drops the incomplete ones. Then four standard actions run: create a CRM record, draft an invoice, send an email, append a row to a sheet. Six visible steps, no AI steps, no code. It fires 500 times a month, one submission at a time. The 500 is an illustrative input; the rest applies each vendor's billing rule as quoted in the section above.

| | What gets billed | Monthly usage | Which plan that fits (as of 9 October 2026) |
|---|---|---|---|
| **Zapier** | trigger free, filter free, 4 actions | 4 × 500 = **2,000 tasks** | Needs a paid plan (Free allows two-step Zaps only). Professional's 2K task tier covers it; read that tier's price from the slider on [Zapier's pricing page](https://zapier.com/pricing) |
| **n8n** | one execution per run | **500 executions** | Inside Starter's 2,500 executions, $20 a month billed annually ([n8n pricing](https://n8n.io/pricing/)) |
| **Make** | trigger run + 4 action modules | 5 × 500 = **2,500 credits** | 2,500 credits is more than Free's 1,000 a month, so it needs a paid plan ([Make pricing](https://www.make.com/en/pricing), Free figure read by the owner on 12 October 2026). Paid prices could not be read automatically, so check the plan on Make's page |

<figure class="blog-chart">
<svg viewBox="0 0 560 380" style="max-width: 100%; height: auto; font-family: 'Inter', system-ui, sans-serif; --chart-muted: #4b5563;" role="img" aria-labelledby="the-same-workflow-billed-three-ways-title the-same-workflow-billed-three-ways-desc">
  <style>
    @media (prefers-color-scheme: dark) { svg { --chart-muted: #d1d5db; } }
    @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
  </style>
  <title id="the-same-workflow-billed-three-ways-title">The same workflow, billed three ways</title>
  <desc id="the-same-workflow-billed-three-ways-desc">The same workflow, billed three ways. horizontal bar data: Make (credits) 2500; Zapier (tasks) 2000; n8n (executions) 500.Source: Worked example on this page, applying the billing rules published by Zapier, n8n and Make, read 9 October 2026.</desc>
  <text x="280.0" y="29" text-anchor="middle" font-size="18" font-weight="800" fill="currentColor">The same workflow, billed three ways</text>
  <text x="280.0" y="48.0" text-anchor="middle" font-size="12" fill="var(--chart-muted, currentColor)"><tspan x="280.0" dy="0">Six visible steps, four billable actions, 500 runs a month, one item</tspan><tspan x="280.0" dy="13">per run</tspan></text>
  <line x1="145" y1="298.0" x2="510" y2="298.0" stroke="currentColor" opacity="0.08" />
<line x1="145" y1="243.0" x2="510" y2="243.0" stroke="currentColor" opacity="0.08" />
<line x1="145" y1="188.0" x2="510" y2="188.0" stroke="currentColor" opacity="0.08" />
<line x1="145" y1="133.0" x2="510" y2="133.0" stroke="currentColor" opacity="0.08" />
<line x1="145" y1="78.0" x2="510" y2="78.0" stroke="currentColor" opacity="0.08" />
<text x="136.0" y="122.2" text-anchor="end" font-size="11" fill="currentColor" opacity="0.8"><tspan x="136.0" dy="0">Make (credits)</tspan></text>
<rect x="145" y="78.0" width="365.0" height="68.0" rx="4" fill="#f97316" />
<text x="518.0" y="122.2" font-size="11" fill="currentColor">2500</text>
<text x="136.0" y="198.2" text-anchor="end" font-size="11" fill="currentColor" opacity="0.8"><tspan x="136.0" dy="0">Zapier (tasks)</tspan></text>
<rect x="145" y="154.0" width="292.0" height="68.0" rx="4" fill="#38bdf8" />
<text x="445.0" y="198.2" font-size="11" fill="currentColor">2000</text>
<text x="136.0" y="274.2" text-anchor="end" font-size="11" fill="currentColor" opacity="0.8"><tspan x="136.0" dy="0">n8n (executions)</tspan></text>
<rect x="145" y="230.0" width="73.0" height="68.0" rx="4" fill="#a78bfa" />
<text x="226.0" y="274.2" font-size="11" fill="currentColor">500</text>
  <text x="280.0" y="366" text-anchor="middle" font-size="10" fill="var(--chart-muted, currentColor)">Source: Worked example on this page, applying the billing rules published by Zapier, n8n and Make (read 9 October 2026)</text>
</svg>
<figcaption>Source: Worked example on this page, applying the billing rules published by Zapier, n8n and Make, read 9 October 2026.</figcaption>
</figure>

Same work, three units, and the cheapest option depends on a billing rule none of the three lead with on their plan cards.

## What to automate before you cost it

Costing a workflow is the second decision. The first is whether the job is worth automating at all. If you are still at that stage, read [how to automate the manual parts of client work with AI](/posts/automate-client-work-with-ai/) first: it covers which jobs are worth handing over and the review step that keeps the output yours.

## What the calculator does not do

It does not predict your invoice. It gives you usage, which is arithmetic, and it names a plan tier only where we could read that tier's limit on the vendor's page. Above those tiers, and for every paid Make plan price, it tells you to read the live page rather than inventing a figure.

It assumes one workflow, standard apps and an instant trigger. If you run five workflows, add up five passes. If you use AI steps or code on Zapier or Make, or a polling trigger on Make, your real usage will be higher than the number shown, for the reasons quoted from each vendor above.

## Which one fits which kind of work

Usage is one input to the decision, not the only one. The billing unit is the part you can work out in advance, and that is what this section uses.

**Zapier** suits small automations you do not want to maintain. Its pricing page lists 9,000+ app integrations ([Zapier pricing](https://zapier.com/pricing)), against 3,500+ standard apps on Make's ([Make pricing](https://www.make.com/en/pricing)), and triggers, polling and built-in tools are free. The trade is that every action inside a loop is billed per item, and AI or code steps can cost more than one task.

**n8n** suits high-volume or loop-heavy workflows, because one run is one execution whatever it contains ([n8n pricing](https://n8n.io/pricing/)). The trade is setup: the free Community Edition is self-hosted, so you run and pay for the server it lives on.

**Make** sits between the two on that axis. It bills per module operation like Zapier bills per action, but it counts the trigger's run and, for polling triggers, every check ([Make Help Center, Operations](https://help.make.com/operations)). If its builder suits the way you work, [Make's free plan](/go/make/) (listed at up to 1,000 credits a month on [Make's pricing page](https://www.make.com/en/pricing), read by the owner on 12 October 2026) lets you build a scenario and watch the credit count per module before you pay anything; Make shows the credits each module consumed in the run view ([Make Help Center, Operations](https://help.make.com/operations)). *(Affiliate link: we may earn a commission if you later upgrade, at no extra cost to you. Make is the only one of the three we have an affiliate arrangement with, which is why it is the only one linked this way. It does not change the numbers above.)*

For the longer comparison, including where each builder's learning curve shows, read [n8n vs Zapier vs Make for freelancers](/comparisons/n8n-vs-zapier-freelancers-2026/).

## Common questions

{{< faq-section >}}
{{< faq question="Does Zapier charge for the trigger step?" >}}No. Zapier's pricing page says triggers do not count toward your task limit and that polling for new data never uses a task. Its built-in tools are also free: Tables, Forms, Filter, Formatter, Path, Delay, Looping, Sub-Zap, Digest, Zapier Manager and Storage. Failed actions are not billed. Some actions, such as AI steps and code, can use more than one task ([Zapier pricing](https://zapier.com/pricing), read 9 October 2026).{{< /faq >}}
{{< faq question="Why does n8n's number not change when I add steps?" >}}Because [n8n's pricing page](https://n8n.io/pricing/) says pricing is "based on monthly workflow executions, regardless of complexity", and it lists each plan's allowance as "workflow executions with unlimited steps" (read 9 October 2026, quotes rechecked 12 October 2026). One run counts once whether it has three nodes or thirty, and whether it processes one item or two hundred.{{< /faq >}}
{{< faq question="What is fan-out and why does it decide my bill?" >}}Fan-out is how many items a single run processes. A form submission is one item; a run that loops over 20 spreadsheet rows is 20. Make's help centre explains that each bundle triggers its own module run, so earlier bundles multiply the operations in the rest of the scenario, and Zapier bills each successful action, including each repeat inside a loop. Four actions over 20 items is 80 billable units per run rather than 4 (sources: [Make Help Center, Operations](https://help.make.com/operations) and [Zapier pricing](https://zapier.com/pricing)).{{< /faq >}}
{{< faq question="Are Make credits the same as Make operations?" >}}For standard apps, yes in practice. Make's help centre says credits replaced operations as its billing unit and that for non-AI apps 1 operation equals 1 credit. AI modules are billed on tokens, and some modules use more than 1 credit per operation ([Make Help Center, Credits](https://help.make.com/credits), read 9 October 2026).{{< /faq >}}
{{< faq question="Is self-hosted n8n really free?" >}}The Community Edition software is free: n8n's pricing page describes it as a standard, self-hosted version available on GitHub. Running it is not. A copy on your own computer only runs while that computer is on, so anything scheduled needs an always-on server, which you pay for separately ([n8n pricing](https://n8n.io/pricing/), read 9 October 2026). The same trade-off inside a real workflow is described in [how to automate the manual parts of client work](/posts/automate-client-work-with-ai/).{{< /faq >}}
{{< faq question="Will this calculator tell me my exact bill?" >}}No. It gives you monthly usage, which is exact arithmetic for standard apps and an instant trigger, and a plan tier only where we could read that tier's limit on the vendor page on 9 October 2026. It quotes no paid Make plan prices, because [Make's pricing page](https://www.make.com/en/pricing) loads them with JavaScript our checker cannot read; the Free figure of 1,000 credits a month was read by the owner on 12 October 2026. Check the live pricing pages ([Zapier](https://zapier.com/pricing), [n8n](https://n8n.io/pricing/), [Make](https://www.make.com/en/pricing)) before you buy.{{< /faq >}}
{{< /faq-section >}}

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Zapier vs n8n vs Make Cost Calculator",
  "url": "https://solobrief.co/tools/automation-cost-calculator/",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any modern browser",
  "description": "Free calculator that works out the monthly usage of one automation workflow on Zapier (tasks), n8n (executions) and Make (credits), applying each vendor's published billing rule and including the fan-out effect.",
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
