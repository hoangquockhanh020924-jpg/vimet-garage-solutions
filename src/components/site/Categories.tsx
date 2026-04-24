import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Cầu nâng ô tô",
    count: "45+ model",
    desc: "Cầu nâng 2 trụ, 4 trụ, cắt kéo từ 3.5T đến 7T",
    img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80",
  },
  {
    title: "Máy chẩn đoán",
    count: "30+ model",
    desc: "Máy đọc lỗi đa năng, thiết bị scan OBD chuyên sâu",
    img: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7fc?w=600&q=80",
  },
  {
    title: "Máy ra vào lốp",
    count: "20+ model",
    desc: "Máy tháo lắp lốp tự động, cân bằng động chính xác",
    img: "https://images.unsplash.com/photo-1600880292210-859ad14d3387?w=600&q=80",
  },
  {
    title: "Dụng cụ gara",
    count: "500+ SP",
    desc: "Tủ đồ nghề, súng vặn ốc, cờ lê lực tiêu chuẩn",
    img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80",
  },
  {
    title: "Máy nén khí",
    count: "35+ model",
    desc: "Máy nén piston, trục vít công suất 2HP - 50HP",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
  },
  {
    title: "Phụ tùng & vật tư",
    count: "1000+ SP",
    desc: "Dầu nhớt, lọc gió, má phanh chính hãng OEM",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
  },
  {
    title: "Thiết bị rửa xe",
    count: "25+ model",
    desc: "Máy rửa xe áp lực cao, máy hút bụi chuyên dụng",
    img: "https://images.unsplash.com/photo-1605164599901-db7f68c4b3a4?w=600&q=80",
  },
  {
    title: "Thiết bị sơn sấy",
    count: "15+ model",
    desc: "Phòng sơn, đèn sấy hồng ngoại, súng phun sơn",
    img: "https://images.unsplash.com/photo-1632823469850-1b7b1e8b7b8e?w=600&q=80",
  },
];

export function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="products" className="bg-neutral py-20">
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Danh mục sản phẩm
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-secondary md:text-4xl">
              Đầy đủ thiết bị cho mọi quy mô gara
            </h2>
            <p className="mt-3 text-muted-foreground">
              Hơn 2.000 mã sản phẩm từ các thương hiệu uy tín — sẵn hàng, giao
              nhanh, hỗ trợ kỹ thuật 24/7.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Cuộn trái"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-secondary transition-all hover:border-primary hover:bg-primary hover:text-white hover:shadow-[var(--shadow-elevated)]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Cuộn phải"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-secondary transition-all hover:border-primary hover:bg-primary hover:text-white hover:shadow-[var(--shadow-elevated)]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative -mx-4 md:mx-0">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 md:px-0 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((c) => (
              <a
                key={c.title}
                href="#products"
                className="group relative flex-none w-[260px] sm:w-[280px] snap-start overflow-hidden rounded-2xl border border-border bg-white transition-all hover:border-primary hover:-translate-y-1.5 hover:shadow-[var(--shadow-elevated)]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow-sm">
                    {c.count}
                  </span>
                  <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-lg">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-secondary group-hover:text-primary transition-colors line-clamp-1">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
                    {c.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-secondary group-hover:text-primary transition-colors">
                      Khám phá
                    </span>
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Edge fade indicators */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-neutral to-transparent md:block hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-neutral to-transparent md:block hidden" />
        </div>
      </div>
    </section>
  );
}
