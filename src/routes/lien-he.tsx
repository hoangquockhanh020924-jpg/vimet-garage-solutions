import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title: "Liên hệ — Vimet" },
      {
        name: "description",
        content:
          "Liên hệ Vimet để nhận tư vấn giải pháp, báo giá thiết bị gara và xem vị trí văn phòng trên bản đồ.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="border-b border-border bg-neutral">
          <div className="container-prose py-6 md:py-8">
            <nav className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-primary">
                Trang chủ
              </Link>
              <span>/</span>
              <span className="font-semibold text-secondary">Liên hệ</span>
            </nav>
            <h1 className="font-display text-3xl font-bold text-secondary md:text-4xl">Liên hệ Vimet</h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
              Kết nối với đội ngũ kỹ thuật để nhận tư vấn và báo giá thiết bị phù hợp cho gara của bạn.
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
