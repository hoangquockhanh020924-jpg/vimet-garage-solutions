import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

const FILTERS = ["Tất cả", "Cầu nâng", "Chẩn đoán", "Máy nén khí"] as const;
type Filter = (typeof FILTERS)[number];

export function Products() {
  const [filter, setFilter] = useState<Filter>("Tất cả");

  const featured = useMemo(() => {
    const list =
      filter === "Tất cả"
        ? products
        : products.filter(
            (p) => (p.category ?? "").trim().toLowerCase() === filter.toLowerCase(),
          );
    return list.slice(0, 16);
  }, [filter]);

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
            {FILTERS.map((t) => {
              const active = filter === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setFilter(t)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-primary text-white"
                      : "border border-border text-muted-foreground hover:border-highlight hover:bg-highlight hover:text-secondary"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {featured.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-neutral py-16 text-center text-sm text-muted-foreground">
            Chưa có sản phẩm trong danh mục này.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.code} p={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
