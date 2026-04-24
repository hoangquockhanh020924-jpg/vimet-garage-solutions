import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Phone,
  Menu,
  X,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  ChevronRight,
  LayoutGrid,
  Wrench,
  Cpu,
  CircleDot,
  Wind,
  Gauge,
  Hammer,
  Cog,
  Lightbulb,
  Droplet,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { images } from "@/lib/images";

const navItems = [
  { label: "Trang chủ", to: "/" as const, hash: "top" },
  { label: "Giới thiệu", to: "/" as const, hash: "about" },
  { label: "Sản phẩm", to: "/" as const, hash: "products" },
  { label: "Hãng sản xuất", to: "/" as const, hash: "brands" },
  { label: "Tin tức", to: "/" as const, hash: "news" },
  { label: "Tuyển dụng", to: "/" as const, hash: "recruit" },
  { label: "Catalog", to: "/" as const, hash: "catalog" },
  { label: "Video", to: "/" as const, hash: "video" },
  { label: "Liên hệ", to: "/" as const, hash: "contact" },
];

type Category = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  groups: { title: string; items: string[] }[];
};

const categories: Category[] = [
  {
    label: "Cầu nâng ô tô",
    icon: Wrench,
    groups: [
      {
        title: "Theo kết cấu",
        items: [
          "Cầu nâng 2 trụ cổng trên",
          "Cầu nâng 2 trụ cổng dưới",
          "Cầu nâng 4 trụ kiểm tra",
          "Cầu nâng cắt kéo",
          "Cầu nâng 1 trụ rửa xe",
        ],
      },
      {
        title: "Theo tải trọng",
        items: [
          "Tải trọng 3.5 tấn",
          "Tải trọng 4.0 tấn",
          "Tải trọng 4.5 tấn",
          "Tải trọng 5.5 tấn",
        ],
      },
    ],
  },
  {
    label: "Máy chẩn đoán",
    icon: Cpu,
    groups: [
      {
        title: "Theo thương hiệu",
        items: ["Launch X431", "Autel MaxiSys", "Bosch KTS", "G-Scan", "Thinkcar"],
      },
      {
        title: "Phụ kiện chẩn đoán",
        items: ["Đầu nối OBD", "Cáp J2534", "VCI không dây", "Pin & sạc dự phòng"],
      },
    ],
  },
  {
    label: "Máy ra vào lốp",
    icon: CircleDot,
    groups: [
      {
        title: "Loại máy",
        items: [
          "Máy ra vào lốp tự động",
          "Máy ra vào lốp bán tự động",
          "Máy ra vào lốp xe tải",
        ],
      },
      {
        title: "Phụ kiện",
        items: ["Đầu tháo lốp", "Ngàm kẹp mâm", "Bộ tay phụ trợ"],
      },
    ],
  },
  {
    label: "Máy cân bằng động",
    icon: Gauge,
    groups: [
      {
        title: "Loại máy",
        items: [
          "Cân bằng tự động",
          "Cân bằng bán tự động",
          "Cân bằng cảm ứng 3D",
          "Cân bằng xe tải",
        ],
      },
    ],
  },
  {
    label: "Máy nén khí",
    icon: Wind,
    groups: [
      {
        title: "Theo công nghệ",
        items: ["Máy nén khí trục vít", "Máy nén khí piston", "Máy nén khí có dầu", "Máy nén khí không dầu"],
      },
      {
        title: "Phụ trợ",
        items: ["Máy sấy khí", "Bình chứa khí", "Lọc đường ống"],
      },
    ],
  },
  {
    label: "Thiết bị sơn sấy",
    icon: Droplet,
    groups: [
      {
        title: "Buồng & phụ trợ",
        items: ["Buồng sơn sấy ô tô", "Buồng sơn xe máy", "Đèn sấy hồng ngoại", "Súng phun sơn"],
      },
    ],
  },
  {
    label: "Đèn & thiết bị xưởng",
    icon: Lightbulb,
    groups: [
      {
        title: "Chiếu sáng",
        items: ["Đèn LED gara", "Đèn pha sửa chữa", "Đèn soi gầm di động"],
      },
      {
        title: "Phụ trợ",
        items: ["Tủ đồ nghề", "Bàn nguội", "Xe đẩy dụng cụ"],
      },
    ],
  },
  {
    label: "Dụng cụ cầm tay",
    icon: Hammer,
    groups: [
      {
        title: "Khí nén",
        items: ["Súng vặn ốc khí nén", "Súng bơm mỡ", "Súng xịt khí"],
      },
      {
        title: "Cơ khí",
        items: ["Bộ tuýp cờ lê", "Kìm chuyên dụng", "Cảo bạc đạn"],
      },
    ],
  },
  {
    label: "Phụ tùng & vật tư",
    icon: Cog,
    groups: [
      {
        title: "Vật tư tiêu hao",
        items: ["Dầu thủy lực", "Dầu máy nén khí", "Lọc gió - lọc dầu", "Bố thắng"],
      },
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeCat, setActiveCat] = useState<string>(categories[0].label);
  const [megaOpen, setMegaOpen] = useState(false);

  const activeCategory = categories.find((c) => c.label === activeCat) ?? categories[0];

  return (
    <header className="sticky top-0 z-50 w-full shadow-[0_2px_12px_-4px_rgba(207,46,46,0.25)]">
      {/* Top utility strip — deep red */}
      <div className="hidden md:block bg-primary-dark text-white text-xs">
        <div className="container-prose flex items-center justify-between py-2">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              123 Nguyễn Văn Cừ, Long Biên, Hà Nội
            </span>
            <span className="h-3 w-px bg-white/25" />
            <a
              href="mailto:sales@vimet.vn"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-highlight"
            >
              <Mail className="h-3 w-3" />
              sales@vimet.vn
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#catalog" className="transition-colors hover:text-highlight">Tải Catalog</a>
            <span className="h-3 w-px bg-white/25" />
            <a href="#recruit" className="transition-colors hover:text-highlight">Tuyển dụng</a>
            <span className="h-3 w-px bg-white/25" />
            <div className="flex items-center gap-2">
              <a href="#" aria-label="Facebook" className="transition-colors hover:text-highlight">
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a href="#" aria-label="Youtube" className="transition-colors hover:text-highlight">
                <Youtube className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar — white */}
      <div className="bg-white border-b-2 border-primary/10">
        <div className="container-prose flex items-center gap-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src={images.brand.logo}
              alt="Logo Vimet — Công ty Cổ phần Vimet"
              className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform group-hover:scale-105"
            />
            <div className="leading-tight hidden sm:block">
              <div className="font-display text-xl font-bold tracking-tight text-primary">VIMET</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Auto Equipment JSC
              </div>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-4">
            <div className="group relative w-full">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
              <input
                type="search"
                placeholder="Tìm cầu nâng, máy chẩn đoán, máy ra vào lốp..."
                className="w-full rounded-full border-2 border-primary/20 bg-white pl-11 pr-28 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 transition"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-primary px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-highlight hover:text-secondary">
                Tìm
              </button>
            </div>
          </div>

          {/* Hotline */}
          <a
            href="tel:19001234"
            className="hidden md:flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-primary-dark pl-2 pr-5 py-1.5 shadow-[0_4px_12px_-2px_rgba(207,46,46,0.4)] hover:shadow-[0_6px_18px_-2px_rgba(207,46,46,0.5)] transition-shadow"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary">
              <Phone className="h-4 w-4" />
            </span>
            <span className="leading-tight text-white">
              <span className="block text-[10px] font-semibold uppercase tracking-wider opacity-90">Hotline 24/7</span>
              <span className="block text-sm font-bold">1900 1234</span>
            </span>
          </a>

          {/* Cart */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-highlight hover:text-secondary">
            <ShoppingCart className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-bold text-white border-2 border-white">
              0
            </span>
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-md bg-primary text-white"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Nav — solid red bar with categories mega menu + nav links */}
      <nav className="hidden md:block bg-primary relative">
        <div className="container-prose flex items-stretch">
          {/* All Categories trigger */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              className="flex items-center gap-2 bg-secondary px-4 py-3 text-[13px] font-bold uppercase tracking-normal text-white transition-colors hover:bg-highlight hover:text-secondary h-full whitespace-nowrap"
              aria-haspopup="true"
              aria-expanded={megaOpen}
            >
              <LayoutGrid className="h-4 w-4" />
              Danh mục sản phẩm
            </button>

            {/* Mega menu panel */}
            {megaOpen && (
              <div className="absolute left-0 top-full z-50 w-[860px] max-w-[calc(100vw-2rem)] rounded-b-lg bg-white shadow-[0_20px_40px_-10px_rgba(15,15,15,0.25)] ring-1 ring-primary/10 grid grid-cols-[260px_1fr] overflow-hidden">
                {/* Left: category list */}
                <ul className="bg-neutral border-r border-border py-2 max-h-[480px] overflow-y-auto">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = cat.label === activeCat;
                    return (
                      <li key={cat.label}>
                        <button
                          onMouseEnter={() => setActiveCat(cat.label)}
                          className={`group flex w-full items-center gap-3 px-5 py-3 text-left text-sm font-semibold transition-colors ${
                            isActive
                              ? "bg-white text-primary"
                              : "text-secondary hover:bg-highlight/30 hover:text-secondary"
                          }`}
                        >
                          <Icon
                            className={`h-4 w-4 ${
                              isActive ? "text-primary" : "text-muted-foreground group-hover:text-secondary"
                            }`}
                          />
                          <span className="flex-1">{cat.label}</span>
                          <ChevronRight
                            className={`h-3.5 w-3.5 ${
                              isActive ? "text-primary" : "text-muted-foreground"
                            }`}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {/* Right: detail groups */}
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold text-secondary">
                      {activeCategory.label}
                    </h3>
                    <Link
                      to="/"
                      hash="products"
                      className="text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:text-highlight"
                    >
                      Xem tất cả →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {activeCategory.groups.map((g) => (
                      <div key={g.title}>
                        <div className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                          {g.title}
                        </div>
                        <ul className="space-y-2">
                          {g.items.map((it) => (
                            <li key={it}>
                              <a
                                href="#products"
                                className="block text-sm text-secondary transition-colors hover:text-highlight hover:translate-x-0.5 transform duration-150"
                              >
                                {it}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Nav links */}
          <ul className="flex items-center gap-0.5 border-l border-white/15">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  hash={item.hash}
                  className="group relative inline-block whitespace-nowrap px-3.5 py-3 text-[13px] font-medium text-white transition-colors hover:text-highlight"
                >
                  <span className="relative">
                    {item.label}
                    {/* Animated underline — yellow on hover */}
                    <span className="pointer-events-none absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-highlight transition-all duration-300 ease-out group-hover:w-full" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-primary/20 bg-white">
          <div className="container-prose py-3">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
              <input
                type="search"
                placeholder="Tìm sản phẩm..."
                className="w-full rounded-full border-2 border-primary/20 bg-white pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none"
              />
            </div>

            {/* Mobile category accordion */}
            <details className="mb-2 rounded-md border border-border">
              <summary className="flex cursor-pointer items-center gap-2 bg-secondary px-3 py-2.5 text-sm font-bold uppercase tracking-wide text-white">
                <LayoutGrid className="h-4 w-4" />
                Danh mục sản phẩm
              </summary>
              <ul className="divide-y divide-border">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <li key={cat.label}>
                      <a
                        href="#products"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-secondary hover:bg-highlight/30 hover:text-secondary"
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        {cat.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>

            <ul className="flex flex-col divide-y divide-border">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    hash={item.hash}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm font-semibold text-secondary transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
