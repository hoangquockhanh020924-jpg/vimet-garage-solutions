import { Link } from "@tanstack/react-router";
import { ShoppingCart, Eye, Heart, Trash2, Truck, Star, Flame } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart, parsePrice } from "@/lib/cart";
import { useFavorites } from "@/lib/favorites";

type Props = {
  p: Product;
  /** Shows a remove (trash) button instead of the favorite heart. */
  removable?: boolean;
};

export function ProductCard({ p, removable = false }: Props) {
  const { addItem } = useCart();
  const { isFavorite, toggle } = useFavorites();
  const liked = isFavorite(p.slug);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]">
      <Link
        to="/san-pham/$slug"
        params={{ slug: p.slug }}
        className="relative aspect-[4/3] overflow-hidden bg-white block"
      >
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-contain object-center p-0 md:p-1 transition-transform duration-500 group-hover:scale-105"
        />
        {p.badge && (
          <span className="absolute top-3 left-3 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            {p.badge}
          </span>
        )}
        <span
          aria-label="Xem nhanh"
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-secondary opacity-0 shadow-md transition-opacity group-hover:opacity-100"
        >
          <Eye className="h-4 w-4" />
        </span>
      </Link>

      {/* Favorite / remove icon */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          toggle(p.slug, p.name);
        }}
        aria-label={
          removable
            ? "Bỏ khỏi yêu thích"
            : liked
            ? "Bỏ khỏi yêu thích"
            : "Thêm vào yêu thích"
        }
        className={`absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-colors ${
          liked
            ? "text-primary"
            : "text-secondary hover:text-primary"
        }`}
      >
        {removable ? (
          <Trash2 className="h-4 w-4" />
        ) : (
          <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
        )}
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Mã: {p.code}
        </div>
        <Link
          to="/san-pham/$slug"
          params={{ slug: p.slug }}
          className="mt-1.5 line-clamp-2 font-display text-base font-bold leading-snug text-secondary group-hover:text-primary transition-colors min-h-[2.75rem]"
        >
          {p.name}
        </Link>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-lg font-bold text-primary">{p.price}</span>
          {p.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">{p.oldPrice}</span>
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() =>
              addItem({
                slug: p.slug,
                name: p.name,
                code: p.code,
                img: p.img,
                price: parsePrice(p.price),
                priceLabel: p.price,
              })
            }
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2.5 text-xs font-semibold text-white hover:bg-highlight hover:text-secondary transition-colors"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Đặt mua
          </button>
          <Link
            to="/san-pham/$slug"
            params={{ slug: p.slug }}
            className="rounded-md border border-border px-3 py-2.5 text-xs font-semibold text-secondary hover:border-highlight hover:bg-highlight hover:text-secondary transition-colors"
          >
            Chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProductListCard({ p }: { p: Product }) {
  const { addItem } = useCart();
  const { isFavorite, toggle } = useFavorites();
  const liked = isFavorite(p.slug);

  return (
    <article className="group grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-5 overflow-hidden rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]">
      <Link
        to="/san-pham/$slug"
        params={{ slug: p.slug }}
        className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-lg bg-white block"
      >
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-contain object-center p-0 md:p-1 transition-transform duration-500 group-hover:scale-105"
        />
        {p.badge && (
          <span className="absolute top-3 left-3 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            {p.badge}
          </span>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggle(p.slug, p.name);
          }}
          aria-label={liked ? "Bỏ khỏi yêu thích" : "Thêm vào yêu thích"}
          className={`absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-colors ${
            liked ? "text-primary" : "text-secondary hover:text-primary"
          }`}
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
        </button>
      </Link>

      <div className="flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          <span>
            Mã: {p.code} · {p.brand} · {p.origin}
          </span>
          <span className="inline-flex items-center gap-1 text-highlight">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(p.rating) ? "fill-highlight" : "fill-none text-border"
                }`}
              />
            ))}
            <span className="text-muted-foreground normal-case font-medium ml-1">
              ({p.reviewCount})
            </span>
          </span>
        </div>
        <Link
          to="/san-pham/$slug"
          params={{ slug: p.slug }}
          className="mt-1.5 font-display text-lg font-bold leading-snug text-secondary group-hover:text-primary transition-colors"
        >
          {p.name}
        </Link>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.spec}</p>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 hidden md:block">
          {p.description}
        </p>

        <div className="mt-auto pt-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold text-primary">{p.price}</span>
              {p.oldPrice && (
                <span className="text-sm text-muted-foreground line-through">{p.oldPrice}</span>
              )}
            </div>
            <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
              <Truck className="h-3.5 w-3.5" />
              Miễn phí giao & lắp đặt
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() =>
                addItem({
                  slug: p.slug,
                  name: p.name,
                  code: p.code,
                  img: p.img,
                  price: parsePrice(p.price),
                  priceLabel: p.price,
                })
              }
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-xs font-semibold text-white hover:bg-highlight hover:text-secondary transition-colors"
            >
              <ShoppingCart className="h-3.5 w-3.5" />
              Đặt mua ngay
            </button>
            <Link
              to="/san-pham/$slug"
              params={{ slug: p.slug }}
              className="rounded-md border border-border px-4 py-2.5 text-xs font-semibold text-secondary hover:border-highlight hover:bg-highlight hover:text-secondary transition-colors"
            >
              Chi tiết
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
