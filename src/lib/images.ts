/**
 * Central image registry for the entire site.
 *
 * 📁 Folder structure (src/assets/images/):
 *    ├─ brand/      → Logos, favicons, brand marks
 *    ├─ hero/       → Hero / banner images
 *    ├─ products/   → Local product photos (if not using remote URLs)
 *    └─ news/       → Article / blog cover images
 *
 * ✅ How to add a new image:
 *    1. Drop the file into the matching folder under src/assets/images/.
 *    2. Import it below and export it through the `images` object.
 *    3. Use it anywhere via:  import { images } from "@/lib/images";
 *
 * ✅ How to swap an existing image:
 *    Just replace the file in the folder OR change the import path here —
 *    every component that uses `images.xxx` updates automatically.
 *
 * For remote (CDN / Unsplash) images, keep their URLs in `src/data/products.ts`
 * or `src/data/news.ts` so all content data stays in one place.
 */

// ─── Brand ──────────────────────────────────────────────────────────────
import logoVimet from "@/assets/images/brand/logo-vimet.png";

// ─── Hero / Banners ─────────────────────────────────────────────────────
import heroGarage from "@/assets/images/hero/hero-garage.jpg";
import heroGarage2 from "@/assets/images/hero/hero-garage-2.jpg";
import heroGarage3 from "@/assets/images/hero/hero-garage-3.jpg";

export const images = {
  brand: {
    logo: logoVimet,
  },
  hero: {
    garage: heroGarage,
    slides: [heroGarage, heroGarage2, heroGarage3],
  },
} as const;
