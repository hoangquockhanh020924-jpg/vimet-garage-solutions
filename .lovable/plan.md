

## Redesign Navigation Bar — Better Proportions & Readability

The current navigation has sizing issues at the 1067px viewport: the "Danh mục sản phẩm" button is too wide, nav links have heavy padding (`px-5 py-3.5`) causing them to wrap or feel cramped, and the overall bar looks visually unbalanced.

### What will change

**File:** `src/components/site/Header.tsx` (only the `<nav>` desktop section)

1. **Tighter, more proportional spacing**
   - Reduce category trigger padding from `px-5 py-3.5` → `px-4 py-3`
   - Reduce nav link padding from `px-5 py-3.5` → `px-3.5 py-3`
   - Shrink category button label from `text-sm` to `text-[13px]` with tighter `tracking-normal`
   - Nav link font size from `text-sm` → `text-[13px]` with `font-medium` (was `font-semibold`) — easier to scan, less visual weight

2. **Prevent text wrapping**
   - Add `whitespace-nowrap` to all nav `<Link>` elements and the category button
   - Reduce gap between nav items: `gap-1` → `gap-0.5`
   - Remove `pl-2` extra padding before nav list

3. **Better visual hierarchy**
   - Add a subtle vertical divider (`border-l border-white/15`) between the category mega-menu trigger and the main nav links
   - Slightly slimmer overall bar height for a more refined industrial look
   - Keep the yellow `bg-highlight` hover underline animation intact (user already approved this)

4. **Lower the breakpoint**
   - Change nav visibility from `lg:block` (1024px) to `md:block` (768px) so the desktop nav appears earlier on tablets
   - Mobile menu trigger switches from `lg:hidden` → `md:hidden`
   - At ~1067px (current viewport), the nav will fit comfortably on a single line

5. **Mega menu panel sizing**
   - Reduce panel width from `w-[920px]` → `w-[860px]` so it doesn't overflow at smaller desktop widths
   - Add `max-w-[calc(100vw-2rem)]` as a safety guard

### Out of scope
- No changes to colors (red bar + white text + yellow accents preserved)
- No changes to mega-menu content, categories array, mobile menu, top utility strip, or main white bar
- No changes to logo, search, hotline, or cart elements

