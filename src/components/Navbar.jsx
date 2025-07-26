import './Navbar.css';

function Navbar({ scrollToSection, refs }) {
  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="logo" onClick={() => scrollToSection(refs.homeRef)}>Ibrahim Semih Bakir</h2>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection(refs.homeRef)}>Home</button></li>
          <li><button onClick={() => scrollToSection(refs.aboutRef)}>About Me</button></li>
          <li><button onClick={() => scrollToSection(refs.projectsRef)}>Projects</button></li>
          <li><button onClick={() => scrollToSection(refs.contactRef)}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
