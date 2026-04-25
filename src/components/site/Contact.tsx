import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative bg-white py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral via-white to-neutral" />

      <div className="container-prose grid gap-10 lg:grid-cols-5">
        {/* Info */}
        <div className="lg:col-span-2">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Liên hệ báo giá
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-secondary md:text-4xl">
            Nhận tư vấn & báo giá trong 30 phút
          </h2>
          <p className="mt-3 text-muted-foreground">
            Để lại thông tin, kỹ sư của Vimet sẽ liên hệ tư vấn giải pháp phù
            hợp nhất cho gara của bạn.
          </p>

          <ul className="mt-8 space-y-5">
            {[
              { icon: MapPin, label: "Trụ sở chính", value: "Số 12 Nguyễn Văn Cừ, Long Biên, Hà Nội" },
              { icon: Phone, label: "Hotline 24/7", value: "1900 1234 · 0988 567 890" },
              { icon: Mail, label: "Email", value: "sales@vimet.vn" },
              { icon: Clock, label: "Giờ làm việc", value: "T2–T7: 8:00 – 17:30" },
            ].map((i) => (
              <li key={i.label} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <i.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {i.label}
                  </div>
                  <div className="mt-0.5 text-sm font-semibold text-secondary">{i.value}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="lg:col-span-3 rounded-2xl border border-border bg-white p-6 md:p-10 shadow-[var(--shadow-card)]"
        >
          <h3 className="font-display text-xl font-bold text-secondary">Gửi yêu cầu báo giá</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Vui lòng điền đầy đủ thông tin bên dưới.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Họ và tên *" placeholder="Nguyễn Văn A" />
            <Field label="Số điện thoại *" placeholder="09xx xxx xxx" type="tel" />
            <div className="sm:col-span-2">
              <Field label="Email" placeholder="ten@congty.vn" type="email" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-secondary">
                Nội dung yêu cầu *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tôi cần báo giá cầu nâng 2 trụ, loại 4.5T..."
                className="mt-2 w-full rounded-md border border-border bg-white px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-highlight hover:text-secondary transition-colors sm:w-auto"
          >
            {sent ? "Đã gửi yêu cầu ✓" : (<>Gửi yêu cầu <Send className="h-4 w-4" /></>)}
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            Bằng việc gửi thông tin, bạn đồng ý với chính sách bảo mật của Vimet.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, placeholder, type = "text",
}: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-secondary">
        {label}
      </label>
      <input
        type={type}
        required={label.includes("*")}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-border bg-white px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}
