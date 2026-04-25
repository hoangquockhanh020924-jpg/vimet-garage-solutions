export function LocationMap() {
  return (
    <div className="mt-12 rounded-xl border border-border overflow-hidden shadow-sm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5267839156755!2d106.64825!3d10.7774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752da7a7a7a7a7%3A0x1234567890!2sH64%20D%C6%B0%C3%B4ng%20Th%E1%BB%8B%20Giang%2C%20%C4%90%C3%B4ng%20H%C6%B0ng%20Thu%E1%BA%ADn!5e0!3m2!1svi!2s!4v1234567890"
        width="100%"
        height="380"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Vimet HCMC Office Location"
      />
    </div>
  );
}
