import { useNavigate } from 'react-router';
import SceneBackground from '../../components/SceneBackground/SceneBackground';
import './HomePage.scss';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <SceneBackground />

      <div className="contentContainer">
        <div className="FC-content">
          <span className="eyebrow">Welcome Home</span>
          <h1 className="fc-title">
            <span className="fc-title-main">The</span>
            <span className="fc-title-accent">Coalition</span>
          </h1>
          <div className="FC-Bio">
            <div className="FC-Plot"></div>
            <div className="FC-Description">
              <p>
                Welcome to the Coalition! We are a group of like-minded individuals
                dedicated to making a difference in our community. Join us in our
                mission to create positive change.
              </p>
            </div>
          </div>
          <h5>Choose your path</h5>
          <button className="FC-button" onClick={() => navigate('/members')}>
            <span>View Members</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
