import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  ArrowRight,
  Newspaper,
  Search,
  Clock,
  User,
  TrendingUp,
  Tag,
  Mail,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { newsArticles, newsCategories, type NewsArticle } from "@/data/news";

export const Route = createFileRoute("/tin-tuc")({
  head: () => ({
    meta: [
      { title: "Tin tức kỹ thuật & cập nhật sản phẩm | Vimet" },
      {
        name: "description",
        content:
          "Tin tức, kiến thức kỹ thuật và cập nhật sản phẩm thiết bị gara ô tô từ Vimet Corp: cầu nâng, máy nén khí, máy ra vào lốp, dụng cụ chuyên ngành.",
      },
      { property: "og:title", content: "Tin tức kỹ thuật & cập nhật sản phẩm | Vimet" },
      {
        property: "og:description",
        content:
          "Bài viết chuyên sâu về thiết bị gara ô tô, kinh nghiệm vận hành và xu hướng ngành.",
      },
    ],
  }),
  component: NewsPage,
});

const PAGE_SIZE = 6;

function NewsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("Tất cả");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const featured = useMemo(
    () => newsArticles.find((a) => a.featured) ?? newsArticles[0],
    [],
  );

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return newsArticles
      .filter((a) => a.slug !== featured.slug)
      .filter((a) => (category === "Tất cả" ? true : a.category === category))
      .filter((a) =>
        !term
          ? true
          : a.title.toLowerCase().includes(term) ||
            a.excerpt.toLowerCase().includes(term) ||
            a.tags?.some((t) => t.toLowerCase().includes(term)),
      )
      .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  }, [query, category, featured.slug]);

  const visibleArticles = filtered.slice(0, visible);
  const trending = useMemo(
    () => [...newsArticles].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1)).slice(0, 4),
    [],
  );

  const allTags = useMemo(() => {
    const set = new Set<string>();
    newsArticles.forEach((a) => a.tags?.forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  const counts = useMemo(() => {
    const map: Record<string, number> = { "Tất cả": newsArticles.length };
    newsArticles.forEach((a) => {
      map[a.category] = (map[a.category] ?? 0) + 1;
    });
    return map;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border bg-secondary text-white">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, rgba(207,46,46,0.55) 0, transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.18) 0, transparent 40%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
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
              Vimet Insights
            </div>

            <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
              Tin tức, kiến thức & xu hướng <span className="text-highlight">thiết bị gara ô tô</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm text-white/85 md:text-base">
              Bài viết chuyên sâu, kinh nghiệm vận hành và cập nhật sản phẩm mới nhất từ đội ngũ kỹ
              thuật Vimet Corp – đối tác tin cậy của hơn 1.000 gara trên toàn quốc.
            </p>

            {/* Search bar */}
            <div className="mt-7 flex max-w-2xl items-center overflow-hidden rounded-full border border-white/15 bg-white/10 backdrop-blur transition-all focus-within:border-highlight focus-within:bg-white">
              <Search className="ml-4 h-4 w-4 text-white/70 transition-colors group-focus-within:text-secondary" />
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisible(PAGE_SIZE);
                }}
                type="search"
                placeholder="Tìm bài viết, chủ đề, từ khóa..."
                className="flex-1 bg-transparent px-3 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:text-secondary focus:placeholder:text-muted-foreground"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="mr-2 rounded-full px-3 py-1 text-xs text-white/70 hover:text-white"
                >
                  Xoá
                </button>
              )}
            </div>

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-highlight" />
                <span>{newsArticles.length}+ bài viết chuyên sâu</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-highlight" />
                <span>Cập nhật hàng tuần</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-highlight" />
                <span>{newsCategories.length - 1} chuyên mục</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        <section className="border-b border-border bg-white">
          <div className="container-prose py-10 md:py-14">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Bài viết nổi bật
                </div>
                <h2 className="mt-2 font-display text-2xl font-bold text-secondary md:text-3xl">
                  Đọc nhiều nhất tuần này
                </h2>
              </div>
            </div>

            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
                  <Sparkles className="h-3 w-3" /> Featured
                </span>
              </div>
              <div className="flex flex-col justify-center p-7 md:p-10">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral px-2.5 py-1 font-semibold text-primary">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {featured.readMinutes} phút đọc
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold leading-snug text-secondary transition-colors group-hover:text-primary md:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-semibold text-secondary">{featured.author}</div>
                      <div className="text-muted-foreground">Tác giả</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                    Đọc bài <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* LISTING + SIDEBAR */}
        <section className="container-prose py-12 md:py-16">
          {/* Category tabs */}
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {newsCategories.map((cat) => {
              const active = cat === category;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setVisible(PAGE_SIZE);
                  }}
                  className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                    active
                      ? "border-primary bg-primary text-primary-foreground shadow-card"
                      : "border-border bg-card text-secondary hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                      active ? "bg-white/25 text-white" : "bg-neutral text-muted-foreground"
                    }`}
                  >
                    {counts[cat] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            {/* Articles grid */}
            <div>
              <div className="mb-5 flex items-center justify-between text-sm">
                <p className="text-muted-foreground">
                  Hiển thị{" "}
                  <span className="font-semibold text-secondary">{visibleArticles.length}</span>{" "}
                  trên <span className="font-semibold text-secondary">{filtered.length}</span> bài
                  viết
                  {category !== "Tất cả" && (
                    <>
                      {" "}
                      trong <span className="font-semibold text-primary">{category}</span>
                    </>
                  )}
                </p>
              </div>

              {visibleArticles.length === 0 ? (
                <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
                  <Search className="mx-auto h-10 w-10 text-muted-foreground" />
                  <p className="mt-4 font-semibold text-secondary">Không tìm thấy bài viết</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thử từ khoá khác hoặc chọn lại danh mục.
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2">
                  {visibleArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              )}

              {visible < filtered.length && (
                <div className="mt-10 text-center">
                  <button
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-7 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    Xem thêm bài viết <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Trending */}
              <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="mb-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-secondary">
                    Tin xu hướng
                  </h3>
                </div>
                <ol className="space-y-4">
                  {trending.map((article, i) => (
                    <li key={article.slug}>
                      <a
                        href={article.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-3"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral font-display text-sm font-bold text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0">
                          <p className="line-clamp-2 text-sm font-semibold leading-snug text-secondary group-hover:text-primary">
                            {article.title}
                          </p>
                          <div className="mt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
                            <Calendar className="h-3 w-3" /> {article.date}
                            <span>·</span>
                            <Clock className="h-3 w-3" /> {article.readMinutes}'
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tags */}
              <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="mb-3 flex items-center gap-2">
                  <Tag className="h-4 w-4 text-primary" />
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-secondary">
                    Chủ đề phổ biến
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setQuery(tag);
                        setVisible(PAGE_SIZE);
                      }}
                      className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-secondary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="overflow-hidden rounded-2xl border border-border bg-secondary p-6 text-white shadow-card">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-highlight">
                  <Mail className="h-4 w-4" /> Bản tin Vimet
                </div>
                <p className="mt-3 font-display text-lg font-bold leading-snug">
                  Nhận bài viết kỹ thuật mới nhất qua email
                </p>
                <p className="mt-1 text-xs text-white/75">
                  1 email/tuần. Không spam, huỷ đăng ký bất cứ lúc nào.
                </p>
                <form
                  className="mt-4 space-y-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="Email của bạn"
                    className="w-full rounded-lg bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/55 outline-none ring-1 ring-white/15 focus:bg-white focus:text-secondary focus:ring-highlight"
                  />
                  <button className="w-full rounded-lg bg-highlight px-3 py-2.5 text-sm font-bold text-highlight-foreground transition-all hover:brightness-95">
                    Đăng ký nhận tin
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ArticleCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <a
        href={article.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow">
            {article.category}
          </span>
        </div>
      </a>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {article.date}
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {article.readMinutes} phút
          </span>
        </div>

        <a href={article.href} target="_blank" rel="noopener noreferrer">
          <h3 className="mt-3 line-clamp-2 font-display text-lg font-bold leading-snug text-secondary transition-colors group-hover:text-primary">
            {article.title}
          </h3>
        </a>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">{article.excerpt}</p>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-3.5 w-3.5" />
            </div>
            <span className="text-xs font-semibold text-secondary">{article.author}</span>
          </div>
          <a
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-primary transition-all hover:gap-2"
          >
            Đọc tiếp <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
