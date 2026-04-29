import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X, TrendingUp, ArrowRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { products } from "@/data/products";

const TRENDING = [
  "Cầu nâng 2 trụ",
  "Máy chẩn đoán Launch",
  "Máy ra vào lốp",
  "Máy nén khí trục vít",
  "Bendpak",
];

const RECENT_KEY = "vimet:recent-searches";

type Props = {
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
};

export function SearchBox({ variant = "desktop", onNavigate }: Props) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [recent, setRecent] = useState<string[]>([]);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load recent searches
  useEffect(() => {
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      if (raw) setRecent(JSON.parse(raw));
    } catch {}
  }, []);

  // Close on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q),
      )
      .slice(0, 6);
  }, [query]);

  const saveRecent = (term: string) => {
    const t = term.trim();
    if (!t) return;
    const next = [t, ...recent.filter((r) => r.toLowerCase() !== t.toLowerCase())].slice(0, 5);
    setRecent(next);
    try {
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch {}
  };

  const submitQuery = (term: string) => {
    const t = term.trim();
    if (!t) return;
    saveRecent(t);
    setOpen(false);
    setQuery("");
    onNavigate?.();
    navigate({ to: "/danh-muc", search: { q: t } });
  };

  const goToProduct = (slug: string, label: string) => {
    saveRecent(label);
    setOpen(false);
    setQuery("");
    onNavigate?.();
    navigate({ to: "/san-pham/$slug", params: { slug } });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIdx >= 0 && suggestions[activeIdx]) {
        const p = suggestions[activeIdx];
        goToProduct(p.slug, p.name);
      } else {
        submitQuery(query);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  const clearRecent = () => {
    setRecent([]);
    try {
      localStorage.removeItem(RECENT_KEY);
    } catch {}
  };

  const isCompact = variant === "desktop";

  return (
    <div ref={wrapRef} className="relative w-full">
      <div className="group relative w-full">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIdx(-1);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="Tìm cầu nâng, máy chẩn đoán, máy ra vào lốp..."
          className={`w-full rounded-full border-2 border-primary/20 bg-white pl-11 pr-24 ${
            isCompact ? "py-2.5" : "py-3"
          } text-sm placeholder:text-muted-foreground transition focus:border-highlight focus:outline-none focus:ring-4 focus:ring-highlight/25`}
          aria-label="Tìm sản phẩm"
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveIdx(-1);
              inputRef.current?.focus();
            }}
            className="absolute right-[5.25rem] top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground hover:bg-neutral hover:text-secondary"
            aria-label="Xóa"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
        <button
          type="button"
          onClick={() => submitQuery(query)}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-primary px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-highlight hover:text-secondary"
        >
          Tìm
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-border bg-white shadow-[0_20px_40px_-10px_rgba(15,15,15,0.25)]">
          {/* Suggestions */}
          {query.trim() ? (
            suggestions.length > 0 ? (
              <ul className="max-h-[26rem] overflow-y-auto py-2">
                {suggestions.map((p, idx) => (
                  <li key={p.slug}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIdx(idx)}
                      onClick={() => goToProduct(p.slug, p.name)}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        activeIdx === idx ? "bg-highlight/30" : "hover:bg-neutral"
                      }`}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-white">
                        <img src={p.img} alt={p.name} className="h-full w-full object-contain p-1" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-semibold text-secondary">
                          {highlight(p.name, query)}
                        </div>
                        <div className="mt-0.5 flex items-center gap-2 text-[11px] text-muted-foreground">
                          <span>Mã: {p.code}</span>
                          <span>·</span>
                          <span>{p.brand}</span>
                        </div>
                      </div>
                      <div className="shrink-0 font-display text-sm font-bold text-primary">
                        {p.price}
                      </div>
                    </button>
                  </li>
                ))}
                <li className="border-t border-border">
                  <button
                    type="button"
                    onClick={() => submitQuery(query)}
                    className="flex w-full items-center justify-between gap-2 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-highlight hover:text-secondary"
                  >
                    <span>Xem tất cả kết quả cho "{query.trim()}"</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </li>
              </ul>
            ) : (
              <div className="px-4 py-8 text-center">
                <div className="text-sm font-semibold text-secondary">
                  Không tìm thấy sản phẩm phù hợp
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Thử từ khóa khác hoặc xem toàn bộ danh mục.
                </div>
                <button
                  type="button"
                  onClick={() => submitQuery(query)}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-highlight hover:text-secondary"
                >
                  Tìm trong danh mục
                </button>
              </div>
            )
          ) : (
            <div className="py-2">
              {recent.length > 0 && (
                <div className="px-4 pb-2 pt-1">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Tìm kiếm gần đây
                    </span>
                    <button
                      type="button"
                      onClick={clearRecent}
                      className="text-[11px] font-semibold text-muted-foreground hover:text-primary"
                    >
                      Xóa
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {recent.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => submitQuery(r)}
                        className="rounded-full border border-border bg-neutral px-3 py-1 text-xs text-secondary hover:border-highlight hover:bg-highlight"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-border px-4 py-3">
                <div className="mb-2 flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5 text-primary" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Tìm kiếm phổ biến
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {TRENDING.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => submitQuery(t)}
                      className="rounded-full border border-border bg-white px-3 py-1 text-xs text-secondary hover:border-highlight hover:bg-highlight"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function highlight(text: string, q: string) {
  const term = q.trim();
  if (!term) return text;
  const idx = text.toLowerCase().indexOf(term.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-highlight/60 text-secondary rounded px-0.5">
        {text.slice(idx, idx + term.length)}
      </mark>
      {text.slice(idx + term.length)}
    </>
  );
}
