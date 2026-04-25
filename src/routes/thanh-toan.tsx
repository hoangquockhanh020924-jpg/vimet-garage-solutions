import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronRight,
  Home,
  CheckCircle2,
  CreditCard,
  Truck,
  Building2,
  Wallet,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useCart, formatPrice } from "@/lib/cart";

export const Route = createFileRoute("/thanh-toan")({
  head: () => ({
    meta: [
      { title: "Thanh toán — Vimet" },
      { name: "description", content: "Hoàn tất đặt hàng thiết bị gara ô tô tại Vimet — giao nhanh, lắp đặt miễn phí." },
    ],
  }),
  component: CheckoutPage,
});

type PaymentMethod = "cod" | "transfer" | "card";

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    address: "",
    city: "",
    note: "",
  });
  const [shipping, setShipping] = useState<"standard" | "express">("standard");
  const [payment, setPayment] = useState<PaymentMethod>("cod");
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState("");

  const shippingFee = 0;
  const total = subtotal + shippingFee;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    const id = "VMT" + Date.now().toString().slice(-8);
    setOrderId(id);
    setSubmitted(true);
    clear();
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral">
        <Header />
        <section className="py-16">
          <div className="container-prose max-w-2xl">
            <div className="rounded-2xl border border-border bg-white p-10 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-12 w-12" />
              </div>
              <h1 className="mt-6 font-display text-3xl font-bold text-secondary">
                Đặt hàng thành công!
              </h1>
              <p className="mt-3 text-muted-foreground">
                Cảm ơn bạn đã mua sắm tại Vimet. Đội ngũ tư vấn sẽ liên hệ xác nhận đơn hàng trong vòng 15 phút.
              </p>
              <div className="mt-6 inline-flex flex-col gap-1 rounded-xl border border-border bg-neutral px-6 py-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Mã đơn hàng
                </span>
                <span className="font-display text-2xl font-bold text-primary">#{orderId}</span>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/danh-muc"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-highlight hover:text-secondary transition-colors"
                >
                  Tiếp tục mua sắm
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-border bg-white px-6 py-3 text-sm font-bold text-secondary hover:border-primary hover:text-primary transition-colors"
                >
                  Về trang chủ
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-neutral">
        <Header />
        <section className="py-16">
          <div className="container-prose max-w-xl text-center">
            <h1 className="font-display text-2xl font-bold text-secondary">
              Giỏ hàng đang trống
            </h1>
            <p className="mt-2 text-muted-foreground">
              Bạn cần thêm sản phẩm vào giỏ hàng trước khi thanh toán.
            </p>
            <Link
              to="/danh-muc"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-highlight hover:text-secondary transition-colors"
            >
              Khám phá sản phẩm
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

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
          <Link to="/gio-hang" className="hover:text-primary">
            Giỏ hàng
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-secondary">Thanh toán</span>
        </div>
      </div>

      <section className="py-10">
        <div className="container-prose">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Bước 2 / 2
              </div>
              <h1 className="mt-2 font-display text-3xl md:text-4xl font-bold text-secondary">
                Thông tin thanh toán
              </h1>
            </div>
            <Link
              to="/gio-hang"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Quay lại giỏ hàng
            </Link>
          </div>

          <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-[1fr_400px]">
            <div className="space-y-6">
              {/* Customer info */}
              <div className="rounded-2xl border border-border bg-white p-6">
                <h2 className="font-display text-lg font-bold text-secondary mb-5">
                  1. Thông tin người nhận
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Họ và tên"
                    required
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Nguyễn Văn A"
                  />
                  <Field
                    label="Số điện thoại"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    placeholder="0987 654 321"
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="email@gara.vn"
                  />
                  <Field
                    label="Tên gara / công ty"
                    value={form.company}
                    onChange={(v) => setForm({ ...form, company: v })}
                    placeholder="Gara ABC"
                  />
                  <div className="sm:col-span-2">
                    <Field
                      label="Địa chỉ giao hàng"
                      required
                      value={form.address}
                      onChange={(v) => setForm({ ...form, address: v })}
                      placeholder="Số nhà, đường, phường/xã"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Field
                      label="Tỉnh / Thành phố"
                      required
                      value={form.city}
                      onChange={(v) => setForm({ ...form, city: v })}
                      placeholder="TP. Hồ Chí Minh"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-secondary mb-1.5">
                      Ghi chú đơn hàng
                    </label>
                    <textarea
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      rows={3}
                      placeholder="Yêu cầu lắp đặt, thời gian giao hàng..."
                      className="w-full rounded-md border-2 border-border bg-white px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping */}
              <div className="rounded-2xl border border-border bg-white p-6">
                <h2 className="font-display text-lg font-bold text-secondary mb-5">
                  2. Phương thức vận chuyển
                </h2>
                <div className="grid gap-3">
                  <ShippingOption
                    selected={shipping === "standard"}
                    onClick={() => setShipping("standard")}
                    icon={Truck}
                    title="Giao hàng tiêu chuẩn"
                    desc="3-7 ngày làm việc · Bao gồm lắp đặt"
                    price="Miễn phí"
                  />
                  <ShippingOption
                    selected={shipping === "express"}
                    onClick={() => setShipping("express")}
                    icon={Truck}
                    title="Giao nhanh nội thành"
                    desc="Trong 24-48h · TP.HCM, Hà Nội, Đà Nẵng"
                    price="Miễn phí"
                  />
                </div>
              </div>

              {/* Payment */}
              <div className="rounded-2xl border border-border bg-white p-6">
                <h2 className="font-display text-lg font-bold text-secondary mb-5">
                  3. Phương thức thanh toán
                </h2>
                <div className="grid gap-3">
                  <PaymentOption
                    selected={payment === "cod"}
                    onClick={() => setPayment("cod")}
                    icon={Wallet}
                    title="Thanh toán khi nhận hàng (COD)"
                    desc="Trả bằng tiền mặt khi kỹ thuật viên giao và lắp đặt"
                  />
                  <PaymentOption
                    selected={payment === "transfer"}
                    onClick={() => setPayment("transfer")}
                    icon={Building2}
                    title="Chuyển khoản ngân hàng"
                    desc="Vimet sẽ gửi thông tin tài khoản sau khi xác nhận đơn"
                  />
                  <PaymentOption
                    selected={payment === "card"}
                    onClick={() => setPayment("card")}
                    icon={CreditCard}
                    title="Thẻ ATM / Visa / Master"
                    desc="Thanh toán an toàn qua cổng VNPAY"
                  />
                </div>
              </div>
            </div>

            {/* Summary */}
            <aside className="space-y-4">
              <div className="sticky top-24 space-y-4">
                <div className="rounded-2xl border border-border bg-white overflow-hidden">
                  <div className="px-6 py-4 border-b border-border bg-neutral">
                    <h2 className="font-display text-lg font-bold text-secondary">
                      Đơn hàng ({items.length})
                    </h2>
                  </div>
                  <ul className="divide-y divide-border max-h-[280px] overflow-y-auto">
                    {items.map((item) => (
                      <li key={item.slug} className="flex gap-3 px-6 py-4">
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-neutral border border-border">
                          <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                          <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                            {item.qty}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-secondary line-clamp-2">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-muted-foreground">{item.code}</div>
                        </div>
                        <div className="text-sm font-bold text-primary whitespace-nowrap">
                          {formatPrice(item.price * item.qty)}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="px-6 py-4 space-y-2.5 border-t border-border text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tạm tính</span>
                      <span className="font-semibold text-secondary">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vận chuyển</span>
                      <span className="font-semibold text-emerald-600">Miễn phí</span>
                    </div>
                    <div className="flex justify-between items-baseline border-t border-border pt-2.5">
                      <span className="font-display font-bold text-secondary">Tổng cộng</span>
                      <span className="font-display text-2xl font-bold text-primary">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-highlight hover:text-secondary transition-colors shadow-[0_4px_12px_-2px_rgba(207,46,46,0.4)]"
                    >
                      Đặt hàng ngay
                    </button>
                    <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                      Thông tin của bạn được bảo mật tuyệt đối
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-secondary mb-1.5">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border-2 border-border bg-white px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 transition"
      />
    </div>
  );
}

function ShippingOption({
  selected,
  onClick,
  icon: Icon,
  title,
  desc,
  price,
}: {
  selected: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  price: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
        selected
          ? "border-primary bg-primary/5 shadow-[0_4px_12px_-4px_rgba(207,46,46,0.25)]"
          : "border-border bg-white hover:border-primary/40"
      }`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
          selected ? "bg-primary text-white" : "bg-neutral text-primary"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex-1">
        <div className="font-display text-sm font-bold text-secondary">{title}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
      </div>
      <div className="text-sm font-bold text-emerald-600">{price}</div>
    </button>
  );
}

function PaymentOption({
  selected,
  onClick,
  icon: Icon,
  title,
  desc,
}: {
  selected: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
        selected
          ? "border-primary bg-primary/5 shadow-[0_4px_12px_-4px_rgba(207,46,46,0.25)]"
          : "border-border bg-white hover:border-primary/40"
      }`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
          selected ? "bg-primary text-white" : "bg-neutral text-primary"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex-1">
        <div className="font-display text-sm font-bold text-secondary">{title}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
      </div>
      <span
        className={`h-5 w-5 shrink-0 rounded-full border-2 flex items-center justify-center ${
          selected ? "border-primary" : "border-border"
        }`}
      >
        {selected && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
      </span>
    </button>
  );
}
