import logoVimet from "@/assets/images/brand/logo-vimet.png";
import catalogBackground from "@/assets/images/brand/backgroundcatalog.jpeg";
import { BANNER_FILES } from "./banner-manifest";

export const SITE_IMAGES = {
  brand: {
    logo: logoVimet,
    catalogBackground,
  },
  hero: {
    garage: BANNER_FILES[0] ?? "/images/banners/hero-garage.jpg",
    slides: BANNER_FILES,
  },
} as const;
