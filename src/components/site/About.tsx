const stats = [
  { value: "15+", label: "Năm kinh nghiệm" },
  { value: "3.500+", label: "Khách hàng gara" },
  { value: "2.000+", label: "Mã sản phẩm" },
  { value: "63/63", label: "Tỉnh thành phủ sóng" },
];

export function About() {
  return (
    <section id="about" className="relative bg-secondary text-secondary-foreground py-20 overflow-hidden">
      <div className="absolute top-0 left-0 h-1 w-full bg-primary" />
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container-prose relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Về Vimet Corp
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Đối tác tin cậy của ngành dịch vụ ô tô Việt Nam
          </h2>
          <div className="mt-6 space-y-4 text-white/70 leading-relaxed">
            <p>
              Thành lập năm 2008, Công ty Cổ phần Vimet là nhà nhập khẩu và phân
              phối thiết bị kỹ thuật ô tô chuyên nghiệp. Chúng tôi hợp tác trực
              tiếp với các thương hiệu hàng đầu thế giới như BendPak, Launch,
              Corghi, Fusheng, Hunter… mang đến giải pháp trọn gói cho mọi quy mô
              xưởng dịch vụ.
            </p>
            <p>
              Đội ngũ kỹ sư Vimet có hơn 15 năm kinh nghiệm, sẵn sàng tư vấn
              layout gara, lắp đặt thiết bị tận nơi, đào tạo vận hành và bảo
              hành dài hạn — giúp khách hàng yên tâm đầu tư và tối ưu vận hành.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/lien-he"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-highlight hover:text-secondary transition-colors"
            >
              Nhận tư vấn miễn phí
            </a>
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-secondary transition-colors"
            >
              Tải Catalog 2025
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative bg-secondary p-8 transition-colors hover:bg-primary/20 group"
            >
              <div className="font-display text-4xl font-bold text-primary md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-white/70">{s.label}</div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
