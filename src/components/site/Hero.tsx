import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  ShieldCheck,
  Wrench,
  Truck,
} from "lucide-react";
import { images } from "@/lib/images";

const heroSlides = images.hero.slides.map((src, index) => ({
  src,
  alt: `Banner Vimet ${index + 1}`,
}));

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = heroSlides.length;

  const goTo = (i: number) => setCurrent((i + total) % total);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % total), 5000);
    return () => clearInterval(id);
  }, [isPaused, total]);

  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 h-2 w-1/3 diagonal-stripe opacity-80" />

      {/* Full-width banner carousel — preserves true 2048×696 aspect (no cropping) */}
      <div
        className="relative w-full bg-neutral"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full aspect-[2048/696] bg-neutral-100">
          {heroSlides.map((slide, i) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <button
            type="button"
            onClick={prev}
            aria-label="Ảnh trước"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur text-secondary shadow-md transition-all hover:bg-primary hover:text-white hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Ảnh kế tiếp"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur text-secondary shadow-md transition-all hover:bg-primary hover:text-white hover:scale-110"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Chuyển đến ảnh ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-primary" : "w-2 bg-white/80 hover:bg-white"
                }`}
              />
            ))}
          </div>

          <div className="absolute top-4 right-4 md:top-6 md:right-6 rounded-md bg-yellow-400 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary shadow-md">
            Chính hãng 100%
          </div>
        </div>
      </div>

      {/* Copy + trust block below banner */}
      <div className="container-prose relative grid gap-10 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="lg:col-span-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Nhà phân phối chính thức từ 2008
          </div>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-secondary md:text-5xl lg:text-6xl">
            Giải pháp thiết bị <span className="text-primary">gara ô tô</span> chuyên nghiệp, chính
            hãng
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Vimet cung cấp trọn gói cầu nâng, máy chẩn đoán, thiết bị sửa chữa và dụng cụ gara — tư
            vấn kỹ thuật, lắp đặt tận nơi và bảo hành dài hạn cho hơn 3.500+ xưởng dịch vụ trên toàn
            quốc.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_6px_20px_-8px_oklch(0.55_0.19_25/0.6)] hover:bg-highlight hover:text-secondary transition-all hover:shadow-[0_10px_28px_-8px_oklch(0.55_0.19_25/0.7)]"
            >
              Xem sản phẩm
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/lien-he"
              className="inline-flex items-center gap-2 rounded-md border-2 border-secondary bg-white px-6 py-3.5 text-sm font-semibold text-secondary transition-colors hover:border-highlight hover:bg-highlight/10 hover:text-highlight"
            >
              <PhoneCall className="h-4 w-4" />
              Nhận tư vấn & báo giá
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center gap-4 lg:border-l lg:border-border lg:pl-8">
          {[
            { icon: ShieldCheck, label: "Bảo hành chính hãng", value: "24 tháng" },
            { icon: Wrench, label: "Lắp đặt kỹ thuật", value: "Tận nơi" },
            { icon: Truck, label: "Giao hàng", value: "Toàn quốc" },
          ].map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-3 rounded-lg border border-border bg-white p-3 shadow-[var(--shadow-card)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {f.label}
                </div>
                <div className="text-base font-bold text-secondary">{f.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
