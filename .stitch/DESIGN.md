# Design System — Clínica Odontológica Brunete

## Brand Identity
- **Industry**: Dental Clinic / Healthcare
- **Location**: Cartagena, Murcia, Spain
- **Tone**: Professional, trustworthy, modern, approachable
- **Vibe**: Clean, minimal, with generous whitespace and high-contrast typography. Sophisticated and trustworthy with subtle shadows and a premium palette.

## Color Palette

| Role | Name | Hex | Usage |
|:---|:---|:---|:---|
| Primary | Green | `#3DD100` | Buttons, accents, backgrounds — NOT for text on white |
| Primary Text | Green Dark | `#2A7D00` | Text on white (WCAG AA 5.2:1) |
| Hover | Green Hover | `#35B800` | Button hover states |
| Active | Green Active | `#2A9400` | Button active states |
| Light BG | Green Light | `#E8FFD9` | Light backgrounds, hover fills |
| Subtle BG | Green Subtle | `#F4FFED` | Very light backgrounds, icon containers |
| Surface | White | `#FFFFFF` | Page background |
| Surface Alt | Off-white | `#FAFBF8` | Alternate section backgrounds |
| Border | Gray 200 | `#E8E8E8` | Input borders, dividers |
| Muted Text | Gray 400 | `#999999` | Placeholder text, secondary info |
| Body Text | Gray 600 | `#666666` | Body copy, descriptions |
| Heading Text | Gray 800 | `#333333` | Body headings, nav links |
| Dark | Gray 900 | `#1A1A1A` | Primary headings, dark sections |

## Typography

| Role | Font | Weight | Size |
|:---|:---|:---|:---|
| Headings | Playfair Display | 600–700 | clamp(1.75rem, 4vw, 3.5rem) |
| Body | Inter | 300–500 | 0.875rem–1.125rem |
| Section Tags | Inter | 600 | 0.8125rem, uppercase, 0.08em tracking |
| Buttons | Inter | 500 | 0.8125rem–1rem |

## Spacing Scale (8px base)
`4px / 8px / 12px / 16px / 24px / 32px / 48px / 64px / 80px / 96px / 120px`

## Border Radius
- **Cards**: 8px
- **Inputs**: 6px
- **Buttons**: 40px (pill-shaped)
- **Icons**: 12px (rounded square)
- **Hero image**: 16px
- **Logo**: 12px

## Elevation / Shadows
- **Flat (default)**: `0 1px 3px rgba(0,0,0,0.06)`
- **Hover (floating)**: `0 8px 24px rgba(0,0,0,0.08)`
- **Dropdown**: `0 8px 30px rgba(0,0,0,0.12)`
- **Header**: `0 1px 0 rgba(0,0,0,0.06)`

## Components

### Buttons
- **Primary**: Green fill (#3DD100), white text, pill-shaped
- **Outline**: Transparent bg, green border, green text
- **Sizes**: sm (8px 20px), default (12px 28px), lg (16px 36px)

### Cards
- White background, 8px radius, subtle shadow
- Hover: lift (-2px) + stronger shadow
- Icon container: 64x64px, green subtle bg, 12px radius

### Navigation
- Sticky header with dark top bar (phones + CTA)
- Desktop: horizontal nav with dropdown
- Mobile: hamburger toggle, full-width dropdown

### Forms
- Labeled inputs, 6px radius, 1.5px border
- Focus: green border + green glow ring
- Required indicator: green asterisk

## Page Structure
1. **Header** — Sticky nav with top bar (phones, CTA) + main navigation
2. **Hero** — Split layout (text + image), gradient background
3. **About** — Two-column grid (text + image)
4. **Services** — 3-column card grid with icons
5. **Why Choose Us** — 3-column centered blocks with circular icons
6. **Blog** — 3-column image cards
7. **Newsletter** — Dark section, centered form
8. **Location** — Hours table + map placeholder
9. **Contact** — Centered form with 2-column grid
10. **Footer** — 4-column grid, dark background
