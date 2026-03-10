import profilePic from '../assets/profile1.jpeg';
import './Home.css';

function Home({ scrollToNext }) {
  return (
    <div className="home-content">
      <div className="image-area">
        <img src={profilePic} alt="Ibrahim Semih" className="profile-image" />
      </div>
      <div className="text-area">
        <h1>Hi, I'm<br />Ibrahim Semih</h1>
        <h2>Flutter Developer</h2>
        <p>Code with passion, design with purpose</p>
        <div className="scroll-down" onClick={scrollToNext} title="Scroll down">
          ⬇️
        </div>
      </div>
    </div>
  );
}

export default Home;
