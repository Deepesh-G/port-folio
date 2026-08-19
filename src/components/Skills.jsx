import { useEffect, useRef } from "react";
import "./Skills.css";

const SKILL_CATS = [
  {
    id: "skill-lang", icon: "💻", title: "Languages & Web Dev",
    tags: ["Python", "Java", "JavaScript", "HTML", "CSS", "Django"],
    bars: [{ name: "Python", pct: 85 }, { name: "Django", pct: 75 }, { name: "JavaScript", pct: 65 }, { name: "HTML / CSS", pct: 80 }],
    tagClass: ""
  },
  {
    id: "skill-security", icon: "🔐", title: "Networking & Security",
    tags: ["Networking Fundamentals", "Cybersecurity", "REST APIs", "Secure App Design", "TCP/IP · DNS · DHCP"],
    bars: [{ name: "Network Fundamentals", pct: 80 }, { name: "Cybersecurity", pct: 75 }, { name: "Secure App Design", pct: 70 }],
    tagClass: "neon-tag"
  },
  {
    id: "skill-frameworks", icon: "🚀", title: "Frameworks & Cloud",
    tags: ["Streamlit", "MongoDB", "Render Cloud", "Gemini API", "REST APIs"],
    bars: [{ name: "Streamlit", pct: 78 }, { name: "MongoDB", pct: 65 }, { name: "Cloud Deployment", pct: 60 }],
    tagClass: "cyan-tag"
  },
  {
    id: "skill-ai", icon: "🤖", title: "AI/ML & OS",
    tags: ["LangChain", "Google Embeddings", "VS Code Copilot", "Linux", "Windows"],
    bars: [{ name: "LangChain", pct: 70 }, { name: "Linux", pct: 72 }, { name: "Windows", pct: 80 }],
    tagClass: "purple-tag"
  },
];

function SkillBar({ name, pct }) {
  const fillRef = useRef(null);
  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.style.width = pct + "%"; observer.disconnect(); }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [pct]);
  return (
    <div className="skill-bar-item">
      <span className="skill-bar-name">{name}</span>
      <div className="skill-bar-track"><div className="skill-bar-fill" ref={fillRef} style={{ width: 0 }}></div></div>
      <span className="skill-bar-pct">{pct}%</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// 02</span>
          <h2 className="section-title">Technical <span className="neon">Skills</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          {SKILL_CATS.map((cat) => (
            <div className="skill-category reveal" key={cat.id} id={cat.id}>
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.tags.map((t) => <span key={t} className={`skill-tag${cat.tagClass ? " " + cat.tagClass : ""}`}>{t}</span>)}
              </div>
              <div className="skill-bars">
                {cat.bars.map((b) => <SkillBar key={b.name} name={b.name} pct={b.pct} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
