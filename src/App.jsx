import { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Bölümlerin görünürlük durumunu tutuyoruz
  const [visibleSections, setVisibleSections] = useState({});

  // Scroll to section fonksiyonu
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Intersection Observer ile görünürlük kontrolü
  useEffect(() => {
    const sections = [homeRef, aboutRef, projectsRef, contactRef];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    // Temizlik fonksiyonu
    return () => {
      sections.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <>
      <Navbar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, projectsRef, contactRef }} />

      <section ref={homeRef} id="home" className={`section home-section ${visibleSections.home ? 'visible' : ''}`}>
        <Home scrollToNext={() => scrollToSection(aboutRef)} />
      </section>

      <section ref={aboutRef} id="about" className={`section about-section ${visibleSections.about ? 'visible' : ''}`}>
        <About />
      </section>

      <section ref={projectsRef} id="projects" className={`section projects-section ${visibleSections.projects ? 'visible' : ''}`}>
        <Projects />
      </section>

      <section ref={contactRef} id="contact" className={`section contact-section ${visibleSections.contact ? 'visible' : ''}`}>
        <Contact />
      </section>

      <footer className="footer">
        <p>© 2026 Ibrahim Semih Bakir. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
