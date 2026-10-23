# Bantrum Design System

Bantrum is a specialty-coffee café brand. The design language is warm, organic and calm: cream paper backgrounds, sage-green frames and blob shapes, one terracotta-orange call to action, soft rounded cards and appetising top-down food photography.

## Sources
- **Visual reference:** `uploads/Design system sample #1.jpg` (a single landing-page mock for a café, Russian copy). All tokens, components and the UI kit are derived from it. Colors were sampled from the pixels.
- **GitHub:** https://github.com/tomydelvos/Bantrum (branch `main`). At build time (2026-10-23) the repository was **empty** (no commits), so no code, tokens, fonts or icons could be imported. Explore it again once it has content — real source will beat this screenshot-derived system.
- **Logo:** none supplied. The wordmark is plain "Bantrum" set in the display font; replace when a real mark exists. The sample's leaf-in-circle logo belongs to a different brand name ("Лист & Зёрна") and was not reproduced.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (see list) + one `*.card.html` per folder
- `ui_kits/website/` — landing page + menu click-through
- `assets/images/` — photography cropped from the sample (low-res, 3× upscaled placeholders)
- `SKILL.md` — Agent Skill entry; `thumbnail.html` — homepage tile

## Components
- core: **Icon**, **Button**, **IconButton**, **Badge**, **Tag**
- forms: **Input**, **Select**, **Checkbox**, **Switch**
- surfaces: **Card**, **Tabs**, **Dialog**, **Toast**, **Tooltip**
- commerce: **FeatureItem**, **ProductCard**, **DrinkCard**, **SectionDivider**

No source component library existed, so this is a standard set sized for a café website. Directly seen in the sample: Button (orange, green, cream), IconButton (+), Badge tile ("100% арабика"), Input with attached button, Card/panels, FeatureItem, ProductCard, DrinkCard, SectionDivider.
**Intentional additions** (not in the sample): Tag, Select, Checkbox, Switch, Tabs, Dialog, Toast, Tooltip — needed for menu filtering, table booking and order feedback. **Icon** wraps Lucide glyphs.

## Content fundamentals
- Language of the source is **Russian**; tone is warm, hospitable, sensory. Short sentences, often two clauses joined by commas: "Хрустящий снаружи, нежный внутри."
- Addresses the guest as **вы** (polite plural): "Ждём вас в гости!", "ваше место силы". The brand speaks as **мы**: "Работаем только с проверенными плантациями", "Обжариваем небольшими партиями".
- **Sentence case** everywhere — headings, buttons, nav. No ALL CAPS, no exclamation spam (one in the footer).
- Headlines are emotional ("Кофе, в который влюбляешься с первого глотка"); body copy is concrete about craft (specialty lots, fresh roast, baristas).
- CTAs are verb-first imperatives: "Смотреть меню", "Заказать столик", "Выбрать зёрна", "Подписаться".
- Product text: name on two lines (noun + "с …"), one-line sensory descriptor, price as "220 ₽" (space before ₽).
- **No emoji.** Decoration comes from line icons and the tiny hearts in section dividers.

## Visual foundations
- **Color:** cream page (#F8F0E3) inside a sage frame (#8DA38C). Sage tints (#CCD5C4–#9DAE9C) for panels and blobs. Deep green #4C6D55 for icons, secondary buttons, "+" buttons. Terracotta #E07640 reserved for the primary CTA (header pill, hero button, subscribe). Ink is warm near-black #1E1E1A, never pure black.
- **Type:** display = Balsamiq Sans Bold (substitute; the sample uses a friendly hand-drawn bold sans with Λ-shaped "л"), used only for the hero headline. Everything else Manrope: section titles 600, card titles 700, body 400, labels 600.
- **Backgrounds:** flat colors, no gradients. Organic **blob / wave shapes** in sage separate sections (hero backdrop, wavy section joins). No patterns or textures.
- **Imagery:** warm, natural-light food photography, mostly top-down or 3/4, on muted sage/stone backdrops with green leaves. Drinks cropped as circles; pastries as rounded squares. One thin line illustration (café table) in the footer.
- **Corner radii:** generous. Frame/hero image 28–32px, panels 24px, cards 16px, card photos 12px, buttons 12px or full pill, "+" button 8px.
- **Cards:** cream fill (#FDF9F2), 1px warm hairline (#E8E1D2), very soft shadow. Feature bands are sage panels with a larger, greener shadow (`--shadow-lg`), giving a lifted, paper-cut feel.
- **Shadows:** warm brown/green-tinted, low opacity, offset downward; the orange CTA has its own soft orange glow.
- **Borders:** hairlines only; vertical white-alpha dividers between drinks; hairline + heart for section titles.
- **Layout:** centered ~1120–1200px container, generous whitespace, 3–4 column grids. Header is static (not fixed).
- **Transparency/blur:** only for modal scrims (green 35% + 4px blur).
- **Hover:** buttons darken one step (orange 500→600, green 700→800); cream buttons go to white; drink photos lift 3px. **Press:** 1px down + scale .98. Motion is short (140–220ms) with a soft ease-out; no bounces.
- **Focus:** 3px orange ring at 35% alpha.

## Iconography
- The sample uses thin **outline line icons** (~1.5px stroke, rounded caps) in deep green: leaf, heart, cup, flame, barista, mountains, coffee bag, map pin, clock, phone, social glyphs.
- No icon files were available, so **Lucide** (lucide-static@0.454.0 from unpkg) is the substitute — closest match in stroke and style. The `Icon` component renders it via CSS mask so it takes any color. **Flagged substitution.**
- No emoji, no unicode-as-icon (except "₽" and "×" in the dialog close).
- Icons sit bare (feature row) or inside a 32px sage circle (hero perks).
