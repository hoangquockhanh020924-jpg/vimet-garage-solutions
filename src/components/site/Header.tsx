import { useState } from "react";
import { Search, ShoppingCart, Phone, Menu, X, Mail, MapPin, Facebook, Youtube } from "lucide-react";
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

export function Header() {
  const [open, setOpen] = useState(false);

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
            <a href="mailto:sales@vimet.vn" className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Mail className="h-3 w-3" />
              sales@vimet.vn
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#catalog" className="hover:text-white/80 transition-colors">Tải Catalog</a>
            <span className="h-3 w-px bg-white/25" />
            <a href="#recruit" className="hover:text-white/80 transition-colors">Tuyển dụng</a>
            <span className="h-3 w-px bg-white/25" />
            <div className="flex items-center gap-2">
              <a href="#" aria-label="Facebook" className="hover:text-white/80"><Facebook className="h-3.5 w-3.5" /></a>
              <a href="#" aria-label="Youtube" className="hover:text-white/80"><Youtube className="h-3.5 w-3.5" /></a>
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
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-primary px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-primary-dark transition-colors">
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
          <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
            <ShoppingCart className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-bold text-white border-2 border-white">
              0
            </span>
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-md bg-primary text-white"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Nav — solid red bar, white text with animated underline on hover */}
      <nav className="hidden lg:block bg-primary">
        <div className="container-prose">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  hash={item.hash}
                  className="group relative inline-block px-5 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  <span className="relative">
                    {item.label}
                    {/* Animated underline */}
                    <span className="pointer-events-none absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-300 ease-out group-hover:w-full" />
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
            <ul className="flex flex-col divide-y divide-border">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    hash={item.hash}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm font-semibold text-secondary hover:text-primary"
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
