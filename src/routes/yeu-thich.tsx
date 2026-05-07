import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ShoppingCart, Trash2, ChevronRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useFavorites } from "@/lib/favorites";
import { products } from "@/data/products";
import { useCart, parsePrice } from "@/lib/cart";

export const Route = createFileRoute("/yeu-thich")({
  head: () => ({
    meta: [
      { title: "Sản phẩm yêu thích — Vimet" },
      { name: "description", content: "Danh sách sản phẩm bạn đã đánh dấu yêu thích tại Vimet." },
      { property: "og:title", content: "Sản phẩm yêu thích — Vimet" },
      { property: "og:description", content: "Danh sách sản phẩm bạn đã đánh dấu yêu thích." },
    ],
  }),
  component: FavoritesPage,
});

function FavoritesPage() {
  const { favorites, toggle } = useFavorites();
  const { addItem } = useCart();
  const items = products.filter((p) => favorites.includes(p.slug));

  return (
    <div className="min-h-screen bg-neutral flex flex-col">
      <Header />

      <div className="bg-white border-b border-border">
        <div className="container-prose py-3 flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">
            Trang chủ
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-secondary font-semibold">Sản phẩm yêu thích</span>
        </div>
      </div>

      <section className="flex-1 py-8 md:py-12">
        <div className="container-prose">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Heart className="h-5 w-5 fill-current" />
            </span>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-secondary">
                Sản phẩm yêu thích
              </h1>
              <p className="text-sm text-muted-foreground">
                {items.length > 0
                  ? `Bạn có ${items.length} sản phẩm đã đánh dấu yêu thích.`
                  : "Bạn chưa có sản phẩm yêu thích nào."}
              </p>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="bg-white rounded-2xl border border-border p-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Heart className="h-7 w-7" />
              </div>
              <h2 className="font-display text-lg font-bold text-secondary">
                Danh sách yêu thích đang trống
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Bấm vào biểu tượng trái tim trên trang sản phẩm để lưu lại những thiết bị bạn quan tâm.
              </p>
              <Link
                to="/danh-muc"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-highlight hover:text-secondary transition-colors"
              >
                Khám phá sản phẩm
              </Link>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <article
                  key={p.slug}
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
                      className="h-full w-full object-contain object-center p-0 md:p-1 transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {p.badge}
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
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="font-display text-lg font-bold text-primary">{p.price}</span>
                      {p.oldPrice && (
                        <span className="text-xs text-muted-foreground line-through">
                          {p.oldPrice}
                        </span>
                      )}
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() =>
                          addItem({
                            slug: p.slug,
                            name: p.name,
                            code: p.code,
                            img: p.img,
                            price: parsePrice(p.price),
                            priceLabel: p.price,
                          })
                        }
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2.5 text-xs font-semibold text-white hover:bg-highlight hover:text-secondary transition-colors"
                      >
                        <ShoppingCart className="h-3.5 w-3.5" />
                        Đặt mua
                      </button>
                      <button
                        onClick={() => toggle(p.slug, p.name)}
                        aria-label="Bỏ khỏi yêu thích"
                        className="rounded-md border border-border px-3 py-2.5 text-secondary hover:border-primary hover:text-primary transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
