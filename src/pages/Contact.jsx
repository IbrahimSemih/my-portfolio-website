import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaMapMarkerAlt, FaPhone, FaInstagram } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'ibrahimsemihbakr@gmail.com',
      link: 'mailto:ibrahimsemihbakr@gmail.com',
      description: 'For project proposals and collaborations'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'İzmir, Turkey',
      description: 'Open to remote work'
    }
  ];

  const socialLinks = [
    { 
      icon: <FaLinkedin />, 
      url: 'https://www.linkedin.com/in/ibrahim-semih-bak%C4%B1r-928568236/', 
      label: 'LinkedIn',
      description: 'Professional network'
    },
    { 
      icon: <FaGithub />, 
      url: 'https://github.com/IbrahimSemih', 
      label: 'GitHub',
      description: 'Code repository'
    },
          { 
        icon: <FaInstagram />, 
        url: 'https://www.instagram.com/i.semih35/', 
        label: 'Instagram',
        description: 'Social updates'
      },
  ];

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p className="contact-subtitle">
          If you'd like to work with me on your projects or have any questions, 
          please don't hesitate to reach out. I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <div className="contact-info-cards">
            {contactInfo.map(({ icon, title, value, link, description }) => (
              <div key={title} className="contact-info-card">
                <div className="contact-icon">{icon}</div>
                <div className="contact-details">
                  <h3>{title}</h3>
                  {link ? (
                    <a href={link} className="contact-link">{value}</a>
                  ) : (
                    <span className="contact-value">{value}</span>
                  )}
                  <p className="contact-description">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="social-section">
          <h2>Social Media</h2>
          <p className="social-subtitle">Follow me on social media and check out my projects</p>
          <div className="social-links">
            {socialLinks.map(({ icon, url, label, description }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={label}
              >
                <div className="social-icon">{icon}</div>
                <div className="social-content">
                  <span className="social-name">{label}</span>
                  <span className="social-description">{description}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-card">
            <h3>Let's Work Together!</h3>
            <p>
              Don't hesitate to reach out for new projects, collaborations, or just to say hello. 
              I'm open to all kinds of suggestions and would be happy to help you.
            </p>
            <a href="mailto:ibrahimsemihbakr@gmail.com" className="cta-button">
              <FaEnvelope style={{ marginRight: '8px' }} />
              Get In Touch Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
