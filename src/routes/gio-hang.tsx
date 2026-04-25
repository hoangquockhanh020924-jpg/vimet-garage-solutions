import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ShoppingCart, ChevronRight, Home, ArrowRight, Truck, Shield, Headphones } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useCart, formatPrice } from "@/lib/cart";

export const Route = createFileRoute("/gio-hang")({
  head: () => ({
    meta: [
      { title: "Giỏ hàng — Vimet" },
      { name: "description", content: "Giỏ hàng của bạn tại Vimet — kiểm tra sản phẩm và tiến hành thanh toán." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, subtotal, updateQty, removeItem, clear } = useCart();
  const shipping = items.length > 0 ? 0 : 0; // free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-neutral">
      <Header />

      <div className="bg-white border-b border-border">
        <div className="container-prose py-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-primary">
            <Home className="h-3.5 w-3.5" />
            Trang chủ
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-secondary">Giỏ hàng</span>
        </div>
      </div>

      <section className="py-10">
        <div className="container-prose">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Giỏ hàng của bạn
              </div>
              <h1 className="mt-2 font-display text-3xl md:text-4xl font-bold text-secondary">
                {items.length > 0 ? `${items.length} sản phẩm trong giỏ` : "Giỏ hàng đang trống"}
              </h1>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-border bg-white py-20 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShoppingCart className="h-9 w-9" />
              </div>
              <h2 className="mt-6 font-display text-xl font-bold text-secondary">
                Chưa có sản phẩm nào
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Khám phá hơn 2.000 mã thiết bị gara ô tô chính hãng tại Vimet.
              </p>
              <Link
                to="/danh-muc"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-highlight hover:text-secondary transition-colors"
              >
                Tiếp tục mua sắm
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
              {/* Items */}
              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-white overflow-hidden">
                  <div className="hidden md:grid grid-cols-[1fr_120px_140px_120px_40px] gap-4 px-6 py-3 bg-neutral text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    <div>Sản phẩm</div>
                    <div className="text-center">Đơn giá</div>
                    <div className="text-center">Số lượng</div>
                    <div className="text-right">Thành tiền</div>
                    <div></div>
                  </div>

                  <ul className="divide-y divide-border">
                    {items.map((item) => (
                      <li
                        key={item.slug}
                        className="grid grid-cols-1 md:grid-cols-[1fr_120px_140px_120px_40px] gap-4 items-center px-4 md:px-6 py-5"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <Link
                            to="/san-pham/$slug"
                            params={{ slug: item.slug }}
                            className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-neutral border border-border"
                          >
                            <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                          </Link>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold text-primary uppercase tracking-wider">
                              Mã: {item.code}
                            </div>
                            <Link
                              to="/san-pham/$slug"
                              params={{ slug: item.slug }}
                              className="block font-display text-sm font-bold text-secondary hover:text-primary line-clamp-2"
                            >
                              {item.name}
                            </Link>
                          </div>
                        </div>

                        <div className="md:text-center text-sm font-semibold text-secondary">
                          <span className="md:hidden text-xs text-muted-foreground">Đơn giá: </span>
                          {item.priceLabel}
                        </div>

                        <div className="md:justify-self-center">
                          <div className="inline-flex items-center rounded-md border-2 border-border overflow-hidden">
                            <button
                              onClick={() => updateQty(item.slug, item.qty - 1)}
                              className="h-9 w-9 flex items-center justify-center hover:bg-muted"
                              aria-label="Giảm"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-10 text-center text-sm font-bold">{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.slug, item.qty + 1)}
                              className="h-9 w-9 flex items-center justify-center hover:bg-muted"
                              aria-label="Tăng"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="md:text-right font-display text-base font-bold text-primary">
                          <span className="md:hidden text-xs text-muted-foreground font-normal">
                            Thành tiền:{" "}
                          </span>
                          {formatPrice(item.price * item.qty)}
                        </div>

                        <div className="md:justify-self-end">
                          <button
                            onClick={() => removeItem(item.slug)}
                            className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                            aria-label="Xoá"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Link
                    to="/danh-muc"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 rotate-180" />
                    Tiếp tục mua sắm
                  </Link>
                  <button
                    onClick={() => clear()}
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2 text-xs font-semibold text-muted-foreground hover:border-destructive hover:text-destructive transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Xoá tất cả
                  </button>
                </div>
              </div>

              {/* Summary */}
              <aside className="space-y-4">
                <div className="sticky top-24 space-y-4">
                  <div className="rounded-2xl border border-border bg-white p-6">
                    <h2 className="font-display text-lg font-bold text-secondary mb-4">
                      Tóm tắt đơn hàng
                    </h2>
                    <dl className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Tạm tính</dt>
                        <dd className="font-semibold text-secondary">{formatPrice(subtotal)}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Phí vận chuyển</dt>
                        <dd className="font-semibold text-emerald-600">Miễn phí</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Lắp đặt nội thành</dt>
                        <dd className="font-semibold text-emerald-600">Miễn phí</dd>
                      </div>
                      <div className="border-t border-border pt-3 flex justify-between items-baseline">
                        <dt className="font-display font-bold text-secondary">Tổng cộng</dt>
                        <dd className="font-display text-2xl font-bold text-primary">
                          {formatPrice(total)}
                        </dd>
                      </div>
                    </dl>

                    <Link
                      to="/thanh-toan"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-highlight hover:text-secondary transition-colors shadow-[0_4px_12px_-2px_rgba(207,46,46,0.4)]"
                    >
                      Tiến hành thanh toán
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <p className="mt-3 text-[11px] text-muted-foreground text-center">
                      Đã bao gồm VAT · Hỗ trợ trả góp 0%
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-white p-5 space-y-3">
                    {[
                      { icon: Truck, title: "Giao hàng toàn quốc", desc: "Trong 24-72h nội thành" },
                      { icon: Shield, title: "Bảo hành chính hãng", desc: "12-36 tháng tuỳ sản phẩm" },
                      { icon: Headphones, title: "Hỗ trợ 24/7", desc: "Hotline 028 388 88 388" },
                    ].map((b) => (
                      <div key={b.title} className="flex items-start gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <b.icon className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="text-sm font-bold text-secondary">{b.title}</div>
                          <div className="text-xs text-muted-foreground">{b.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
