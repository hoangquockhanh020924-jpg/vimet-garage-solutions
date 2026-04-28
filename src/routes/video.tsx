import { createFileRoute, Link } from "@tanstack/react-router";
import { PlayCircle, Clock3, MonitorPlay } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

type VideoItem = {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
};

const videos: VideoItem[] = [
  {
    id: "lap-dat-cau-nang-2-tru",
    title: "Hướng dẫn lắp đặt cầu nâng 2 trụ cho gara mới",
    category: "Lắp đặt",
    duration: "08:24",
    thumbnail: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/",
  },
  {
    id: "review-may-chan-doan",
    title: "Review máy chẩn đoán đa hãng cho xưởng dịch vụ",
    category: "Sản phẩm",
    duration: "06:12",
    thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/",
  },
  {
    id: "bo-tri-layout-gara",
    title: "Tối ưu layout gara 200m2 theo quy trình vận hành",
    category: "Tư vấn",
    duration: "10:05",
    thumbnail: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/",
  },
  {
    id: "bao-duong-thiet-bi",
    title: "Checklist bảo dưỡng định kỳ thiết bị gara",
    category: "Bảo dưỡng",
    duration: "05:47",
    thumbnail: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/",
  },
  {
    id: "kinh-nghiem-mo-gara",
    title: "5 kinh nghiệm mở gara cho người mới bắt đầu",
    category: "Kinh nghiệm",
    duration: "07:39",
    thumbnail: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7fc?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/",
  },
  {
    id: "demo-ra-vao-lop",
    title: "Demo vận hành máy ra vào lốp tự động",
    category: "Demo",
    duration: "04:58",
    thumbnail: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/",
  },
];

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      { title: "Video - Vimet" },
      {
        name: "description",
        content:
          "Thư viện video Vimet về lắp đặt, vận hành và bảo dưỡng thiết bị gara ô tô. Xem hướng dẫn nhanh và case thực tế.",
      },
    ],
  }),
  component: VideoPage,
});

function VideoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-r from-secondary to-primary-dark text-white">
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 0, transparent 45%)" }} />
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
              <span className="text-xs font-bold uppercase tracking-wider">Thư viện media</span>
            </div>

            <h1 className="mt-3 font-display text-3xl font-bold md:text-5xl">Video hướng dẫn và case thực tế</h1>
            <p className="mt-3 max-w-3xl text-sm text-white/90 md:text-base">
              Tổng hợp video lắp đặt, review sản phẩm và kinh nghiệm vận hành gara để đội ngũ kỹ thuật
              và chủ xưởng có thể áp dụng ngay.
            </p>
          </div>
        </section>

        <section className="container-prose py-10 md:py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/75 via-secondary/10 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary">
                      {item.category}
                    </span>
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-secondary/80 px-2.5 py-1 text-[10px] font-bold text-white">
                      <Clock3 className="h-3 w-3" />
                      {item.duration}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-primary p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <PlayCircle className="h-6 w-6" />
                      </span>
                    </div>
                  </div>
                </a>

                <div className="p-5">
                  <h2 className="line-clamp-2 font-display text-lg font-bold text-secondary">{item.title}</h2>
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider text-secondary transition-colors hover:border-highlight hover:bg-highlight"
                  >
                    Xem video
                    <PlayCircle className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
