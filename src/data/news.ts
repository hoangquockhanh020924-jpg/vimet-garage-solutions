export type NewsArticle = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  href: string;
};

export const newsArticles: NewsArticle[] = [
  {
    title: "Thủy lực: Nguyên lý và cấu tạo của hệ thống thủy lực",
    excerpt:
      "Tổng quan nguyên lý làm việc, các thành phần chính và ứng dụng của hệ thống thủy lực trong thiết bị gara.",
    category: "Kỹ thuật",
    date: "26/04/2026",
    image: "https://vimet.com.vn/wp-content/uploads/2026/04/31_11zon-280x180.webp",
    href: "https://vimet.com.vn/he-thong-thuy-luc/",
  },
  {
    title: "5+ cầu nâng ô tô phổ biến nhất hiện nay",
    excerpt:
      "Bài viết tổng hợp các dòng cầu nâng được nhiều gara lựa chọn, kèm ưu điểm và gợi ý ứng dụng thực tế.",
    category: "Cầu nâng ô tô",
    date: "23/04/2026",
    image: "https://vimet.com.vn/wp-content/uploads/2026/04/12_11zon-280x180.webp",
    href: "https://vimet.com.vn/cau-nang-o-to-pho-bien-nhat/",
  },
  {
    title: "Máy nén khí bị nóng: Nguyên nhân và cách xử lý hiệu quả",
    excerpt:
      "Nhận diện các nguyên nhân khiến máy nén khí quá nhiệt và cách khắc phục để đảm bảo vận hành ổn định.",
    category: "Khí nén",
    date: "21/04/2026",
    image: "https://vimet.com.vn/wp-content/uploads/2026/04/Thiet-ke-chua-co-ten-2-280x180.png",
    href: "https://vimet.com.vn/may-nen-khi-bi-nong-nguyen-nhan-va-cach-xu-ly/",
  },
  {
    title: "Cầu nâng cắt kéo: Cấu tạo và nguyên lý hoạt động",
    excerpt:
      "Giải thích chi tiết cấu trúc, cơ chế nâng hạ và những điểm cần lưu ý khi chọn cầu nâng cắt kéo.",
    category: "Cầu nâng ô tô",
    date: "20/04/2026",
    image: "https://vimet.com.vn/wp-content/uploads/2026/04/HL-6050Y-280x180.jpg",
    href: "https://vimet.com.vn/cau-nang-cat-keo-cau-tao-nguyen-ly-hoat-dong/",
  },
  {
    title: "Quy trình vận hành máy nén khí",
    excerpt:
      "Quy trình cơ bản để khởi động, vận hành và kiểm soát an toàn cho hệ thống máy nén khí trong gara.",
    category: "Khí nén",
    date: "Tháng 4/2026",
    image: "https://vimet.com.vn/wp-content/uploads/2026/04/Thiet-ke-chua-co-ten-19-280x180.png",
    href: "https://vimet.com.vn/quy-trinh-van-hanh-may-nen-khi/",
  },
  {
    title: "Nguyên lý hoạt động của máy nén khí",
    excerpt:
      "So sánh cấu trúc và nguyên lý giữa các dòng máy nén khí trục vít và piston để chọn đúng nhu cầu.",
    category: "Khí nén",
    date: "Tháng 4/2026",
    image:
      "https://vimet.com.vn/wp-content/uploads/2026/04/So-sanh-may-nen-khi-truc-vit-va-piston-2.jpg-1-280x180.webp",
    href: "https://vimet.com.vn/nguyen-ly-hoat-dong-may-nen-khi/",
  },
  {
    title: "Cách sử dụng máy ra vào lốp",
    excerpt:
      "Hướng dẫn sử dụng máy ra vào lốp đúng cách, an toàn và hạn chế hư hại mâm lốp khi thao tác.",
    category: "Lốp xe",
    date: "Tháng 4/2026",
    image: "https://vimet.com.vn/wp-content/uploads/2026/04/Thiet-ke-chua-co-ten-15-280x180.png",
    href: "https://vimet.com.vn/cach-su-dung-may-ra-vao-lop/",
  },
  {
    title: "Dụng cụ cầm tay cho gara ô tô",
    excerpt:
      "Nhóm dụng cụ cầm tay cần thiết cho xưởng dịch vụ: tuýp, cờ lê, kìm, súng vặn bu lông và phụ kiện liên quan.",
    category: "Dụng cụ",
    date: "Tháng 4/2026",
    image: "https://vimet.com.vn/wp-content/uploads/2026/04/Thiet-ke-chua-co-ten-6-1-280x180.png",
    href: "https://vimet.com.vn/dung-cu-cam-tay-gara/",
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
