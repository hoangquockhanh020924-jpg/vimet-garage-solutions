import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  ChevronRight,
  Home,
  SlidersHorizontal,
  Grid3x3,
  List,
  ArrowUpDown,
  Headphones,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { categoryList, productCategoryToSlug } from "@/data/categories";
import { products, type Product } from "@/data/products";
import { ShoppingCart, Eye, Star } from "lucide-react";
import { useCart, parsePrice } from "@/lib/cart";

function addToCart(p: Product, addItem: ReturnType<typeof useCart>["addItem"]) {
  addItem({
    slug: p.slug,
    name: p.name,
    code: p.code,
    img: p.img,
    price: parsePrice(p.price),
    priceLabel: p.price,
  });
}

export const Route = createFileRoute("/danh-muc/")({
  head: () => ({
    meta: [
      { title: "Tất cả sản phẩm — Vimet" },
      {
        name: "description",
        content:
          "Toàn bộ sản phẩm thiết bị gara ô tô tại Vimet: cầu nâng, máy chẩn đoán, máy ra vào lốp, máy nén khí, dụng cụ và phụ tùng.",
      },
      { property: "og:title", content: "Tất cả sản phẩm — Vimet" },
      {
        property: "og:description",
        content: "Hơn 2.000 mã thiết bị gara ô tô chính hãng, sẵn hàng, giao nhanh.",
      },
    ],
  }),
  component: AllProductsPage,
});

const PRICE_RANGES = [
  { id: "all", label: "Tất cả mức giá" },
  { id: "u50", label: "Dưới 50 triệu" },
  { id: "50-80", label: "50 - 80 triệu" },
  { id: "80-100", label: "80 - 100 triệu" },
  { id: "o100", label: "Trên 100 triệu" },
] as const;

const SORT_OPTIONS = [
  { id: "popular", label: "Phổ biến nhất" },
  { id: "price-asc", label: "Giá: Thấp → Cao" },
  { id: "price-desc", label: "Giá: Cao → Thấp" },
  { id: "rating", label: "Đánh giá cao" },
] as const;


function AllProductsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState<(typeof SORT_OPTIONS)[number]["id"]>("popular");
  const [priceRange, setPriceRange] = useState<(typeof PRICE_RANGES)[number]["id"]>("all");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const items = products;

  const brands = useMemo(() => {
    const set = new Set(items.map((p) => p.brand));
    return Array.from(set);
  }, [items]);

  const filtered = useMemo(() => {
    let list = [...items];

    if (selectedBrands.length > 0) {
      list = list.filter((p) => selectedBrands.includes(p.brand));
    }

    if (priceRange !== "all") {
      list = list.filter((p) => {
        const v = parsePrice(p.price);
        if (priceRange === "u50") return v < 50_000_000;
        if (priceRange === "50-80") return v >= 50_000_000 && v < 80_000_000;
        if (priceRange === "80-100") return v >= 80_000_000 && v < 100_000_000;
        if (priceRange === "o100") return v >= 100_000_000;
        return true;
      });
    }

    if (sort === "price-asc") list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    if (sort === "price-desc") list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [items, selectedBrands, priceRange, sort]);

  const toggleBrand = (b: string) => {
    setSelectedBrands((prev) =>
      prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b],
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-neutral">
        <div className="container-prose flex items-center gap-2 py-3 text-xs text-muted-foreground">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
            <Home className="h-3.5 w-3.5" />
            Trang chủ
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-secondary">Tất cả sản phẩm</span>
        </div>
      </div>

      {/* Main layout */}
      <section className="py-8">
        <div className="container-prose grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-white overflow-hidden">
              <div className="flex items-center gap-2 bg-secondary px-4 py-3 text-white">
                <SlidersHorizontal className="h-4 w-4" />
                <h3 className="text-sm font-bold uppercase tracking-wide">
                  Danh mục sản phẩm
                </h3>
              </div>
              <ul className="divide-y divide-border">
                <li>
                  <Link
                    to="/danh-muc"
                    className="flex items-center justify-between px-4 py-3 text-sm font-bold text-primary bg-primary/5 border-l-4 border-primary"
                  >
                    <span>Tất cả sản phẩm</span>
                    <span className="text-[10px] font-semibold rounded-full px-2 py-0.5 bg-primary text-white">
                      {items.length}
                    </span>
                  </Link>
                </li>
                {categoryList.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/danh-muc/$slug"
                      params={{ slug: c.slug }}
                      className="flex items-center justify-between px-4 py-3 text-sm text-secondary hover:bg-neutral hover:text-primary transition-colors"
                    >
                      <span>{c.label}</span>
                      <span className="text-[10px] font-semibold rounded-full px-2 py-0.5 bg-neutral text-muted-foreground">
                        {c.count}+
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-white p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-secondary mb-4">
                Khoảng giá
              </h3>
              <div className="space-y-2">
                {PRICE_RANGES.map((r) => (
                  <label key={r.id} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange === r.id}
                      onChange={() => setPriceRange(r.id)}
                      className="h-4 w-4 accent-primary"
                    />
                    <span
                      className={`text-sm transition-colors ${
                        priceRange === r.id
                          ? "font-semibold text-primary"
                          : "text-secondary group-hover:text-primary"
                      }`}
                    >
                      {r.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {brands.length > 0 && (
              <div className="rounded-xl border border-border bg-white p-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-secondary mb-4">
                  Thương hiệu
                </h3>
                <div className="space-y-2">
                  {brands.map((b) => (
                    <label key={b} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(b)}
                        onChange={() => toggleBrand(b)}
                        className="h-4 w-4 accent-primary rounded"
                      />
                      <span
                        className={`text-sm transition-colors ${
                          selectedBrands.includes(b)
                            ? "font-semibold text-primary"
                            : "text-secondary group-hover:text-primary"
                        }`}
                      >
                        {b}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-xl bg-gradient-to-br from-primary to-primary-dark p-5 text-white">
              <Headphones className="h-7 w-7 text-highlight" />
              <h3 className="mt-3 font-display text-lg font-bold">
                Cần tư vấn sản phẩm?
              </h3>
              <p className="mt-1 text-sm text-white/85">
                Đội ngũ kỹ thuật Vimet sẵn sàng hỗ trợ bạn chọn thiết bị phù hợp.
              </p>
              <a
                href="tel:02838888388"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-bold text-primary hover:bg-highlight hover:text-secondary transition-colors"
              >
                028 388 88 388
              </a>
            </div>
          </aside>

          {/* Main listing */}
          <main>
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-white p-4 mb-6">
              <div className="text-sm text-secondary">
                Hiển thị{" "}
                <span className="font-bold text-primary">{filtered.length}</span>{" "}
                / {items.length} sản phẩm
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as typeof sort)}
                    className="rounded-md border border-border bg-white px-3 py-1.5 text-sm font-medium text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    {SORT_OPTIONS.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="hidden sm:flex items-center rounded-md border border-border overflow-hidden">
                  <button
                    onClick={() => setView("grid")}
                    aria-label="Xem dạng lưới"
                    className={`flex h-8 w-8 items-center justify-center transition-colors ${
                      view === "grid"
                        ? "bg-primary text-white"
                        : "bg-white text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <Grid3x3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setView("list")}
                    aria-label="Xem dạng danh sách"
                    className={`flex h-8 w-8 items-center justify-center transition-colors ${
                      view === "list"
                        ? "bg-primary text-white"
                        : "bg-white text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {filtered.length === 0 && (
              <div className="rounded-xl border-2 border-dashed border-border bg-neutral/50 py-16 text-center">
                <h3 className="font-display text-lg font-bold text-secondary">
                  Chưa có sản phẩm phù hợp
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Hãy thử bỏ bớt bộ lọc để xem thêm sản phẩm.
                </p>
                <button
                  onClick={() => {
                    setSelectedBrands([]);
                    setPriceRange("all");
                  }}
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-highlight hover:text-secondary transition-colors"
                >
                  Xoá bộ lọc
                </button>
              </div>
            )}

            {filtered.length > 0 && view === "grid" && (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => (
                  <ProductGridCard key={p.slug} p={p} />
                ))}
              </div>
            )}

            {filtered.length > 0 && view === "list" && (
              <div className="space-y-4">
                {filtered.map((p) => (
                  <ProductListCard key={p.slug} p={p} />
                ))}
              </div>
            )}
          </main>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProductGridCard({ p }: { p: Product }) {
  const catSlug = productCategoryToSlug[p.category];
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]">
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
        {p.badge && (
          <span className="absolute top-3 left-3 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
            {p.badge}
          </span>
        )}
        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-secondary opacity-0 shadow-md transition-opacity group-hover:opacity-100">
          <Eye className="h-4 w-4" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Mã: {p.code}
          </span>
          <div className="flex items-center gap-0.5 text-highlight">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < Math.floor(p.rating) ? "fill-highlight" : "fill-muted stroke-muted"}`}
              />
            ))}
          </div>
        </div>
        <Link
          to="/san-pham/$slug"
          params={{ slug: p.slug }}
          className="mt-1.5 line-clamp-2 font-display text-base font-bold leading-snug text-secondary group-hover:text-primary transition-colors min-h-[2.75rem]"
        >
          {p.name}
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground min-h-[2.5rem]">
          {p.spec}
        </p>

        {catSlug && (
          <Link
            to="/danh-muc/$slug"
            params={{ slug: catSlug }}
            className="mt-2 inline-flex w-fit items-center rounded-full bg-neutral px-2.5 py-0.5 text-[10px] font-semibold text-secondary hover:bg-primary hover:text-white transition-colors"
          >
            {p.category}
          </Link>
        )}

        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-lg font-bold text-primary">{p.price}</span>
          {p.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">{p.oldPrice}</span>
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => addToCart(p, addItem)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2.5 text-xs font-semibold text-white hover:bg-highlight hover:text-secondary transition-colors"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Đặt mua
          </button>
          <Link
            to="/san-pham/$slug"
            params={{ slug: p.slug }}
            className="rounded-md border border-border px-3 py-2.5 text-xs font-semibold text-secondary hover:border-highlight hover:bg-highlight hover:text-secondary transition-colors"
          >
            Chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
}

function ProductListCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col sm:flex-row gap-5 overflow-hidden rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]">
      <Link
        to="/san-pham/$slug"
        params={{ slug: p.slug }}
        className="relative w-full sm:w-56 shrink-0 aspect-[4/3] overflow-hidden rounded-lg bg-neutral block"
      >
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {p.badge && (
          <span className="absolute top-3 left-3 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
            {p.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Mã: {p.code}
          </span>
          <div className="flex items-center gap-0.5 text-highlight">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < Math.floor(p.rating) ? "fill-highlight" : "fill-muted stroke-muted"}`}
              />
            ))}
          </div>
        </div>
        <Link
          to="/san-pham/$slug"
          params={{ slug: p.slug }}
          className="mt-1 font-display text-lg font-bold text-secondary group-hover:text-primary transition-colors"
        >
          {p.name}
        </Link>
        <p className="mt-2 text-sm text-muted-foreground">{p.spec}</p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold text-primary">{p.price}</span>
            {p.oldPrice && (
              <span className="text-xs text-muted-foreground line-through">{p.oldPrice}</span>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => addToCart(p, addItem)}
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-xs font-semibold text-white hover:bg-highlight hover:text-secondary transition-colors"
            >
              <ShoppingCart className="h-3.5 w-3.5" />
              Đặt mua
            </button>
            <Link
              to="/san-pham/$slug"
              params={{ slug: p.slug }}
              className="rounded-md border border-border px-4 py-2.5 text-xs font-semibold text-secondary hover:border-highlight hover:bg-highlight hover:text-secondary transition-colors"
            >
              Chi tiết
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
