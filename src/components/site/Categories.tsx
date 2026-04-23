import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Cầu nâng ô tô",
    count: "45+ model",
    desc: "Cầu nâng 2 trụ, 4 trụ, cắt kéo từ 3.5T đến 7T",
    emoji: "🛠️",
  },
  {
    title: "Máy chẩn đoán",
    count: "30+ model",
    desc: "Máy đọc lỗi đa năng, thiết bị scan OBD chuyên sâu",
    emoji: "🔧",
  },
  {
    title: "Máy ra vào lốp",
    count: "20+ model",
    desc: "Máy tháo lắp lốp tự động, cân bằng động chính xác",
    emoji: "⚙️",
  },
  {
    title: "Dụng cụ gara",
    count: "500+ SP",
    desc: "Tủ đồ nghề, súng vặn ốc, cờ lê lực tiêu chuẩn",
    emoji: "🧰",
  },
  {
    title: "Máy nén khí",
    count: "35+ model",
    desc: "Máy nén piston, trục vít công suất 2HP - 50HP",
    emoji: "💨",
  },
  {
    title: "Phụ tùng & vật tư",
    count: "1000+ SP",
    desc: "Dầu nhớt, lọc gió, má phanh chính hãng OEM",
    emoji: "🔩",
  },
];

export function Categories() {
  return (
    <section id="products" className="bg-neutral py-20">
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Danh mục sản phẩm
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-secondary md:text-4xl">
              Đầy đủ thiết bị cho mọi quy mô gara
            </h2>
            <p className="mt-3 text-muted-foreground">
              Hơn 2.000 mã sản phẩm từ các thương hiệu uy tín — sẵn hàng, giao
              nhanh, hỗ trợ kỹ thuật 24/7.
            </p>
          </div>
          <a
            href="#products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
          >
            Xem toàn bộ danh mục <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <a
              key={c.title}
              href="#products"
              className="group relative overflow-hidden rounded-xl border border-border bg-white p-6 transition-all hover:border-primary hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="absolute top-0 right-0 h-16 w-16 diagonal-stripe opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/5 text-3xl ring-1 ring-primary/10 group-hover:bg-primary group-hover:ring-primary transition-colors">
                  <span className="group-hover:scale-110 transition-transform">{c.emoji}</span>
                </div>
                <span className="rounded-full bg-neutral px-2.5 py-1 text-[11px] font-semibold text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  {c.count}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                {c.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{c.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:text-primary transition-colors">
                Khám phá
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
