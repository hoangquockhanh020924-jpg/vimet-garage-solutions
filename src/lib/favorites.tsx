import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";

type FavoritesContextValue = {
  favorites: string[];
  isFavorite: (slug: string) => boolean;
  toggle: (slug: string, name?: string) => void;
  count: number;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);
const STORAGE_KEY = "vimet-favorites-v1";

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) setFavorites(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites, hydrated]);

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favorites,
      count: favorites.length,
      isFavorite: (slug) => favorites.includes(slug),
      toggle: (slug, name) => {
        setFavorites((prev) => {
          if (prev.includes(slug)) {
            toast("Đã bỏ khỏi yêu thích", { description: name });
            return prev.filter((s) => s !== slug);
          }
          toast.success("Đã thêm vào yêu thích", { description: name });
          return [...prev, slug];
        });
      },
    }),
    [favorites],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
