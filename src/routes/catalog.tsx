import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, FileText, Eye, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { categoryList } from "@/data/categories";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Catalog sản phẩm — Vimet" },
      {
        name: "description",
        content:
          "Tải về catalog sản phẩm thiết bị gara ô tô của Vimet: cầu nâng, máy chẩn đoán, máy ra vào lốp, máy nén khí và nhiều thiết bị chuyên dụng khác.",
      },
      { property: "og:title", content: "Catalog sản phẩm — Vimet" },
      {
        property: "og:description",
        content:
          "Tải về catalog đầy đủ các dòng sản phẩm Vimet: cầu nâng, máy chẩn đoán, máy ra vào lốp, máy nén khí…",
      },
    ],
  }),
  component: CatalogPage,
});

type CatalogItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  pages: number;
  size: string;
  year: string;
  cover: string;
  fileUrl: string;
};

const catalogItems: CatalogItem[] = [
  {
    id: "vimet-tong-hop-2025",
    title: "Catalog tổng hợp Vimet 2025",
    description:
      "Tổng hợp toàn bộ dòng thiết bị gara, cầu nâng, máy chẩn đoán, máy ra vào lốp, máy nén khí và phụ trợ.",
    category: "Tổng hợp",
    pages: 124,
    size: "18.4 MB",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    fileUrl: "#",
  },
  {
    id: "cau-nang-o-to",
    title: "Catalog cầu nâng ô tô",
    description:
      "Đầy đủ các dòng cầu nâng 2 trụ, 4 trụ, cắt kéo, 1 trụ rửa xe — tải trọng từ 3.5T đến 7T.",
    category: "Cầu nâng",
    pages: 42,
    size: "8.1 MB",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7fc?w=800&q=80",
    fileUrl: "#",
  },
  {
    id: "may-chan-doan",
    title: "Catalog máy chẩn đoán",
    description:
      "Máy đọc lỗi đa năng, scan OBD chuyên sâu — Launch, Autel, Bosch, G-Scan, Thinkcar.",
    category: "Chẩn đoán",
    pages: 36,
    size: "6.7 MB",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    fileUrl: "#",
  },
  {
    id: "may-ra-vao-lop",
    title: "Catalog máy ra vào lốp & cân bằng động",
    description:
      "Máy tháo lắp lốp tự động, bán tự động, máy cân bằng động cảm ứng 3D, dòng xe tải.",
    category: "Lốp xe",
    pages: 28,
    size: "5.2 MB",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1600880292210-859ad14d3387?w=800&q=80",
    fileUrl: "#",
  },
  {
    id: "may-nen-khi",
    title: "Catalog máy nén khí công nghiệp",
    description:
      "Dòng máy nén piston, trục vít công suất 2HP — 50HP, kèm máy sấy khí và bình chứa.",
    category: "Khí nén",
    pages: 24,
    size: "4.6 MB",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
    fileUrl: "#",
  },
  {
    id: "dung-cu-phu-tung",
    title: "Catalog dụng cụ & phụ tùng gara",
    description:
      "Tủ đồ nghề, súng vặn ốc khí nén, cờ lê lực, dầu nhớt, lọc gió, má phanh OEM chính hãng.",
    category: "Dụng cụ",
    pages: 56,
    size: "9.8 MB",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    fileUrl: "#",
  },
];

const categoryFilters = ["Tất cả", ...Array.from(new Set(catalogItems.map((c) => c.category)))];

function CatalogPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Tất cả");

  const filtered = useMemo(() => {
    return catalogItems.filter((c) => {
      const matchCat = filter === "Tất cả" || c.category === filter;
      const matchQuery =
        !query.trim() ||
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 14px)",
            }}
          />
          <div className="container-prose relative py-16 md:py-20">
            <nav className="mb-4 flex items-center gap-2 text-xs text-white/80">
              <Link to="/" className="transition-colors hover:text-highlight">
                Trang chủ
              </Link>
              <span>/</span>
              <span className="font-semibold text-white">Catalog</span>
            </nav>

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-highlight backdrop-blur">
                  <FileText className="h-3.5 w-3.5" />
                  Tài liệu sản phẩm
                </span>
                <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">
                  Catalog sản phẩm Vimet
                </h1>
                <p className="mt-4 text-base md:text-lg text-white/90 leading-relaxed">
                  Tải về catalog đầy đủ các dòng thiết bị gara ô tô — cầu nâng, máy chẩn đoán,
                  máy ra vào lốp, máy nén khí và nhiều thiết bị chuyên dụng khác.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center md:text-left">
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  <div className="font-display text-2xl font-bold text-highlight">{catalogItems.length}</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/80">Catalog</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  <div className="font-display text-2xl font-bold text-highlight">{categoryList.length}+</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/80">Danh mục</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  <div className="font-display text-2xl font-bold text-highlight">PDF</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/80">Định dạng</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & search */}
        <section className="border-b border-border bg-neutral">
          <div className="container-prose flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categoryFilters.map((cat) => {
                const active = filter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                      active
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-white text-secondary hover:border-highlight hover:bg-highlight hover:text-secondary"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm catalog..."
                className="w-full rounded-full border-2 border-primary/15 bg-white pl-10 pr-4 py-2 text-sm focus:border-highlight focus:outline-none focus:ring-4 focus:ring-highlight/25"
              />
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="container-prose py-12 md:py-16">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-neutral py-16 text-center">
              <FileText className="mx-auto h-10 w-10 text-muted-foreground" />
              <p className="mt-3 text-sm text-muted-foreground">
                Không tìm thấy catalog phù hợp.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <article
                  key={item.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated hover:border-highlight"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-secondary/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                      {item.category}
                    </span>
                    <span className="absolute right-3 top-3 rounded-full bg-highlight px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary">
                      {item.year}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold text-secondary transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <FileText className="h-3.5 w-3.5" />
                        {item.pages} trang
                      </span>
                      <span className="h-3 w-px bg-border" />
                      <span>{item.size}</span>
                    </div>

                    <div className="mt-5 flex gap-2">
                      <a
                        href={item.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-highlight hover:text-secondary"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Tải về
                      </a>
                      <a
                        href={item.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-semibold text-secondary transition-colors hover:border-highlight hover:bg-highlight hover:text-secondary"
                        aria-label="Xem trước"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        Xem
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="bg-neutral border-t border-border">
          <div className="container-prose py-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary">
              Cần tư vấn báo giá chi tiết?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Đội ngũ kỹ thuật Vimet sẵn sàng hỗ trợ bạn lựa chọn thiết bị phù hợp và gửi báo giá riêng theo nhu cầu.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="tel:19001234"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-highlight hover:text-secondary"
              >
                Gọi 028 388 88 388
              </a>
              <Link
                to="/danh-muc"
                className="inline-flex items-center gap-2 rounded-full border-2 border-secondary px-6 py-3 text-sm font-bold uppercase tracking-wider text-secondary transition-colors hover:border-highlight hover:bg-highlight"
              >
                Xem sản phẩm
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
