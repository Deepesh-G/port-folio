import "./Contact.css";

const PRIMARY = [
  {
    id: "link-phone",
    icon: "📱",
    label: "+91 6063259350",
    sub: "Call or WhatsApp me",
    href: "tel:+916063259350",
  },
  {
    id: "link-email",
    icon: "📧",
    label: "deekir5010@gmail.com",
    sub: "Drop me an email",
    href: "mailto:deekir5010@gmail.com",
  },
];

const SECONDARY = [
  {
    id: "link-linkedin",
    icon: "💼",
    label: "LinkedIn",
    sub: "linkedin.com/in/deepesh-g-625038228",
    href: "https://www.linkedin.com/in/deepesh-g-625038228/",
    external: true,
  },
  {
    id: "link-gh",
    icon: "🐙",
    label: "GitHub",
    sub: "github.com/Deepesh-G",
    href: "https://github.com/Deepesh-G",
    external: true,
  },
  {
    id: "link-loc",
    icon: "📍",
    label: "Bangalore, India",
    sub: "Open to on-site & hybrid",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// 06</span>
          <h2 className="section-title">Get In <span className="neon">Touch</span></h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-center reveal">
          <p className="contact-subtext">
            I&apos;m actively seeking roles in <strong>Cybersecurity, SOC Analysis, Network Administration &amp; IT Infrastructure</strong> in Bangalore.
            Reach out — I&apos;d love to connect!
          </p>

          {/* Primary — Phone & Email */}
          <div className="contact-label">📞 Best ways to reach me</div>
          <div className="contact-primary">
            {PRIMARY.map((l) => (
              <a
                key={l.id}
                id={l.id}
                href={l.href}
                className="contact-card contact-card-primary"
              >
                <span className="cc-icon-lg">{l.icon}</span>
                <span className="cc-label-lg">{l.label}</span>
                <span className="cc-sub">{l.sub}</span>
              </a>
            ))}
          </div>

          {/* Secondary — LinkedIn, GitHub, Location */}
          <div className="contact-label" style={{ marginTop: "32px" }}>🔗 Find me online</div>
          <div className="contact-cards">
            {SECONDARY.map((l) =>
              l.href ? (
                <a
                  key={l.id}
                  id={l.id}
                  href={l.href}
                  className="contact-card"
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noreferrer" : undefined}
                >
                  <span className="cc-icon">{l.icon}</span>
                  <span className="cc-label">{l.label}</span>
                  <span className="cc-sub">{l.sub}</span>
                </a>
              ) : (
                <div key={l.id} id={l.id} className="contact-card">
                  <span className="cc-icon">{l.icon}</span>
                  <span className="cc-label">{l.label}</span>
                  <span className="cc-sub">{l.sub}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

