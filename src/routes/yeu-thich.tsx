import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ChevronRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { useFavorites } from "@/lib/favorites";
import { products } from "@/data/products";

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
  const { favorites } = useFavorites();
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
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((p) => (
                <ProductCard key={p.slug} p={p} removable />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
