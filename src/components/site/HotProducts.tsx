import { Flame } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

const HOT_BADGES = ["HOT", "BÁN CHẠY", "BAN CHAY"];

export function HotProducts() {
  const hot = products.filter((p) =>
    HOT_BADGES.some((b) => p.badge?.toUpperCase().includes(b)),
  );
  const rest = products.filter((p) => !hot.includes(p));
  const list = [...hot, ...rest].slice(0, 12);

  return (
    <section id="hot-products" className="bg-muted/30 py-20">
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              <Flame className="h-4 w-4" />
              Sản phẩm bán chạy
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-secondary md:text-4xl">
              Top thiết bị được đặt mua nhiều nhất
            </h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.code} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
