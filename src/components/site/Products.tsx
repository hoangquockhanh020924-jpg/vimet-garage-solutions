import { ShoppingCart, Eye } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { products } from "@/data/products";

export function Products() {
  return (
    <section id="products" className="bg-white py-20">
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Sản phẩm nổi bật
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-secondary md:text-4xl">
              Thiết bị được gara tin dùng nhất
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {["Tất cả", "Cầu nâng", "Chẩn đoán", "Máy nén khí"].map((t, i) => (
              <button
                key={t}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  i === 0
                    ? "bg-primary text-white"
                    : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.code}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]"
            >
              <Link
                to="/san-pham/$slug"
                params={{ slug: p.slug }}
                className="relative aspect-[4/3] overflow-hidden bg-neutral block"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  {p.badge}
                </span>
                <span
                  aria-label="Xem nhanh"
                  className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-secondary opacity-0 shadow-md transition-opacity group-hover:opacity-100"
                >
                  <Eye className="h-4 w-4" />
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Mã: {p.code}
                </div>
                <Link
                  to="/san-pham/$slug"
                  params={{ slug: p.slug }}
                  className="mt-1.5 line-clamp-2 font-display text-base font-bold leading-snug text-secondary group-hover:text-primary transition-colors min-h-[2.75rem]"
                >
                  {p.name}
                </Link>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.spec}</p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-lg font-bold text-primary">{p.price}</span>
                  {p.oldPrice && (
                    <span className="text-xs text-muted-foreground line-through">{p.oldPrice}</span>
                  )}
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2.5 text-xs font-semibold text-white hover:bg-highlight hover:text-secondary transition-colors">
                    <ShoppingCart className="h-3.5 w-3.5" />
                    Đặt mua
                  </button>
                  <Link
                    to="/san-pham/$slug"
                    params={{ slug: p.slug }}
                    className="rounded-md border border-border px-3 py-2.5 text-xs font-semibold text-secondary hover:border-primary hover:text-primary transition-colors"
                  >
                    Chi tiết
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
