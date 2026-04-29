import { ArrowRight, Calendar, Clock, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { newsArticles } from "@/data/news";

export function News() {
  const featured = newsArticles.find((a) => a.featured) ?? newsArticles[0];
  const others = newsArticles.filter((a) => a.slug !== featured.slug).slice(0, 4);

  return (
    <section id="news" className="bg-white py-20">
      <div className="container-prose">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <TrendingUp className="h-3.5 w-3.5" /> Tin tức & bài viết
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-secondary md:text-4xl">
              Kiến thức chuyên ngành & cập nhật mới
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Bài viết chuyên sâu về thiết bị gara, kinh nghiệm vận hành và xu hướng ngành ô tô do
              đội ngũ kỹ thuật Vimet biên soạn.
            </p>
          </div>
          <Link
            to="/tin-tuc"
            className="inline-flex items-center gap-1.5 self-start rounded-full border-2 border-primary px-4 py-2 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Xem tất cả bài viết <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Featured */}
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated lg:col-span-3"
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/20 to-transparent" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
                <Sparkles className="h-3 w-3" /> Featured
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs text-white/90">
                  <span className="rounded-full bg-white/15 px-2.5 py-1 font-semibold backdrop-blur">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {featured.readMinutes} phút
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug text-white md:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-2 line-clamp-2 max-w-2xl text-sm text-white/80">
                  {featured.excerpt}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-highlight">
                  Đọc bài viết{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </a>

          {/* Side list */}
          <div className="grid gap-4 lg:col-span-2">
            {others.map((article) => (
              <a
                key={article.slug}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 overflow-hidden rounded-xl border border-border bg-card p-3 transition-all hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-lg bg-neutral">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-primary">
                    {article.category}
                  </div>
                  <h4 className="mt-1.5 line-clamp-2 font-display text-sm font-bold leading-snug text-secondary group-hover:text-primary">
                    {article.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-muted-foreground">
                    <Calendar className="h-3 w-3" /> {article.date}
                    <span>·</span>
                    <Clock className="h-3 w-3" /> {article.readMinutes}'
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
