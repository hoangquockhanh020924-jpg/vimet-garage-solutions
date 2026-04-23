import { BadgeCheck, Headphones, ShieldCheck, Truck, Wrench, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Sản phẩm chính hãng",
    desc: "Nhập khẩu trực tiếp, đầy đủ CO/CQ. Cam kết 100% hàng chính hãng từ nhà sản xuất.",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ kỹ thuật 24/7",
    desc: "Đội ngũ kỹ sư giàu kinh nghiệm sẵn sàng tư vấn và xử lý sự cố mọi lúc.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo hành dài hạn",
    desc: "Bảo hành chính hãng 12–24 tháng, bảo trì định kỳ miễn phí trong năm đầu.",
  },
  {
    icon: Truck,
    title: "Giao hàng toàn quốc",
    desc: "Giao nhanh 24–72h tại 63 tỉnh thành. Miễn phí vận chuyển đơn từ 20 triệu.",
  },
  {
    icon: Wrench,
    title: "Lắp đặt tận nơi",
    desc: "Đội kỹ thuật đến tận xưởng, lắp đặt, vận hành thử và đào tạo sử dụng.",
  },
  {
    icon: TrendingUp,
    title: "Giá cạnh tranh",
    desc: "Phân phối trực tiếp không qua trung gian — giá tốt nhất thị trường.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-neutral py-20">
      <div className="container-prose">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Vì sao chọn Vimet
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-secondary md:text-4xl">
            6 cam kết dành cho khách hàng
          </h2>
          <p className="mt-3 text-muted-foreground">
            Chúng tôi không chỉ bán thiết bị — Vimet đồng hành cùng sự phát
            triển của xưởng dịch vụ.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative rounded-xl border border-border bg-white p-7 transition-all hover:border-primary hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-secondary">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              <div className="absolute top-0 right-0 h-0 w-1 bg-primary group-hover:h-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
