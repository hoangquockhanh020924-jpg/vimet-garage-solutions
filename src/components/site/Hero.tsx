import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, PhoneCall, ShieldCheck, Wrench, Truck } from "lucide-react";
import { images } from "@/lib/images";

const heroSlides = [
  { src: images.hero.slides[0], alt: "Xưởng gara ô tô với cầu nâng và thiết bị chẩn đoán Vimet" },
  { src: images.hero.slides[1], alt: "Cầu nâng 2 trụ Vimet chính hãng tại xưởng dịch vụ" },
  { src: images.hero.slides[2], alt: "Thiết bị chẩn đoán và cầu nâng 4 trụ cho gara chuyên nghiệp" },
];

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
      {/* Decorative stripe */}
      <div className="absolute top-0 right-0 h-2 w-1/3 diagonal-stripe opacity-80" />
      <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-prose relative grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
        {/* Copy */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Nhà phân phối chính thức từ 2008
          </div>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-secondary md:text-5xl lg:text-6xl">
            Giải pháp thiết bị <span className="text-primary">gara ô tô</span>{" "}
            chuyên nghiệp, chính hãng
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Vimet cung cấp trọn gói cầu nâng, máy chẩn đoán, thiết bị sửa chữa và
            dụng cụ gara — tư vấn kỹ thuật, lắp đặt tận nơi và bảo hành dài hạn
            cho hơn 3.500+ xưởng dịch vụ trên toàn quốc.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_6px_20px_-8px_oklch(0.55_0.19_25/0.6)] hover:bg-primary-dark transition-all hover:shadow-[0_10px_28px_-8px_oklch(0.55_0.19_25/0.7)]"
            >
              Xem sản phẩm
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border-2 border-secondary bg-white px-6 py-3.5 text-sm font-semibold text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
              Nhận tư vấn & báo giá
            </a>
          </div>

          {/* Mini trust */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              { icon: ShieldCheck, label: "Bảo hành", value: "24 tháng" },
              { icon: Wrench, label: "Lắp đặt", value: "Tận nơi" },
              { icon: Truck, label: "Giao hàng", value: "Toàn quốc" },
            ].map((f) => (
              <div key={f.label} className="flex items-start gap-2.5">
                <f.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="leading-tight">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{f.label}</div>
                  <div className="text-sm font-bold text-secondary">{f.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image carousel */}
        <div
          className="lg:col-span-6 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)] bg-neutral">
            {heroSlides.map((slide, i) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 via-transparent to-transparent pointer-events-none" />

            {/* Prev / Next buttons */}
            <button
              type="button"
              onClick={prev}
              aria-label="Ảnh trước"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur text-secondary shadow-md transition-all hover:bg-primary hover:text-white hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Ảnh kế tiếp"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur text-secondary shadow-md transition-all hover:bg-primary hover:text-white hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Chuyển đến ảnh ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-primary" : "w-2 bg-white/80 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Floating stat */}
          <div className="absolute -bottom-6 -left-4 md:left-8 rounded-xl border border-border bg-white p-4 shadow-[var(--shadow-card)] w-[220px]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-secondary leading-none">3.500+</div>
                <div className="text-xs text-muted-foreground mt-1">Gara tin dùng</div>
              </div>
            </div>
          </div>

          {/* Badge corner */}
          <div className="absolute -top-3 right-6 rounded-md bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md">
            Chính hãng 100%
          </div>
        </div>
      </div>
    </section>
  );
}
