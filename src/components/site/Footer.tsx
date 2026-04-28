import { Facebook, Youtube, Linkedin, MapPin, Phone, Mail, Printer, Globe } from "lucide-react";
import { images } from "@/lib/images";

const wholesaleOnlineContacts = [
  "0962 99 0101 - Ms Hoài (Miền Bắc)",
  "0964 24 2200 - Ms Nhã",
  "088 808 3434 - Thiên Trúc",
  "088 818 4455 - Ms Thơm",
  "0976 74 2255 - Ms Thơm",
];

const industrialContacts = ["0976 74 2299 - Trần Bửu Ý"];

const autoContacts = [
  "Mr Đàm - 0962 88 1717",
  "Văn Phú - 035 414 2288",
  "Mr Văn Thanh - 035 404 2288",
  "Mr Nhơn - 096 299 0202",
  "Bảo Khanh - 035 424 2288",
  "Mr Phát - 035 434 2288",
  "Mr Bảo Duy - 035 474 2288",
  "Hoài Nhơn - 035 464 2288",
  "Đức Trung - 097 674 1122",
  "Minh Tuấn - 088 808 4466",
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white p-1.5">
              <img src={images.brand.logo} alt="Logo Vimet" className="h-full w-full object-contain" />
            </div>
            <div>
              <div className="font-display text-xl font-bold">VIMET</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Vimet Corp</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Công ty Cổ phần thiết bị Việt Mỹ — Nhà phân phối thiết bị kỹ thuật ô tô chính
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

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Trụ sở
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>H55 Dương Thị Giang, P. Đông Hưng Thuận, TP.HCM</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Điện thoại: 028 388 88 388</span>
            </li>
            <li className="flex gap-3">
              <Printer className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Fax: 028 6266 3000</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Email: info@vimet.com.vn</span>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                Website: {" "}
                <a href="https://www.vimet.com.vn" className="text-white transition-colors hover:text-primary">
                  www.vimet.com.vn
                </a>{" "}-{" "}
                <a href="https://www.thietbioto.vn" className="text-white transition-colors hover:text-primary">
                  www.thietbioto.vn
                </a>
              </span>
            </li>
          </ul>
        </div>
        <FooterCol
          title="Công ty"
          items={["Giới thiệu", "Tin tức", "Dự án đã thực hiện", "Tuyển dụng", "Chính sách bảo hành", "Chính sách giao hàng"]}
        />

        <div className="lg:col-span-2">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Liên hệ
          </h4>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
            Hỗ trợ trực tuyến
          </p>

          <div className="mt-5 grid gap-5 text-sm text-white/75 sm:grid-cols-2">
            <div>
              <h5 className="text-[15px] font-bold uppercase italic text-white">Bán sỉ online</h5>
              <ul className="mt-2 space-y-1.5">
                {wholesaleOnlineContacts.map((contact) => (
                  <li key={contact}>{contact}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-[15px] font-bold uppercase italic text-white">Thiết bị công nghiệp</h5>
              <ul className="mt-2 space-y-1.5">
                {industrialContacts.map((contact) => (
                  <li key={contact}>{contact}</li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2">
              <h5 className="text-[15px] font-bold uppercase italic text-white">Thiết bị ô tô</h5>
              <ul className="mt-2 grid gap-x-6 gap-y-1.5 md:grid-cols-2">
                {autoContacts.map((contact) => (
                  <li key={contact}>{contact}</li>
                ))}
              </ul>
            </div>
          </div>
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
