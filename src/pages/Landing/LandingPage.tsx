import { useState } from 'react';
import { useNavigate } from 'react-router';
import SceneBackground from '../../components/SceneBackground/SceneBackground';
import './LandingPage.scss';

const FADE_DURATION = 500;

function LandingPage() {
  const navigate = useNavigate();
  const [isLeaving, setIsLeaving] = useState(false);

  const handleEnter = () => {
    setIsLeaving(true);
    setTimeout(() => navigate('/home'), FADE_DURATION);
  };

  return (
    <div className='landing-page'>
      <SceneBackground />

      <div className="contentContainer">
        <div className={`FC-content ${isLeaving ? 'is-leaving' : ''}`}>
          <span className="eyebrow">Final Coalition</span>
          <h1 className="fc-title">
            <span className="fc-title-main">WayWard</span>
            <span className="fc-title-accent">Return</span>
          </h1>
          <h5>Kit is a bitch - Kahk</h5>
          <button className='FC-button' onClick={handleEnter}>
            <span>Enter</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
