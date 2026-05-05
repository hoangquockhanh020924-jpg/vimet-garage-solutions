## Goal

Nâng cấp trang `/video` để hiển thị các video thật từ vimet.com.vn/video, lấy URL YouTube gốc, cho phép xem/phát video trực tiếp ngay trên web (modal player), kèm tìm kiếm, lọc danh mục. Đồng thời sửa các lỗi build TypeScript đang chặn.

## 1. Thu thập dữ liệu video gốc

Mỗi trang chi tiết video trên vimet (ví dụ `/video-huong-dan/<slug>/`) chứa thẻ:
```
<div class="mona-content-video" data-mfp-src="https://www.youtube.com/watch?v=KFvRntD1dXE">
```
→ chính là URL YouTube gốc.

Trong default mode sẽ chạy 1 script Python lấy 11 video từ trang `https://vimet.com.vn/video/`:
- Parse danh sách video trên trang chính → lấy slug, tiêu đề, ảnh thumbnail.
- Fetch từng trang chi tiết → trích `data-mfp-src` → lấy YouTube videoId.
- Xuất JSON cứng vào `src/data/videos.ts`.

Danh sách video dự kiến (đã thấy ở trang chủ video):
1. GESIPA – Hộp dụng cụ kìm tán đinh rive 1435457 NIETBOX  *(YouTube: KFvRntD1dXE — đã xác nhận)*
2. GESIPA – Súng rút rive bằng Pin FIREFOX® 2
3. TOPTUL – Bộ đầu tuýp 3/8″ 35 chi tiết
4. TOPTUL – Bộ Cờ Lê Vòng Miệng Tự Động GAAI1003
5. TOPTUL – Bộ tuýp đầu 3/4″ 21 chi tiết GCAI2102
6. TOPTUL – Bộ dụng cụ cầm tay 1/4″ & 1/2″ 150PCS GCAI150R
7. TOPTUL – Bộ Dụng Cụ Cảo Xích JGAI1304
8. TOPTUL – Bộ Tarô Ren 40PCS JGAI4001
9. TOPTUL – Súng rút rive KARA0205
10. TOPTUL – Bộ Đầu Bi Chữ L 9 Món GZC0903
11. ROBINAIR – Bơm Hút Chân Không 2 Cấp 15121A
12. TOPTUL – Súng vặn tay ngang 3/8″ KAAF1210 & Súng tua vít Pin KPDB0803

Mỗi video sẽ lưu: `id`, `slug`, `title`, `category` (suy ra từ thương hiệu/loại: Dụng cụ cầm tay, Súng rive, Khí nén…), `brand`, `youtubeId`, `thumbnail` (dùng ảnh Vimet hoặc fallback `https://i.ytimg.com/vi/<id>/hqdefault.jpg`), `sourceUrl`.

## 2. Cấu trúc dữ liệu

Tạo `src/data/videos.ts`:
```ts
export type VideoItem = {
  id: string;          // youtubeId
  slug: string;
  title: string;
  brand: string;       // "TOPTUL" | "GESIPA" | ...
  category: string;    // nhóm Vimet đặt
  thumbnail: string;
  sourceUrl: string;   // URL bài gốc trên vimet.com.vn
};
export const videos: VideoItem[] = [ /* 11–12 mục */ ];
export const videoCategories = ["Tất cả", "TOPTUL", "GESIPA", "ROBINAIR", ...];
```

## 3. UI trang `/video`

Viết lại `src/routes/video.tsx`:

- Hero giữ phong cách hiện tại (gradient đỏ, breadcrumb, tiêu đề "Video hướng dẫn & sản phẩm").
- Thanh điều khiển:
  - Ô tìm kiếm theo tiêu đề.
  - Tabs/chip lọc theo `brand` (Tất cả / TOPTUL / GESIPA / ROBINAIR).
- Grid 3 cột (sm:2, lg:3) thẻ video:
  - Thumbnail + nút Play tròn ở giữa.
  - Badge brand + badge "YouTube".
  - Tiêu đề 2 dòng, link "Xem chi tiết tại Vimet" (mở `sourceUrl` ở tab mới — giữ ref nguồn).
- Click vào thẻ → mở **Dialog (shadcn `dialog.tsx`)** chứa `<iframe src="https://www.youtube.com/embed/<id>?autoplay=1&rel=0" allowfullscreen>` với `aspect-video`.
- State: `useState` lưu video đang phát + filter + search.
- Empty state khi filter không có kết quả.
- SEO `head()` với title/description riêng.

Không cần thêm route động — phát ngay trong modal.

## 4. Sửa lỗi build TypeScript

Các lỗi implicit any & unknown cần khắc phục trong:

**`src/routes/danh-muc.$slug.tsx`**
- Dòng 107 `.map((p) => …)` → khai báo type cho `p` (dùng `Product` từ `@/data/products` hoặc thêm generic cho mảng).
- Dòng 287–303: vòng map trên `tags`/`features` đang trả `unknown`. Khai báo type rõ ràng cho mảng (`string[]`) tại nguồn dữ liệu hoặc cast khi dùng.

**`src/routes/san-pham.$slug.tsx`**
- Dòng 147 `.map((img, i) => …)` → annotate `(img: string, i: number)`.
- Dòng 360 `.map((r) => …)` → annotate type review.
- Dòng 409 `.map((p) => …)` → annotate type `Product`.

Sẽ mở các file để xác định kiểu chính xác trước khi sửa, không thay đổi logic.

## 5. Out of scope

- Không tạo trang chi tiết riêng cho từng video.
- Không lưu video vào DB.
- Không tải video về máy chủ — chỉ embed YouTube.

## Technical notes

- YouTube embed: `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`.
- Dùng `Dialog` của shadcn (đã có), `aspect-video` (Tailwind).
- Lazy thumbnail (`loading="lazy"`), giữ thumbnail Vimet để không 403 hot-link (đã thấy chạy ổn ở các trang khác).
