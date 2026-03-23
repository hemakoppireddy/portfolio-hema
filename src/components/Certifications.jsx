import { useRef, useEffect } from 'react';
import '../styles/Certifications.css';

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

const certifications = [
  {
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB',
    image: 'public/images/mongodb.webp',
    link: 'https://drive.google.com/file/d/1hP6bE7Dd1jvmllqea5Vxjj2TXRHv4ThQ/view',
  },
  {
    title: 'Red Hat System Administration (RHCSA)',
    issuer: 'Red Hat',
    image: 'public/images/redhat.webp',
    link: 'https://drive.google.com/file/d/1vwX_HaN4AaClppw1_36hFY3ctbKVULya/view',
  },
  {
    title: 'Oracle Certified Java Foundations',
    issuer: 'Oracle',
    image: 'public/images/oracle.webp',
    link: 'https://drive.google.com/file/d/1SGOaoY9yW7FDOaL3YjpfRTpTStL0DErl/view',
  },
  {
    title: 'IT Specialist HTML and CSS',
    issuer: 'Certiport',
    image: 'public/images/certiport.webp',
    link: 'https://drive.google.com/file/d/1z1wotHi12QCAj236jfQbVC2iOhx1qMyq/view',
  },
  {
    title: 'Programming Essentials in C++',
    issuer: 'Cisco Networking Academy',
    image: 'public/images/cpp.webp',
    link: 'https://drive.google.com/file/d/11G8ZSo94_WguEvmp7v4Op9Dhxvht6qQH/view',
  },
  {
    title: 'Programming Essentials in C',
    issuer: 'Cisco Networking Academy',
    image: 'public/images/c.webp',
    link: 'https://drive.google.com/file/d/1HZR-mrdJX9B5u7TjxG9dyo4gRdqwmQt4/view',
  },
];

function CertCard({ cert, delay }) {
  const ref = useRevealRef();

  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noreferrer"
      className="cert-card reveal"
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="cert-image-wrap">
        <img src={cert.image} alt={cert.title} className="cert-image" />

        <div className="cert-overlay">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          View Certificate
        </div>
      </div>

      <div className="cert-info">
        <div>
          <p className="cert-title">{cert.title}</p>
          <p className="cert-issuer">{cert.issuer}</p>
        </div>

        <svg
          className="cert-arrow"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </div>
    </a>
  );
}

export default function Certifications() {
  const headerRef = useRevealRef();

  return (
    <section id="certifications" className="certifications">
      <div className="container">

        <div ref={headerRef} className="reveal">
          <p className="section-label">Certifications</p>
          <h2 className="section-title">
            Credentials & <em>Achievements</em>
          </h2>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} delay={i * 0.08} />
          ))}
        </div>

      </div>
    </section>
  );
}