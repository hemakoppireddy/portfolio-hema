import { useRef, useEffect } from 'react';
import '../styles/About.css';

function useRevealRef() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const stats = [
  { number: '9.10', label: 'CGPA' },
  { number: '400+', label: 'Problems Solved' },
  { number: '1+', label: 'Year Experience' },
  { number: '5+', label: 'Projects Built' },
];

const highlights = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: 'Education',
    value: 'B.Tech CSE — Aditya College of Engineering & Technology',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: 'Internship',
    value: 'Full-Stack Dev Intern — Technical Hub Private Limited',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Focus',
    value: 'Full-Stack Web Development & Competitive Programming',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Status',
    value: 'Open to full-time roles & freelance projects',
  },
];

export default function About() {
  const headerRef = useRevealRef();
  const leftRef = useRevealRef();
  const rightRef = useRevealRef();

  return (
    <section id="about" className="about">
      <div className="container">

        <div ref={headerRef} className="reveal">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Turning ideas into <em>real products</em></h2>
        </div>

        <div className="about-layout">

          {/* ── Left ───────────────────────────── */}
          <div className="about-left reveal" ref={leftRef}>
            <p className="about-intro">
              I'm a Computer Science &amp; Engineering student at Aditya College of Engineering
              and Technology, maintaining a <strong>9.10 GPA</strong>. Currently working as a
              Full-Stack Development Intern at Technical Hub Private Limited, building scalable
              applications with React Native and REST APIs.
            </p>
            <p className="about-body">
              I enjoy solving complex problems — both in competitive programming (300+ problems
              solved) and in real-world projects. My goal is to craft clean, efficient, and
              user-friendly digital experiences that make an impact.
            </p>

            {/* Highlights */}
            <ul className="about-highlights">
              {highlights.map((h) => (
                <li key={h.title} className="about-highlight-item">
                  <span className="highlight-icon">{h.icon}</span>
                  <div className="highlight-text">
                    <span className="highlight-label">{h.title}</span>
                    <span className="highlight-value">{h.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right ──────────────────────────── */}
          <div className="about-right reveal" ref={rightRef}>

            {/* Stats grid */}
            <div className="about-stats">
              {stats.map((s) => (
                <div className="about-stat" key={s.label}>
                  <span className="about-stat-number">{s.number}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Quote / philosophy card */}
            <div className="about-quote-card">
              <svg className="quote-icon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p>
                I believe great software is built at the intersection of clean code,
                thoughtful design, and a deep understanding of the user's needs.
              </p>
            </div>

            {/* Tech stack pills */}
            <div className="about-stack">
              <p className="about-stack-label">Tech I work with</p>
              <div className="about-pills">
                {['C++', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'React Native', 'SQL', 'Git'].map(t => (
                  <span className="about-pill" key={t}>{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}