import { Facebook, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary font-display text-lg font-bold text-primary-foreground">
              V
            </div>
            <div>
              <div className="font-display text-xl font-bold">VIMET</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Auto Equipment JSC</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Công ty Cổ phần Vimet — Nhà phân phối thiết bị kỹ thuật ô tô chính
            hãng, phục vụ hơn 3.500 gara trên toàn quốc từ năm 2008.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Danh mục"
          items={["Cầu nâng ô tô", "Máy chẩn đoán", "Máy ra vào lốp", "Máy nén khí", "Dụng cụ gara", "Phụ tùng"]}
        />
        <FooterCol
          title="Công ty"
          items={["Giới thiệu", "Tin tức", "Dự án đã thực hiện", "Tuyển dụng", "Chính sách bảo hành", "Chính sách giao hàng"]}
        />

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Liên hệ
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />Số 12 Nguyễn Văn Cừ, Long Biên, Hà Nội</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-primary" />1900 1234</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-primary" />sales@vimet.vn</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose flex flex-col gap-2 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Công ty Cổ phần Vimet. MST: 0123456789. Mọi quyền được bảo lưu.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-white transition-colors">Bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">{title}</h4>
      <ul className="mt-5 space-y-2.5 text-sm text-white/70">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="hover:text-primary transition-colors inline-flex items-center gap-1.5">
              <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
