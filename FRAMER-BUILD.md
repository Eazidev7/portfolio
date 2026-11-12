# Framer Rebuild Spec — Tobiloba Portfolio

Goal: publish this same portfolio as a **live Framer site** (free plan → `yourname.framer.website`) to satisfy "live Framer sites" job requirements. Everything below is copy-paste ready.

## Design tokens

| Token | Value |
|---|---|
| Background | `#0B0F0A` |
| Card surface | `#131A11` |
| Border | `#22301E` |
| Text | `#E8F0E3` |
| Dim text | `#9DB08F` |
| Accent | `#A3E635` |
| Headings font | Space Grotesk 700 |
| Body font | Space Grotesk 400/500 |
| Labels/mono | JetBrains Mono |

Fonts are on Google Fonts — Framer can load both natively.

## Page structure (paste this content)

### 1. Nav (sticky)
- Left: lime square with `T` + `tobiloba.dev`
- Right: Work · Services · Stack · Journey · About · Contact (pill button)

### 2. Hero
- Pill badge: `● Available for work — Abeokuta, Nigeria / Remote`
- H1: `Tobiloba.` then dim sub-line `Full-stack developer who ships to production.`
- Lede: "Six-plus years building for the web — from WordPress to live production systems: a 24/7 delivery marketplace, a retail POS & device-financing SaaS, fintech wallets, Telegram intelligence pipelines, and Solana trading automation. Not demos. Production."
- Buttons: `View work` (lime fill) + `Get in touch` (outline)
- Stats row (5): `6+ yrs` hands-on experience · `8+` shipped projects · `2` live production platforms · `4` app roles on one product · `2` chains shipped on

### 3. Selected work — cards in this order
Each card: badge, title, mono `Role:` line, paragraph, tag pills.

1. **GO7 — Delivery & Errands Platform** — badge `Flagship · Live`, link go7.ng, image `shots/go7.png`. Role: solo build — design, frontend, backend, payments, deploys.
2. **Investory — POS & Inventory SaaS** — badge `Live · SaaS`, link sevenlinkz-investory.web.app, image `shots/investory.png`. Role: solo build — design, frontend, backend, payments, print infra.
3. **Crypto Monitor** — badge `Data pipeline`. Role: solo build — Python pipeline, VPS deployment, ongoing ops.
4. **Solana Trading Bot** — badge `Trading automation`. Role: solo build — strategy filters, execution engine, audit logging.
5. **Solana Wallet App** — badge `Web3`. Role: solo build — Next.js app, wallet adapter integration, UI.
6. **Rekt City** — badge `Game`, image `shots/rektcity.png`. Role: solo build — Phaser 3 engine work, scenes, UI.
7. **NEXA Network — Swap & Migration dApp** — badge `DeFi · BSC`, image `shots/nexa.png`. Role: solo build — Web3 frontend, contract integration, wallet UX. (Rebranded build of the ALAI codebase — names swapped, design identical.)
8. **TobiCoin & Agent Tooling** — badge `Smart contracts + AI`. Role: solo build — Solidity contract, Python agent services.

(Full card copy: lift verbatim from `index.html` — each card's paragraph and meta bullets are already written.)

### 4. What I can build for you — 6 cards
Delivery & marketplace apps · POS & inventory SaaS · Payments & fintech · Bots & automation · Web3 & contracts · WordPress & business sites. (Copy in `index.html`, id="services".)

### 5. Stack — 6 group cards
Frontend · Backend & Data · Mobile & PWA · Web3 · Payments & Realtime · Ops. (Copy in `index.html`, id="stack".)

### 6. Journey timeline — 6 entries
`2025—now` GO7 · `2026` Investory · `2026` Telegram intelligence · `2026` Web3/AI/games · `2025` Solana trading bot · `2019→ 6+ yrs` WordPress. (Copy in `index.html`, id="journey".)

### 7. How I work — 2 paragraphs + 4 principles
Copy in `index.html`, id="about".

### 8. Contact
- H2: `Let's build something that stays up.`
- Buttons: email `go7delivery@gmail.com` · WhatsApp `wa.me/2347030680816` · GitHub `feyisetan7links` · LinkedIn
- Above it: testimonial slot + "References from 7linkz Phone Village & GO7 vendors available on request."

## Interactions (Framer equivalents)

| This site's effect | In Framer |
|---|---|
| `.reveal` fade-up | Effects → Appear (once, ease-out ~0.6s) |
| Card hover lift | Card component → hover variant, y -4, darker border |
| Sticky nav blur | Fixed position + backdrop blur fill |
| Pulsing status dot | Two variants + loop transition |

## Breakpoints
Desktop 1200 / Tablet 810 / Phone 390. Mobile: single-column cards, hamburger menu.

## Assets to upload
`shots/go7.png`, `shots/investory.png`, `shots/rektcity.png`

## Publish checklist
- [ ] Publish → free `*.framer.website` URL (this is your "live Framer site" link)
- [ ] Submit in application *alongside* this HTML portfolio as engineering proof
- [ ] Optional: second Framer page (Investory marketing site) to show range
