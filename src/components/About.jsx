import "./About.css";

const contactItems = [
  { id: "info-email", icon: "📧", label: "Email", value: "deekir5010@gmail.com", href: "mailto:deekir5010@gmail.com" },
  { id: "info-phone", icon: "📱", label: "Phone", href: "tel:+916063259350", value: "+91 6063259350" },
  { id: "info-location", icon: "📍", label: "Location", value: "Bangalore, India" },
  { id: "info-github", icon: "🐙", label: "GitHub", value: "github.com/Deepesh-G", href: "https://github.com/Deepesh-G", external: true },
  { id: "info-avail", icon: "🟢", label: "Availability", value: "Open to Work – Immediate", neon: true },
];

const softSkills = ["🧠 Problem Solving", "🤝 Teamwork", "⚡ Adaptability", "💬 Communication", "⏱️ Time Management"];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// 01</span>
          <h2 className="section-title">About <span className="neon">Me</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <div className="terminal-box">
              <div className="terminal-header">
                <span className="t-dot red"></span><span className="t-dot yellow"></span><span className="t-dot green"></span>
                <span className="t-title">deepesh@kali:~$ cat about.txt</span>
              </div>
              <div className="terminal-body">
                <p><span className="t-key">name</span>: <span className="t-val">"Deepesh G"</span></p>
                <p><span className="t-key">location</span>: <span className="t-val">"Bangalore, India"</span></p>
                <p><span className="t-key">degree</span>: <span className="t-val">"MCA – VTU (2026)"</span></p>
                <p><span className="t-key">status</span>: <span className="t-val t-green">"Actively seeking opportunities"</span></p>
                <p><span className="t-key">focus</span>: <span className="t-val">"[Cybersecurity, SOC, Network Admin, Cloud]"</span></p>
                <p><span className="t-key">languages</span>: <span className="t-val">"English, Kannada, Tamil, Hindi"</span></p>
              </div>
            </div>
            <p className="about-para">
              Motivated and detail-oriented IT graduate specializing in <strong>Cybersecurity, Networking, and Web Development</strong>. Certified in Networking Basics, Operating Systems Basics, and Cybersecurity Fundamentals from <strong>Cisco Networking Academy</strong>.
            </p>
            <p className="about-para">
              Skilled in building secure, scalable applications with hands-on experience in <strong>Django, Streamlit, and LangChain</strong>. Strong foundation in network protocols, OS concepts, and security practices, with practical exposure to backend development, API integration, and cloud deployment.
            </p>
            <p className="about-para">
              Passionate about <strong>safeguarding systems</strong> while delivering efficient web solutions. Fluent in English, Kannada, Tamil, and Hindi — making me effective across diverse teams in Bangalore&rsquo;s tech ecosystem.
            </p>
            <div className="soft-skills">
              {softSkills.map((s) => <span key={s} className="soft-skill-tag">{s}</span>)}
            </div>
          </div>

          <div className="about-info-cards reveal">
            {contactItems.map((item) => (
              <div className="info-card" key={item.id} id={item.id}>
                <div className="info-icon">{item.icon}</div>
                <div className="info-content">
                  <span className="info-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className={`info-value${item.neon ? " neon" : ""}`} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>{item.value}</a>
                  ) : (
                    <span className={`info-value${item.neon ? " neon" : ""}`}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
