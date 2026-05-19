/**
 * Đồng bộ dữ liệu từ db.json (json-server) → src/data/*.ts
 *
 * Cách dùng:
 *   1. Chạy json-server:   bun run api
 *   2. POST/PUT/DELETE dữ liệu mới qua REST API (xem README)
 *   3. Chạy:               bun run sync
 *
 * Script sẽ ghi đè src/data/products.ts, categories.ts, news.ts, videos.ts
 * dựa trên nội dung mới nhất trong db.json.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "..");
const DB_PATH = path.join(ROOT, "db.json");
const DATA_DIR = path.join(ROOT, "src", "data");

type Db = {
  products: unknown[];
  categories: unknown[];
  news: unknown[];
  videos: unknown[];
};

if (!fs.existsSync(DB_PATH)) {
  console.error("❌ Không tìm thấy db.json ở", DB_PATH);
  process.exit(1);
}

const db: Db = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));

function writeFile(file: string, content: string) {
  const full = path.join(DATA_DIR, file);
  fs.writeFileSync(full, content);
  console.log(`✓ ${file}`);
}

const json = (v: unknown) => JSON.stringify(v, null, 2);

writeFile(
  "products.ts",
  `// AUTO-GENERATED bởi scripts/sync-data.ts — chỉnh sửa qua REST API rồi chạy: bun run sync
export type Product = {
  slug: string;
  name: string;
  code: string;
  spec: string;
  price: string;
  oldPrice: string | null;
  badge: string;
  img: string;
  gallery: string[];
  brand: string;
  origin: string;
  rating: number;
  reviewCount: number;
  category: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  accessories: { name: string; qty: string }[];
  warranty: string[];
  reviews: { name: string; role: string; rating: number; comment: string; date: string }[];
  id?: string;
};

export const products: Product[] = ${json(db.products)};

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, limit);
}
`,
);

writeFile(
  "categories.ts",
  `// AUTO-GENERATED bởi scripts/sync-data.ts — chỉnh sửa qua REST API rồi chạy: bun run sync
export type CategoryDef = {
  slug: string;
  label: string;
  desc: string;
  img: string;
  count: number;
};

export const categoryList: CategoryDef[] = ${json(db.categories)};

// Map product \`category\` field → category slug
export const productCategoryToSlug: Record<string, string> = {
  "Cầu nâng": "cau-nang-o-to",
  "Chẩn đoán": "may-chan-doan",
  "Ra vào lốp": "may-ra-vao-lop",
  "Máy nén khí": "may-nen-khi",
};

export function getCategoryBySlug(slug: string): CategoryDef | undefined {
  return categoryList.find((c) => c.slug === slug);
}
`,
);

writeFile(
  "news.ts",
  `// AUTO-GENERATED bởi scripts/sync-data.ts — chỉnh sửa qua REST API rồi chạy: bun run sync
export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  publishedAt: string;
  readMinutes: number;
  author: string;
  image: string;
  href: string;
  tags?: string[];
  featured?: boolean;
};

export const newsArticles: NewsArticle[] = ${json(db.news)};
`,
);

writeFile(
  "videos.ts",
  `// AUTO-GENERATED bởi scripts/sync-data.ts — chỉnh sửa qua REST API rồi chạy: bun run sync
export type VideoItem = {
  slug: string;
  title: string;
  brand: string;
  category: string;
  youtubeId: string;
  thumbnail: string;
  sourceUrl: string;
};

export const videos: VideoItem[] = ${json(db.videos)};
`,
);

console.log(
  `\n✅ Đồng bộ xong: ${db.products.length} sản phẩm · ${db.categories.length} danh mục · ${db.news.length} tin · ${db.videos.length} video`,
);
