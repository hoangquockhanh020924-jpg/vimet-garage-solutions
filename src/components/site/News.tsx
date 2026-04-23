import { Calendar, ArrowRight } from "lucide-react";

const articles = [
  {
    date: "18/04/2026",
    cat: "Kỹ thuật",
    title: "5 tiêu chí quan trọng khi chọn cầu nâng ô tô cho gara mới mở",
    excerpt:
      "Hướng dẫn chi tiết cách lựa chọn cầu nâng phù hợp theo loại xe, diện tích mặt bằng và ngân sách đầu tư.",
    img: "https://images.unsplash.com/photo-1625047509252-ab38fb5c7eae?auto=format&fit=crop&w=800&q=70",
  },
  {
    date: "09/04/2026",
    cat: "Sản phẩm",
    title: "Ra mắt máy chẩn đoán Launch X431 Pro5 — thế hệ mới 2026",
    excerpt:
      "Nâng cấp VCI không dây, cập nhật dữ liệu trực tuyến và hỗ trợ hơn 150 hãng xe toàn cầu.",
    img: "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?auto=format&fit=crop&w=800&q=70",
  },
  {
    date: "02/04/2026",
    cat: "Tin công ty",
    title: "Vimet khai trương showroom thiết bị gara tại Đà Nẵng",
    excerpt:
      "Không gian trưng bày 800m² với đầy đủ thiết bị vận hành thực tế, phục vụ khách hàng miền Trung.",
    img: "https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=800&q=70",
  },
];

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
          <a
            href="#news"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
          >
            Xem tất cả bài viết <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group overflow-hidden rounded-xl border border-border bg-white transition-all hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-md bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {a.cat}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {a.date}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-secondary group-hover:text-primary transition-colors line-clamp-2">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Đọc tiếp <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
