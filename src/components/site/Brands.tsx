import anestIwataLogo from "@/assets/images/brands/anest-iwata.jpg";
import bendpakLogo from "@/assets/images/brands/bendpak.jpg";
import betaLogo from "@/assets/images/brands/beta.jpg";
import fasepLogo from "@/assets/images/brands/fasep.jpg";
import gesipaLogo from "@/assets/images/brands/gesipa.jpg";
import gisLogo from "@/assets/images/brands/gis.jpg";
import gysLogo from "@/assets/images/brands/gys.jpg";
import hazetLogo from "@/assets/images/brands/HAZET-1.jpg";
import heshbonLogo from "@/assets/images/brands/heshbon.jpg";
import hidiLogo from "@/assets/images/brands/HIDI-NEW-1.jpg";
import koengLogo from "@/assets/images/brands/koeng.jpg";
import lavorLogo from "@/assets/images/brands/lavor.jpg";
import nittoLogo from "@/assets/images/brands/nitto.jpg";
import powerramLogo from "@/assets/images/brands/powerram.jpg";
import raasmLogo from "@/assets/images/brands/raasm.jpg";
import sefacLogo from "@/assets/images/brands/sefac.jpg";
import technoluxLogo from "@/assets/images/brands/technolux.jpg";
import toptulLogo from "@/assets/images/brands/TOPTUL-TAIWAN-1.jpg";
import yashimaLogo from "@/assets/images/brands/yashima.jpg";

const brands = [
  { name: "Anest Iwata", logo: anestIwataLogo },
  { name: "BendPak", logo: bendpakLogo },
  { name: "GESIPA", logo: gesipaLogo },
  { name: "FASEP", logo: fasepLogo },
  { name: "Beta", logo: betaLogo },
  { name: "GYS", logo: gysLogo },
  { name: "GIS", logo: gisLogo },
  { name: "Hazet", logo: hazetLogo },
  { name: "Heshbon", logo: heshbonLogo },
  { name: "HIDI", logo: hidiLogo },
  { name: "Koeng", logo: koengLogo },
  { name: "Lavor", logo: lavorLogo },
  { name: "Nitto Kohki", logo: nittoLogo },
  { name: "Powerram", logo: powerramLogo },
  { name: "Sefac", logo: sefacLogo },
  { name: "RAASM", logo: raasmLogo },
  { name: "Technolux", logo: technoluxLogo },
  { name: "TOPTUL", logo: toptulLogo },
  { name: "Yashima", logo: yashimaLogo },
];

export function Brands() {
  const marqueeBrands = [...brands, ...brands];

  return (
    <section id="brands" className="bg-white py-16 border-y border-border">
      <div className="container-prose">
        <div className="text-center mb-10">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Đối tác & thương hiệu
          </div>
          <h2 className="mt-2 font-display text-2xl font-bold text-secondary md:text-3xl">
            Nhà phân phối ủy quyền của các thương hiệu hàng đầu thế giới
          </h2>
        </div>

        <div className="brand-marquee-wrapper">
          <div className="brand-marquee-track" aria-label="Danh sách thương hiệu đối tác">
            {marqueeBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="brand-marquee-item"
                aria-hidden={index >= brands.length}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  decoding="async"
                  className="brand-marquee-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
