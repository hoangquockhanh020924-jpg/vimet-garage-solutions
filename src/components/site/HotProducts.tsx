import { Flame } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

// Chỉ các giá trị badge được cấu hình mới được coi là "bán chạy"
const HOT_BADGES = ["HOT", "BÁN CHẠY", "BAN CHAY"] as const;

function normalizeBadge(badge?: string) {
  return (badge ?? "").trim().toUpperCase();
}

export function isHotProduct(badge?: string) {
  const b = normalizeBadge(badge);
  return (HOT_BADGES as readonly string[]).includes(b);
}

export function HotProducts() {
  const hot = products.filter((p) => isHotProduct(p.badge)).slice(0, 12);

  if (hot.length === 0) return null;

  return (
    <section
      id="hot-products"
      className="relative py-20 bg-[oklch(0.92_0.11_95)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[oklch(0.88_0.14_95)] via-transparent to-[oklch(0.92_0.11_95)]"
      />
      <div className="container-prose relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              <Flame className="h-4 w-4" />
              Sản phẩm bán chạy
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-secondary md:text-4xl">
              Top thiết bị được đặt mua nhiều nhất
            </h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hot.map((p) => (
            <ProductCard key={p.code} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
