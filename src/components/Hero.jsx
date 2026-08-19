import { useState, useEffect } from "react";
import "./Hero.css";

const ROLES = [
  "Cybersecurity Analyst",
  "SOC Analyst",
  "Network Administrator",
  "System Administrator",
  "Backend Developer",
  "Ethical Hacker",
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => { setDisplayed(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => { setDisplayed(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 40);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(i => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [charIdx, typing, roleIdx]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Available for Opportunities &middot; Bangalore, India</span>
        </div>
        <h1 className="hero-name">
          <span className="name-line">DEEPESH</span>{" "}
          <span className="name-line accent-g">G</span>
        </h1>
        <div className="hero-title-wrapper">
          <span className="terminal-prefix">$ whoami &gt;&gt;&gt;</span>
          <span className="typing-text">{displayed}</span>
          <span className="cursor">|</span>
        </div>
        <p className="hero-desc">
          MCA Graduate &middot; Cisco Certified &middot; Bangalore, India<br />
          Passionate about securing digital infrastructure &amp; building scalable systems.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary" id="btn-hire">
            <span className="btn-glow"></span><span>Hire Me</span>
          </a>
          <a href="#projects" className="btn btn-outline" id="btn-projects">View Projects</a>
          <a href="https://github.com/Deepesh-G" target="_blank" rel="noreferrer" className="btn btn-ghost" id="btn-github">
            <GithubIcon /><span>GitHub</span>
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat"><span className="stat-num">5+</span><span className="stat-label">Certifications</span></div>
          <div className="stat-divider"></div>
          <div className="stat"><span className="stat-num">3</span><span className="stat-label">Cisco Badges</span></div>
          <div className="stat-divider"></div>
          <div className="stat"><span className="stat-num">MCA</span><span className="stat-label">Degree 2026</span></div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="avatar-wrapper">
          <div className="avatar-ring ring-1"></div>
          <div className="avatar-ring ring-2"></div>
          <div className="avatar-ring ring-3"></div>
          <img src="/profile.jpg" alt="Deepesh G - Cybersecurity Professional" className="avatar-img" />
          <div className="avatar-scan"></div>
        </div>
        <div className="floating-badge fb-1"><span className="fb-icon">🛡️</span><span>Cisco Certified</span></div>
        <div className="floating-badge fb-2"><span className="fb-icon">🐍</span><span>Python Dev</span></div>
        <div className="floating-badge fb-3"><span className="fb-icon">🌐</span><span>Network Security</span></div>
      </div>
    </section>
  );
}
