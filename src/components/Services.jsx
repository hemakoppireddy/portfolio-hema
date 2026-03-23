import { useRef, useEffect } from 'react';
import '../styles/Services.css';

const services = [
  {
    num: '01',
    title: 'Web Application Development',
    desc: 'Building responsive, scalable, and intuitive web applications tailored to user needs with clean architecture and performance focus.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="14" rx="2"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Full-Stack Functionality',
    desc: 'Developing robust client-side and server-side logic with seamless API integration and efficient data handling.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7h16M4 12h16M4 17h16"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'UI Implementation',
    desc: 'Designing intuitive, user-friendly interfaces with responsive layouts and smooth interactions across all devices.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    ),
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

function ServiceCard({ s, delay }) {
  const ref = useRevealRef();

  return (
    <div
      className="srv-card reveal"
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="srv-num">{s.num}</div>

      <div className="srv-icon">{s.icon}</div>

      <h3 className="srv-title">{s.title}</h3>
      <p className="srv-desc">{s.desc}</p>
    </div>
  );
}

export default function Services() {
  const headerRef = useRevealRef();

  return (
    <section id="services" className="services">
      <div className="container">

        <div ref={headerRef} className="reveal">
          <p className="section-label">Services</p>
          <h2 className="section-title">
            How I can <em>help you</em>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.num} s={s} delay={i * 0.1} />
          ))}
        </div>

      </div>
    </section>
  );
}