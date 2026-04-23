import { ShoppingCart, Eye } from "lucide-react";

const products = [
  {
    name: "Cầu nâng 2 trụ cổng trên Bendpak XPR-10A",
    code: "VMT-CN-2T10",
    spec: "Tải trọng 4.5T · Động cơ 220V · Nâng 1.9m",
    price: "89.500.000₫",
    oldPrice: "98.000.000₫",
    badge: "BÁN CHẠY",
    img: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7fa?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Máy chẩn đoán Launch X431 Pro5",
    code: "VMT-DG-X431P5",
    spec: "Đa hãng · WiFi · VCI không dây · Cập nhật online",
    price: "42.800.000₫",
    oldPrice: "45.000.000₫",
    badge: "-5%",
    img: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7d00?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Máy ra vào lốp tự động Corghi A2030",
    code: "VMT-RL-A2030",
    spec: "Phù hợp lốp 10-24 inch · Điện 3 pha · Tay tháo bằng khí",
    price: "64.200.000₫",
    oldPrice: null,
    badge: "MỚI",
    img: "https://images.unsplash.com/photo-1619221882220-947b3d3c8861?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Máy nén khí trục vít Fusheng SA-15A 15HP",
    code: "VMT-KN-SA15A",
    spec: "11kW · 1.7m³/min · Áp suất 8 bar · Tích hợp sấy khí",
    price: "78.900.000₫",
    oldPrice: "82.000.000₫",
    badge: "HOT",
    img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=70",
  },
];

export function Products() {
  return (
    <section className="bg-white py-20">
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Sản phẩm nổi bật
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-secondary md:text-4xl">
              Thiết bị được gara tin dùng nhất
            </h2>
          </div>
          <div className="flex gap-2">
            {["Tất cả", "Cầu nâng", "Chẩn đoán", "Máy nén khí"].map((t, i) => (
              <button
                key={t}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  i === 0
                    ? "bg-secondary text-secondary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.code}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  {p.badge}
                </span>
                <button
                  aria-label="Xem nhanh"
                  className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-secondary opacity-0 shadow-md transition-opacity group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Mã: {p.code}
                </div>
                <h3 className="mt-1.5 line-clamp-2 font-display text-base font-bold leading-snug text-secondary group-hover:text-primary transition-colors min-h-[2.75rem]">
                  {p.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.spec}</p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-lg font-bold text-primary">{p.price}</span>
                  {p.oldPrice && (
                    <span className="text-xs text-muted-foreground line-through">{p.oldPrice}</span>
                  )}
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-secondary px-3 py-2.5 text-xs font-semibold text-secondary-foreground hover:bg-primary transition-colors">
                    <ShoppingCart className="h-3.5 w-3.5" />
                    Đặt mua
                  </button>
                  <button className="rounded-md border border-border px-3 py-2.5 text-xs font-semibold text-secondary hover:border-primary hover:text-primary transition-colors">
                    Báo giá
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
