import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";

export type CartItem = {
  slug: string;
  name: string;
  code: string;
  img: string;
  price: number;
  priceLabel: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (p: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "vimet-cart-v1";

export function parsePrice(s: string): number {
  return parseInt(s.replace(/[^\d]/g, ""), 10) || 0;
}

export function formatPrice(n: number): string {
  return n.toLocaleString("vi-VN") + "₫";
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((s, i) => s + i.qty, 0);
    const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

    return {
      items,
      count,
      subtotal,
      addItem: (p, qty = 1) => {
        setItems((prev) => {
          const idx = prev.findIndex((x) => x.slug === p.slug);
          if (idx >= 0) {
            const next = [...prev];
            next[idx] = { ...next[idx], qty: next[idx].qty + qty };
            return next;
          }
          return [...prev, { ...p, qty }];
        });
        toast.success("Đã thêm vào giỏ hàng", {
          description: p.name,
        });
      },
      removeItem: (slug) => {
        setItems((prev) => prev.filter((x) => x.slug !== slug));
      },
      updateQty: (slug, qty) => {
        setItems((prev) =>
          prev.map((x) => (x.slug === slug ? { ...x, qty: Math.max(1, qty) } : x)),
        );
      },
      clear: () => setItems([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
