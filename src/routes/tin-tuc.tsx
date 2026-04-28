import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowRight, Filter, Newspaper } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { newsArticles, newsCategories } from "@/data/news";

export const Route = createFileRoute("/tin-tuc")({
  head: () => ({
    meta: [
      { title: "Tin tức - Vimet" },
      {
        name: "description",
        content:
          "Tổng hợp tin tức, bài viết kỹ thuật và cập nhật sản phẩm từ Vimet Corp, lấy dữ liệu từ trang tin tức chính thức.",
      },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-border bg-secondary text-white">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at top left, rgba(255,255,255,0.35) 0, transparent 40%), radial-gradient(circle at right center, rgba(255,255,255,0.2) 0, transparent 34%)",
            }}
          />
          <div className="container-prose relative py-12 md:py-16">
            <nav className="mb-3 flex items-center gap-2 text-xs text-white/80">
              <Link to="/" className="transition-colors hover:text-highlight">
                Trang chủ
              </Link>
              <span>/</span>
              <span className="font-semibold text-white">Tin tức</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-highlight backdrop-blur">
              <Newspaper className="h-3.5 w-3.5" />
              Cập nhật từ Vimet Corp
            </div>

            <h1 className="mt-4 font-display text-3xl font-bold md:text-5xl">Tin tức, kỹ thuật và cập nhật sản phẩm</h1>
            <p className="mt-3 max-w-3xl text-sm text-white/85 md:text-base">
              Trang tổng hợp các bài viết nổi bật về cầu nâng, máy nén khí, thiết bị gara và kinh nghiệm
              vận hành lấy từ chuyên mục tin tức chính thức của Vimet.
            </p>
          </div>
        </section>

        <section className="container-prose py-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-secondary">
                <Filter className="h-4 w-4 text-primary" />
                Danh mục phổ biến
              </div>
              <div className="flex flex-wrap gap-2">
                {newsCategories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-secondary"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {newsArticles.map((article) => (
                  <article
                    key={article.title}
                    className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
                  >
                    <a href={article.href} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                          {article.category}
                        </span>
                      </div>
                    </a>

                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {article.date}
                      </div>
                      <h2 className="mt-3 line-clamp-2 font-display text-lg font-bold text-secondary group-hover:text-primary">
                        {article.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
                      <a
                        href={article.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
                      >
                        Xem bài gốc <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="space-y-4 rounded-2xl border border-border bg-card p-5 shadow-card h-fit">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Tin hot</div>
              <div className="space-y-4">
                {newsArticles.slice(0, 4).map((article) => (
                  <a
                    key={article.title}
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-3"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-border bg-neutral">
                      <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-primary">{article.category}</div>
                      <p className="line-clamp-2 text-sm font-semibold text-secondary group-hover:text-primary">
                        {article.title}
                      </p>
                      <div className="mt-1 text-xs text-muted-foreground">{article.date}</div>
                    </div>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
