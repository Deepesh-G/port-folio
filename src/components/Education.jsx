import "./Education.css";

const EDU = [
  {
    id: "edu-mca", year: "2024 – 2026", badge: "🎓 Latest",
    degree: "Master of Computer Applications (MCA)",
    school: "Dr. Ambedkar Institute of Technology",
    uni: "Visvesvaraya Technological University (VTU)",
    desc: "Specialized in Cybersecurity, Cloud Computing, and Advanced Software Engineering. Developed expertise in secure application design, network security, and AI-powered backend systems."
  },
  {
    id: "edu-bca", year: "2021 – 2024",
    degree: "Bachelor of Computer Applications (BCA)",
    school: "KLE Society's Degree College",
    uni: "Bangalore University",
    desc: "Built a strong foundation in programming, database management, networking, and software development principles."
  },
  {
    id: "edu-pu", year: "2019 – 2021",
    degree: "Pre-University (PCMCS)",
    school: "S Cadambi Independent PU College",
    uni: "Physics · Chemistry · Mathematics · Computer Science",
    desc: "Gained foundational knowledge in mathematics and computer science that shaped my analytical thinking and technical aptitude."
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// 03</span>
          <h2 className="section-title">Edu<span className="neon">cation</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="timeline">
          {EDU.map((e) => (
            <div className="timeline-item reveal" key={e.id} id={e.id}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-year">{e.year}</div>
                {e.badge && <div className="timeline-badge">{e.badge}</div>}
                <h3 className="timeline-degree">{e.degree}</h3>
                <p className="timeline-school">{e.school}</p>
                <p className="timeline-uni">{e.uni}</p>
                <p className="timeline-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
