import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, CheckCircle2, Clock3, Home, ShieldCheck } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { images } from "@/lib/images";

const timeline = [
  {
    year: "2007",
    title: "Khởi nguồn từ mô hình tiền thân CSC",
    summary:
      "Hình thành nền tảng hoạt động trong lĩnh vực thiết bị kỹ thuật và dịch vụ hỗ trợ cho ngành sửa chữa - bảo dưỡng.",
  },
  {
    year: "2009",
    title: "Chuyển đổi mô hình, phát triển thương hiệu VIMET CORP",
    summary:
      "Mở rộng phạm vi kinh doanh và chuẩn hóa vận hành theo định hướng doanh nghiệp cổ phần chuyên nghiệp.",
  },
  {
    year: "2012",
    title: "Mở rộng hệ sinh thái đối tác quốc tế",
    summary:
      "Tăng cường hợp tác với nhiều thương hiệu toàn cầu trong mảng thiết bị garage và công nghiệp.",
  },
  {
    year: "2014",
    title: "Khẳng định năng lực thương hiệu kỹ thuật",
    summary:
      "Đẩy mạnh giải pháp thiết bị và công cụ chuyên dụng, củng cố vị thế trên thị trường trong nước.",
  },
  {
    year: "2017",
    title: "Áp dụng hệ thống ISO 9001:2015",
    summary:
      "Tiêu chuẩn hóa quản lý chất lượng, nâng cao độ ổn định dịch vụ và hiệu quả phục vụ khách hàng.",
  },
  {
    year: "2018 - 2022",
    title: "Liên tục ghi nhận thành tựu doanh nghiệp",
    summary:
      "Nhận nhiều giải thưởng và bằng khen, đồng thời mở rộng năng lực phục vụ trên toàn quốc.",
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

        <section className="border-b border-border bg-neutral py-14 md:py-16">
          <div className="container-prose">
            <div className="mb-8 text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Dấu mốc phát triển</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-secondary">Lịch sử hình thành</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {timeline.map((milestone) => (
                <article
                  key={milestone.year}
                  className="group rounded-xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {milestone.year}
                  </div>
                  <h3 className="mt-3 text-base font-bold text-secondary">{milestone.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{milestone.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

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
