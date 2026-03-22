```markdown
# The Design System: Editorial Organicism

## 1. Overview & Creative North Star
**Creative North Star: "The Living Atelier"**
This design system moves away from the cold, sterile, and hyper-symmetrical "medical" template. Instead, it treats the digital presence of the clinic as a high-end boutique studio—an atelier for smiles. We prioritize an **Editorial High-Contrast** layout, utilizing intentional asymmetry and generous whitespace to create a sense of calm, luxury, and approachability. 

The system rejects traditional structural boundaries (lines, boxes) in favor of **Tonal Fluidity**. By layering soft organic surfaces, we mimic the natural curves of the human form and the boutique nature of the Cartagena studio.

---

## 2. Colors: Chromatic Depth
The palette is rooted in the signature bright green but grounded by deep forest tones and sophisticated neutrals.

*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Definition must be achieved through background shifts. For example, a `surface-container-low` section should transition directly into a `surface` or `surface-bright` section.
*   **Surface Hierarchy & Nesting:** Treat the interface as stacked sheets of fine cotton paper. Use the `surface-container` tiers to define depth:
    *   **Background:** `surface` (#f8faf8)
    *   **Secondary Content Areas:** `surface-container-low` (#f2f4f2)
    *   **Interactive Cards:** `surface-container-lowest` (#ffffff) to create a subtle "lift" against the off-white background.
*   **Organic Diffusion (The Gradient Exception):** While the brand is "flat," use subtle radial gradients (e.g., `primary` transitioning to `primary_container`) for hero backgrounds. This provides a "visual soul"—a glow that feels like natural light rather than a digital effect.
*   **Subtle Glassmorphism:** For floating navigation or urgent overlays, use `surface-container-lowest` at 85% opacity with a `20px` backdrop blur. This ensures the organic photography underneath is felt, even when obscured.

---

## 3. Typography: The Editorial Voice
We use typography as a structural element, not just a carrier of information.

*   **Display & Headlines (Noto Serif):** These are our "Organic Signature." The serif choice reflects the craftsmanship of the clinic. Use `display-lg` and `headline-lg` with generous tracking and occasional italicization for "Human" emphasis (e.g., *Your* smile).
*   **Body & Labels (Plus Jakarta Sans):** A clean, modern sans-serif that balances the traditional weight of the serif. It provides the "Clinical Clarity" required for medical information without feeling robotic.
*   **Hierarchy Note:** Always maintain a high contrast ratio between `display-lg` and `body-md`. The "Boutique" feel is achieved through oversized headings paired with significantly smaller, well-spaced body text.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are replaced by **Tonal Layering** to maintain a clean, high-end aesthetic.

*   **The Layering Principle:** Depth is achieved by placing a `surface-container-lowest` card on top of a `surface-container-high` section. The contrast in light values provides all the necessary separation.
*   **Ambient Shadows:** If a floating element (like a FAB or a modal) requires a shadow, it must use the `on-surface` color at 4% opacity with a blur of `spacing-10` (3.5rem). It should look like a soft glow, not a hard shadow.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline-variant` at 15% opacity. Never use 100% opaque outlines.
*   **Roundedness:** Use the `xl` (1.5rem) scale for all containers and buttons to reinforce the "Organic/Fluid" brand identity. Sharp corners are forbidden.

---

## 5. Components: Principles of Boutique UI

### Buttons
*   **Primary:** Background: `primary_container` (#3dd100), Text: `on_primary_container`. Shape: `full` (pill). Padding: `spacing-3` (vertical) by `spacing-6` (horizontal).
*   **Secondary:** Background: `secondary_container`, Text: `on_secondary_container`.
*   **Tertiary:** No background. Text: `primary`. Use for less-emphasized actions like "Learn More."

### Input Fields
*   **Style:** Background-only (`surface-container-high`). No bottom line.
*   **States:** On focus, the background shifts to `surface-container-highest` with a `primary` label. Avoid "Error Red" where possible—use `error` (#ba1a1a) tokens only for critical failures; otherwise, use soft instructional text.

### Cards & Lists
*   **Forbid Dividers:** Do not use horizontal lines to separate list items. Use `spacing-5` (1.7rem) vertical gaps or alternating background shades of `surface-container-low` and `surface-container-lowest`.
*   **Content Spacing:** Every card must have a minimum internal padding of `spacing-6` (2rem) to ensure "Breathable Luxury."

### Image Containers
*   **Asymmetric Framing:** Images of "Human Photography" should use mismatched corner radii (e.g., Top-Left: `xl`, Bottom-Right: `none`) to create a custom, independent studio feel.

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace as a primary design element. If a layout feels "busy," double the spacing scale.
*   **DO** use "Human" photography that captures movement and light—avoid "stock-dental" images of chairs and tools.
*   **DO** align text to the left for long-form reading, but use centered `display-lg` headings for a curated editorial feel.

### Don't
*   **DON'T** use the `1877F2` (Facebook Blue) in the UI. That is a legacy brand artifact. Stick to the `primary` green and neutral tones.
*   **DON'T** use "Clinical" icons (syringes, teeth). Use lifestyle icons (sun, leaves, smiles) or high-quality custom illustrations.
*   **DON'T** crowd the navigation. A boutique experience is about choice, not volume. Keep the menu limited to 4-5 essential links.

---
*This system is a living document. Every pixel should feel intentional, every space should feel earned, and every interaction should feel human.*```