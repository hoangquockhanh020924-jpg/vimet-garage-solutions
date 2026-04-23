import { useState } from "react";
import { Search, ShoppingCart, Phone, Menu, X } from "lucide-react";

const navItems = [
  { label: "Trang chủ", href: "#top" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Hãng sản xuất", href: "#brands" },
  { label: "Tin tức", href: "#news" },
  { label: "Tuyển dụng", href: "#recruit" },
  { label: "Catalog", href: "#catalog" },
  { label: "Video", href: "#video" },
  { label: "Liên hệ", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-border">
      {/* Top strip */}
      <div className="hidden md:block bg-secondary text-secondary-foreground text-xs">
        <div className="container-prose flex items-center justify-between py-2">
          <span className="text-white/70">
            Vimet JSC — Thiết bị kỹ thuật ô tô chính hãng · Bảo hành toàn quốc
          </span>
          <div className="flex items-center gap-5 text-white/80">
            <a href="mailto:sales@vimet.vn" className="hover:text-white transition-colors">sales@vimet.vn</a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#catalog" className="hover:text-white transition-colors">Tải Catalog</a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#recruit" className="hover:text-white transition-colors">Tuyển dụng</a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container-prose flex items-center gap-4 py-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-display font-bold text-lg shadow-sm">
            V
            <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-sm bg-secondary" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl font-bold tracking-tight text-secondary">VIMET</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Auto Equipment JSC
            </div>
          </div>
        </a>

        {/* Search */}
        <div className="hidden lg:flex flex-1 max-w-xl mx-4">
          <div className="group relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Tìm cầu nâng, máy chẩn đoán, máy ra vào lốp..."
              className="w-full rounded-full border border-border bg-muted pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>
        </div>

        {/* Hotline */}
        <a
          href="tel:19001234"
          className="hidden md:flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 pl-2 pr-4 py-1.5 hover:bg-primary/10 transition-colors"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Phone className="h-4 w-4" />
          </span>
          <span className="leading-tight">
            <span className="block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Hotline</span>
            <span className="block text-sm font-bold text-primary">1900 1234</span>
          </span>
        </a>

        {/* Cart */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
          <ShoppingCart className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
            0
          </span>
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-md border border-border"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Nav */}
      <nav className="hidden lg:block border-t border-border bg-white">
        <div className="container-prose">
          <ul className="flex items-center gap-1">
            {navItems.map((item, i) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`relative inline-block px-4 py-3 text-sm font-semibold transition-colors ${
                    i === 0
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {item.label}
                  {i === 0 && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-prose py-3">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Tìm sản phẩm..."
                className="w-full rounded-full border border-border bg-muted pl-10 pr-4 py-2.5 text-sm"
              />
            </div>
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm font-medium text-secondary hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
