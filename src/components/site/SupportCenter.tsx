import { useState } from "react";
import { Phone } from "lucide-react";

type Contact = { name: string; role: string; phone: string; zalo?: string };

const autoContacts: Contact[] = [
  { name: "Mr Đàm", role: "Kinh doanh Ô tô", phone: "0962 88 1717" },
  { name: "Mr Phú", role: "Kinh doanh Ô tô", phone: "035 414 2288" },
  { name: "Mr Văn Thanh", role: "Kinh doanh Ô tô", phone: "035 404 2288" },
  { name: "Mr Khắc Duy", role: "Kinh doanh Ô tô", phone: "096 299 0202" },
  { name: "Bảo Khanh", role: "Kinh doanh Ô tô", phone: "035 424 2288" },
  { name: "Mr Phát", role: "Kinh doanh Ô tô", phone: "035 434 2288" },
  { name: "Đức Trung", role: "Kinh doanh Ô tô", phone: "097 674 1122" },
  { name: "Mr Bảo Duy", role: "Kinh doanh Ô tô", phone: "035 474 2288" },
  { name: "Hoài Nhơn", role: "Kinh doanh Ô tô", phone: "035 464 2288" },
  { name: "Minh Tuấn", role: "Kinh doanh Ô tô", phone: "088 808 4466" },
];

const wholesaleSouth: Contact[] = [
  { name: "Ms Nhã", role: "Bán sỉ miền Nam", phone: "0964 24 2200" },
  { name: "Thiên Trúc", role: "Bán sỉ miền Nam", phone: "088 808 3434" },
  { name: "Ms Thơm", role: "Bán sỉ miền Nam", phone: "088 818 4455" },
  { name: "Ms Thơm", role: "Bán sỉ miền Nam", phone: "0976 74 2255" },
];

const wholesaleNorth: Contact[] = [
  { name: "Ms Hoài", role: "Bán sỉ miền Bắc", phone: "0962 99 0101" },
];

const warranty: Contact[] = [
  { name: "Kỹ thuật Vimet", role: "Bảo hành - Kỹ thuật", phone: "028 38 38 38 88" },
];

const industrial: Contact[] = [
  { name: "Trần Bửu Ý", role: "Thiết bị công nghiệp", phone: "0976 74 2299" },
];

const tabs = [
  { id: "auto", label: "Thiết bị ô tô", title: "Hỗ trợ thiết bị ô tô", desc: "Đội ngũ tư vấn sản phẩm, báo giá và giải pháp cho garage.", contacts: autoContacts },
  { id: "south", label: "Bán sỉ miền Nam", title: "Bán sỉ miền Nam", desc: "Đầu mối phân phối sỉ khu vực miền Nam.", contacts: wholesaleSouth },
  { id: "north", label: "Bán sỉ miền Bắc", title: "Bán sỉ miền Bắc", desc: "Đầu mối phân phối sỉ khu vực miền Bắc.", contacts: wholesaleNorth },
  { id: "warranty", label: "Bảo hành - kỹ thuật", title: "Bảo hành - Kỹ thuật", desc: "Hỗ trợ kỹ thuật, bảo hành và bảo trì thiết bị.", contacts: warranty },
  { id: "industrial", label: "Thiết bị công nghiệp", title: "Hỗ trợ thiết bị công nghiệp", desc: "Tư vấn giải pháp thiết bị công nghiệp chuyên dụng.", contacts: industrial },
] as const;

export function SupportCenter() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("auto");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="bg-white py-16">
      <div className="container-prose">
        <div className="rounded-2xl border border-border bg-white p-6 md:p-10 shadow-[var(--shadow-card)]">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                CSKH 24/7
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-secondary md:text-4xl">
                Trung tâm hỗ trợ
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                Kết nối nhanh đúng bộ phận, tư vấn rõ ràng và hỗ trợ xuyên suốt.
              </p>
            </div>
            <a
              href="tel:0352472468"
              className="inline-flex items-center justify-between gap-4 rounded-xl bg-secondary px-5 py-3 text-secondary-foreground shadow-md transition-transform hover:-translate-y-0.5"
            >
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Hotline nhanh
                </div>
                <div className="font-display text-lg font-bold leading-tight">035 247 2468</div>
              </div>
              <Phone className="h-5 w-5 text-primary" />
            </a>
          </div>

          {/* Tabs */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-border pb-5">
            {tabs.map((t) => {
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t.id)}
                  className={
                    "rounded-full border px-5 py-2 text-sm font-semibold transition-all " +
                    (isActive
                      ? "border-primary bg-primary text-primary-foreground shadow"
                      : "border-border bg-white text-secondary hover:border-primary/40 hover:text-primary")
                  }
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="mt-6 rounded-xl bg-neutral p-5 md:p-7">
            <h3 className="font-display text-lg font-bold text-secondary md:text-xl">
              {current.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{current.desc}</p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {current.contacts.map((c, idx) => (
                <div
                  key={`${c.name}-${idx}`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-border bg-white px-4 py-3.5 transition-shadow hover:shadow-md"
                >
                  <div className="min-w-0">
                    <div className="truncate font-display text-base font-bold text-secondary">
                      {c.name}
                    </div>
                    <div className="mt-0.5 truncate text-xs text-muted-foreground">{c.role}</div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={`https://zalo.me/${c.phone.replace(/\s+/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Zalo
                    </a>
                    <a
                      href={`tel:${c.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-secondary transition-colors hover:border-primary hover:text-primary"
                    >
                      {c.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
