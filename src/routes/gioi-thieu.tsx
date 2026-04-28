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
    title: "Tiền thân là DNTN Chín Số Chín (CSC)",
    paragraphs: [
      "Tiền thân là Doanh nghiệp Tư nhân Chín Số Chín (CSC) được thành lập bởi ông Đỗ Văn Hiến.",
      "Đây là cột mốc khởi nguồn, đặt nền móng cho hành trình phát triển của Vimet Corp trong lĩnh vực thiết bị kỹ thuật.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/08/TT-DoVanHien.jpg",
  },
  {
    year: "2009",
    title: "Chuyển đổi mô hình, phát triển thương hiệu VIMET CORP",
    paragraphs: [
      "Mở rộng quy mô hoạt động, chuyển đổi mô hình hoạt động và đổi tên thành Công ty CP Kỹ thuật Thiết bị Việt Mỹ (tên viết tắt: VIMET CORP).",
      "VIMET hoạt động trong các lĩnh vực kinh doanh như: thiết bị ô tô, thiết bị rửa xe làm sạch bôi trơn, thiết bị kiểm định, thiết bị garage, thiết bị dạy nghề, thiết bị công nghiệp & dụng cụ cầm tay…",
      "Dịch vụ thương mại về kỹ thuật và công nghệ: thực hiện thi công, cung cấp, lắp đặt máy móc cho toàn bộ gói thầu hoặc cung cấp các dịch vụ theo yêu cầu từng hạng mục đầu tư của khách hàng từ: tư vấn, thiết kế, cung cấp thiết bị, lắp đặt chuyển giao công nghệ, dịch vụ sửa chữa, bảo hành, bảo trì dài hạn.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2023/02/VIMET.jpg",
  },
  {
    year: "2012",
    title: "Vimet Corp chính thức là nhà phân phối duy nhất TOPTUL tại Việt Nam",
    paragraphs: [
      "Vimet Corp chính thức trở thành nhà phân phối duy nhất cho thương hiệu dụng cụ cầm tay TOPTUL tại Việt Nam.",
      "Mở rộng quy mô hoạt động, hoàn thiện hệ sinh thái sản phẩm và dịch vụ cho ngành sửa chữa - bảo dưỡng ô tô và công nghiệp.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/08/TOPTUL-thuong-hieu-1.jpg",
  },
  {
    year: "2014",
    title: "Được Cục Sở hữu Trí tuệ cấp bằng sáng chế thương hiệu HIDI",
    paragraphs: [
      "Vimet Corp chính thức được Cục Sở hữu Trí tuệ cấp bằng sáng chế thương hiệu HIDI - chuyên về thiết bị thủy lực & công cụ.",
      "Tiếp tục mở rộng quy mô và chuẩn hóa các dòng sản phẩm thiết bị kỹ thuật mang thương hiệu riêng của Vimet Corp.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/08/th%C6%B0%C6%A1ng-hi%E1%BB%87u-HIDI.jpg",
  },
  {
    year: "2017",
    title: "Áp dụng hệ thống quản lý chất lượng ISO 9001:2015",
    paragraphs: [
      "Vimet Corp chính thức áp dụng hệ thống quản lý chất lượng theo tiêu chuẩn ISO 9001:2015.",
      "Tiêu chuẩn hóa toàn bộ quy trình quản lý, vận hành và dịch vụ - nâng cao độ ổn định và hiệu quả phục vụ khách hàng trên toàn quốc.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/08/ISO_9001_2015.jpg",
  },
  {
    year: "2018",
    title: "TOP 10 Doanh nghiệp mạnh đất Việt",
    paragraphs: [
      "Vimet Corp nhận giải thưởng TOP 10 Doanh nghiệp mạnh đất Việt.",
      "Khẳng định uy tín thương hiệu và chất lượng sản phẩm trên thị trường thiết bị kỹ thuật Việt Nam.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/08/thuonghieudatviet.jpg",
  },
  {
    year: "2019",
    title: "Bằng khen của Cục thuế TP. Hồ Chí Minh",
    paragraphs: [
      "Vimet Corp nhận bằng khen là doanh nghiệp có thành tích tốt thực hiện chính sách pháp luật thuế của Cục thuế TP. Hồ Chí Minh.",
      "Ghi nhận sự minh bạch, tuân thủ pháp luật và đóng góp tích cực vào sự phát triển kinh tế địa phương.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2021/04/progress-img.png",
  },
  {
    year: "2020",
    title: "TOP 10 Thương hiệu UY TÍN - Sản phẩm CHẤT LƯỢNG - Dịch vụ TIN DÙNG",
    paragraphs: [
      "Thành công, phát triển vang dội, đạt nhiều thành tựu mới:",
      "• Thành lập Vimet Group, hoạt động theo cơ chế Tập đoàn – Tổng công ty và các công ty thành viên.",
      "• Vimet Corp nhận bằng khen là doanh nghiệp có thành tích tốt thực hiện chính sách pháp luật thuế của Cục thuế Quận 12.",
      "• Đạt TOP 10 Thương hiệu uy tín – Dịch vụ tin dùng – Sản phẩm chất lượng năm 2020.",
      "Và con thuyền Vimet Corp vẫn sẽ vượt đại dương, hội nhập, phát triển và không ngừng lớn mạnh trong tương lai.",
    ],
    image: "https://vimet.com.vn/wp-content/uploads/2022/08/thuonghieuuytin-1.jpg",
  },
  {
    year: "2022",
    title: "Vượt qua đại dịch Covid-19 và trở lại mạnh mẽ",
    paragraphs: [
      "Vượt qua đại dịch Covid-19 và trở lại mạnh mẽ, giành được nhiều thành tựu mới:",
      "• Kỷ niệm 15 năm – một chặng đường đi đầu chất lượng.",
      "• Top 10 Thương hiệu dẫn đầu Việt Nam 2022.",
      "• Đồng hành hợp tác cùng phát triển với Trường Đại học Văn Hiến.",
      "• Doanh nhân Đỗ Văn Hiến – Tổng Giám đốc đạt danh hiệu DOANH NHÂN TIÊU BIỂU VIỆT NAM 2022.",
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
                Công ty CP Kỹ thuật Thiết bị Việt Mỹ (Vimet Corp) là doanh nghiệp có trụ sở tại Việt Nam, hoạt động
                trong lĩnh vực thương mại và sản xuất thiết bị máy móc, công cụ dụng cụ cho các ngành công nghiệp:
                thiết bị, dây chuyền sản xuất - sửa chữa - bảo dưỡng ô tô, xe máy, dụng cụ thiết bị cầm tay, khí nén,
                thiết bị làm sạch và kiểm định đo lường. Đồng thời tư vấn, thiết kế và thi công, cung cấp trang thiết
                bị nhà xưởng, garage, vật tư ngành công nghiệp sản xuất và dầu khí.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
                  <div className="font-display text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Năm hình thành & phát triển</div>
                </div>
                <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
                  <div className="font-display text-2xl font-bold text-primary">TOP 10</div>
                  <div className="text-sm text-muted-foreground">Công ty hàng đầu Việt Nam</div>
                </div>
                <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
                  <div className="font-display text-2xl font-bold text-primary">ISO</div>
                  <div className="text-sm text-muted-foreground">9001:2015 chuẩn quốc tế</div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary p-6 text-secondary-foreground shadow-[var(--shadow-elevated)]">
              <h2 className="font-display text-xl font-bold">Giới thiệu chung</h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/75">
                <p>
                  Vimet Corp được thành lập từ năm 2007, tiền thân là DNTN CSC. Năm 2009 chuyển đổi loại hình công ty
                  cổ phần và phát triển thành thương hiệu VIMET CORP như hiện nay.
                </p>
                <p>
                  Trải qua hơn 15 năm hình thành & phát triển, Vimet đã vươn lên trở thành 1 trong 10 công ty hàng đầu
                  Việt Nam trong ngành cung cấp thiết bị sửa chữa ô tô và công - dụng cụ.
                </p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                <Clock3 className="h-3.5 w-3.5" />
                Chuyên nghiệp từng chi tiết
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-white py-14 md:py-16">
          <div className="container-prose">
            <div className="mb-8 text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Định hướng chiến lược</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-secondary">Tầm nhìn - Sứ mệnh - Giá trị cốt lõi</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-border bg-neutral p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  Tầm nhìn 2040
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-secondary">Thương hiệu quốc gia dẫn đầu</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li>– VIMET trở thành thương hiệu quốc gia, dẫn đầu ngành công nghiệp phụ trợ về cung cấp trang thiết bị máy móc, công cụ dụng cụ, gắn liền với mục tiêu Quốc gia thịnh vượng.</li>
                  <li>– Hợp tác sản xuất và xây dựng VIMET là thương hiệu luôn có máy móc thiết bị chất lượng cao, công nghệ tiên tiến hàng đầu thế giới.</li>
                </ul>
              </article>

              <article className="rounded-2xl border border-border bg-neutral p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  Sứ mệnh
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-secondary">Mang tinh hoa thế giới về Việt Nam</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li>– Mang dây chuyền sản xuất, trang thiết bị máy móc, công cụ dụng cụ tinh hoa nhất thế giới đến nhà máy, công trình của khách hàng tại Việt Nam.</li>
                  <li>– Bán máy để tạo ra giá trị thặng dư, hiện thực hóa giấc mơ và xây dựng sự nghiệp vinh quang cho khách hàng.</li>
                  <li>– Góp phần xây dựng Quốc gia thịnh vượng, phụng sự lợi ích lâu dài cho cộng đồng Vimet.</li>
                </ul>
              </article>

              <article className="rounded-2xl border border-border bg-neutral p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  Giá trị cốt lõi
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-secondary">"Cùng bạn bước tới thành công"</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li>– Nghiên cứu sáng tạo để sản phẩm bền bỉ, công nghệ tiên phong nhằm "Nâng tầm sản phẩm dịch vụ".</li>
                  <li>– Tôn vinh sự chính trực trong tư tưởng, chuyên nghiệp trong hành động.</li>
                  <li>– Giá trị tạo ra để phụng sự lợi ích lâu dài cho cộng đồng Vimet.</li>
                </ul>
              </article>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-secondary p-6 text-secondary-foreground md:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    Văn hóa nội bộ
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    Phương châm: <strong className="text-white">"Lấy trí công để xây chữ tín – Dùng chữ tín để kinh doanh"</strong>.
                    Chúng tôi làm việc dựa trên nguyên tắc: chính trực, tự giác, trách nhiệm, trọng tín, kế thừa & cải tiến.
                    Hài hòa lợi ích trong các mối quan hệ khách hàng, người lao động, chủ đầu tư, đối tác, chính sách
                    pháp luật và văn hóa xã hội. Chuyên nghiệp, công bằng để cùng tạo ra giá trị "Trường tồn để cống hiến".
                  </p>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    Chính sách chất lượng (2020 - 2025)
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">Phương châm: Chuyên nghiệp từng chi tiết</p>
                  <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-white/75">
                    <li>• Nâng tầm chất lượng cho từng sản phẩm dịch vụ.</li>
                    <li>• Làm đúng ngay lần đầu, hẹn đúng giờ sẽ tới.</li>
                    <li>• Thông tin rõ ràng, hàng hóa sẵn sàng, chứng từ chính xác trước khi đi giao.</li>
                    <li>• Phong cách chuyên nghiệp, phục vụ tận tâm, tinh thần hợp tác.</li>
                  </ul>
                </div>
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
