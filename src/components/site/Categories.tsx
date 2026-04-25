import { useRef, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { categoryList } from "@/data/categories";

const categories = categoryList.map((c) => ({
  slug: c.slug,
  title: c.label,
  count: `${c.count}+ SP`,
  desc: c.desc,
  img: c.img,
}));

export function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Auto-scroll left → right with seamless infinite loop (list is duplicated below)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isPaused) return;

    const interval = setInterval(() => {
      if (!el) return;
      // Half of total width = end of the first (original) set
      const halfWidth = el.scrollWidth / 2;
      // When we've scrolled past the first set, jump back by exactly halfWidth.
      // Because the second set is identical, the jump is visually invisible.
      if (el.scrollLeft >= halfWidth) {
        el.scrollLeft = el.scrollLeft - halfWidth;
      } else {
        el.scrollLeft = el.scrollLeft + 0.5;
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isPaused]);

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

          <Link
            to="/danh-muc"
            className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            Xem toàn bộ danh mục
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          className="relative -mx-4 md:mx-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left arrow - overlay */}
          <button
            onClick={() => scroll("left")}
            aria-label="Cuộn trái"
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-secondary transition-all hover:border-primary hover:bg-primary hover:text-white shadow-[var(--shadow-elevated)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Cuộn phải"
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-secondary transition-all hover:border-primary hover:bg-primary hover:text-white shadow-[var(--shadow-elevated)]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto px-4 md:px-0 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {[...categories, ...categories].map((c, idx) => (
              <Link
                key={`${c.title}-${idx}`}
                to="/danh-muc/$slug"
                params={{ slug: c.slug }}
                className="group relative flex-none w-[260px] sm:w-[280px] overflow-hidden rounded-2xl border border-border bg-white transition-all hover:border-primary hover:-translate-y-1.5 hover:shadow-[var(--shadow-elevated)]"
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
