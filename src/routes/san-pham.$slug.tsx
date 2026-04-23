import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShoppingCart,
  Star,
  Check,
  Shield,
  Truck,
  Wrench,
  Phone,
  Minus,
  Plus,
  ChevronRight,
  Heart,
  Share2,
  Award,
  Package,
  Facebook,
  ThumbsUp,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { getProductBySlug, getRelatedProducts, type Product } from "@/data/products";

export const Route = createFileRoute("/san-pham/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    const related = getRelatedProducts(params.slug);
    return { product, related };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Vimet` },
          { name: "description", content: loaderData.product.description.slice(0, 160) },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: loaderData.product.description.slice(0, 160) },
          { property: "og:image", content: loaderData.product.img },
          { property: "twitter:image", content: loaderData.product.img },
        ]
      : [],
  }),
  component: ProductDetailPage,
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center p-8">
      <p className="text-destructive">Lỗi: {error.message}</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-4">
      <h1 className="font-display text-3xl font-bold">Không tìm thấy sản phẩm</h1>
      <Link to="/" className="text-primary font-semibold hover:underline">
        ← Về trang chủ
      </Link>
    </div>
  ),
});

function Stars({ rating, size = 4 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-${size} w-${size} ${
            i < rating ? "fill-primary text-primary" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function ProductDetailPage() {
  const { product, related } = Route.useLoaderData();
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"specs" | "accessories" | "warranty" | "reviews">("specs");

  return (
    <div className="min-h-screen bg-neutral">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="container-prose py-3 flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">
            Trang chủ
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          <Link to="/" hash="products" className="text-muted-foreground hover:text-primary">
            Sản phẩm
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-secondary font-semibold line-clamp-1">{product.name}</span>
        </div>
      </div>

      {/* Top: gallery + info */}
      <section className="py-8 md:py-12">
        <div className="container-prose">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-2xl p-6 md:p-8 border border-border">
            {/* Gallery */}
            <div>
              <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral border border-border">
                <img
                  src={product.gallery[activeImg]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-4 left-4 rounded-md bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  {product.badge}
                </span>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="h-9 w-9 flex items-center justify-center rounded-full bg-white/95 text-secondary hover:bg-primary hover:text-white transition-colors shadow-md">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="h-9 w-9 flex items-center justify-center rounded-full bg-white/95 text-secondary hover:bg-primary hover:text-white transition-colors shadow-md">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                      activeImg === i
                        ? "border-primary shadow-[0_4px_12px_-2px_rgba(207,46,46,0.3)]"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <span className="inline-flex self-start items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                <Award className="h-3.5 w-3.5" />
                Mã: {product.code}
              </span>
              <h1 className="mt-3 font-display text-2xl md:text-3xl font-bold text-secondary leading-tight">
                {product.name}
              </h1>

              <div className="mt-3 flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Stars rating={product.rating} />
                  <span className="text-sm font-semibold text-secondary">{product.rating}.0</span>
                </div>
                <span className="h-4 w-px bg-border" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-secondary">{product.reviewCount}</span> lượt đánh giá
                </span>
                <span className="h-4 w-px bg-border" />
                <span className="text-sm text-muted-foreground">
                  Hãng: <span className="font-semibold text-secondary">{product.brand}</span>
                </span>
              </div>

              {/* Price card */}
              <div className="mt-5 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Giá niêm yết
                </div>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="font-display text-3xl md:text-4xl font-bold text-primary">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-base text-muted-foreground line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Đã bao gồm VAT · Miễn phí vận chuyển & lắp đặt nội thành
                </p>
              </div>

              {/* Meta */}
              <ul className="mt-5 space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-muted-foreground w-32 shrink-0">Hãng sản xuất:</span>
                  <span className="font-semibold text-secondary">{product.brand}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground w-32 shrink-0">Xuất xứ:</span>
                  <span className="font-semibold text-secondary">{product.origin}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground w-32 shrink-0">Danh mục:</span>
                  <span className="font-semibold text-secondary">{product.category}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground w-32 shrink-0">Tình trạng:</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                    <Check className="h-4 w-4" /> Còn hàng · Sẵn kho
                  </span>
                </li>
              </ul>

              {/* Qty + CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="flex items-center rounded-md border-2 border-border overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="h-11 w-11 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-bold">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="h-11 w-11 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-primary-dark transition-colors shadow-[0_4px_12px_-2px_rgba(207,46,46,0.4)]">
                  <ShoppingCart className="h-4 w-4" />
                  Mua ngay
                </button>
                <button className="inline-flex items-center justify-center rounded-md border-2 border-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary hover:bg-primary hover:text-white transition-colors">
                  Thêm vào giỏ
                </button>
              </div>

              {/* Trust badges */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: Shield, label: "Bảo hành chính hãng" },
                  { icon: Truck, label: "Giao hàng toàn quốc" },
                  { icon: Wrench, label: "Lắp đặt miễn phí" },
                  { icon: Phone, label: "Hỗ trợ 24/7" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-neutral p-3 text-center"
                  >
                    <b.icon className="h-5 w-5 text-primary" />
                    <span className="text-[11px] font-semibold text-secondary leading-tight">
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hotline */}
              <a
                href="tel:19001234"
                className="mt-4 flex items-center gap-3 rounded-lg bg-gradient-to-r from-primary to-primary-dark p-4 text-white shadow-[0_4px_12px_-2px_rgba(207,46,46,0.4)]"
              >
                <Phone className="h-6 w-6" />
                <div className="leading-tight">
                  <div className="text-[11px] uppercase tracking-wider opacity-90 font-semibold">
                    Tư vấn báo giá dự án
                  </div>
                  <div className="text-xl font-display font-bold">1900 1234</div>
                </div>
                <span className="ml-auto text-xs font-semibold opacity-90">Miễn phí</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-12">
        <div className="container-prose">
          <div className="grid lg:grid-cols-[1fr_320px] gap-6">
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="flex border-b border-border overflow-x-auto">
                {[
                  { id: "specs", label: "Thông số kỹ thuật" },
                  { id: "accessories", label: "Phụ kiện đi kèm" },
                  { id: "warranty", label: "Bảo hành" },
                  { id: "reviews", label: `Đánh giá (${product.reviewCount})` },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id as typeof tab)}
                    className={`relative px-5 md:px-6 py-4 text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-colors ${
                      tab === t.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-secondary"
                    }`}
                  >
                    {t.label}
                    {tab === t.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </button>
                ))}
              </div>

              <div className="p-6 md:p-8">
                {tab === "specs" && <SpecsTab product={product} />}
                {tab === "accessories" && <AccessoriesTab product={product} />}
                {tab === "warranty" && <WarrantyTab product={product} />}
                {tab === "reviews" && <ReviewsTab product={product} />}
              </div>
            </div>

            {/* Sidebar — rating summary (like reference) */}
            <aside className="space-y-4">
              <div className="bg-white rounded-2xl border border-border p-6 text-center">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Đánh giá
                </div>
                <div className="mx-auto mt-4 flex h-32 w-32 items-center justify-center rounded-full border-[6px] border-primary">
                  <span className="font-display text-5xl font-bold text-primary">
                    {product.rating}
                  </span>
                </div>
                <div className="mt-4 flex justify-center">
                  <Stars rating={product.rating} size={5} />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {product.reviewCount} lượt đánh giá
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-6">
                <h3 className="font-display font-bold text-secondary mb-4">Sản phẩm mới</h3>
                <ul className="space-y-4">
                  {related.slice(0, 3).map((r) => (
                    <li key={r.slug}>
                      <Link
                        to="/san-pham/$slug"
                        params={{ slug: r.slug }}
                        className="flex gap-3 group"
                      >
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-neutral">
                          <img src={r.img} alt={r.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-bold text-primary">Mã: {r.code}</div>
                          <div className="text-sm font-semibold text-secondary line-clamp-2 group-hover:text-primary transition-colors">
                            {r.name}
                          </div>
                          <div className="text-xs font-bold text-primary mt-0.5">{r.price}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="pb-16">
        <div className="container-prose">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Gợi ý cho bạn
              </div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-secondary">
                Sản phẩm liên quan
              </h2>
            </div>
            <Link
              to="/"
              hash="products"
              className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
            >
              Xem tất cả <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/san-pham/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {p.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="text-[11px] font-bold text-primary uppercase tracking-wider">
                    Mã: {p.code}
                  </div>
                  <h3 className="mt-1 line-clamp-2 font-display text-sm font-bold text-secondary group-hover:text-primary transition-colors min-h-[2.5rem]">
                    {p.name}
                  </h3>
                  <div className="mt-3 font-display text-base font-bold text-primary">
                    {p.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SpecsTab({ product }: { product: Product }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-secondary">
        Thông số kỹ thuật {product.category}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

      <div className="mt-6">
        <h3 className="font-display text-base font-bold text-secondary mb-3">Đặc điểm nổi bật</h3>
        <ul className="grid sm:grid-cols-2 gap-2">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-secondary">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3" />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="font-display text-base font-bold text-secondary mb-3">Thông số chi tiết</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <tbody>
              {product.specs.map((s, i) => (
                <tr key={s.label} className={i % 2 === 0 ? "bg-neutral" : "bg-white"}>
                  <td className="px-4 py-3 font-semibold text-muted-foreground w-1/2 md:w-1/3">
                    {s.label}
                  </td>
                  <td className="px-4 py-3 font-semibold text-secondary">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function AccessoriesTab({ product }: { product: Product }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-secondary">Phụ kiện đi kèm</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Trọn bộ sản phẩm Vimet cung cấp khi đặt hàng <strong>{product.name}</strong>:
      </p>

      <ul className="mt-6 grid sm:grid-cols-2 gap-3">
        {product.accessories.map((a, i) => (
          <li
            key={a.name}
            className="flex items-center gap-3 rounded-lg border border-border bg-neutral p-4 hover:border-primary/40 transition-colors"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-display font-bold">
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-secondary">{a.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">Số lượng: {a.qty}</div>
            </div>
            <Package className="h-4 w-4 text-muted-foreground shrink-0" />
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-lg bg-primary/5 border border-primary/20 p-4 text-sm text-secondary">
        <strong className="text-primary">Lưu ý:</strong> Tất cả phụ kiện đều là hàng chính hãng, nguyên
        đai nguyên kiện. Vimet cung cấp thêm dịch vụ lắp đặt miễn phí và hướng dẫn vận hành tại gara
        của khách hàng.
      </div>
    </div>
  );
}

function WarrantyTab({ product }: { product: Product }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-secondary">Chính sách bảo hành</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Vimet cam kết đồng hành cùng khách hàng xuyên suốt quá trình sử dụng sản phẩm.
      </p>

      <ul className="mt-6 space-y-3">
        {product.warranty.map((w, i) => (
          <li
            key={i}
            className="flex items-start gap-4 rounded-lg border-l-4 border-primary bg-neutral p-4"
          >
            <Shield className="h-5 w-5 shrink-0 text-primary mt-0.5" />
            <span className="text-sm text-secondary font-medium">{w}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {[
          { icon: Truck, title: "Giao hàng nhanh", desc: "Trong 24-72h nội thành, 3-7 ngày toàn quốc" },
          { icon: Wrench, title: "Lắp đặt chuyên nghiệp", desc: "Đội kỹ thuật Vimet giàu kinh nghiệm" },
          { icon: Phone, title: "Hỗ trợ trọn đời", desc: "Hotline kỹ thuật 1900 1234 hoạt động 24/7" },
        ].map((b) => (
          <div key={b.title} className="rounded-xl border border-border p-5 bg-white">
            <b.icon className="h-7 w-7 text-primary" />
            <h4 className="mt-3 font-display font-bold text-secondary">{b.title}</h4>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewsTab({ product }: { product: Product }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-secondary">Đánh giá từ khách hàng</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {product.reviewCount} lượt đánh giá · Điểm trung bình {product.rating}.0/5
          </p>
        </div>
        <button className="self-start md:self-auto inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-primary-dark transition-colors">
          <Star className="h-4 w-4" />
          Viết đánh giá
        </button>
      </div>

      <ul className="mt-6 space-y-4">
        {product.reviews.map((r, i) => (
          <li key={i} className="rounded-xl border border-border bg-white p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary font-display font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-secondary">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
              <div className="text-right">
                <Stars rating={r.rating} />
                <div className="text-[11px] text-muted-foreground mt-1">{r.date}</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-secondary leading-relaxed">{r.comment}</p>
            <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
              <button className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                <ThumbsUp className="h-3.5 w-3.5" /> Hữu ích
              </button>
              <button className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                <Facebook className="h-3.5 w-3.5" /> Chia sẻ
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
