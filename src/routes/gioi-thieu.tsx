import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Award, ChevronLeft, ChevronRight, Clock3, Home, ShieldCheck } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { images } from "@/lib/images";

type Milestone = {
  year: string;
  title: string;
  paragraphs: string[];
  image: string;
};

const timeline: Milestone[] = [
  {
    year: "2007",
    title: "Khởi nguồn từ mô hình tiền thân CSC",
    paragraphs: [
      "Tiền thân là Công ty TNHH Thương mại & Dịch vụ Kỹ thuật CSC, hình thành nền tảng hoạt động trong lĩnh vực phân phối thiết bị kỹ thuật và dịch vụ hỗ trợ cho ngành sửa chữa - bảo dưỡng ô tô.",
      "Đặt những viên gạch đầu tiên cho hệ sinh thái sản phẩm và dịch vụ kỹ thuật chuyên sâu phục vụ thị trường Việt Nam.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/01/chung-nhan-thuong-hieu-2018.jpg",
  },
  {
    year: "2009",
    title: "Chuyển đổi mô hình, phát triển thương hiệu VIMET CORP",
    paragraphs: [
      "Mở rộng quy mô hoạt động, chuyển đổi mô hình và đổi tên thành Công ty CP Kỹ thuật Thiết bị Việt Mỹ (tên viết tắt: VIMET CORP).",
      "VIMET hoạt động trong các lĩnh vực: thiết bị ô tô, thiết bị rửa xe, thiết bị bôi trơn, thiết bị kiểm định, thiết bị garage, thiết bị dạy nghề, thiết bị công nghiệp & dụng cụ cầm tay…",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/01/sgs.jpg",
  },
  {
    year: "2012",
    title: "Mở rộng hệ sinh thái đối tác quốc tế",
    paragraphs: [
      "Trở thành nhà nhập khẩu và phân phối chính thức của nhiều thương hiệu thiết bị hàng đầu thế giới đến từ Mỹ, Ý, Nhật Bản, Đài Loan, Hàn Quốc.",
      "Tăng cường hợp tác trong mảng thiết bị garage, kiểm định và công nghiệp - khẳng định vị thế đối tác kỹ thuật uy tín tại Việt Nam.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/01/chung-nhan-thuong-hieu-2020.jpg",
  },
  {
    year: "2014",
    title: "Vimet Corp được Cục Sở hữu Trí tuệ cấp bằng nhãn hiệu HIDI",
    paragraphs: [
      "Vimet Corp chính thức được Cục Sở hữu Trí tuệ cấp bằng sáng chế thương hiệu HIDI - chuyên về thiết bị thủy lực & công cụ.",
      "Cung cấp dịch vụ thương mại về kỹ thuật và công nghệ: tư vấn, thiết kế, cung cấp thiết bị, lắp đặt chuyển giao công nghệ, dịch vụ sửa chữa, bảo hành - bảo trì dài hạn.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/01/chung-nhan-nhan-hieu.jpg",
  },
  {
    year: "2017",
    title: "Áp dụng hệ thống quản lý chất lượng ISO 9001:2015",
    paragraphs: [
      "Vimet Corp triển khai và đạt chứng nhận hệ thống quản lý chất lượng ISO 9001:2015 do tổ chức SGS đánh giá.",
      "Tiêu chuẩn hóa toàn bộ quy trình quản lý, vận hành và dịch vụ - nâng cao độ ổn định và hiệu quả phục vụ khách hàng trên toàn quốc.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/01/sgs.jpg",
  },
  {
    year: "2018",
    title: "Top 10 Thương hiệu mạnh - Sản phẩm chất lượng cao",
    paragraphs: [
      "Vimet Corp vinh dự nhận giải thưởng Top 10 Thương hiệu mạnh - Sản phẩm chất lượng cao do Hội Sở hữu Trí tuệ Việt Nam phối hợp tổ chức.",
      "Khẳng định uy tín thương hiệu và chất lượng sản phẩm trên thị trường thiết bị kỹ thuật Việt Nam.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/01/chung-nhan-thuong-hieu-2018.jpg",
  },
  {
    year: "2019",
    title: "Mở rộng năng lực triển khai dự án trên toàn quốc",
    paragraphs: [
      "Hoàn thiện đội ngũ kỹ sư triển khai - lắp đặt - bảo trì phủ sóng 63 tỉnh thành, đồng hành cùng hàng nghìn xưởng dịch vụ và nhà máy.",
      "Đưa vào vận hành kho thiết bị hiện đại, sẵn sàng đáp ứng các đơn hàng quy mô lớn cho khách hàng doanh nghiệp.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/08/IMG_1641-1024x683.jpg",
  },
  {
    year: "2020",
    title: "Top 10 Thương hiệu uy tín hàng đầu Việt Nam",
    paragraphs: [
      "Vimet Corp tiếp tục được vinh danh Top 10 Thương hiệu - Nhãn hiệu uy tín hàng đầu Việt Nam.",
      "Mở rộng danh mục giải pháp trọn gói cho garage ô tô, trung tâm đăng kiểm và xưởng dịch vụ chuyên nghiệp.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/01/chung-nhan-thuong-hieu-2020.jpg",
  },
  {
    year: "2022",
    title: "Định hướng phát triển bền vững đến năm 2040",
    paragraphs: [
      "Vimet Corp công bố định hướng chiến lược dài hạn đến năm 2040 với mục tiêu nâng tầm thương hiệu Việt trong chuỗi cung ứng thiết bị công nghiệp phụ trợ.",
      "Tiếp tục đầu tư vào đào tạo, chuyển giao công nghệ và dịch vụ hậu mãi - giữ vững chuẩn mực vận hành chuyên nghiệp ở từng chi tiết.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/08/IMG_1641-1024x683.jpg",
  },
];

const certificates = [
  {
    title: "ISO 9001:2015",
    image: "https://vimet.com.vn/wp-content/uploads/2022/01/sgs.jpg",
  },
  {
    title: "Top 10 Thương hiệu mạnh",
    image: "https://vimet.com.vn/wp-content/uploads/2022/01/chung-nhan-thuong-hieu-2018.jpg",
  },
  {
    title: "Top 10 Thương hiệu uy tín",
    image: "https://vimet.com.vn/wp-content/uploads/2022/01/chung-nhan-thuong-hieu-2020.jpg",
  },
  {
    title: "Chứng nhận nhãn hiệu",
    image: "https://vimet.com.vn/wp-content/uploads/2022/01/chung-nhan-nhan-hieu.jpg",
  },
];

const activities = [
  {
    title: "Đào tạo và chuyển giao kỹ thuật",
    image: images.hero.slides[0],
  },
  {
    title: "Triển khai dự án thiết bị tại xưởng",
    image: images.hero.slides[1],
  },
  {
    title: "Vận hành thực tế tại gara",
    image: images.hero.slides[2],
  },
  {
    title: "Hoạt động nội bộ và gắn kết đội ngũ",
    image: "https://vimet.com.vn/wp-content/uploads/2022/08/IMG_1641-1024x683.jpg",
  },
];

export const Route = createFileRoute("/gioi-thieu")({
  head: () => ({
    meta: [
      { title: "Giới thiệu Vimet Corp" },
      {
        name: "description",
        content:
          "Trang giới thiệu Vimet Corp: giới thiệu chung, lịch sử hình thành, chứng nhận chất lượng và hoạt động nội bộ.",
      },
    ],
  }),
  component: AboutPage,
});

function HistoryTimeline() {
  const [active, setActive] = useState(3);
  const current = timeline[active];

  const goPrev = () => setActive((i) => (i - 1 + timeline.length) % timeline.length);
  const goNext = () => setActive((i) => (i + 1) % timeline.length);

  return (
    <section className="border-b border-border bg-neutral py-16 md:py-20">
      <div className="container-prose">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Dấu mốc phát triển</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-secondary md:text-4xl">Lịch sử hình thành</h2>
        </div>

        {/* Year rail */}
        <div className="relative">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Mốc trước"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-white p-2 text-secondary shadow-sm transition-colors hover:bg-highlight hover:text-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Mốc sau"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-white p-2 text-secondary shadow-sm transition-colors hover:bg-highlight hover:text-secondary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mx-10 overflow-hidden">
            <div className="relative py-4">
              {/* line */}
              <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-border" />
              <div
                className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-primary transition-all duration-500"
                style={{ width: `${((active + 0.5) / timeline.length) * 100}%` }}
              />

              <ul className="relative flex items-center justify-between gap-2">
                {timeline.map((m, i) => {
                  const isActive = i === active;
                  const isPast = i < active;
                  return (
                    <li key={m.year} className="flex flex-col items-center">
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        className="group flex flex-col items-center focus:outline-none"
                        aria-label={`Mốc ${m.year}`}
                      >
                        <span
                          className={`mb-2 text-xs font-semibold tracking-wider transition-colors md:text-sm ${
                            isActive ? "text-primary" : "text-muted-foreground group-hover:text-secondary"
                          }`}
                        >
                          {m.year}
                        </span>
                        <span
                          className={`block rounded-full border-2 transition-all ${
                            isActive
                              ? "h-4 w-4 border-primary bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_20%,transparent)]"
                              : isPast
                                ? "h-3 w-3 border-primary bg-primary"
                                : "h-3 w-3 border-border bg-white group-hover:border-primary"
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Content */}
        <div key={current.year} className="mt-10 grid animate-in fade-in slide-in-from-bottom-2 duration-500 gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-elevated)]">
            <div className="aspect-[4/3] overflow-hidden bg-neutral">
              <img
                src={current.image}
                alt={current.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Clock3 className="h-3.5 w-3.5" />
              Năm {current.year}
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold leading-snug text-secondary md:text-3xl">
              {current.title}
            </h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {current.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-highlight"
              >
                <ChevronLeft className="h-4 w-4" /> Trước
              </button>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-highlight hover:text-secondary"
              >
                Tiếp <ChevronRight className="h-4 w-4" />
              </button>
              <span className="ml-auto text-xs font-semibold text-muted-foreground">
                {active + 1} / {timeline.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="border-b border-border bg-neutral">
        <div className="container-prose flex items-center gap-2 py-3 text-xs text-muted-foreground">
          <Link to="/" className="inline-flex items-center gap-1 transition-colors hover:text-primary">
            <Home className="h-3.5 w-3.5" />
            Trang chủ
          </Link>
          <span>/</span>
          <span className="font-semibold text-secondary">Giới thiệu công ty</span>
        </div>
      </div>

      <main>
        <section className="relative overflow-hidden border-b border-border bg-white py-14 md:py-18">
          <div className="absolute right-0 top-0 h-1 w-full bg-primary" />
          <div className="absolute -left-24 top-20 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
          <div className="container-prose relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Về Vimet Corp</div>
              <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-secondary md:text-5xl">
                Công ty CP Kỹ thuật Thiết bị Việt Mỹ
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Vimet Corp hoạt động trong lĩnh vực cung cấp thiết bị và giải pháp kỹ thuật cho garage ô tô, xưởng
                dịch vụ và sản xuất công nghiệp. Doanh nghiệp tập trung vào chất lượng sản phẩm, năng lực triển khai
                thực tế và dịch vụ hậu mãi bền vững cho khách hàng trên toàn quốc.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
                  <div className="font-display text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Năm phát triển</div>
                </div>
                <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
                  <div className="font-display text-2xl font-bold text-primary">3.500+</div>
                  <div className="text-sm text-muted-foreground">Khách hàng doanh nghiệp</div>
                </div>
                <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
                  <div className="font-display text-2xl font-bold text-primary">63/63</div>
                  <div className="text-sm text-muted-foreground">Tỉnh thành phục vụ</div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary p-6 text-secondary-foreground shadow-[var(--shadow-elevated)]">
              <h2 className="font-display text-xl font-bold">Giới thiệu chung</h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/75">
                <p>
                  Doanh nghiệp phát triển từ nền tảng giai đoạn 2007, chuyển đổi mô hình năm 2009 và mở rộng thành hệ
                  sinh thái sản phẩm - dịch vụ kỹ thuật cho nhiều nhóm ngành.
                </p>
                <p>
                  Vimet theo định hướng dài hạn đến năm 2040 với mục tiêu nâng tầm thương hiệu Việt trong chuỗi cung
                  ứng thiết bị công nghiệp phụ trợ, đồng thời duy trì chuẩn vận hành chuyên nghiệp theo từng chi tiết.
                </p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                <Clock3 className="h-3.5 w-3.5" />
                Hành trình phát triển bền vững
              </div>
            </div>
          </div>
        </section>

        <HistoryTimeline />

        <section className="border-b border-border bg-white py-14 md:py-16">
          <div className="container-prose">
            <div className="mb-8 flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Chuẩn mực chất lượng</div>
                <h2 className="mt-2 font-display text-3xl font-bold text-secondary">Hình ảnh chứng nhận chất lượng</h2>
              </div>
              <div className="hidden items-center gap-2 rounded-full bg-highlight/20 px-3 py-1 text-xs font-semibold text-secondary md:inline-flex">
                <ShieldCheck className="h-3.5 w-3.5" />
                Đối chiếu từ dữ liệu công khai của Vimet
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certificates.map((certificate) => (
                <figure key={certificate.title} className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                  <div className="aspect-[3/4] overflow-hidden bg-neutral">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <figcaption className="border-t border-border px-3 py-3 text-center text-sm font-semibold text-secondary">
                    {certificate.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-14 text-secondary-foreground md:py-16">
          <div className="container-prose">
            <div className="mb-8 text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Văn hóa doanh nghiệp</div>
              <h2 className="mt-2 font-display text-3xl font-bold">Hình ảnh sinh hoạt công ty</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                Hoạt động chuyên môn và gắn kết nội bộ giúp đội ngũ Vimet duy trì năng lượng tích cực, gia tăng năng
                lực phối hợp và nâng cao chất lượng phục vụ khách hàng.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {activities.map((activity) => (
                <article key={activity.title} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-white">{activity.title}</h3>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex md:items-center md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Award className="h-3.5 w-3.5" />
                  Đồng hành dài hạn
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold">Kết nối với đội ngũ Vimet để nhận tư vấn phù hợp</h3>
              </div>
              <Link
                to="/"
                hash="contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-highlight hover:text-secondary md:mt-0"
              >
                Liên hệ ngay
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
