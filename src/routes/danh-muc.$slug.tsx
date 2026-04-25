import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  ChevronRight,
  Home,
  ShoppingCart,
  Eye,
  Star,
  Truck,
  Shield,
  Headphones,
  Award,
  SlidersHorizontal,
  Grid3x3,
  List,
  ArrowUpDown,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  categoryList,
  getCategoryBySlug,
  productCategoryToSlug,
} from "@/data/categories";
import { products, type Product } from "@/data/products";
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

export const Route = createFileRoute("/danh-muc/$slug")({
  loader: ({ params }) => {
    const cat = getCategoryBySlug(params.slug);
    if (!cat) throw notFound();
    const items = products.filter(
      (p) => productCategoryToSlug[p.category] === params.slug,
    );
    return { cat, items };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.cat.label} — Danh mục sản phẩm Vimet` },
          { name: "description", content: loaderData.cat.desc },
          { property: "og:title", content: `${loaderData.cat.label} — Vimet` },
          { property: "og:description", content: loaderData.cat.desc },
          { property: "og:image", content: loaderData.cat.img },
          { property: "twitter:image", content: loaderData.cat.img },
        ]
      : [{ title: "Danh mục sản phẩm — Vimet" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container-prose py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-secondary">
          Không tìm thấy danh mục
        </h1>
        <p className="mt-3 text-muted-foreground">
          Danh mục bạn tìm không tồn tại hoặc đã được di chuyển.
        </p>
        <Link
          to="/danh-muc"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-highlight hover:text-secondary transition-colors"
        >
          Xem tất cả danh mục
        </Link>
      </div>
      <Footer />
    </div>
  ),
  component: CategoryDetailPage,
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

function parsePrice(s: string): number {
  return parseInt(s.replace(/[^\d]/g, ""), 10) || 0;
}

function CategoryDetailPage() {
  const { cat, items } = Route.useLoaderData();
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState<(typeof SORT_OPTIONS)[number]["id"]>("popular");
  const [priceRange, setPriceRange] = useState<(typeof PRICE_RANGES)[number]["id"]>("all");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

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
          <Link to="/danh-muc" className="hover:text-primary transition-colors">
            Danh mục
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-secondary">{cat.label}</span>
        </div>
      </div>

      {/* Category hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-primary-dark text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${cat.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/40" />
        <div className="container-prose relative py-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-highlight">
              Danh mục sản phẩm
            </div>
            <h1 className="mt-2 font-display text-3xl md:text-4xl font-bold">
              {cat.label}
            </h1>
            <p className="mt-3 text-white/80">{cat.desc}</p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 ring-1 ring-white/20">
                <Award className="h-3.5 w-3.5 text-highlight" />
                {cat.count}+ mã sản phẩm
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 ring-1 ring-white/20">
                <Shield className="h-3.5 w-3.5 text-highlight" />
                Bảo hành chính hãng
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 ring-1 ring-white/20">
                <Truck className="h-3.5 w-3.5 text-highlight" />
                Giao toàn quốc
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 ring-1 ring-white/20">
                <Headphones className="h-3.5 w-3.5 text-highlight" />
                Hỗ trợ 24/7
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="py-10">
        <div className="container-prose grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-6">
            {/* All categories */}
            <div className="rounded-xl border border-border bg-white overflow-hidden">
              <div className="flex items-center gap-2 bg-secondary px-4 py-3 text-white">
                <SlidersHorizontal className="h-4 w-4" />
                <h3 className="text-sm font-bold uppercase tracking-wide">
                  Danh mục sản phẩm
                </h3>
              </div>
              <ul className="divide-y divide-border">
                {categoryList.map((c) => {
                  const active = c.slug === cat.slug;
                  return (
                    <li key={c.slug}>
                      <Link
                        to="/danh-muc/$slug"
                        params={{ slug: c.slug }}
                        className={`flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                          active
                            ? "bg-primary/5 font-bold text-primary border-l-4 border-primary"
                            : "text-secondary hover:bg-neutral hover:text-primary"
                        }`}
                      >
                        <span>{c.label}</span>
                        <span
                          className={`text-[10px] font-semibold rounded-full px-2 py-0.5 ${
                            active ? "bg-primary text-white" : "bg-neutral text-muted-foreground"
                          }`}
                        >
                          {c.count}+
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Price filter */}
            <div className="rounded-xl border border-border bg-white p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-secondary mb-4">
                Khoảng giá
              </h3>
              <div className="space-y-2">
                {PRICE_RANGES.map((r) => (
                  <label
                    key={r.id}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
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

            {/* Brand filter */}
            {brands.length > 0 && (
              <div className="rounded-xl border border-border bg-white p-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-secondary mb-4">
                  Thương hiệu
                </h3>
                <div className="space-y-2">
                  {brands.map((b) => (
                    <label
                      key={b}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
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

            {/* Support card */}
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
            {/* Toolbar */}
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

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="rounded-xl border-2 border-dashed border-border bg-neutral/50 py-16 text-center">
                <Package className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 font-display text-lg font-bold text-secondary">
                  Chưa có sản phẩm phù hợp
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {items.length === 0
                    ? "Danh mục này đang được cập nhật. Vui lòng quay lại sau."
                    : "Hãy thử bỏ bớt bộ lọc để xem thêm sản phẩm."}
                </p>
                {items.length > 0 && (
                  <button
                    onClick={() => {
                      setSelectedBrands([]);
                      setPriceRange("all");
                    }}
                    className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-highlight hover:text-secondary transition-colors"
                  >
                    Xoá bộ lọc
                  </button>
                )}
              </div>
            )}

            {/* Grid view */}
            {filtered.length > 0 && view === "grid" && (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => (
                  <ProductGridCard key={p.slug} p={p} />
                ))}
              </div>
            )}

            {/* List view */}
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

function Package({ className }: { className?: string }) {
  // small inline icon used for empty state (avoids extra import)
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function ProductGridCard({ p }: { p: Product }) {
  const { addItem } = useCart();
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
        <span className="absolute top-3 left-3 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {p.badge}
        </span>
        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-secondary opacity-0 shadow-md transition-opacity group-hover:opacity-100">
          <Eye className="h-4 w-4" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          <span>Mã: {p.code}</span>
          <span className="inline-flex items-center gap-0.5 text-highlight">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < p.rating ? "fill-highlight" : "fill-none text-border"}`}
              />
            ))}
          </span>
        </div>
        <Link
          to="/san-pham/$slug"
          params={{ slug: p.slug }}
          className="mt-1.5 line-clamp-2 font-display text-base font-bold leading-snug text-secondary group-hover:text-primary transition-colors min-h-[2.75rem]"
        >
          {p.name}
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.spec}</p>

        <div className="mt-auto pt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-bold text-primary">{p.price}</span>
            {p.oldPrice && (
              <span className="text-xs text-muted-foreground line-through">{p.oldPrice}</span>
            )}
          </div>
          <div className="mt-3 flex gap-2">
            <button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2.5 text-xs font-semibold text-white hover:bg-highlight hover:text-secondary transition-colors">
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
      </div>
    </article>
  );
}

function ProductListCard({ p }: { p: Product }) {
  const { addItem } = useCart();
  return (
    <article className="group grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-5 overflow-hidden rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]">
      <Link
        to="/san-pham/$slug"
        params={{ slug: p.slug }}
        className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-lg bg-neutral block"
      >
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {p.badge}
        </span>
      </Link>

      <div className="flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          <span>
            Mã: {p.code} · {p.brand} · {p.origin}
          </span>
          <span className="inline-flex items-center gap-1 text-highlight">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < p.rating ? "fill-highlight" : "fill-none text-border"}`}
              />
            ))}
            <span className="text-muted-foreground normal-case font-medium ml-1">
              ({p.reviewCount})
            </span>
          </span>
        </div>
        <Link
          to="/san-pham/$slug"
          params={{ slug: p.slug }}
          className="mt-1.5 font-display text-lg font-bold leading-snug text-secondary group-hover:text-primary transition-colors"
        >
          {p.name}
        </Link>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.spec}</p>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 hidden md:block">
          {p.description}
        </p>

        <div className="mt-auto pt-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold text-primary">
                {p.price}
              </span>
              {p.oldPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {p.oldPrice}
                </span>
              )}
            </div>
            <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
              <Truck className="h-3.5 w-3.5" />
              Miễn phí giao & lắp đặt
            </div>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-xs font-semibold text-white hover:bg-highlight hover:text-secondary transition-colors">
              <ShoppingCart className="h-3.5 w-3.5" />
              Đặt mua ngay
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
