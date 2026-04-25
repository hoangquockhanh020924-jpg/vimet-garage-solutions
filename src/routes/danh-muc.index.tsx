import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { categoryList } from "@/data/categories";

export const Route = createFileRoute("/danh-muc/")({
  head: () => ({
    meta: [
      { title: "Danh mục sản phẩm — Vimet" },
      {
        name: "description",
        content:
          "Toàn bộ danh mục thiết bị gara ô tô tại Vimet: cầu nâng, máy chẩn đoán, máy ra vào lốp, máy nén khí, dụng cụ và phụ tùng.",
      },
      { property: "og:title", content: "Danh mục sản phẩm — Vimet" },
      {
        property: "og:description",
        content: "Hơn 2.000 mã thiết bị gara ô tô chính hãng, sẵn hàng, giao nhanh.",
      },
    ],
  }),
  component: CategoryIndexPage,
});

function CategoryIndexPage() {
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
          <span className="font-semibold text-secondary">Danh mục sản phẩm</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary-dark text-white py-14">
        <div className="container-prose">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-highlight">
            Toàn bộ danh mục
          </div>
          <h1 className="mt-3 font-display text-3xl md:text-4xl font-bold">
            Thiết bị & dụng cụ gara ô tô chuyên nghiệp
          </h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Hơn 2.000 mã sản phẩm thuộc 8 nhóm danh mục — chính hãng, sẵn kho,
            bảo hành dài hạn và hỗ trợ kỹ thuật 24/7.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14">
        <div className="container-prose">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryList.map((c) => (
              <Link
                key={c.slug}
                to="/danh-muc/$slug"
                params={{ slug: c.slug }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white transition-all hover:border-primary hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral">
                  <img
                    src={c.img}
                    alt={c.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow-sm">
                    {c.count}+ sản phẩm
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl font-bold text-white drop-shadow">
                      {c.label}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <p className="text-sm text-muted-foreground line-clamp-2 pr-3">
                    {c.desc}
                  </p>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
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
