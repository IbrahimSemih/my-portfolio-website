import { FaGooglePlay } from 'react-icons/fa';
import './Projects.css';


function Projects() {
  const projects = [
    {
      id: 1,
      title: 'IBAN Cüzdanım',
      description:
        'This app is a mobile application that allows you to securely store, quickly add, and manage IBAN numbers belonging to different bank accounts. With its modern interface, QR code addition, favorite IBAN selection, and easy editing features, it makes it easy to organize your financial information. It is developed using Flutter and Riverpod technologies.',
      playStoreLink:
        'https://play.google.com/store/apps/details?id=com.ibrahim.iban_wallet',
    },
    {
      id: 2,
      title: 'Analysis and Classification System of Lateral Transfer Documents (PDF OCR + NLP-Based)',
      description: 'It converts academic and official documents in PDF format into text using OCR technology and automatically classifies the document type using natural language processing. Depending on the document type, it extracts critical information such as student name, number, grade point average, and disciplinary status, and structures it in JSON format. The project includes text extraction using Tesseract OCR, content analysis using advanced regex and an OpenAI-based NLP model, and data processing steps such as GPA conversion. Results are saved to a file for easy reporting and integration. This system, developed for academic document management and automation, provides high accuracy and flexibility.',
    },

  ];

  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map(({ id, title, description, playStoreLink }) => (
          <div key={id} className="project-card">
            <div className="project-content">
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
            <div className="project-actions">
              {playStoreLink && (
                <a
                  href={playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playstore-link"
                  aria-label={`Google Play Store Link - ${title}`}
                >
                  <FaGooglePlay size={20} style={{ marginRight: 8 }} />
                  Download from Google Play
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
