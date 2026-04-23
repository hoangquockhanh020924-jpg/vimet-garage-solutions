const brands = [
  "BENDPAK", "LAUNCH", "CORGHI", "FUSHENG", "HUNTER",
  "BOSCH", "SNAP-ON", "ATLAS", "RAVAGLIOLI", "HOFMANN",
];

export function Brands() {
  return (
    <section id="brands" className="bg-white py-16 border-y border-border">
      <div className="container-prose">
        <div className="text-center mb-10">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Đối tác & thương hiệu
          </div>
          <h2 className="mt-2 font-display text-2xl font-bold text-secondary md:text-3xl">
            Nhà phân phối ủy quyền của các thương hiệu hàng đầu thế giới
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-5">
          {brands.map((b) => (
            <div
              key={b}
              className="flex h-24 items-center justify-center bg-white text-muted-foreground font-display text-lg font-bold tracking-widest transition-all hover:text-primary hover:bg-neutral"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
