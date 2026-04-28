import { createFileRoute, Link } from "@tanstack/react-router";
import { BriefcaseBusiness, MapPin, Clock3, CircleDollarSign, Send, Wrench, Users, GraduationCap } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  summary: string;
  requirements: string[];
};

const jobs: Job[] = [
  {
    id: "ky-su-lap-dat",
    title: "Kỹ sư lắp đặt thiết bị gara",
    department: "Kỹ thuật",
    location: "TP.HCM",
    type: "Toàn thời gian",
    salary: "12 - 18 triệu + thưởng",
    summary:
      "Phụ trách lắp đặt cầu nâng, máy chẩn đoán và hướng dẫn vận hành cho gara theo quy trình chuẩn của Vimet.",
    requirements: [
      "Kinh nghiệm kỹ thuật ô tô hoặc cơ điện tử 1 năm trở lên",
      "Sẵn sàng đi công tác tỉnh",
      "Tư duy dịch vụ và kỷ luật công việc tốt",
    ],
  },
  {
    id: "sale-b2b",
    title: "Chuyên viên kinh doanh B2B thiết bị gara",
    department: "Kinh doanh",
    location: "TP.HCM / Hà Nội",
    type: "Toàn thời gian",
    salary: "10 - 15 triệu + hoa hồng",
    summary:
      "Tìm kiếm và tư vấn giải pháp thiết bị cho chủ gara, xưởng dịch vụ và đại lý toàn quốc.",
    requirements: [
      "Có kinh nghiệm sales B2B là lợi thế",
      "Kỹ năng giao tiếp, đàm phán tốt",
      "Chủ động đặt mục tiêu doanh số",
    ],
  },
  {
    id: "content-marketing",
    title: "Content Marketing chuyên ngành ô tô",
    department: "Marketing",
    location: "TP.HCM",
    type: "Toàn thời gian",
    salary: "9 - 14 triệu",
    summary:
      "Sản xuất nội dung sản phẩm, case study gara và kịch bản video kỹ thuật phục vụ kênh digital.",
    requirements: [
      "Viết tốt, có khả năng nghiên cứu kỹ thuật",
      "Sử dụng cơ bản Canva hoặc công cụ dựng phim",
      "Làm việc được với KPI nội dung",
    ],
  },
];

const benefits = [
  {
    title: "Thu nhập cạnh tranh",
    desc: "Lương, thưởng hiệu suất và thưởng dự án rõ ràng theo kết quả.",
    icon: CircleDollarSign,
  },
  {
    title: "Đào tạo bài bản",
    desc: "Đào tạo kỹ thuật sản phẩm, kỹ năng bán hàng và quy trình triển khai.",
    icon: GraduationCap,
  },
  {
    title: "Môi trường thực chiến",
    desc: "Làm việc trực tiếp với các dự án gara thật, được trao quyền và trách nhiệm.",
    icon: Wrench,
  },
  {
    title: "Đồng đội hỗ trợ",
    desc: "Văn hóa hợp tác, minh bạch, hướng đến phát triển dài hạn.",
    icon: Users,
  },
];

export const Route = createFileRoute("/tuyen-dung")({
  head: () => ({
    meta: [
      { title: "Tuyển dụng - Vimet" },
      {
        name: "description",
        content:
          "Trang tuyển dụng Vimet: cơ hội nghề nghiệp cho khối kỹ thuật, kinh doanh và marketing trong lĩnh vực thiết bị gara ô tô.",
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="border-b border-border bg-secondary text-white">
          <div className="container-prose py-12 md:py-16">
            <nav className="mb-3 flex items-center gap-2 text-xs text-white/80">
              <Link to="/" className="transition-colors hover:text-highlight">
                Trang chủ
              </Link>
              <span>/</span>
              <span className="font-semibold text-white">Tuyển dụng</span>
            </nav>
            <h1 className="font-display text-3xl font-bold md:text-5xl">Gia nhập đội ngũ Vimet</h1>
            <p className="mt-3 max-w-3xl text-sm text-white/85 md:text-base">
              Chúng tôi tìm kiếm những thành viên có tư duy thực chiến, yêu thích kỹ thuật ô tô và mong
              muốn phát triển sự nghiệp bền vững trong ngành thiết bị gara.
            </p>
          </div>
        </section>

        <section className="container-prose py-10 md:py-14">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => (
              <article key={item.title} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <item.icon className="h-5 w-5 text-primary" />
                <h2 className="mt-3 text-sm font-bold text-secondary">{item.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container-prose pb-12 md:pb-16">
          <div className="mb-6 flex items-center gap-2">
            <BriefcaseBusiness className="h-5 w-5 text-primary" />
            <h2 className="font-display text-2xl font-bold text-secondary md:text-3xl">Vị trí đang tuyển</h2>
          </div>

          <div className="grid gap-5">
            {jobs.map((job) => (
              <article key={job.id} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {job.department}
                  </span>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                    {job.type}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-xl font-bold text-secondary">{job.title}</h3>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-4 w-4 text-primary" />
                    {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CircleDollarSign className="h-4 w-4 text-primary" />
                    {job.salary}
                  </span>
                </div>

                <p className="mt-3 text-sm text-muted-foreground">{job.summary}</p>

                <ul className="mt-4 grid gap-2 text-sm text-secondary">
                  {job.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <a
                    href="mailto:hr@vimet.com.vn?subject=Ứng%20tuyển%20tại%20Vimet"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-highlight hover:text-secondary"
                  >
                    Ứng tuyển ngay
                    <Send className="h-3.5 w-3.5" />
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
