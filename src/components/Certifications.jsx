import "./Certifications.css";

const CERTS = [
  { id: "cert-networking", logoClass: "cisco", logoText: "CISCO", name: "Networking Basics", issuer: "Cisco Networking Academy" },
  { id: "cert-cybersec", logoClass: "cisco", logoText: "CISCO", name: "Cybersecurity Fundamentals", issuer: "Cisco Networking Academy" },
  { id: "cert-os", logoClass: "cisco", logoText: "CISCO", name: "Operating Systems Basics", issuer: "Cisco Networking Academy" },
  { id: "cert-tbh", logoClass: "tbh", logoText: "TBH", name: "Cyber Security Basics", issuer: "TechByHeart" },
  { id: "cert-java", logoClass: "lol", logoText: "LOL", name: "Java Backend Workshop", issuer: "Learn OnLine" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section section-dark">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// 04</span>
          <h2 className="section-title">Certifi<span className="neon">cations</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="cert-grid">
          {CERTS.map((c) => (
            <div className="cert-card reveal" key={c.id} id={c.id}>
              <div className={`cert-logo ${c.logoClass}`}>
                {c.logoClass === "cisco" ? (
                  <svg viewBox="0 0 60 40" fill="none" width="50" height="33">
                    <rect width="60" height="40" rx="6" fill="#1a3a5c" />
                    <text x="5" y="28" fontSize="14" fontWeight="bold" fill="#00bceb" fontFamily="Arial">CISCO</text>
                  </svg>
                ) : (
                  <div className="cert-logo-text">{c.logoText}</div>
                )}
              </div>
              <div className="cert-info">
                <h3 className="cert-name">{c.name}</h3>
                <p className="cert-issuer">{c.issuer}</p>
                <span className="cert-badge verified">✓ Verified</span>
              </div>
              <div className="cert-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
