# Framer Copy Deck — paste-ready text for every section

Every block below is verbatim from `index.html`, in the build order from `FRAMER-BUILD.md`.
Paste text → apply style (tokens in that file) → move on. No transcribing from HTML.

**Fix before publishing:**
- ~~LinkedIn URL~~ — done: `https://www.linkedin.com/in/adekoya-oluwatobi-441477161`
- Testimonial quote is a placeholder — get one line from 7linkz Phone Village or a GO7 vendor.

---

## 1. Nav

Brand name: `tobiloba.dev` (`.dev` in accent lime)

Links (left→right): `Work` · `Services` · `Stack` · `Journey` · `About` · `Contact`
(`Contact` is the pill/CTA button — lime fill.)

## 2. Hero

Badge pill:
```
● Available for work — Abeokuta, Nigeria / Remote
```

H1 (two lines):
```
Tobiloba.
```
Dim sub-line:
```
Full-stack developer
who ships to production.
```

Lede paragraph:
```
Six-plus years building for the web — from WordPress to live production systems: a 24/7 delivery marketplace, a retail POS & device-financing SaaS, fintech wallets, Telegram intelligence pipelines, and Solana trading automation. Not demos. Production.
```

Buttons: `View work` (lime fill → scrolls to Work) · `Get in touch` (outline → scrolls to Contact)

Stats row (5 items, number then label):
| `6+ yrs` | hands-on experience |
| `10+` | shipped projects |
| `2` | live production platforms |
| `4` | app roles on one product |
| `2` | chains shipped on |

## 3. Selected work

Section head — index `01`, title `Selected work`, subtitle:
```
Everything below is real code that runs — most of it in production, all of it built end-to-end.
```

### Card 1 — GO7 (flagship)

- Badge: `Flagship · Live`
- Links: `go7.ng ↗` → https://go7.ng · `Play Store ↗` → https://play.google.com/store/apps/details?id=g.go7.app
- Image: `shots/go7.png`
- Title: `GO7 — Delivery & Errands Platform`
- Role line: `Role: solo build — design, frontend, backend, payments, deploys`
- Paragraph:
```
A full multi-role marketplace running 24/7 in Abeokuta: customer, vendor, rider and admin apps plus native Android builds. Real-time order tracking on live maps, Paystack payments, dedicated virtual account wallets, push notifications, and a zero-downtime deploy pipeline.
```
- Meta bullets:
```
Android app live on Google Play
4 user roles, one codebase
DVA wallet funding via Paystack + Titan
Verify-before-cutover FTP deploys — site never goes down
```
- Tags: `React` `Vite` `Firebase` `Paystack` `Capacitor` `Leaflet / MapLibre` `PWA` `Zustand`

### Card 2 — Investory (flagship)

- Badge: `Live · SaaS`
- Link: `sevenlinkz-investory.web.app ↗` → https://sevenlinkz-investory.web.app
- Image: `shots/investory.png`
- Title: `Investory — POS & Inventory SaaS`
- Role line: `Role: solo build — design, frontend, backend, payments, print infra`
- Paragraph:
```
A production retail platform built for 7linkz Phone Village: a keyboard-first counter POS, IMEI-level stock control, Paystack checkout that only saves a sale after payment confirms, BNPL device financing with MDM remote lock, staff RBAC, end-of-day reports, and thermal printing routed through a Firestore print queue.
```
- Meta bullets:
```
IMEI-level inventory + bulk CSV/Excel import
BNPL device financing + MDM remote lock/unlock
Verify-then-save Paystack checkout, EOD reports, immutable audit log
Installable PWA · FCM push alerts · cloud print queue → thermal printers
```
- Tags: `React 19` `Vite` `Firebase` `Paystack` `PWA` `FCM` `Node print server`

### Card 3 — Real Milade Beauty

- Badge: `E-commerce` · side note: `full-stack store`
- Image: `shots/milade.png`
- Title: `Real Milade Beauty — Skincare Storefront`
- Role line: `Role: solo build — storefront, PHP/MySQL API, admin panel, payments`
- Paragraph:
```
A complete skincare e-commerce build: Next.js 15 storefront exported as static files for cheap shared hosting, backed by a custom PHP + MySQL API — product catalog, cart, Paystack checkout with server-side verify and webhook, coupons, customer order tracking, and an admin panel for products, orders and settings.
```
- Meta bullets:
```
Static Next.js export + custom PHP/MySQL API — runs on plain cPanel hosting
Paystack inline checkout + verify + webhook, coupons, order tracking
Admin dashboard: catalog, orders, settings, WhatsApp ordering
```
- Tags: `Next.js 15` `React 19` `TypeScript` `Tailwind 4` `PHP` `MySQL` `Paystack`

### Card 4 — Furniture or Living

- Badge: `E-commerce` · link: `live demo ↗` → https://eazidev7.github.io/furniture-or-living/
- Image: `shots/furniture.png`
- Title: `Furniture or Living — Furniture Storefront`
- Role line: `Role: solo build — storefront, cart & checkout, Supabase backend, admin panel`
- Paragraph:
```
A furniture e-commerce build with an editorial, product-first design: collection browsing, cart and checkout flow, order enquiries, dark mode, and an admin dashboard — backed by Supabase edge functions as the admin API.
```
- Meta bullets:
```
Cart + multi-step checkout with order persistence
Admin panel secured through Supabase edge functions
Dark mode + animated product assembly showcase
```
- Tags: `Vanilla JS` `HTML/CSS` `Supabase` `Edge Functions`

### Card 5 — Crypto Monitor

- Badge: `Data pipeline` · link: `cryptomonitor.surge.sh ↗` → https://cryptomonitor.surge.sh
- Title: `Crypto Monitor`
- Role line: `Role: solo build — Python pipeline, VPS deployment, ongoing ops`
- Paragraph:
```
A Telegram intelligence system running on a VPS: watches groups for keywords, contract addresses and scam patterns; mines "can't sell" complaints to surface bad tokens; classifies and backfills findings through a bot UI.
```
- Tags: `Python` `Telethon` `SQLite` `systemd / nohup` `SSH automation`

### Card 6 — Solana Trading Bot

- Badge: `Trading automation`
- Title: `Solana Trading Bot`
- Role line: `Role: solo build — strategy filters, execution engine, audit logging`
- Paragraph:
```
Automated memecoin trader for pump.fun / letsbonk launches — token scanning, safety filters, and full trade logging/auditing to CSV and JSON for post-trade review.
```
- Tags: `Node.js` `@solana/web3.js` `SPL Token` `REST APIs`

### Card 7 — Solana Wallet App

- Badge: `Web3`
- Title: `Solana Wallet App`
- Role line: `Role: solo build — Next.js app, wallet adapter integration, UI`
- Paragraph:
```
Next.js wallet client with Phantom adapter integration, auto-connect, and real-time SOL balance — clean Tailwind UI on the App Router.
```
- Tags: `Next.js 14` `TypeScript` `Tailwind` `Wallet Adapter`

### Card 8 — Rekt City

- Badge: `Game`
- Image: `shots/rektcity.png`
- Title: `Rekt City`
- Role line: `Role: solo build — Phaser 3 engine work, scenes, UI`
- Paragraph:
```
A browser game built on the Phaser 3 engine with a typed, componented codebase — asset pipeline, scene architecture, and a Vite build.
```
- Tags: `Phaser 3` `TypeScript` `Vite`

### Card 9 — NEXA Network — Swap & Migration dApp

- Badge: `DeFi · BSC` · side note: `dApp`
- Image: `shots/nexa.png`
- Title: `NEXA Network — Swap & Migration dApp`
- Role line: `Role: solo build — Web3 frontend, contract integration, wallet UX`
- Paragraph:
```
A DeFi migration platform on Binance Smart Chain: holders swap legacy tokens into a new verified contract through a guided swap flow, plus a direct token purchase path and a real-time USDT dividend dashboard. Multi-wallet connect (MetaMask, TrustWallet, SafePal, WalletConnect), gas-aware transactions, and swap fees/deadlines enforced on-chain.
```
- Meta bullets:
```
Legacy → new token migration at fixed ratio — fees & deadline enforced on-chain
Real-time USDT dividend dashboard with auto-claim tracking
Web3Modal + WalletConnect — MetaMask, TrustWallet, SafePal, Binance
BSCScan-verified contracts · gas estimation · mobile wallet support
```
- Tags: `ethers.js` `Web3Modal` `WalletConnect` `BSC` `Bootstrap 5` `Vite`
- Note: this is the rebranded NEXA build — never write the old token name anywhere.

### Card 10 — TobiCoin & Agent Tooling

- Badge: `Smart contracts + AI`
- Title: `TobiCoin & Agent Tooling`
- Role line: `Role: solo build — Solidity contract, Python agent services`
- Paragraph:
```
An ERC-20 token written on OpenZeppelin contracts, alongside Python service tooling: a Gemini-powered CLI agent and HTTP gateway/proxy services for programmatic access.
```
- Tags: `Solidity` `OpenZeppelin` `Python` `Gemini API`

## 4. What I can build for you

Section head — index `02`, title `What I can build for you`, subtitle:
```
Everything below maps to something already running in production — you're buying proven systems, not promises.
```

6 cards (title / body):

1. **Delivery & marketplace apps**
   `Multi-role platforms like GO7 — customer, vendor, rider & admin apps, live tracking, payments. One codebase, web + Android.`
2. **POS & inventory SaaS**
   `Retail systems like Investory — stock down to IMEI level, staff roles & approvals, EOD reports, thermal printing.`
3. **Payments & fintech**
   `Paystack checkout, webhooks, wallets & dedicated virtual accounts — verify-then-save flows that never lose a sale.`
4. **Bots & automation**
   `Telegram monitors, trading automation, data pipelines — deployed on your VPS and built to run unattended.`
5. **Web3 & contracts**
   `Solana integrations, wallet adapters, SPL & ERC-20 tokens — from contract to connected UI.`
6. **WordPress & business sites**
   `6+ years of client sites, WooCommerce stores, custom themes, plugins and ongoing maintenance.`

## 5. Stack

Section head — index `03`, title `Stack`, subtitle:
```
Tools I use to ship — chosen for what survives production, not what's trendy.
```

6 group cards (title / single-line list):

- **Frontend** — `React · Next.js · TypeScript · Vite · Tailwind · MUI · Framer Motion · Zustand · React Query`
- **Backend & Data** — `Node.js · Express · PHP / WordPress · Firebase (Firestore, Cloud Functions, FCM, Storage) · Python · SQLite`
- **Mobile & PWA** — `Capacitor (Android) · Service workers · Push notifications · Offline-first caching`
- **Web3** — `Solana (web3.js, SPL, Wallet Adapter) · Solidity · OpenZeppelin · EVM`
- **Payments & Realtime** — `Paystack · Dedicated virtual accounts · Webhooks · Socket.IO · Leaflet / MapLibre / Google Maps`
- **Ops** — `VPS & SSH automation · Zero-downtime FTP deploys · Sentry · Deploy verification scripts`

## 6. Journey timeline

Section head — index `04`, title `The journey so far`, subtitle:
```
Six years on WordPress, then a leap into full-stack JavaScript, Web3, and live production systems.
```

6 entries (date / title / body):

1. `2025 — now` — **GO7 Delivery Platform**
   `Founded, built, and run a live 24/7 delivery marketplace — customer, vendor, rider, and admin apps, Paystack payments and DVA wallets, live map tracking, native Android builds, and zero-downtime deploys. Over a year in production and counting.`
2. `2026` — **Telegram intelligence pipeline**
   `Deployed a VPS-hosted crypto monitor: keyword and contract-address detection across groups, complaint mining, classifiers, and backfill tooling with a bot UI.`
3. `2026` — **Retail SaaS — Investory**
   `Designed and shipped a full POS & inventory platform for a phone retail business: Paystack checkout, BNPL device financing with MDM lock, staff permissions, EOD reporting, and thermal cloud printing.`
4. `2026` — **Web3, AI & games**
   `Solana wallet client (Next.js + Phantom), an ERC-20 token on OpenZeppelin, Gemini-powered agent tooling, and a Phaser 3 browser game.`
5. `2025` — **Solana trading automation**
   `Built an automated memecoin trader for pump.fun / letsbonk — token scanning, safety filters, and full trade audit logging.`
6. `2019 → · 6+ yrs` — **WordPress — where it started**
   `Over six years hands-on: client sites, custom themes, plugin work, WooCommerce stores, and the hosting/maintenance grind that teaches you what "production" actually means.`

## 7. How I work

Section head — index `05`, title `How I work`. Two paragraphs + 4 principles:

```
Six-plus years of WordPress — client sites, themes, plugins, WooCommerce — taught me what it means to own something in production. I build products the way they have to be built to stay alive: small safe fixes over rewrites, real data over placeholders, and deploys that never take the site down. GO7 has users ordering right now — that's the standard everything gets held to.
```

```
My range runs from pixel to protocol: React frontends and Android builds, Firebase backends and payment webhooks, Python automation on a VPS, and smart contracts on Solana and EVM. If a system has a frontend, a backend, a payment rail, or a chain — I've probably wired it.
```

Principles (bold lead + rest):
- **Ship it live.** `A project isn't done until it's deployed and verified.`
- **Smallest safe fix.** `Production code gets surgical edits, not rewrites.`
- **Real data only.** `No demo content hiding behind empty states.`
- **Zero downtime.** `New assets land before the cutover, always verified.`

## 8. Contact

Testimonial slot (placeholder — replace with a real quote):
```
"Client quote goes here — one line from 7linkz Phone Village or a GO7 vendor lands harder than any skill list."
— Client name, business
```

Refs line:
```
References from 7linkz Phone Village & GO7 vendors available on request.
```

H2:
```
Let's build something
that stays up.
```

Sub-line:
```
Open to freelance builds, contract work, and collaborations on marketplaces, fintech, Web3, or automation.
```

Buttons:
- `go7delivery@gmail.com` (lime fill) → `mailto:go7delivery@gmail.com`
- `WhatsApp ↗` → `https://wa.me/2347030680816?text=Hi%20Tobiloba%2C%20I%20saw%20your%20portfolio`
- `GitHub ↗` → `https://github.com/Eazidev7`
- `LinkedIn ↗` → `https://www.linkedin.com/in/adekoya-oluwatobi-441477161`

## Footer

```
© Tobiloba
Designed & built by hand — no framework, no build step.
```
