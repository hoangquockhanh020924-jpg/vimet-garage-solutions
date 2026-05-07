# Quản lý dữ liệu sản phẩm qua REST API (JSON Server)

Toàn bộ dữ liệu `products`, `categories`, `news`, `videos` được lưu trong **`db.json`** ở thư mục gốc.
Bạn có thể thêm/sửa/xoá hàng loạt qua REST API rồi đồng bộ về codebase.

## Quy trình

```bash
# 1) Chạy JSON Server (cổng 3001) — giữ terminal này mở
bun run api

# 2) Mở terminal khác, POST/PUT/DELETE dữ liệu (ví dụ bên dưới)

# 3) Đồng bộ db.json → src/data/*.ts để app dùng
bun run sync
```

> Ghi chú: JSON Server chỉ dành cho dev (không deploy production). Sau khi `sync`,
> dữ liệu được build cứng vào app như import tĩnh.

## Endpoints

Base URL: `http://localhost:3001`

| Resource     | Endpoint        |
| ------------ | --------------- |
| Sản phẩm     | `/products`     |
| Danh mục     | `/categories`   |
| Tin tức      | `/news`         |
| Video        | `/videos`       |

Mỗi resource hỗ trợ đầy đủ: `GET`, `GET /:id`, `POST`, `PUT /:id`, `PATCH /:id`, `DELETE /:id`,
phân trang `?_page=1&_per_page=20`, lọc `?brand=BENDPAK`, tìm kiếm `?q=cau+nang`, sort `?_sort=price`.

## Thêm 1 sản phẩm

```bash
curl -X POST http://localhost:3001/products \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "cau-nang-4-tru-bendpak-hd-9st",
    "name": "Cầu nâng 4 trụ Bendpak HD-9ST",
    "code": "VMT-CN-4T9",
    "spec": "Tải 4T · 220V",
    "price": "120.000.000₫",
    "oldPrice": null,
    "badge": "MỚI",
    "img": "https://example.com/img.jpg",
    "gallery": ["https://example.com/img.jpg"],
    "brand": "BENDPAK",
    "origin": "Hoa Kỳ",
    "rating": 5,
    "reviewCount": 0,
    "category": "Cầu nâng",
    "description": "Mô tả...",
    "features": [],
    "specs": [],
    "accessories": [],
    "warranty": [],
    "reviews": []
  }'
```

## Thêm hàng loạt từ file

Tạo file `bulk-products.json` (mảng sản phẩm), rồi:

```bash
# Cách 1: dùng jq + curl, lặp qua từng item
jq -c '.[]' bulk-products.json | while read p; do
  curl -s -X POST http://localhost:3001/products \
    -H "Content-Type: application/json" -d "$p" > /dev/null
done

# Cách 2: chỉnh trực tiếp db.json rồi chạy `bun run sync`
```

## Schema sản phẩm (bắt buộc)

Xem `src/data/products.ts` — type `Product`.

## Schema danh mục

```ts
{ slug: string; label: string; desc: string; img: string; count: number }
```
