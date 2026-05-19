import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

export function Products() {
  const featured = products.slice(0, 16);
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
                    : "border border-border text-muted-foreground hover:border-highlight hover:bg-highlight hover:text-secondary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.code} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
