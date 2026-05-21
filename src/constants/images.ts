import logoVimet from "@/assets/images/brand/logo-vimet.png";
import catalogBackground from "@/assets/images/brand/backgroundcatalog.jpeg";
const heroGarage = "/images/banners/hero-garage.jpg";
const heroGarage2 = "/images/banners/hero-garage-2.jpg";
const heroGarage3 = "/images/banners/hero-garage-3.jpg";

export const SITE_IMAGES = {
  brand: {
    logo: logoVimet,
    catalogBackground,
  },
  hero: {
    garage: heroGarage,
    slides: [heroGarage, heroGarage2, heroGarage3],
  },
} as const;