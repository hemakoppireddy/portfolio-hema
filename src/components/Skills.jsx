import { useRef, useEffect } from 'react';
import '../styles/Skills.css';

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

const skillCategories = [
  { title: 'Programming Languages', skills: ['C','C++','Python','Java'] },
  { title: 'Web Development', skills: ['HTML','CSS','Bootstrap','JavaScript','React.js','MongoDB'] },
  { title: 'App Development', skills: ['React Native CLI','Expo CLI'] },
  { title: 'Database', skills: ['SQL','MongoDB'] },
  { title: 'Concepts', skills: ['DSA','OOPs','DBMS','OS','CN'] },
  { title: 'Tools', skills: ['VS Code','Git','Postman'] }
];

export default function Skills() {
  const headerRef = useRevealRef();
  const gridRef = useRevealRef();

  return (
    <section id="skills" className="sd-skills">
      <div className="sd-container">

        <div ref={headerRef} className="reveal">
          <p className="section-label">Skills</p>
          <h2 className="section-title">What I <em>work with</em></h2>
        </div>

        <div className="sd-layout">

          <div className="sd-categories reveal" ref={gridRef}>
            <h3 className="sd-sub">Technical Stack</h3>

            <div className="sd-grid">
              {skillCategories.map((cat, i) => (
                <div className="sd-card" key={cat.title} style={{animationDelay: `${i*0.1}s`}}>
                  
                  <div className="sd-header">
                    <span className="sd-title">{cat.title}</span>
                  </div>

                  <div className="sd-pills">
                    {cat.skills.map(s => (
                      <span className="sd-pill" key={s}>{s}</span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}