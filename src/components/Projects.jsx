import { useRef, useEffect } from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'CodeDelight — Gamified Coding Platform',
    desc: 'A web platform for learning DSA and Full Stack Development through interactive modules, games, and built-in code compilers.',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    github: 'https://github.com/lohithaalekhyakollu/CodeDelight',
    img: '/portfolio-hema/images/codedelight-page.png',
  },
  {
    title: 'Multilingual React Web App with RTL Support',
    desc: 'A React-based web application with dynamic multilingual support using react-i18next, including automatic RTL/LTR switching and persistent user preferences.',
    tags: ['React', 'i18next', 'JavaScript'],
    github: 'https://github.com/hemakoppireddy/react-i18n-multilang-rtl', 
    img: '/portfolio-hema/images/multilanguage-page.png', 
  },
  {
    title: 'EASE — Student Service Web App',
    desc: 'A responsive web application to streamline student services like appointment scheduling, queue tracking, and secure payment slot booking.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/hemakoppireddy/EaseWebProject',
    img: '/portfolio-hema/images/ease-page.png',
  },
];

function useRevealRef() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('visible');
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function ProjectCard({ p, delay }) {
  const ref = useRevealRef();

  return (
    <div
      className="project-card reveal"
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="project-thumb">
        <img
          src={p.img}
          alt={p.title}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

        <div className="project-overlay">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="project-overlay-btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>

      <div className="project-body">
        <h3>{p.title}</h3>
        <p>{p.desc}</p>

        <div className="project-tags">
          {p.tags.map((t) => (
            <span className="project-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useRevealRef();

  return (
    <section id="projects" className="projects">
      <div className="container">

        <div ref={headerRef} className="reveal">
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            Things I've <em>built</em>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} delay={i * 0.12} />
          ))}
        </div>

      </div>
    </section>
  );
}