import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' }, // ✅ added
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home'); // ✅ active state

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // detect active section
      const sections = NAV_LINKS.map(l => document.querySelector(l.href));
      sections.forEach(sec => {
        if (!sec) return;
        const top = window.scrollY;
        const offset = sec.offsetTop - 120;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
          setActive(`#${sec.id}`);
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#home" className="navbar-logo">
            <span>Hema Durga Koppireddy</span>
          </a>

          {/* Desktop Links */}
          <ul className="navbar-links">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={active === l.href ? 'active' : ''}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`mobile-overlay${menuOpen ? ' open' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="menu-close" onClick={closeMenu}>✕</button>

        {NAV_LINKS.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={closeMenu}
            className={active === l.href ? 'active' : ''}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}