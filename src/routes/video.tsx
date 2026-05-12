import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PlayCircle, MonitorPlay, Search, ExternalLink, X, Youtube } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { videos, type VideoItem } from "@/data/videos";

const videoBrands: string[] = ["Tất cả", ...Array.from(new Set(videos.map((v) => v.brand)))];

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      { title: "Video hướng dẫn & sản phẩm — Vimet" },
      {
        name: "description",
        content:
          "Thư viện video Vimet: hướng dẫn sử dụng, review dụng cụ cầm tay TOPTUL, GESIPA, thiết bị ô tô Robinair. Xem trực tiếp ngay trên web.",
      },
    ],
  }),
  component: VideoPage,
});

function VideoPage() {
  const [brand, setBrand] = useState<string>("Tất cả");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<VideoItem | null>(null);

  const filtered = useMemo(() => {
    return videos.filter((v) => {
      const okBrand = brand === "Tất cả" || v.brand === brand;
      const okQuery =
        query.trim() === "" ||
        v.title.toLowerCase().includes(query.trim().toLowerCase());
      return okBrand && okQuery;
    });
  }, [brand, query]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-r from-secondary to-primary-dark text-white">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 0, transparent 45%)",
            }}
          />
          <div className="container-prose relative py-12 md:py-16">
            <nav className="mb-3 flex items-center gap-2 text-xs text-white/80">
              <Link to="/" className="transition-colors hover:text-highlight">
                Trang chủ
              </Link>
              <span>/</span>
              <span className="font-semibold text-white">Video</span>
            </nav>

            <div className="flex items-center gap-2 text-highlight">
              <MonitorPlay className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Thư viện video
              </span>
            </div>

            <h1 className="mt-3 font-display text-3xl font-bold md:text-5xl">
              Video hướng dẫn & sản phẩm Vimet
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-white/90 md:text-base">
              Tổng hợp video giới thiệu, hướng dẫn sử dụng dụng cụ cầm tay TOPTUL,
              GESIPA, thiết bị Robinair... Bấm vào video để xem trực tiếp ngay
              trên trang.
            </p>
          </div>
        </section>

        {/* Filter bar */}
        <section className="border-b border-border bg-white">
          <div className="container-prose py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {videoBrands.map((b) => (
                <button
                  key={b}
                  onClick={() => setBrand(b)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    brand === b
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-white text-secondary hover:border-primary hover:text-primary"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm video..."
                className="h-10 w-full rounded-full border border-border bg-white pl-9 pr-4 text-sm text-secondary outline-none transition-colors focus:border-primary"
              />
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="container-prose py-10 md:py-14">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-card py-20 text-center">
              <p className="text-sm text-muted-foreground">
                Không tìm thấy video phù hợp.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((v) => (
                <article
                  key={v.slug}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
                >
                  <button
                    type="button"
                    onClick={() => setActive(v)}
                    className="block w-full text-left"
                  >
                    <div className="relative aspect-video overflow-hidden bg-neutral">
                      <img
                        src={v.thumbnail}
                        alt={v.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/75 via-secondary/10 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary">
                        {v.brand}
                      </span>
                      <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#FF0000]/90 px-2.5 py-1 text-[10px] font-bold text-white">
                        <Youtube className="h-3 w-3" />
                        YouTube
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex items-center justify-center rounded-full bg-primary p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <PlayCircle className="h-7 w-7" />
                        </span>
                      </div>
                    </div>
                  </button>

                  <div className="p-5">
                    <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-primary">
                      {v.category}
                    </div>
                    <h2 className="line-clamp-2 font-display text-base font-bold text-secondary">
                      {v.title}
                    </h2>
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActive(v)}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-dark"
                      >
                        <PlayCircle className="h-3.5 w-3.5" />
                        Xem ngay
                      </button>
                      <a
                        href={v.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground hover:text-primary"
                      >
                        Nguồn <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />

      {/* Player Dialog */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl border-0 bg-secondary p-0 [&>button]:hidden">
          <DialogTitle className="sr-only">{active?.title ?? "Video"}</DialogTitle>
          {active && (
            <div className="relative">
              <button
                onClick={() => setActive(null)}
                aria-label="Đóng"
                className="absolute -top-3 -right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-secondary shadow-lg hover:bg-primary hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="p-5 text-white">
                <div className="text-[11px] font-bold uppercase tracking-wider text-highlight">
                  {active.brand} • {active.category}
                </div>
                <h3 className="mt-1 font-display text-lg font-bold">{active.title}</h3>
                <a
                  href={active.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-highlight"
                >
                  Xem bài viết gốc <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
