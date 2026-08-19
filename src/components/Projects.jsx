import "./Projects.css";

const GH = "https://github.com/Deepesh-G";
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const PROJECTS = [
  {
    id: "proj-1",
    category: "AI / ML",
    featured: true,
    title: "AI-Powered RAG Chatbot",
    desc: "Designed and deployed a Retrieval-Augmented Generation (RAG) chatbot capable of answering queries from custom document sets. Used LangChain for the orchestration pipeline, Google Embedding Model (embedding-001) to vectorize documents, and MongoDB Atlas as the vector store. The Gemini API powers intelligent, context-grounded natural language responses. Frontend built with Streamlit and hosted on Render Cloud.",
    features: [
      "LangChain pipeline with document chunking, embedding, and retrieval chain",
      "Google Embeddings (embedding-001) stored in MongoDB Atlas Vector Search",
      "Gemini 1.5 Flash for final answer generation with context injection",
      "Streamlit UI with session-based chat history and file upload support",
      "Deployed on Render Cloud with environment-based API key management",
    ],
    tags: ["Python", "LangChain", "Streamlit", "Gemini API", "MongoDB", "Render"],
    link: GH,
  },
  {
    id: "proj-leave",
    category: "Web Development",
    title: "Leave Management System",
    desc: "A full-stack MERN leave management system for Employees and Managers. Employees can apply for Casual, Sick, or Earned leave, track approval status, and cancel pending requests. Managers can approve or reject with comments, edit leave balances, and view a team leave calendar. Live on Render.",
    features: [
      "JWT authentication with role-based access for Employee and Manager roles",
      "Leave types: Casual, Sick, Earned — with balance tracking and auto-deduction",
      "Full approval workflow: Apply, Pending, Approved, Rejected, Cancelled",
      "Manager dashboard: approve/reject with comments, edit balances, team calendar",
      "RESTful API with 10+ endpoints; frontend in React (Vite) with Context API auth",
      "Deployed live: Frontend and Backend both hosted on Render with MongoDB Atlas",
    ],
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Render", "REST API"],
    link: "https://github.com/Deepesh-G/leave_mangement_sys",
    live: "https://leave-mangement-sys-frontend1.onrender.com",
  },
  {
    id: "proj-nids",
    category: "Cybersecurity",
    featured: true,
    fullWidth: true,
    title: "LightWeight NIDS – IntruLight",
    desc: "A real-time Network Intrusion Detection System built as an MCA capstone project. Captures live network packets, extracts bidirectional flow features, and classifies threats using a trained ML ensemble with Gemini AI-powered explanations.",
    features: [
      "Hybrid ML Ensemble: LightGBM, XGBoost, Random Forest — trained on UNSW-NB15 dataset",
      "Real-time packet capture and bidirectional flow analysis via Scapy / Npcap",
      "Gemini AI integration for automated attack explanation and threat intelligence",
      "Auto Windows Firewall IP blocking with timed and permanent rules",
      "Multi-channel alerting: Email and Twilio SMS on attack detection",
      "IP blacklisting with repeat-offender auto-escalation logic",
      "Live React dashboard over WebSocket for real-time threat monitoring",
      "Built-in attack simulators: SYN flood, UDP flood, HTTP flood, Port scan, ICMP flood",
    ],
    tags: ["Python", "LightGBM", "XGBoost", "Scapy", "Gemini AI", "React", "WebSocket", "UNSW-NB15"],
    link: GH,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// 05</span>
          <h2 className="section-title">Pro<span className="neon">jects</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div
              className={`project-card reveal${p.featured ? " featured" : ""}${p.fullWidth ? " full-width" : ""}`}
              key={p.id}
              id={p.id}
            >
              <div className="project-top">
                <div className="project-meta">
                  <span className="project-category">{p.category}</span>
                  {p.featured && <span className="project-featured-label">Featured</span>}
                </div>
                <div className="project-actions">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="proj-link proj-link-live" aria-label="Live Demo" title="View Live Demo">
                      <ExternalLinkIcon />
                    </a>
                  )}
                  <a href={p.link} target="_blank" rel="noreferrer" className="proj-link" aria-label="View on GitHub" title="View on GitHub">
                    <GithubIcon />
                  </a>
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              {p.features && (
                <ul className={`project-features${p.fullWidth ? " features-grid" : ""}`}>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
              <div className="project-tags">
                {p.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="projects-footer reveal">
          <a href={GH} target="_blank" rel="noreferrer" className="btn btn-outline">
            <GithubIcon /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
