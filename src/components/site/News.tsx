import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { newsArticles } from "@/data/news";

export function News() {
  return (
    <section id="news" className="bg-white py-20">
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Tin tức & bài viết
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-secondary md:text-4xl">
              Kiến thức chuyên ngành & cập nhật mới
            </h2>
          </div>
          <Link
            to="/tin-tuc"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
          >
            Xem tất cả bài viết <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {newsArticles.slice(0, 3).map((article) => (
            <a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl border border-border bg-white transition-all hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-md bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {article.date}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-secondary group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Đọc tiếp <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
