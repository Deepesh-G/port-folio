import { useState, useEffect } from "react";
import "./Navbar.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certs" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((s) => {
        const top = s.getBoundingClientRect().top;
        if (top <= 100 && top > -s.offsetHeight + 100) setActive("#" + s.id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => { setOpen(false); setActive(href); };

  return (
    <nav id="navbar" className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">DG</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`nav-link${active === l.href ? " active" : ""}`} onClick={() => handleNav(l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="hamburger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span className={open ? "rot1" : ""}></span>
          <span className={open ? "fade" : ""}></span>
          <span className={open ? "rot2" : ""}></span>
        </button>
      </div>
    </nav>
  );
}
