export type CategoryDef = {
  slug: string;
  label: string;
  desc: string;
  img: string;
  count: number;
};

export const categoryList: CategoryDef[] = [
  {
    slug: "cau-nang-o-to",
    label: "Cầu nâng ô tô",
    desc: "Cầu nâng 2 trụ, 4 trụ, cắt kéo từ 3.5T đến 7T",
    img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    count: 45,
  },
  {
    slug: "may-chan-doan",
    label: "Máy chẩn đoán",
    desc: "Máy đọc lỗi đa năng, thiết bị scan OBD chuyên sâu",
    img: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7fc?w=800&q=80",
    count: 30,
  },
  {
    slug: "may-ra-vao-lop",
    label: "Máy ra vào lốp",
    desc: "Máy tháo lắp lốp tự động, cân bằng động chính xác",
    img: "https://images.unsplash.com/photo-1600880292210-859ad14d3387?w=800&q=80",
    count: 20,
  },
  {
    slug: "may-nen-khi",
    label: "Máy nén khí",
    desc: "Máy nén piston, trục vít công suất 2HP - 50HP",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    count: 35,
  },
  {
    slug: "dung-cu-gara",
    label: "Dụng cụ gara",
    desc: "Tủ đồ nghề, súng vặn ốc, cờ lê lực tiêu chuẩn",
    img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
    count: 500,
  },
  {
    slug: "phu-tung-vat-tu",
    label: "Phụ tùng & vật tư",
    desc: "Dầu nhớt, lọc gió, má phanh chính hãng OEM",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    count: 1000,
  },
  {
    slug: "thiet-bi-rua-xe",
    label: "Thiết bị rửa xe",
    desc: "Máy rửa xe áp lực cao, máy hút bụi chuyên dụng",
    img: "https://images.unsplash.com/photo-1605164599901-db7f68c4b3a4?w=800&q=80",
    count: 25,
  },
  {
    slug: "thiet-bi-son-say",
    label: "Thiết bị sơn sấy",
    desc: "Phòng sơn, đèn sấy hồng ngoại, súng phun sơn",
    img: "https://images.unsplash.com/photo-1632823469850-1b7b1e8b7b8e?w=800&q=80",
    count: 15,
  },
];

// Map product `category` field → category slug
export const productCategoryToSlug: Record<string, string> = {
  "Cầu nâng": "cau-nang-o-to",
  "Chẩn đoán": "may-chan-doan",
  "Ra vào lốp": "may-ra-vao-lop",
  "Máy nén khí": "may-nen-khi",
};

export function getCategoryBySlug(slug: string): CategoryDef | undefined {
  return categoryList.find((c) => c.slug === slug);
}
