import { useNavigate } from 'react-router';
import './LandingPage.scss';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className='landing-page'>
      <div className="landing-overlay" />
      <div className="landing-glow" />

      <div className="contentContainer">
        <div className='FC-content'>
          <span className="eyebrow">Final Coalition</span>
          <h1 className="fc-title">
            <span className="fc-title-main">WayWard</span>
            <span className="fc-title-accent">Return</span>
          </h1>
          <h5>Kit is a bitch - Kahk</h5>
          <button className='FC-button' onClick={() => navigate('/members')}>
            <span>Enter</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
