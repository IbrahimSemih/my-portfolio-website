import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <p>
            Hi, I'm <strong>İbrahim Semih Bakır</strong>. I'm a Computer Engineering graduate with a strong passion for technology and mobile development.
            My main focus is on building cross-platform mobile applications using <strong>Flutter</strong>, where I enjoy combining clean code with great user experiences.
          </p>

          <p>
            I’m a curious and self-motivated developer who’s always eager to learn and improve. I value clean architecture, performance, and writing maintainable code.
            Collaboration is also a big part of my work ethic. I believe in the power of teamwork and effective communication to build meaningful products.
          </p>

          <p>
            In addition to mobile development, I’ve recently started diving into web technologies. I’m learning <strong>React.js</strong>, <strong>Vite</strong>, and <strong>Node.js</strong>,
            aiming to expand my skills into modern web application development as well.
          </p>

          <p>
          My goal is to grow as a mobile and web developer, building high-quality cross-platform applications that offer great user experiences.
I'm passionate about using technology to solve real-world problems, and I aim to contribute to impactful projects—whether on mobile or the web.
As I deepen my expertise in Flutter, I'm also actively expanding into modern web technologies like React.js and Node.js to become a more versatile full-stack developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
