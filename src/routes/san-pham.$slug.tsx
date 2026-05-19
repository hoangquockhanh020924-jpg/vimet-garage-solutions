import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShoppingCart, Star, Check, Shield, Truck, Wrench, Phone, Minus,
  Plus, ChevronRight, Heart, Share2, Award, Package, Facebook, ThumbsUp,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { getProductBySlug, getRelatedProducts, type Product } from "@/data/products";
import { useCart, parsePrice } from "@/lib/cart";
import { useFavorites } from "@/lib/favorites";

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
          { name: "description", content: loaderData.product.description?.slice(0, 160) || "" },
        ]
      : [],
  }),
  component: ProductDetailPage,
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
  const safeRating = rating || 5; // Mặc định 5 sao nếu rỗng
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-${size} w-${size} ${
            i < safeRating ? "fill-primary text-primary" : "fill-muted text-muted"
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
  
  const { addItem } = useCart();
  const { isFavorite, toggle: toggleFavorite } = useFavorites();
  const liked = isFavorite(product.slug);
  const navigate = useNavigate();

  // BẢO VỆ DỮ LIỆU: Nếu mảng gallery rỗng, tự động lấy ảnh đại diện (img)
  const gallery = Array.isArray(product.gallery) && product.gallery.length > 0
    ? product.gallery
    : (product.img ? [product.img] : ["https://placehold.co/600x600?text=Chưa+có+hình"]);

  const reviewCount = product.reviewCount || 0;
  const rating = product.rating || 5;

  const handleAdd = () => {
    addItem(
      {
        slug: product.slug,
        name: product.name,
        code: product.code,
        img: gallery[0],
        price: parsePrice(product.price),
        priceLabel: product.price,
      },
      qty,
    );
  };

  const handleBuyNow = () => {
    handleAdd();
    navigate({ to: "/thanh-toan" });
  };

  return (
    <div className="min-h-screen bg-neutral">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="container-prose py-3 flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Trang chủ</Link>
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
                  src={gallery[activeImg] || gallery[0]}
                  alt={product.name}
                  className="h-full w-full object-contain bg-white"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 rounded-md bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    {product.badge}
                  </span>
                )}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button
                    onClick={() => toggleFavorite(product.slug, product.name)}
                    className={`h-9 w-9 flex items-center justify-center rounded-full shadow-md transition-colors ${
                      liked ? "bg-primary text-white" : "bg-white/95 text-secondary hover:bg-primary hover:text-white"
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
                  </button>
                </div>
              </div>
              
              {gallery.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {gallery.map((img: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                        activeImg === i ? "border-primary" : "border-border"
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <span className="inline-flex self-start items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                Mã: {product.code || "Đang cập nhật"}
              </span>
              <h1 className="mt-3 font-display text-2xl md:text-3xl font-bold text-secondary leading-tight">
                {product.name}
              </h1>

              <div className="mt-3 flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Stars rating={rating} />
                  <span className="text-sm font-semibold text-secondary">{rating}.0</span>
                </div>
                <span className="h-4 w-px bg-border" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-secondary">{reviewCount}</span> đánh giá
                </span>
              </div>

              {/* Price */}
              <div className="mt-5 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-5">
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
              </div>

              {/* Meta */}
              <ul className="mt-5 space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-muted-foreground w-32 shrink-0">Hãng sản xuất:</span>
                  <span className="font-semibold text-secondary">{product.brand || "Đang cập nhật"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground w-32 shrink-0">Xuất xứ:</span>
                  <span className="font-semibold text-secondary">{product.origin || "Đang cập nhật"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground w-32 shrink-0">Tình trạng:</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                    <Check className="h-4 w-4" /> Còn hàng
                  </span>
                </li>
              </ul>

              {/* Cta Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleBuyNow}
                  className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase text-white hover:bg-highlight hover:text-secondary transition-colors"
                >
                  <ShoppingCart className="h-4 w-4" /> Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-12">
        <div className="container-prose">
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <div className="flex border-b border-border overflow-x-auto">
              {[
                { id: "specs", label: "Thông số chi tiết" },
                { id: "accessories", label: "Phụ kiện" },
                { id: "warranty", label: "Bảo hành" },
                { id: "reviews", label: `Đánh giá (${reviewCount})` },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id as typeof tab)}
                  className={`relative px-5 py-4 text-sm font-bold uppercase transition-colors ${
                    tab === t.id ? "text-primary" : "text-muted-foreground hover:text-secondary"
                  }`}
                >
                  {t.label}
                  {tab === t.id && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
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
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ==========================================
// CÁC COMPONENT TAB ĐÃ ĐƯỢC BẢO VỆ DỮ LIỆU
// ==========================================

function SpecsTab({ product }: { product: Product }) {
  const features = Array.isArray(product.features) ? product.features : [];
  const specs = Array.isArray(product.specs) ? product.specs : [];

  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-secondary mb-4">Thông tin sản phẩm</h2>
      <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
        {product.description || "Nội dung đang được cập nhật..."}
      </p>

      {features.length > 0 && (
        <div className="mt-6">
          <h3 className="font-display text-base font-bold text-secondary mb-3">Đặc điểm nổi bật</h3>
          <ul className="grid sm:grid-cols-2 gap-2">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}
              </li>
            ))}
          </ul>
        </div>
      )}

      {specs.length > 0 && (
        <div className="mt-8">
          <h3 className="font-display text-base font-bold text-secondary mb-3">Thông số kỹ thuật</h3>
          <table className="w-full text-sm border border-border">
            <tbody>
              {specs.map((s, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-neutral" : "bg-white"}>
                  <td className="px-4 py-3 font-semibold text-muted-foreground border-r border-border">{s.label}</td>
                  <td className="px-4 py-3 font-semibold text-secondary">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function AccessoriesTab({ product }: { product: Product }) {
  const accessories = Array.isArray(product.accessories) ? product.accessories : [];
  
  if (accessories.length === 0) {
    return <p className="text-muted-foreground italic">Chưa có thông tin phụ kiện đi kèm.</p>;
  }

  return (
    <ul className="grid sm:grid-cols-2 gap-3">
      {accessories.map((a, i) => (
        <li key={i} className="flex items-center gap-3 rounded-lg border border-border bg-neutral p-4">
          <Package className="h-5 w-5 text-primary" />
          <div>
            <div className="text-sm font-semibold text-secondary">{a.name}</div>
            <div className="text-xs text-muted-foreground mt-0.5">Số lượng: {a.qty}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function WarrantyTab({ product }: { product: Product }) {
  const warranty = Array.isArray(product.warranty) ? product.warranty : [];
  
  if (warranty.length === 0) {
    return <p className="text-muted-foreground italic">Vui lòng liên hệ để biết chi tiết bảo hành.</p>;
  }

  return (
    <ul className="space-y-3">
      {warranty.map((w, i) => (
        <li key={i} className="flex items-start gap-4 rounded-lg border-l-4 border-primary bg-neutral p-4">
          <Shield className="h-5 w-5 shrink-0 text-primary mt-0.5" />
          <span className="text-sm text-secondary font-medium">{w}</span>
        </li>
      ))}
    </ul>
  );
}

function ReviewsTab({ product }: { product: Product }) {
  const reviews = Array.isArray(product.reviews) ? product.reviews : [];

  if (reviews.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground mb-4">Chưa có đánh giá nào cho sản phẩm này.</p>
        <button className="rounded-md bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-highlight">
          Trở thành người đầu tiên đánh giá
        </button>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {reviews.map((r, i) => (
        <li key={i} className="rounded-xl border border-border bg-neutral p-5">
          <div className="font-bold text-secondary">{r.name}</div>
          <Stars rating={r.rating} />
          <p className="mt-3 text-sm">{r.comment}</p>
        </li>
      ))}
    </ul>
  );
}