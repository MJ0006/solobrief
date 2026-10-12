---
title: "How to Set Up WordPress on Hostinger: A Freelancer's Walkthrough (2026)"
description: "A step-by-step guide to setting up WordPress on Hostinger for freelancers: pick the right plan, install WordPress in hPanel, add the essential plugins, and launch a portfolio or client site fast."
date: 2026-05-31
lastmod: 2026-10-11
slug: "how-to-set-up-wordpress-on-hostinger"
keywords: ["how to set up wordpress on hostinger", "install wordpress hostinger", "hostinger wordpress setup", "hostinger hpanel wordpress", "set up portfolio website hostinger", "hostinger wordpress for freelancers", "best hostinger plan for wordpress"]
author: "G Mohan Jayanth"
authorURL: "/about/"
draft: false
tags: ["wordpress", "web hosting", "freelance tools", "portfolio website"]
categories: ["Guides"]
affiliate_disclosure: true
schema_type: "Article"
brief_id: "brief-011"
user_notes_used: true
user_notes: "shared/workspace/03-production/user_notes/hostinger-vs-bluehost-notes.md"
avatar: "flow-protector"
multimedia: true
cover:
  image: "/img/how-to-set-up-wordpress-on-hostinger.webp"
  alt: "Setting up WordPress on Hostinger hPanel for a freelance website"
  caption: ""
  relative: false
sitemap:
  priority: 0.7
---

*This article contains affiliate links. If you buy through our links, we may earn a commission at no extra cost to you. We only recommend tools we've researched thoroughly, and I share my own experience where I have it.*

---

## TL;DR

- **Buy from Hostinger's WordPress hosting page, not the general one.** Hostinger sells a separate product called managed hosting for WordPress, with staging, automatic WordPress updates and a malware scanner listed as part of it.
- **Pick the plan by site count.** Up to three sites: Premium. More than three, or you want daily backups: Unlimited.
- **Let hPanel install WordPress.** The one-click installer handles the database, core files, and admin account.
- **Add five plugins, not fifty.** SEO, caching, security, backups, and an optional page builder.
- **Budget for the renewal, not the promo price.** Premium is $2.99 a month on a 48 month prepay and renews at $10.99 ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting), 10 October 2026).

Building the site is rarely what eats the day. The back and forth is: the registrar tab, the host tab, the theme demo that wants one more plugin, the client asking for a preview link while you are half way through the install. The afternoon goes, and the site itself accounted for twenty minutes of it.

So this is written to be finished in one sitting. Choose a plan, let hPanel install WordPress for you, point your domain, add a handful of plugins, and publish. You will not need FTP, a database screen or a command line. This guide walks through the steps a freelancer needs to launch a portfolio or client site, and the one cost most tutorials skip.

I have done this on Hostinger's managed WordPress Business plan: my own portfolio, a couple of WordPress blogs, and client sites all run from one account. So this is the process I actually use, not a theoretical one.

WordPress powers over 40% of all websites, according to [Hostinger's own WordPress hosting FAQ](https://www.hostinger.com/wordpress-hosting), which is why almost every host builds a setup flow around it and why your future clients will recognize the dashboard.

## Step 1: Which Hostinger product should you buy for WordPress?

Hostinger does not sell WordPress hosting in only one place. Its menu lists **Web hosting** ("fast, reliable shared hosting") and, as a separate product, **Managed hosting for WordPress** ("managed WordPress with AI tools and auto updates"), each with its own page ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)). This guide uses the WordPress product.

What the WordPress page lists as part of it: a one-click staging tool for testing changes, smart automatic WordPress updates, a web application firewall, automatic malware removal, and unlimited SSL certificates ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)). Hostinger describes managed hosting as a service where the provider takes care of software updates, security and backups so you can concentrate on the site itself.

How different is it from the general plans underneath? Hostinger's own FAQ says all of its hosting plans from Premium up are optimized for WordPress, and that the WordPress product adds features such as pre-installed plugins and automatic updates on top ([Hostinger WordPress hosting FAQ](https://www.hostinger.com/wordpress-hosting)). Hostinger publishes the CPU, RAM and inode limits per plan in a [separate support article](https://www.hostinger.com/support/6976044-parameters-and-limits-for-hosting-plans), which is the place to compare the hardware side. For a freelancer the practical answer is simple: if the site is WordPress, start from the WordPress page so the managed features are what you are paying for.

## Step 2: Which plan should a freelancer pick?

![Hostinger web hosting plans and pricing 2026](/img/screenshots/hostinger-pricing.webp)
*Match the plan to how many sites you will run. Public pricing page, June 2026.*

Match the plan to how many sites you will run, not to the feature list. All figures below are from [Hostinger's WordPress hosting page](https://www.hostinger.com/wordpress-hosting) as read on 10 October 2026.

| Plan | Intro price (48 month term) | Renews at | Websites | Storage | Backups |
|---|---|---|---|---|---|
| Premium | $2.99/mo ($143.52 upfront) | $10.99/mo | 3 | 20 GB SSD | Weekly |
| Unlimited | $3.99/mo ($191.52 upfront) | $16.99/mo | Unlimited | 50 GB NVMe | Daily, with easy restore |
| Cloud Startup | $7.99/mo ($383.52 upfront) | $25.99/mo | Unlimited | 100 GB NVMe | Daily and on demand |

*Source: [hostinger.com/wordpress-hosting](https://www.hostinger.com/wordpress-hosting), 10 October 2026. Hostinger notes all plans are paid upfront.*

- **One portfolio, or up to three sites:** Premium is enough. It holds three websites on 20 GB of SSD storage, includes a domain free for one year and two mailboxes per website free for one year ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)).
- **More than three sites, or you want daily backups:** Unlimited. It removes the site cap, moves you to 50 GB of NVMe storage, and switches weekly backups to daily ones with easy restore, which you start to care about the moment a paying client's site is involved ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)). The plan I ran my own portfolio, client sites and test builds on was sold as Business at the time; Unlimited is the tier that sits in that slot on the current lineup. Hostinger's page still mentions "WordPress Business" when it describes which plans include its Hostinger Agent AI tool, so the old name has not fully gone.
- **An agency or a high traffic client site:** Cloud Startup, which Hostinger positions as "dedicated power for agencies or high-traffic projects" ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)). Most solo freelancers will not need it on day one.

One honest note before you buy: the headline price needs a 48 month prepay, and the renewal is three to four times higher. Premium goes from $2.99 to $10.99 a month and Unlimited from $3.99 to $16.99 when the term ends ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)). Write the renewal rate down so it is not a surprise in year five. Every plan comes with a 30 day money-back guarantee, per the same page. For the full plan breakdown, see the [Hostinger review for freelancers](/reviews/hostinger-review-freelancers-2026/). If you are still comparing hosts, the [best web hosting for freelancers roundup](/reviews/best-web-hosting-freelancers-2026/) and the [Hostinger vs Bluehost comparison](/comparisons/hostinger-vs-bluehost-freelancers-2026/) cover the alternatives.

## Step 3: How do you connect or register your domain?

You have two paths:

- **New domain:** every WordPress plan lists the domain as free for one year ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)). During checkout or in hPanel under Domains, search for the name and claim it. After year one it renews at the normal registration price.
- **Existing domain:** if you already own a domain elsewhere, point it at Hostinger by updating its nameservers. hPanel shows you the exact values. DNS changes can take a few hours to spread, so do this first and let it settle while you build.

If you are still choosing a name, register the domain and the matching social handles at the same time so your brand is consistent across the web.

## Step 4: How do you install WordPress on Hostinger?

{{< video-loop src="/img/ai/wordpress-install-concept.mp4" poster="/img/ai/wordpress-install-concept-poster.webp" caption="How a one-click WordPress install flows: click, progress, site live. Illustration." >}}

This is the part hPanel makes easy, and the reason setup feels fast.

1. Log in to **hPanel** (Hostinger's control panel, used instead of cPanel).
2. Open the **WordPress** section, or follow the guided onboarding that appears on a fresh account.
3. Choose **Install WordPress**. The installer provisions the database, installs the WordPress core, and creates your admin account in one step.
4. Set your **site title**, **admin username**, and a **strong password**. Use a value from a password manager, not a reused one, because the admin login is the first thing bots try.
5. Pick your domain as the install location and confirm.

A minute or two later you have a WordPress dashboard at `yourdomain.com/wp-admin`, and you never had to create a database or upload a file by FTP. Hostinger's own getting-started steps for this product are to buy a plan and then "use the one-click installer to install WordPress on your account" ([Hostinger WordPress hosting FAQ](https://www.hostinger.com/wordpress-hosting)), and that is the only route most freelancers ever need.

If you prefer to watch the flow before doing it, this walkthrough covers the same hPanel install end to end:

{{< youtube-lite id="AGmSV79-EMY" title="How to set up WordPress on Hostinger (hPanel walkthrough)" >}}

## Step 5: Which theme should you start with?

Do not spend a day picking a theme. For a freelance portfolio or client site, a fast, well-coded theme matters more than a flashy one, because page speed feeds the Core Web Vitals scores Google uses as a ranking signal.

- Start with a lightweight, block-friendly theme. The default WordPress themes are a reasonable starting point.
- Avoid multipurpose themes that load sliders and builders you will never use. Every script they load is weight on every page.
- If you want drag-and-drop layout control, add a page builder as a plugin (Step 6) rather than relying on a heavy theme to do everything. Hostinger's page names Elementor and the Block editor as the two builders its AI website builder works with ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)).

You can change the theme later without losing your content, so this is not a permanent decision.

## Step 6: Which plugins does a freelance WordPress site actually need?

The quickest way to slow down or break a WordPress site is to install too many plugins. Five categories cover almost every freelance use case:

1. **SEO:** an SEO plugin manages titles, meta descriptions, sitemaps, and schema. [Rank Math](/go/rankmath/) suits freelancers because schema and content analysis are in its free tier.
2. **Caching:** on Hostinger, use **LiteSpeed Cache**. Hostinger runs LiteSpeed servers and its WordPress page credits them, with smart caching, for "a speed boost of up to 40%" ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)). That figure is Hostinger's claim, not one we measured.
3. **Security:** the managed WordPress plans already list a web application firewall, a WordPress malware scanner and automatic malware removal ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)). Add a login protection plugin on top if you want two-factor sign-in for the admin account.
4. **Backups:** Premium backs up weekly, Unlimited daily, Cloud Startup daily and on demand ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)). On Premium, a backup plugin gives you a restore point right before a big change. Back up before updating themes or plugins.
5. **Page builder (optional):** if you want visual layout control, add one page builder. Pick one and learn it well rather than stacking several.

Keep the list short. Every plugin is code that can slow the site or conflict with another plugin. The stronger reason is not the milliseconds: every plugin is one more update prompt and one more small interruption in a week that already has too many. A freelance site should cost you an afternoon once and close to nothing after that. Check your plugin list every few months and remove anything you are not using.

## Step 7: What should you configure before launch?

A few settings save you pain later:

- **Permalinks:** in Settings, Permalinks, choose **Post name** (`yourdomain.com/post-title/`). It reads better than the default numeric URLs and puts your keywords in the address.
- **HTTPS:** the WordPress plans include unlimited SSL certificates ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)). Still load the site on `https://` yourself before you share the link.
- **Search engine visibility:** make sure "Discourage search engines" is unchecked in Settings, Reading. It is easy to leave a new site hidden from Google by accident.
- **Email:** set up a branded address (such as you@yourdomain.com) so client emails do not come from a generic Gmail. Premium lists two mailboxes per website and Unlimited lists unlimited mailboxes, both free for the first year ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)).
- **Staging:** before you redesign a live client site, use the one-click staging tool that comes with the WordPress plans ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)), so the client never sees a half-finished page.

## Step 8: The pre-launch checklist

Before you send the link to a client or add it to your portfolio:

- Every page loads over `https://` with no mixed-content warnings.
- Permalinks are set to Post name.
- An SEO plugin is active and your homepage has a title and meta description.
- LiteSpeed Cache is active.
- A backup exists, and you know how to restore it.
- The site is visible to search engines (the discourage box is unchecked).
- Your contact form actually delivers to your inbox (test it).

Run a speed test after launch, for example with Google's free PageSpeed Insights, and fix whatever it flags first.

## Our recommendation

For a freelancer launching a portfolio or client sites, Hostinger's managed hosting for WordPress is a low-cost way to get online without becoming a server administrator. hPanel removes the parts that used to make WordPress setup intimidating, and the WordPress plans bundle staging, updates and malware scanning that you would otherwise bolt on with plugins. The honest trade-off is the renewal: Premium renews at $10.99 a month and Unlimited at $16.99 after the intro term ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)), so treat the renewal rate as the true cost.

If that fits how you work, you can [start a Hostinger plan here](/go/hostinger/) and follow the steps above. For the full plan breakdown before you commit, read the [Hostinger review for freelancers](/reviews/hostinger-review-freelancers-2026/).

## Frequently asked questions

{{< faq-section >}}
{{< faq question="Does Hostinger have a separate WordPress hosting plan?" >}}
Yes. Alongside its general web hosting, Hostinger sells managed hosting for WordPress on its own page, with Premium, Unlimited and Cloud Startup plans. That product lists a staging tool, automatic WordPress updates, a web application firewall and a malware scanner. Hostinger's FAQ also says all its plans from Premium up are optimized for WordPress ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)).
{{< /faq >}}
{{< faq question="Which Hostinger plan is best for a WordPress site?" >}}
For a portfolio or up to three sites, Premium at $2.99 a month on the 48 month term, renewing at $10.99. If you run more than three sites or want daily rather than weekly backups, Unlimited at $3.99, renewing at $16.99, removes the site cap ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)). I ran a portfolio, client sites and test builds together on one account, on the plan that was sold as Business at the time.
{{< /faq >}}
{{< faq question="How long does it take to install WordPress on Hostinger?" >}}
The install itself takes a minute or two. hPanel's guided onboarding asks a few setup questions and the one-click installer then creates the database, the WordPress core and the admin account in one step. Domain DNS can take a few hours longer if you are pointing an existing domain.
{{< /faq >}}
{{< faq question="Do I need to install WordPress manually on Hostinger?" >}}
No. Hostinger's getting-started steps are to buy a plan and use the one-click installer ([Hostinger WordPress hosting FAQ](https://www.hostinger.com/wordpress-hosting)). You never touch a database or upload files by FTP. Manual installation is only for non-standard setups.
{{< /faq >}}
{{< faq question="Does Hostinger include a free domain and SSL for WordPress?" >}}
Yes. Every managed WordPress plan lists a domain free for one year and unlimited SSL certificates ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)). After the first year the domain renews at the normal registration price. If you already own a domain, you can point it at Hostinger instead.
{{< /faq >}}
{{< faq question="What is the catch with Hostinger's cheap WordPress hosting price?" >}}
The renewal. The $2.99 Premium price needs a 48 month prepay of $143.52, and the plan then renews at $10.99 a month. Unlimited goes from $3.99 to $16.99 ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)). Budget for the renewal rate, not the promo rate.
{{< /faq >}}
{{< faq question="Can I host multiple client WordPress sites on one Hostinger plan?" >}}
Yes, but check the number first. Premium holds three websites. Unlimited and Cloud Startup remove the cap, and both back up daily instead of weekly, which matters once you are managing live client work ([Hostinger WordPress hosting](https://www.hostinger.com/wordpress-hosting)).
{{< /faq >}}
{{< /faq-section >}}

---

*MJ runs SoloBrief.co, a site covering AI tools and software for freelancers and one-person businesses. This guide is based on first-hand use of Hostinger's managed WordPress plans. Prices and plan features were read from Hostinger's WordPress hosting page on 10 October 2026; check them again before buying, since promotional and renewal rates change.*
