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
};

export const products: Product[] = [
  {
    slug: "cau-nang-2-tru-bendpak-xpr-10a",
    name: "Cầu nâng 2 trụ cổng trên Bendpak XPR-10A",
    code: "VMT-CN-2T10",
    spec: "Tải trọng 4.5T · Động cơ 220V · Nâng 1.9m",
    price: "89.500.000₫",
    oldPrice: "98.000.000₫",
    badge: "BÁN CHẠY",
    img: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7fa?auto=format&fit=crop&w=800&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7fa?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=1200&q=75",
    ],
    brand: "BENDPAK",
    origin: "Hoa Kỳ",
    rating: 5,
    reviewCount: 68,
    category: "Cầu nâng",
    description:
      "Cầu nâng 2 trụ cổng trên Bendpak XPR-10A là dòng cầu nâng cao cấp phổ biến nhất tại các gara sửa chữa ô tô. Thiết kế cổng trên chắc chắn, đồng bộ thủy lực êm, an toàn cho kỹ thuật viên thao tác bên dưới gầm xe. Phù hợp xe con, SUV và xe bán tải.",
    features: [
      "Thiết kế cổng trên, không vướng gầm xe",
      "Hộp điều khiển 24V an toàn (tùy chọn)",
      "Động cơ nâng sắt 4.0 Tấn 2 trụ",
      "Con trượt trong thân trụ tùy chọn",
      "Tùy chọn cánh tay 2 dài 3 ngắn",
      "Phần tăng chiều cao 40mm",
    ],
    specs: [
      { label: "Model", value: "XPR-10A" },
      { label: "Sức nâng", value: "4.500 kg" },
      { label: "Chiều cao nâng", value: "1.900 mm" },
      { label: "Chiều cao tối thiểu", value: "125 mm" },
      { label: "Chiều cao tổng thể", value: "2.830 mm" },
      { label: "Chiều rộng tổng thể", value: "3.340 mm" },
      { label: "Chiều rộng giữa các trụ", value: "2.850 mm" },
      { label: "Thời gian nâng", value: "50 giây" },
      { label: "Công suất motor", value: "2.2 kW / 220V" },
      { label: "Xuất xứ", value: "Hoa Kỳ" },
    ],
    accessories: [
      { name: "Cánh tay nâng (2 dài, 2 ngắn)", qty: "4 cái" },
      { name: "Đệm cao su chống trượt", qty: "4 cái" },
      { name: "Hộp điều khiển điện", qty: "1 bộ" },
      { name: "Bộ dây cáp & puly đồng bộ", qty: "1 bộ" },
      { name: "Bơm thủy lực & ống dầu", qty: "1 bộ" },
      { name: "Tài liệu hướng dẫn & phiếu bảo hành", qty: "1 bộ" },
    ],
    warranty: [
      "Bảo hành chính hãng 24 tháng cho kết cấu trụ & xi-lanh thủy lực",
      "Bảo hành 12 tháng cho motor, bơm dầu và hộp điều khiển điện",
      "Miễn phí lắp đặt và hiệu chỉnh tại gara (nội thành Hà Nội/HCM)",
      "Hỗ trợ kỹ thuật 24/7 qua hotline 1900 1234",
      "Đổi mới 1-1 trong 7 ngày đầu nếu lỗi do nhà sản xuất",
    ],
    reviews: [
      {
        name: "Nguyễn Văn Hùng",
        role: "Chủ gara Hùng Auto - Hà Nội",
        rating: 5,
        comment:
          "Cầu nâng chạy rất êm, đã dùng 8 tháng không có lỗi gì. Đội lắp đặt của Vimet chuyên nghiệp, đúng giờ. Rất đáng tiền đầu tư.",
        date: "12/03/2026",
      },
      {
        name: "Trần Minh Tuấn",
        role: "Kỹ thuật trưởng - Gara 3S Tuấn Thành",
        rating: 5,
        comment:
          "Khung chắc chắn, thủy lực nâng lên đều hai bên. Đặc biệt ưng ý phần cổng trên không vướng khi làm gầm xe SUV.",
        date: "28/02/2026",
      },
      {
        name: "Lê Quốc Bảo",
        role: "Chủ đầu tư xưởng dịch vụ",
        rating: 4,
        comment:
          "Sản phẩm tốt, giá hợp lý so với cầu nâng Mỹ nguyên bản. Mong có thêm màu sơn tùy chọn.",
        date: "10/02/2026",
      },
    ],
  },
  {
    slug: "may-chan-doan-launch-x431-pro5",
    name: "Máy chẩn đoán Launch X431 Pro5",
    code: "VMT-DG-X431P5",
    spec: "Đa hãng · WiFi · VCI không dây · Cập nhật online",
    price: "42.800.000₫",
    oldPrice: "45.000.000₫",
    badge: "-5%",
    img: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7d00?auto=format&fit=crop&w=800&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1632823469850-2f77dd9c7d00?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1581092918484-8313ba2a1f04?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1580906855821-2bbd1d6f0c1e?auto=format&fit=crop&w=1200&q=75",
    ],
    brand: "LAUNCH",
    origin: "Trung Quốc",
    rating: 5,
    reviewCount: 142,
    category: "Chẩn đoán",
    description:
      "Launch X431 Pro5 là máy chẩn đoán chuyên nghiệp thế hệ mới, hỗ trợ đầy đủ các hãng xe phổ thông và cao cấp. Kết nối VCI không dây, cập nhật online miễn phí 2 năm, tích hợp đầy đủ các chức năng dịch vụ đặc biệt.",
    features: [
      "Hỗ trợ hơn 150 hãng xe toàn cầu",
      "VCI không dây Bluetooth/WiFi",
      "Cập nhật phần mềm online miễn phí 2 năm",
      "Coding, lập trình ECU, reset đèn dịch vụ",
      "Ghi đồ thị, đọc live data, chụp màn hình",
      "Tablet 10.1 inch Android cấu hình cao",
    ],
    specs: [
      { label: "Model", value: "X431 Pro5" },
      { label: "Màn hình", value: '10.1" IPS Full HD' },
      { label: "CPU", value: "Octa-core 2.0 GHz" },
      { label: "RAM / ROM", value: "4GB / 128GB" },
      { label: "Pin", value: "8.000 mAh" },
      { label: "Kết nối", value: "WiFi, Bluetooth 5.0, USB-C" },
      { label: "Hệ điều hành", value: "Android 10" },
      { label: "Giao thức hỗ trợ", value: "CAN FD, DoIP, J2534" },
      { label: "Ngôn ngữ", value: "Tiếng Việt / Anh / Trung" },
      { label: "Xuất xứ", value: "Launch - Trung Quốc" },
    ],
    accessories: [
      { name: "Máy tính bảng X431 Pro5", qty: "1 cái" },
      { name: "VCI Smartlink C không dây", qty: "1 cái" },
      { name: "Dây cáp OBD-II chính", qty: "1 cái" },
      { name: "Bộ đầu chuyển đổi đa hãng", qty: "1 bộ (12 đầu)" },
      { name: "Sạc nhanh 18W + cáp USB-C", qty: "1 bộ" },
      { name: "Vali nhôm chống va đập", qty: "1 cái" },
    ],
    warranty: [
      "Bảo hành chính hãng 12 tháng toàn bộ thiết bị",
      "Cập nhật phần mềm miễn phí 24 tháng",
      "Hỗ trợ kỹ thuật và đào tạo sử dụng miễn phí",
      "Đổi máy mới nếu lỗi phần cứng trong 30 ngày đầu",
      "Sửa chữa 1 đổi 1 tại trung tâm bảo hành Vimet",
    ],
    reviews: [
      {
        name: "Phạm Đức Long",
        role: "Kỹ thuật viên ô tô",
        rating: 5,
        comment:
          "Máy nhận xe rất nhanh, đặc biệt là các dòng xe châu Âu. Coding và lập trình ECU mượt. Đáng đồng tiền.",
        date: "05/04/2026",
      },
      {
        name: "Đỗ Thành Trung",
        role: "Chủ gara chuyên Mercedes",
        rating: 5,
        comment: "Hỗ trợ DoIP cho các dòng Mercedes đời mới rất tốt. Tiếng Việt đầy đủ, dễ dùng.",
        date: "18/03/2026",
      },
    ],
  },
  {
    slug: "may-ra-vao-lop-corghi-a2030",
    name: "Máy ra vào lốp tự động Corghi A2030",
    code: "VMT-RL-A2030",
    spec: "Phù hợp lốp 10-24 inch · Điện 3 pha · Tay tháo bằng khí",
    price: "64.200.000₫",
    oldPrice: null,
    badge: "MỚI",
    img: "https://images.unsplash.com/photo-1619221882220-947b3d3c8861?auto=format&fit=crop&w=800&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1619221882220-947b3d3c8861?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=75",
    ],
    brand: "CORGHI",
    origin: "Ý",
    rating: 5,
    reviewCount: 54,
    category: "Ra vào lốp",
    description:
      "Máy ra vào lốp tự động Corghi A2030 - nhập khẩu nguyên chiếc từ Ý. Mâm xoay tự động kẹp từ 10 đến 24 inch, tay tháo vận hành bằng khí nén, thao tác nhanh và an toàn cho cả lốp không săm runflat.",
    features: [
      "Mâm xoay tự động kẹp lốp 10-24 inch",
      "Tay tháo bằng khí nén, không làm xước mâm",
      "Động cơ 3 pha vận hành êm, bền bỉ",
      "Tháo được lốp runflat và lốp dày",
      "Bàn đạp điều khiển 4 chức năng",
      "Khung thép sơn tĩnh điện chống gỉ",
    ],
    specs: [
      { label: "Model", value: "A2030" },
      { label: "Đường kính mâm kẹp", value: "10 - 24 inch" },
      { label: "Bề rộng lốp tối đa", value: "355 mm" },
      { label: "Đường kính lốp tối đa", value: "1.100 mm" },
      { label: "Áp suất khí nén", value: "8 - 10 bar" },
      { label: "Mô-men xoắn mâm", value: "1.200 Nm" },
      { label: "Công suất động cơ", value: "1.1 kW / 380V 3 pha" },
      { label: "Trọng lượng", value: "265 kg" },
      { label: "Xuất xứ", value: "Corghi - Ý" },
    ],
    accessories: [
      { name: "Thân máy ra vào lốp A2030", qty: "1 cái" },
      { name: "Tay tháo lốp khí nén", qty: "1 cái" },
      { name: "Bộ 4 ngàm kẹp mâm", qty: "1 bộ" },
      { name: "Ống dẫn khí & van chỉnh áp", qty: "1 bộ" },
      { name: "Dụng cụ ra vào lốp cầm tay", qty: "1 bộ" },
    ],
    warranty: [
      "Bảo hành chính hãng 24 tháng",
      "Miễn phí vận chuyển & lắp đặt toàn quốc",
      "Hỗ trợ kỹ thuật tại chỗ trong vòng 24h",
      "Phụ tùng thay thế chính hãng luôn sẵn kho",
    ],
    reviews: [
      {
        name: "Vũ Mạnh Cường",
        role: "Chủ tiệm lốp - Bắc Ninh",
        rating: 5,
        comment: "Máy khỏe, tháo lốp runflat ngon lành. Đầu tư một lần dùng cả chục năm.",
        date: "20/03/2026",
      },
    ],
  },
  {
    slug: "may-nen-khi-fusheng-sa-15a",
    name: "Máy nén khí trục vít Fusheng SA-15A 15HP",
    code: "VMT-KN-SA15A",
    spec: "11kW · 1.7m³/min · Áp suất 8 bar · Tích hợp sấy khí",
    price: "78.900.000₫",
    oldPrice: "82.000.000₫",
    badge: "HOT",
    img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=1200&q=75",
    ],
    brand: "FUSHENG",
    origin: "Đài Loan",
    rating: 4,
    reviewCount: 37,
    category: "Máy nén khí",
    description:
      "Máy nén khí trục vít Fusheng SA-15A công suất 15HP - giải pháp khí nén ổn định cho gara vừa và lớn. Động cơ IE3 tiết kiệm điện, tích hợp sấy khí khô, vận hành êm ái chỉ 68dB.",
    features: [
      "Động cơ trục vít Fusheng chính hãng",
      "Công suất 11kW / 15HP, lưu lượng 1.7 m³/min",
      "Áp suất làm việc 8 bar ổn định",
      "Tích hợp sấy khí khô loại bỏ hơi ẩm",
      "Độ ồn thấp chỉ 68 dB(A)",
      "Màn hình LCD hiển thị thông số vận hành",
    ],
    specs: [
      { label: "Model", value: "SA-15A" },
      { label: "Công suất", value: "11 kW / 15 HP" },
      { label: "Lưu lượng khí", value: "1.7 m³/min" },
      { label: "Áp suất làm việc", value: "8 bar" },
      { label: "Điện áp", value: "380V / 3 pha / 50Hz" },
      { label: "Độ ồn", value: "68 dB(A)" },
      { label: "Kích thước (DxRxC)", value: "1.150 x 750 x 1.100 mm" },
      { label: "Trọng lượng", value: "310 kg" },
      { label: "Xuất xứ", value: "Fusheng - Đài Loan" },
    ],
    accessories: [
      { name: "Máy nén khí trục vít SA-15A", qty: "1 cái" },
      { name: "Máy sấy khí khô đồng bộ", qty: "1 cái" },
      { name: "Bộ lọc khí 3 cấp", qty: "1 bộ" },
      { name: "Ống dẫn khí cao áp 3m", qty: "1 cuộn" },
      { name: "Dầu bôi trơn chuyên dụng 20L", qty: "1 can" },
    ],
    warranty: [
      "Bảo hành đầu nén trục vít 36 tháng",
      "Bảo hành toàn máy 24 tháng",
      "Bảo trì định kỳ miễn phí trong năm đầu",
      "Hỗ trợ kỹ thuật 24/7",
    ],
    reviews: [
      {
        name: "Nguyễn Thành Đạt",
        role: "Quản lý xưởng dịch vụ ô tô",
        rating: 4,
        comment: "Máy chạy êm, ổn định. Lắp đặt hơi chậm nhưng kỹ thuật viên nhiệt tình.",
        date: "15/02/2026",
      },
    ],
  },
];

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
