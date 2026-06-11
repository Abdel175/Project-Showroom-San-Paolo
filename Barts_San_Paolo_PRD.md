# PRD — Bart's Private Members Club
### Interactive Digital Experience · Penthouse Triplex, Edifício San Paolo (Faria Lima, São Paulo)

> **Document purpose.** This is a complete build specification for an AI app builder (Google AI Studio / Gemini). It is self-contained: vision, location, audience, full content, design system, interaction model, technical requirements, asset manifest, acceptance criteria, and a step-by-step build playbook. Read it fully before generating. When a detail is not specified here, choose the option that best expresses **subtle, restrained luxury** — never the flashiest option.

---

## 0. How to use this document (read first, builder)

**Your role.** You are a senior front-end engineer + art director building a single, polished, deployable web experience. Output production-quality, responsive code. Favor restraint, whitespace, fine typography, and slow, quiet motion over effects.

**Attached reference folder.** The user is providing a folder alongside this PRD. Expected files (use them; do not invent substitutes):
- `LE1A2681-banner.jpg` — photograph of the **Edifício San Paolo** façade (the venue). Use as the hero/atmosphere image and as the color-palette source of truth (warm ochre stone, arches).
- `Barts_Private_Members_Club_Diagrama.html` — the canonical **program of 14 ambientes** (rooms), grouped, with names, descriptions, and the 5-category color system. This is the source of truth for room content.
- `Barts_Mapa_Interativo.html` — a **working reference prototype** of the interaction model (bi-compartment layout, isometric floor-plan navigator + cinematic stage). Match or exceed this interaction; refine the aesthetic toward subtle luxury.
- (If present) a `/renders/` or `/imagens/` subfolder — photographic renders for each room. Wire each to its zone (see §8/§10). Where a render is missing, use the styled placeholder spec in §7.

**Build order.** Follow §13 (Build Playbook). Build the interactive triplex first (the centerpiece), then wrap it in the surrounding sections.

**Non-negotiables.** (1) UI language is **Brazilian Portuguese**. (2) Aesthetic is **subtle luxury** (§4). (3) Fully responsive, works on a laptop in a live pitch and on mobile. (4) No external paid dependencies; Google Fonts only.

---

## 1. Project snapshot

**Bart's** is a private members club: a multipurpose "house" for high-net-worth individuals to socialize, dine, work, do business, experience culture, and recover — under one roof. It will occupy the **highest triplex (penthouse, 3 connected levels)** of the **Edifício San Paolo** on Avenida Brigadeiro Faria Lima.

The deliverable specified here is the **digital experience** that presents Bart's: an immersive, interactive web presentation whose centerpiece is an **interactive map of the triplex** — hover or tap any of the 14 ambientes and the screen reveals that space (image + copy), navigating always from a persistent floor plan.

| Field | Value |
|---|---|
| Project name | Bart's — Private Members Club |
| Venue | Penthouse triplex, Edifício San Paolo, Av. Brigadeiro Faria Lima, São Paulo |
| Concept | Multipurpose members' house for HNWIs (social, gastronomy, culture, work, wellness) |
| Levels | 3 (penthouse triplex) |
| Ambientes (rooms) | 14, grouped in 5 categories |
| Primary deliverable | Interactive web experience (centerpiece: interactive triplex map) |
| UI language | Brazilian Portuguese (PT-BR) |
| Aesthetic | Subtle / quiet luxury — warm, restrained, editorial |
| Interaction benchmark | Printemps New York "Interactive Map" (isometric, hover-to-reveal) |
| Soul / positioning benchmark | JNcQUOI (Lisbon) — "Food meets Fashion meets Hospitality," but **dialed down** to restraint |

---

## 2. The location — Edifício San Paolo

**Verified facts (use confidently):**
- The **Edifício San Paolo** sits on **Avenida Brigadeiro Faria Lima**, one of São Paulo's most elite avenues, near the **Iguatemi** shopping center, the **Faria Lima** metro station, and the **Marginal Pinheiros**.
- It is a **neoclassical commercial building** that houses recognized national and international brands across several markets.
- The façade (see `LE1A2681-banner.jpg`) is **warm ochre/sand-toned stone**, with **monumental arched windows**, engaged columns, dentil cornices, and the name **"EDIFÍCIO SAN PAOLO"** engraved in relief at the cornice line. Palms frame the corner entrance.

**Narrative to use (the "why here"):** The San Paolo is the *New-York-monument* of Faria Lima — the financial heart of São Paulo, often called the city's "second Paulista." Where the avenue around it is glass-and-steel modernity, the San Paolo is a stone landmark with the gravitas of a 1930s Manhattan tower — the kind of address that confers permanence and pedigree. Bart's crowns it: the **highest triplex**, with skyline views over Faria Lima.

> **Builder note (placeholders to confirm with client, do not fabricate):** exact street number, year of construction, and architect are to be confirmed by the client; leave these as editable fields and do **not** invent specific dates or names.

**Design implications drawn from the building (use these):**
- Palette anchors in the façade: **warm ochre, sand, bone, stone, aged bronze** — this is the backbone of the "subtle luxury" system (§9), not bright gold.
- Architectural motifs to echo subtly: the **arch** (use as a recurring shape for image masks, dividers, buttons), **fluted columns** (thin vertical rules), **engraved cornice typography** (letter-spaced, small-caps serif for the wordmark).
- The "highest triplex + skyline" justifies the **top level** of the map carrying **panoramic terrace / rooftop** energy.

---

## 3. Vision & positioning

**One line:** *A discreet house above the city — where the people who run São Paulo socialize, create, do business, and recover, behind one address.*

**Positioning pillars:**
1. **Multipurpose under one roof.** Like JNcQUOI braids gastronomy + culture + fashion + hospitality, Bart's braids social, dining, culture, work, and wellness — but presented with **quiet confidence**, not spectacle.
2. **Membership as belonging, not access.** Speak to permanence, taste, and a curated circle — never to price or exclusivity-as-status. Implication over declaration.
3. **The address tells the story.** The San Paolo's gravitas does the boasting; the brand stays understated.

**Tone of voice (PT-BR copy):** assured, spare, sensory, never salesy. Short sentences. No exclamation marks. No "luxo", "exclusivo", "premium" as adjectives shouted — show it through specificity (materials, rituals, hours, craft). Think the copy of Aman, Loro Piana, Assouline — translated to Brazilian Portuguese.

---

## 4. "Subtle luxury" — design principles (this overrides any default)

Build to these. When in doubt, remove, don't add.

**DO**
- **Restraint & whitespace.** Generous negative space; let one element breathe per view.
- **Warm, desaturated palette.** Stone, bone, espresso, **aged bronze used as a whisper** (hairlines, a single active state) — never large fills of bright gold.
- **High-contrast editorial typography.** A refined serif for display at large sizes; a quiet grotesque for everything functional. Big type, tight leading, wide letter-spacing on small labels.
- **Slow, quiet motion.** 400–700ms, gentle easing; cross-fades, slight parallax, subtle scale. Motion should feel like a curtain, not a slideshow.
- **Photography-led.** The image is the luxury. UI recedes; chrome is thin.
- **Architectural details.** Thin rules, the arch motif, small-caps engraved wordmark, hairline borders.

**DON'T**
- No bright/shiny gold gradients, no glow, no neon, no drop-shadow excess.
- No emojis anywhere. No stock-y gradients as decoration.
- No more than **2 type families** and **1 metallic accent**.
- No bounce, no fast/springy motion, no parallax that distracts from content.
- No clutter: never show list + map + card all fighting for attention — the **bi-compartment** layout (§7) keeps it to two calm zones.

**Reference moodboard (for the builder's internal calibration):** Aman resorts, The Row, Loro Piana, Assouline boutiques, JNcQUOI (restrained version), Printemps wayfinding (for interaction only), 1930s Manhattan lobby detailing.

---

## 5. Audience, goals, success criteria

**Primary audience:** the venue's owner/investors and prospective founding members — sophisticated, time-poor, design-literate São Paulo HNWIs. They will likely first see this **on a laptop in a live walkthrough**, then revisit on mobile.

**Goals:**
1. Make the viewer *feel* they are standing in the future Bart's and *explore it themselves* (psychological ownership).
2. Communicate the full program (14 ambientes across 3 levels) in under 60 seconds of play.
3. Land the address/positioning (San Paolo penthouse) as pedigree.
4. Leave a single, calm call to action (express interest / request the private deck).

**Success criteria (qualitative):** "It feels like the place already exists and I'm a member." Zero learning curve on the interaction. Nothing on screen reads as a template.

---

## 6. Product scope & information architecture

Single-page, scroll-based experience with the interactive map as the anchor. Sections, in order:

1. **Abertura / Hero** — façade of San Paolo (use `LE1A2681-banner.jpg`), wordmark **Bart's**, one-line positioning, the address as a quiet line. Slow ambient feel.
2. **A Visão** — one short paragraph (the multipurpose house thesis) + the address narrative (§2).
3. **O Mapa Interativo** *(centerpiece, §7)* — the bi-compartment interactive triplex.
4. **Os Universos** — the 5 categories as an elegant typographic index (Social & Bebidas, Restaurante, Cultura, Trabalho, Wellness) with one line each.
5. **O Endereço** — the San Paolo building, its gravitas, the skyline/terrace.
6. **Convite / CTA** — a single restrained call to action (request the private presentation). Optional VR teaser line: *"A experiência completa, em VR — fase 2."*

> The map (§7) must work as a standalone embeddable module too, since it may be reused inside other surfaces (e.g., a Lovable build). Keep its state and data self-contained.

---

## 7. The interactive triplex — functional specification (CENTERPIECE)

This is the heart of the product. Reference prototype: `Barts_Mapa_Interativo.html`. Match its behavior; elevate its finish to subtle luxury.

### 7.1 Layout — **bi-compartment, full-bleed (max horizontal real-estate)**
Two calm compartments fill the viewport (100vw × 100vh in the section). No third column.

- **Compartment A — Persistent Navigator (~33–38% width).** Always visible; you navigate everything from here.
  - Small **wordmark** (Bart's) + eyebrow.
  - **Level tabs:** `Tudo · Nível 1 · Nível 2 · Nível 3`.
  - **Isometric floor plan** of the triplex: 3 stacked levels, each level a plate holding its rooms as tiles. Hover/click a room → it highlights on the model.
  - **Controls:** zoom in/out, reset, and **drag to rotate** the model (azimuth).
  - **Compact room index** grouped by level (for precise selection), each row a category-colored dot + room name.
- **Compartment B — Cinematic Stage (~62–67% width).** The large image/“presentation” surface.
  - Shows the **selected room** as a full-bleed image (or a refined placeholder if no render), with a bottom-left **scrim** and an editorial overlay: category, **room name (large serif)**, tag, level, description, and a quiet CTA.
  - **Idle state (nothing selected):** a hero — wordmark, the positioning line, and a cue ("Navegue pelo mapa") pointing to the navigator.

On screens < 1024px: stack vertically — Stage on top (≈58vh), Navigator below (scrollable). Tiles become tap targets.

### 7.2 The isometric model
- 3 floor **plates** stacked with vertical separation (CSS 3D transforms: `rotateX(~54deg) rotateZ(var(--az))`), each plate a grid of room **tiles**.
- Tiles carry a **category-colored marker** and a **monoline icon** (no emoji). Icon stays upright (billboard counter-rotation) as the model rotates.
- **Active/selected tile:** lifts (translateZ), warms to the bronze active state, others dim slightly. **Level focus:** selecting a level tab dims the other levels and disables their tiles.
- Top level (Nível 3) should read as the **rooftop/cobertura** (lighter, “sky” treatment) to support the skyline narrative.

### 7.3 Interaction states & sync
- **Hover** a room (on model OR in index) → *preview*: highlight it, update the Stage. **Mouse-leave** → revert to the locked selection, or to hero if none.
- **Click** a room → *lock* it (toggle). Clicking a room on a non-focused level switches focus to that level.
- Navigator index, model tiles, and a live **caption** stay in sync at all times (one source of truth = the active room id).
- All transitions: cross-fade + slight rise, 450–650ms, quiet easing.

### 7.4 Image handling (critical)
Each zone has an `img` field. If present → the Stage fills with that photo (cover) behind the scrim. If empty → a **designed placeholder**: a warm gradient in the room's (desaturated) category tone + a large faint category glyph + the labels "Imagem do ambiente — render / foto de referência". The experience must look intentional even with zero images, and become photographic as renders are added.

---

## 8. Content — full specification (source of truth)

### 8.1 Three levels (penthouse triplex)
| Level | Label (PT-BR) | Theme |
|---|---|---|
| Nível 1 | **Térreo do clube · Social & Chegada** | Arrival, social heart, dining, first culture |
| Nível 2 | **Premium, Negócios & Cave** | Private dining, wine, cigars, work, meetings |
| Nível 3 | **Cobertura · Wellness & Vista** | Spa, recovery, grooming + skyline terrace |

### 8.2 Five categories (with subtle-luxury color, §9)
| Code | Category (PT-BR) | Subtle-luxury hex |
|---|---|---|
| so | Social & Bebidas | `#BFA46F` (aged brass) |
| rs | Restaurante | `#9B5B50` (muted terracotta) |
| cu | Cultura | `#6E8599` (dusty blue) |
| wo | Trabalho | `#7E6E90` (muted plum) |
| we | Wellness | `#5E806C` (sage) |

### 8.3 The 14 ambientes (names, tags, descriptions — VERBATIM, PT-BR)

**Nível 1 — Social & Chegada**
1. **Living Room** — *Convívio* — Sala de estar privativa, lareira e sofás — o coração do clube.
2. **Bar & Clube Lounge** — *Âncora Social* — Espaço principal de encontros, cocktails autorais e atmosfera de clube.
3. **Jazz Café com Piano** — *Cultura & Sabor* — Café com piano de cauda, música ao vivo, menu de drinques e petiscos.
4. **Restaurante** — *Fine Dining* — Fine dining com menu assinado, ambiente intimista e serviço de alto padrão.
5. **Galeria de Arte** — *Cultura* — Exposições rotativas com curadoria mensal, artistas emergentes e consagrados.

**Nível 2 — Premium, Negócios & Cave**
6. **Zegna Room** — *V.I.P.* — Sala de bebidas finas & jantar privativo — marca âncora de luxo.
7. **Adega** — *Cave Privada* — Wine cellar climatizada com rótulos raros e safras especiais.
8. **Wine Lockers** — *Exclusivo* — Armários individuais climatizados para a coleção de cada sócio.
9. **Charutaria** — *Lounge Privado* — Cigar lounge com humidor walk-in e serviço personalizado.
10. **Library & Workspace** — *Work & Leitura* — Biblioteca com mesas de trabalho, Wi-Fi de alta velocidade e silêncio garantido.
11. **Conference Room** — *Business* — Sala para reuniões, apresentações e eventos corporativos privados.

**Nível 3 — Cobertura · Wellness & Vista**
12. **Wellness Center** — *Spa & Recovery* — Spa, tratamentos, sauna, hammam e área de relaxamento exclusiva para sócios.
13. **Recovery Room** — *Recovery* — Crioterapia, compressão, infrared sauna e protocolos de recuperação ativa.
14. **Powder Room** — *Grooming* — Banheiro privativo para maquiagem, espelhos iluminados e amenidades de luxo.

### 8.4 Site copy (PT-BR, editable)
- **Hero positioning line:** *"Uma casa privada acima da cidade — para socializar, criar, fazer negócios e recolher-se."*
- **Address line (hero):** *"Cobertura triplex · Edifício San Paolo · Av. Brigadeiro Faria Lima"*
- **Vision paragraph:** *"Inspirado na ideia de que gastronomia, cultura, trabalho e bem-estar podem conviver sob o mesmo teto, o Bart's reúne quatorze ambientes em três níveis — um clube privado no edifício mais icônico da Faria Lima."*
- **CTA:** *"Solicitar a apresentação privada"* (secondary, quiet) + optional *"A experiência completa, em VR — fase 2."*

---

## 9. Design system (tokens)

### 9.1 Color — subtle luxury (CSS variables)
```css
:root{
  /* base */
  --ink:        #1A1714;  /* warm near-black (primary dark bg) */
  --ink-2:      #221E19;  /* raised panel */
  --espresso:   #2C261F;
  --bone:       #F4EFE6;  /* light text / light-mode bg */
  --cream:      #EAE3D6;
  --stone:      #C9B79C;  /* warm neutral, from façade */
  --muted:      #8C857A;  /* secondary text */
  /* metallic — the ONLY accent, used sparingly */
  --bronze:     #B89B6A;  /* hairlines, active states */
  --bronze-lo:  #9B855A;  /* deep bronze for borders */
  /* category (desaturated) */
  --so:#BFA46F; --rs:#9B5B50; --cu:#6E8599; --wo:#7E6E90; --we:#5E806C;
  /* lines */
  --line: rgba(244,239,230,.10);
}
```
> Dark mode is the default (members-club register). Provide an optional light "gallery" mode using `--bone` bg + `--ink` text if time allows; not required.

### 9.2 Typography
- **Display serif:** `Cormorant Garamond` (Google Fonts), weights 500–700. Use for the wordmark, room names, section titles. Large sizes, tight leading (~0.98), refined.
- **Alt display (optional):** `Fraunces` if a touch more character is wanted.
- **UI / labels / body:** `Jost` (Google Fonts), weights 300–600. Use for eyebrows, tabs, captions, descriptions. Small labels are **UPPERCASE, letter-spacing 2–5px**.
- **Scale (desktop):** hero wordmark `clamp(64px,9vw,128px)`; room name `clamp(40px,5vw,62px)`; section title `~30px`; body `15–17px`; labels `9–11px`.
- Never more than these two families.

### 9.3 Space, radius, shadow, motion
- **Spacing:** generous; section padding `clamp(40px,7vw,120px)`. Let content breathe.
- **Radius:** small, architectural (6–12px). Optional **arch-top** mask on hero/feature images (echo the façade arches).
- **Shadow:** soft, low, warm — `0 30px 60px rgba(0,0,0,.5)`. No hard or glowing shadows.
- **Motion:** durations 450–700ms; easing `cubic-bezier(.2,.7,.2,1)`; effects limited to fade, slight translate (≤16px), subtle scale (≤1.04), and the model's rotate. No bounce/spring.

### 9.4 Iconography
Monoline, 1.4px stroke, in the room's category color, upright. One glyph per category (Social = coupe glass; Restaurante = fork/knife; Cultura = framed art; Trabalho = open book; Wellness = leaf). No emoji.

### 9.5 Imagery art direction (for renders & photography)
Warm, cinematic, low-key lighting; materials = walnut, travertine, brass, bouclé, stone, greenery; golden-hour or candle ambiance; shallow depth of field; editorial architectural framing. One consistent lighting/lens recipe across all rooms so the set reads as a single shoot. Quiet, never gaudy.

---

## 10. Asset manifest & AI image generation

**Folder contents the builder should expect & wire up:**
| File | Use |
|---|---|
| `LE1A2681-banner.jpg` | Hero / address section background; palette source. |
| `Barts_Private_Members_Club_Diagrama.html` | Canonical room program (already transcribed in §8). |
| `Barts_Mapa_Interativo.html` | Reference for the interaction model. |
| `/renders/<id>.jpg` (if present) | One photographic render per room; filename = zone `id` (e.g., `bar.jpg`, `adega.jpg`). Wire to the zone's `img`. |
| `/brand/` (optional) | Wordmark/logo, fonts. |

**Generating the room renders (recommended pipeline, for the client — not the builder's job):** produce one image per zone with **Nano Banana Pro (Gemini image)** for photoreal interiors and image-to-image on real photos of the actual triplex when available; keep a single style reference so all 14 share one look (see §9.5). Drop each into `/renders/<id>.jpg`.

**Render prompt template (per room):**
> *"Interior of a [room: e.g., private members' club bar], inside a penthouse atop a 1930s neoclassical São Paulo tower. Subtle, quiet luxury: walnut, travertine, aged brass, bouclé, greenery; warm low-key evening lighting; shallow depth of field; editorial architectural photography; restrained, not flashy. 16:9."*

---

## 11. Technical requirements

- **Stack:** React + Tailwind (or clean HTML/CSS/vanilla JS if simpler) — self-contained, no paid deps; **Google Fonts** only. The interactive map must be a self-contained module with its data in one editable config object/array (see Appendix A).
- **State:** single source of truth for active room id + active level focus; navigator, model, caption, and stage all derive from it. No browser storage (in-memory only).
- **Responsive breakpoints:** ≥1280 (pitch/laptop, primary), 1024, 768 (stack), ≤480 (mobile). Hover = tap on touch.
- **Performance:** lazy-load room images; keep first paint fast; CSS transforms for the 3D (GPU-friendly); avoid heavy libraries.
- **Accessibility:** keyboard focusable rooms, visible focus states, `alt` text per image, prefers-reduced-motion respected (disable rotate/auto-motion), AA contrast on text over images (the scrim guarantees it).
- **SEO/meta:** title "Bart's — Private Members Club", description from §8.4, social preview = San Paolo façade.
- **Hosting:** static, deployable to Vercel/Netlify; support password protection for private sharing.
- **i18n-ready:** copy in PT-BR now; structure strings so an EN toggle can be added later.

---

## 12. Acceptance criteria (definition of done)

- [ ] Full-bleed **bi-compartment** layout: persistent navigator + cinematic stage; uses the full horizontal width; no third column.
- [ ] **Isometric triplex** with 3 levels and all **14 rooms** placed per §8; rooms hoverable/clickable on the model.
- [ ] Hovering/clicking a room (model **or** index) updates the stage + caption + highlights in sync; lock-on-click works; level tabs focus a level.
- [ ] **Zoom, reset, drag-to-rotate** all work; icons stay upright while rotating.
- [ ] Idle **hero** state present; selecting a room reveals its editorial overlay (name/tag/level/description/CTA).
- [ ] `img` wiring: real photo when present, designed placeholder when absent.
- [ ] **Subtle-luxury** design system applied (palette, two type families, one metallic, quiet motion); **no emoji, no bright-gold glow**.
- [ ] Surrounding sections (hero, vision, universos, endereço, CTA) present with PT-BR copy from §8.4.
- [ ] Responsive (laptop → mobile), reduced-motion respected, AA contrast, lazy-loaded images.
- [ ] Nothing reads as a generic template; the San Paolo façade and the arch motif are present.

---

## 13. Build playbook for Google AI Studio (paste these in order)

**Prompt 1 — Foundations.**
> "Build a single-page React + Tailwind site, dark warm 'quiet luxury' theme. Load Google Fonts Cormorant Garamond (display) and Jost (UI). Implement this color system as CSS variables: [paste §9.1]. Set up the page shell with sections in this order: Hero, A Visão, O Mapa Interativo, Os Universos, O Endereço, Convite. All copy in Brazilian Portuguese. Restraint, whitespace, slow motion (450–700ms, easing cubic-bezier(.2,.7,.2,1)). No emojis."

**Prompt 2 — The interactive triplex (centerpiece).**
> "In 'O Mapa Interativo', build a full-bleed BI-COMPARTMENT module. LEFT (~35%): a persistent navigator with the Bart's wordmark, level tabs (Tudo/Nível 1/Nível 2/Nível 3), an isometric CSS-3D model of a 3-level penthouse triplex (stacked floor plates, rooms as tiles with a category-colored marker and a monoline icon), zoom + reset + drag-to-rotate controls, and a compact room index grouped by level. RIGHT (~65%): a cinematic stage that shows the selected room full-bleed (image or designed placeholder) with a bottom scrim and an editorial overlay (category, big serif room name, tag, level, description, quiet CTA); idle state is a hero. Use this data: [paste Appendix A JSON]. Hover or click a room — on the model or in the index — to update the stage + caption in sync; click locks; level tabs dim other levels. Cross-fade transitions. Mobile: stack stage over navigator."

**Prompt 3 — Surrounding sections.**
> "Fill Hero (San Paolo façade image `LE1A2681-banner.jpg`, wordmark Bart's, positioning + address line), A Visão (vision paragraph), Os Universos (the 5 categories as a typographic index), O Endereço (the building narrative), and Convite (single quiet CTA). Copy from this spec: [paste §8.4]. Echo the façade's arch motif on feature images."

**Prompt 4 — Polish pass.**
> "Refine toward subtle luxury: reduce any bright gold to aged bronze hairlines only; increase whitespace; ensure two type families max; add prefers-reduced-motion handling; lazy-load room images; verify AA contrast over images; make it fully responsive for a laptop pitch and mobile."

---

## Appendix A — Zone data (ready to ingest)

```json
{
  "categories": {
    "so": {"label": "Social & Bebidas", "color": "#BFA46F"},
    "rs": {"label": "Restaurante",      "color": "#9B5B50"},
    "cu": {"label": "Cultura",          "color": "#6E8599"},
    "wo": {"label": "Trabalho",         "color": "#7E6E90"},
    "we": {"label": "Wellness",         "color": "#5E806C"}
  },
  "levels": {
    "1": "Térreo do clube · Social & Chegada",
    "2": "Premium, Negócios & Cave",
    "3": "Cobertura · Wellness & Vista"
  },
  "zones": [
    {"id":"living",    "level":1,"cat":"so","name":"Living Room",         "tag":"Convívio",       "img":"","desc":"Sala de estar privativa, lareira e sofás — o coração do clube."},
    {"id":"bar",       "level":1,"cat":"so","name":"Bar & Clube Lounge",  "tag":"Âncora Social",  "img":"","desc":"Espaço principal de encontros, cocktails autorais e atmosfera de clube."},
    {"id":"jazz",      "level":1,"cat":"so","name":"Jazz Café com Piano", "tag":"Cultura & Sabor","img":"","desc":"Café com piano de cauda, música ao vivo, menu de drinques e petiscos."},
    {"id":"rest",      "level":1,"cat":"rs","name":"Restaurante",         "tag":"Fine Dining",    "img":"","desc":"Fine dining com menu assinado, ambiente intimista e serviço de alto padrão."},
    {"id":"galeria",   "level":1,"cat":"cu","name":"Galeria de Arte",     "tag":"Cultura",        "img":"","desc":"Exposições rotativas com curadoria mensal, artistas emergentes e consagrados."},
    {"id":"zegna",     "level":2,"cat":"so","name":"Zegna Room",          "tag":"V.I.P.",         "img":"","desc":"Sala de bebidas finas & jantar privativo — marca âncora de luxo."},
    {"id":"adega",     "level":2,"cat":"so","name":"Adega",               "tag":"Cave Privada",   "img":"","desc":"Wine cellar climatizada com rótulos raros e safras especiais."},
    {"id":"lockers",   "level":2,"cat":"so","name":"Wine Lockers",        "tag":"Exclusivo",      "img":"","desc":"Armários individuais climatizados para a coleção de cada sócio."},
    {"id":"charutaria","level":2,"cat":"so","name":"Charutaria",          "tag":"Lounge Privado", "img":"","desc":"Cigar lounge com humidor walk-in e serviço personalizado."},
    {"id":"library",   "level":2,"cat":"wo","name":"Library & Workspace", "tag":"Work & Leitura", "img":"","desc":"Biblioteca com mesas de trabalho, Wi-Fi de alta velocidade e silêncio garantido."},
    {"id":"conference","level":2,"cat":"wo","name":"Conference Room",     "tag":"Business",       "img":"","desc":"Sala para reuniões, apresentações e eventos corporativos privados."},
    {"id":"wellness",  "level":3,"cat":"we","name":"Wellness Center",     "tag":"Spa & Recovery", "img":"","desc":"Spa, tratamentos, sauna, hammam e área de relaxamento exclusiva para sócios."},
    {"id":"recovery",  "level":3,"cat":"we","name":"Recovery Room",       "tag":"Recovery",       "img":"","desc":"Crioterapia, compressão, infrared sauna e protocolos de recuperação ativa."},
    {"id":"powder",    "level":3,"cat":"we","name":"Powder Room",         "tag":"Grooming",       "img":"","desc":"Banheiro privativo para maquiagem, espelhos iluminados e amenidades de luxo."}
  ]
}
```

## Appendix B — Open items to confirm with client
- Exact street number, construction year, and architect of Edifício San Paolo (do not fabricate).
- Whether the top level includes a true outdoor **rooftop terrace** (affects Nível 3 treatment).
- Final room→level distribution (the §8 split is a recommended concept; client may re-zone).
- Whether an EN language toggle is needed for launch.
- Availability of real photos of the actual triplex for image-to-image renders.

---

*End of PRD. Build the interactive triplex first; keep everything quiet, warm, and deliberate. The luxury is in the restraint.*
