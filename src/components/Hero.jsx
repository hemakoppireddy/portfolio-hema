import '../styles/Hero.css';

export default function Hero() {
  const profileImg = 'public/images/Hema_Bamboo_pic.png';

  return (
    <section id="home" className="hero">
      <div className="hero-grid" />
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="container hero-inner">

        {/* Text */}
        <div className="hero-text-side">
          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-name">
            Hema Durga<br />Koppireddy
          </h1>

          <p className="hero-role">
            <strong>Full-Stack Developer</strong>
          </p>

          <p className="hero-desc">
            Passionate about building scalable web applications and creating
            intuitive, user-friendly interfaces that leave a lasting impression.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              Hire Me
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            
              <a href="/Hema_resume.pdf"
              download="Hema_Durga_Resume.pdf"
              className="btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="hero-image-side">
          <div className="hero-image-frame">
            <div className="hero-image-ring" />
            <img src={profileImg} alt="Hema Durga Koppireddy" className="hero-img" />
            <div className="hero-image-badge">Full-Stack Dev</div>
          </div>
        </div>

      </div>
    </section>
  );
}