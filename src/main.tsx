import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import "./index.css";

const profile = {
  name: "Dhiraj Jadhav",
  email: "dhirajjadhav873@gmail.com",
  github: "https://github.com/Dhiraj-jadhav04",
  linkedin: "https://www.linkedin.com/in/dhiraj-jadhav-12official",
  resume:
    "https://drive.google.com/file/d/1gaBWCuBynH33Cph3hL55N4FtYQYTl-bO/view?usp=drivesdk",
  photo:
    "https://drive.google.com/uc?export=view&id=10oMSSMub5dCBvZNxBXWrwGKgeCkaN1RS",
};

const skills = [
  "Power BI Desktop",
  "Power BI Service",
  "Tableau",
  "Power Query",
  "DAX",
  "Business Intelligence",
  "MIS Reporting",
  "Dashboards",
  "Python",
  "Pandas",
  "NumPy",
  "SQL",
  "MySQL",
  "SQL Server",
  "AWS S3",
  "Azure",
  "Azure SQL",
  "Databricks",
  "Snowflake",
  "Google BigQuery",
  "Advanced Excel",
  "Pivot Tables",
  "Data Extraction",
  "Data Cleansing",
  "Data Modeling",
  "Data Analysis",
  "Data Visualization",
  "Exploratory Data Analysis",
  "Data Storytelling",
];

const projects = [
  {
    title: "Housing Sales Analytics",
    category: "BI / Analytics",
    desc: "Analyzed 100K+ housing transaction records using BigQuery, SQL, Power BI and DAX to build an interactive sales and pricing analytics solution.",
    tags: ["BigQuery", "SQL", "Power BI", "DAX"],
    points: [
      "YOY Growth & YTD Sales",
      "Regional and channel analysis",
      "Power BI Service + scheduled refresh",
    ],
    link: "https://github.com/Dhiraj-jadhav04/Housing-Sales-Data-Analysis-Project",
  },
  {
    title: "Prism Insurance Analytics Dashboard",
    category: "BI / Analytics",
    desc: "Built an end-to-end insurance BI solution using SQL Server, Power Query and DAX to analyze policy performance, claims and customer demographics.",
    tags: ["SQL Server", "Power Query", "DAX", "Power BI"],
    points: [
      "7 business KPIs",
      "Drill Through analysis",
      "RLS + scheduled refresh",
    ],
    link: "https://github.com/Dhiraj-jadhav04/Prism-Insurance-Pvt-Ltd-Project",
  },
  {
    title: "InsighBI — Men's T-Shirt Analytics",
    category: "Cloud BI",
    desc: "Built a cloud-connected BI solution on Azure SQL Database, cleaning pricing data with SQL and modeling discount, profit and cost metrics with DAX.",
    tags: ["Azure SQL", "SQL Server", "Power BI", "DAX"],
    points: [
      "50+ brands analyzed",
      "31.81% average discount",
      "Interactive Power BI App",
    ],
    link: "https://github.com/Dhiraj-jadhav04/InsighBI",
  },
  {
    title: "Rainfall & Crop Yield Analysis",
    category: "Data Engineering",
    desc: "Built an AWS S3–Snowflake–Power BI pipeline for agricultural data ingestion and SQL-based transformation across crops and locations.",
    tags: ["AWS S3", "Snowflake", "SQL", "Power BI"],
    points: [
      "4 interactive dashboards",
      "10+ crops",
      "Year, season, crop & location analysis",
    ],
    link: "https://github.com/Dhiraj-jadhav04/Agriculture-Data-Analyst-Project",
  },
];

const certs = [
  [
    "Deloitte Data Analytics Job Simulation",
    "https://drive.google.com/file/d/1krr6ktpJYfWeIIDQc6czNQhV3MKbkR5I/view?usp=drivesdk",
  ],
  [
    "SQL — HackerRank",
    "https://www.hackerrank.com/certificates/iframe/9f9b62978936",
  ],
  ["Microsoft PL-300 — Power BI Data Analyst (Training)", ""],
  ["Python / MySQL / Power BI", ""],
];

function App() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <div className="page">
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#home">
            D<span>•</span>ATABLYST
          </a>

          <div className={"nav-links " + (open ? "open" : "")}>
            {[
              "about",
              "skills",
              "experience",
              "projects",
              "certifications",
              "contact",
            ].map((x) => (
              <a
                key={x}
                href={"#" + x}
                onClick={() => setOpen(false)}
              >
                {x[0].toUpperCase() + x.slice(1)}
              </a>
            ))}
          </div>

          <button
            className="menu"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="reveal">
              <div className="eyebrow">DATA • BI • INSIGHTS</div>

              <h1>
                Turning raw data into <em>clear decisions.</em>
              </h1>

              <p className="lead">
                I'm Dhiraj Jadhav, an aspiring Data Analytics professional
                focused on SQL, Power BI, Python, cloud data platforms and
                decision-ready business intelligence.
              </p>

              <div className="actions">
                <a className="btn primary" href="#projects">
                  Explore Projects <ArrowUpRight size={17} />
                </a>

                <a
                  className="btn"
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileText size={17} /> Resume
                </a>
              </div>
            </div>

            <div className="hero-card reveal">
              <img
                className="photo"
                src={profile.photo}
                alt="Dhiraj Jadhav"
              />

              <div className="photo-fallback">DJ</div>

              <div className="hero-meta">
                <span>B.E. AI & Data Science</span>
                <b>CGPA 7.43</b>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">01 — ABOUT</div>
                <h2>Analytics with a business lens.</h2>
              </div>
            </div>

            <div className="about-grid">
              <div className="panel">
                <p className="muted">
                  Aspiring Data Analytics professional with hands-on
                  experience across the analytics lifecycle — data extraction,
                  cleansing, manipulation and processing using SQL, Python,
                  Power BI, Tableau and Advanced Excel. Skilled in data
                  modeling, DAX, MIS reporting and data storytelling, building
                  interactive dashboards and translating raw data into clear,
                  decision-ready business intelligence insights.
                </p>
              </div>

              <div className="stats">
                {[
                  ["100K+", "housing records"],
                  ["7", "insurance KPIs"],
                  ["50+", "brands analyzed"],
                  ["4", "agri dashboards"],
                ].map(([a, b]) => (
                  <div className="stat" key={b}>
                    <strong>{a}</strong>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">02 — TOOLKIT</div>
                <h2>Tools I work with.</h2>
              </div>
            </div>

            <div className="panel">
              <div className="skills">
                {skills.map((s) => (
                  <span className="skill" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">03 — EXPERIENCE</div>
                <h2>Applied analytics.</h2>
              </div>
            </div>

            <div className="panel timeline">
              <div className="timeline-item">
                <span className="dot" />

                <h3>Data Science Intern — Prodigy InfoTech</h3>

                <div className="meta">
                  Remote · 2024 · 1 Month
                </div>

                <p className="muted">
                  Worked on applied machine learning and data analytics tasks
                  across the project lifecycle. Performed data extraction,
                  cleansing and manipulation on structured datasets; built and
                  evaluated classification and regression models with Python,
                  Pandas, NumPy and Scikit-Learn; conducted EDA and feature
                  engineering; and documented workflows, metrics and findings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">04 — PROJECTS</div>
                <h2>Selected work.</h2>
              </div>
            </div>

            <div className="filters">
              {categories.map((c) => (
                <button
                  key={c}
                  className={"filter " + (filter === c ? "active" : "")}
                  onClick={() => setFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="projects">
              {visible.map((p) => (
                <article
                  className="project reveal"
                  key={p.title}
                >
                  <div className="project-top">
                    <h3>{p.title}</h3>
                    <span className="badge">{p.category}</span>
                  </div>

                  <p>{p.desc}</p>

                  <div className="tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="muted">
                    {p.points.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>

                  <a
                    className="btn"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub <Github size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">
                  05 — CERTIFICATIONS
                </div>
                <h2>Learning & credentials.</h2>
              </div>
            </div>

            <div className="cards">
              {certs.map(([name, link]) => (
                <div className="panel cert" key={name}>
                  <div>
                    <CheckCircle2
                      size={19}
                      className="cyan"
                    />

                    <h3>{name}</h3>

                    <span className="muted small">
                      {link
                        ? "Certificate available"
                        : "Training / coursework"}
                    </span>
                  </div>

                  {link && (
                    <a
                      className="btn"
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">06 — CONTACT</div>
                <h2>Let's connect.</h2>
              </div>
            </div>

            <div className="contact">
              {[
                {
                  Icon: Mail,
                  name: "Email",
                  text: profile.email,
                  href: `mailto:${profile.email}`,
                  target: "_self",
                },
                {
                  Icon: Linkedin,
                  name: "LinkedIn",
                  text: "Connect professionally",
                  href: profile.linkedin,
                  target: "_blank",
                },
                {
                  Icon: Github,
                  name: "GitHub",
                  text: "Explore my repositories",
                  href: profile.github,
                  target: "_blank",
                },
                {
                  Icon: FileText,
                  name: "Resume",
                  text: "Open PDF",
                  href: profile.resume,
                  target: "_blank",
                },
              ].map(
                ({
                  Icon,
                  name,
                  text,
                  href,
                  target,
                }) => (
                  <a
                    className="contact-card"
                    href={href}
                    target={target}
                    rel="noreferrer"
                    key={name}
                  >
                    <span className="icon">
                      <Icon />
                    </span>

                    <div>
                      <strong>{name}</strong>
                      <div className="muted">{text}</div>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} Dhiraj Jadhav
          </span>

          <span>Built for data-driven opportunities.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
