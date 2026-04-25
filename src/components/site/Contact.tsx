import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Send, Copy } from "lucide-react";
import { LocationMap } from "./LocationMap";
import { images } from "@/lib/images";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative bg-white py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral via-white to-neutral" />

      <div className="container-prose">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Logo Section - Left */}
          <div className="lg:col-span-2 flex flex-col items-center justify-start -mt-6">
            <div className="w-full max-w-[180px]">
              <img
                src={images.brand.logo}
                alt="Vimet Logo"
                className="w-full h-auto"
              />
            </div>

            {/* Office Info - Below Logo */}
            <div className="mt-3 grid gap-6 w-full">
              {/* HCMC Office */}
              <div className="rounded-xl border border-border bg-white/50 p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-secondary text-sm uppercase tracking-wide">
                  Trụ sở Vimet TP.HCM
                </h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex gap-3">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      H64 Dương Thị Giang, Phường Đông Hưng Thuận, TP Hồ Chí Minh, Việt Nam
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div className="text-muted-foreground space-y-0.5">
                      <p>028 38 38 38 88</p>
                      <p>090 998 9907 – 035 247 2468</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <a
                      href="mailto:info@vimet.com.vn"
                      className="text-primary hover:underline font-medium"
                    >
                      info@vimet.com.vn
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <Copy className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">028 6266 3000</p>
                  </div>
                </div>
              </div>

              {/* Hanoi Office */}
              <div className="rounded-xl border border-border bg-white/50 p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-secondary text-sm uppercase tracking-wide">
                  Vimet Hà Nội
                </h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex gap-3">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      888 Đỗ Gia Villa, Thôn Hoan Ái, Xã Yên Mỹ, Tỉnh Hưng Yên
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <a
                      href="mailto:info@vimet.com.vn"
                      className="text-primary hover:underline font-medium"
                    >
                      info@vimet.com.vn
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <Copy className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">028 6266 3000</p>
                  </div>
                  <div className="flex gap-3">
                    <Globe className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <a
                      href="https://www.vimet.com.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      www.vimet.com.vn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Title + Description + Form - Right */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Liên hệ báo giá
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-secondary md:text-4xl">
                Nhận tư vấn & báo giá trong 30 phút
              </h2>
              <p className="mt-3 text-muted-foreground">
                Để lại thông tin, kỹ sư của Vimet sẽ liên hệ tư vấn giải pháp phù hợp nhất cho gara của bạn.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-border bg-white p-6 md:p-10 shadow-[var(--shadow-card)]"
            >

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
              {sent ? (
                "Đã gửi yêu cầu ✓"
              ) : (
                <>
                  Gửi yêu cầu <Send className="h-4 w-4" />
                </>
              )}
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Bằng việc gửi thông tin, bạn đồng ý với chính sách bảo mật của Vimet.
            </p>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <LocationMap />
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
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