export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  /** ISO date for sorting */
  publishedAt: string;
  readMinutes: number;
  author: string;
  image: string;
  href: string;
  tags?: string[];
  featured?: boolean;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "he-thong-thuy-luc",
    title: "Thủy lực: Nguyên lý và cấu tạo của hệ thống thủy lực",
    excerpt:
      "Tổng quan nguyên lý làm việc, các thành phần chính (bơm, van, xy lanh, dầu thủy lực) và ứng dụng của hệ thống thủy lực trong cầu nâng, máy ép, thiết bị gara ô tô.",
    category: "Kỹ thuật",
    date: "26/04/2026",
    publishedAt: "2026-04-26",
    readMinutes: 8,
    author: "Vimet Tech Team",
    image: "https://vimet.com.vn/wp-content/uploads/2026/04/31_11zon-280x180.webp",
    href: "https://vimet.com.vn/he-thong-thuy-luc/",
    tags: ["Thủy lực", "Cầu nâng", "Bảo trì"],
    featured: true,
  },
  {
    slug: "cau-nang-o-to-pho-bien-nhat",
    title: "5+ cầu nâng ô tô phổ biến nhất hiện nay",
    excerpt:
      "Tổng hợp các dòng cầu nâng 1 trụ, 2 trụ, 4 trụ, cắt kéo được nhiều gara lựa chọn, kèm ưu nhược điểm và gợi ý ứng dụng cho từng quy mô xưởng.",
    category: "Cầu nâng ô tô",
    date: "23/04/2026",
    publishedAt: "2026-04-23",
    readMinutes: 7,
    author: "Vimet Sales Team",
    image: "https://vimet.com.vn/wp-content/uploads/2026/04/12_11zon-280x180.webp",
    href: "https://vimet.com.vn/cau-nang-o-to-pho-bien-nhat/",
    tags: ["Cầu nâng", "Gara", "Mua sắm"],
    featured: true,
  },
  {
    slug: "may-nen-khi-bi-nong",
    title: "Máy nén khí bị nóng: Nguyên nhân và cách xử lý hiệu quả",
    excerpt:
      "Phân tích các nguyên nhân khiến máy nén khí quá nhiệt – từ dầu bôi trơn, lọc gió đến tải vận hành – và quy trình khắc phục chuẩn để đảm bảo tuổi thọ máy.",
    category: "Khí nén",
    date: "21/04/2026",
    publishedAt: "2026-04-21",
    readMinutes: 6,
    author: "Vimet Service",
    image: "https://vimet.com.vn/wp-content/uploads/2026/04/Thiet-ke-chua-co-ten-2-280x180.png",
    href: "https://vimet.com.vn/may-nen-khi-bi-nong-nguyen-nhan-va-cach-xu-ly/",
    tags: ["Máy nén khí", "Sửa chữa"],
  },
  {
    slug: "cau-nang-cat-keo",
    title: "Cầu nâng cắt kéo: Cấu tạo và nguyên lý hoạt động",
    excerpt:
      "Giải thích chi tiết cấu trúc cơ khí, cơ chế nâng hạ thủy lực và những điểm cần lưu ý khi chọn cầu nâng cắt kéo cho gara dịch vụ nhanh.",
    category: "Cầu nâng ô tô",
    date: "20/04/2026",
    publishedAt: "2026-04-20",
    readMinutes: 5,
    author: "Vimet Tech Team",
    image: "https://vimet.com.vn/wp-content/uploads/2026/04/HL-6050Y-280x180.jpg",
    href: "https://vimet.com.vn/cau-nang-cat-keo-cau-tao-nguyen-ly-hoat-dong/",
    tags: ["Cầu nâng", "Cắt kéo"],
  },
  {
    slug: "quy-trinh-van-hanh-may-nen-khi",
    title: "Quy trình vận hành máy nén khí đúng chuẩn",
    excerpt:
      "Quy trình khởi động, vận hành và kiểm soát an toàn cho hệ thống máy nén khí trong gara, kèm checklist hằng ngày dành cho kỹ thuật viên.",
    category: "Khí nén",
    date: "15/04/2026",
    publishedAt: "2026-04-15",
    readMinutes: 6,
    author: "Vimet Service",
    image: "https://vimet.com.vn/wp-content/uploads/2026/04/Thiet-ke-chua-co-ten-19-280x180.png",
    href: "https://vimet.com.vn/quy-trinh-van-hanh-may-nen-khi/",
    tags: ["Máy nén khí", "Vận hành"],
  },
  {
    slug: "nguyen-ly-hoat-dong-may-nen-khi",
    title: "Nguyên lý hoạt động của máy nén khí trục vít và piston",
    excerpt:
      "So sánh cấu trúc, hiệu suất và nguyên lý giữa hai dòng máy nén khí trục vít và piston để chọn đúng thiết bị cho nhu cầu sử dụng.",
    category: "Khí nén",
    date: "12/04/2026",
    publishedAt: "2026-04-12",
    readMinutes: 7,
    author: "Vimet Tech Team",
    image:
      "https://vimet.com.vn/wp-content/uploads/2026/04/So-sanh-may-nen-khi-truc-vit-va-piston-2.jpg-1-280x180.webp",
    href: "https://vimet.com.vn/nguyen-ly-hoat-dong-may-nen-khi/",
    tags: ["Máy nén khí", "Kỹ thuật"],
  },
  {
    slug: "cach-su-dung-may-ra-vao-lop",
    title: "Hướng dẫn sử dụng máy ra vào lốp đúng cách",
    excerpt:
      "Các bước chuẩn để vận hành máy ra vào lốp an toàn, hạn chế hư hại mâm và lốp – kèm lưu ý cho từng loại xe du lịch và xe tải nhẹ.",
    category: "Lốp xe",
    date: "08/04/2026",
    publishedAt: "2026-04-08",
    readMinutes: 5,
    author: "Vimet Service",
    image: "https://vimet.com.vn/wp-content/uploads/2026/04/Thiet-ke-chua-co-ten-15-280x180.png",
    href: "https://vimet.com.vn/cach-su-dung-may-ra-vao-lop/",
    tags: ["Lốp xe", "Hướng dẫn"],
  },
  {
    slug: "dung-cu-cam-tay-gara",
    title: "Bộ dụng cụ cầm tay không thể thiếu cho gara ô tô",
    excerpt:
      "Danh sách dụng cụ cầm tay cần thiết cho xưởng dịch vụ: tuýp, cờ lê, kìm, súng vặn bu lông và phụ kiện đi kèm – tiêu chí chọn mua chuẩn nghề.",
    category: "Dụng cụ",
    date: "05/04/2026",
    publishedAt: "2026-04-05",
    readMinutes: 6,
    author: "Vimet Sales Team",
    image: "https://vimet.com.vn/wp-content/uploads/2026/04/Thiet-ke-chua-co-ten-6-1-280x180.png",
    href: "https://vimet.com.vn/dung-cu-cam-tay-gara/",
    tags: ["Dụng cụ", "Gara"],
  },
];

export const newsCategories = [
  "Tất cả",
  "Kỹ thuật",
  "Cầu nâng ô tô",
  "Khí nén",
  "Lốp xe",
  "Dụng cụ",
];
