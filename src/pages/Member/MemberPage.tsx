import { useNavigate, useParams } from 'react-router';
import { members } from '../../data/members';
import SceneBackground from '../../components/SceneBackground/SceneBackground';
import './MemberPage.scss';

function MemberPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = members.find((m) => m.id === Number(id));

  if (!member) {
    return (
      <div className="memberPage">
        <SceneBackground />
        <div className="memberPage-notFound">
          <h1>Member Not Found</h1>
          <button className="FC-button" onClick={() => navigate('/members')}>
            <span>Back to Members</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="memberPage">
      <SceneBackground />

      <div className="contentContainer">
        <button className="backButton" onClick={() => navigate('/members')}>
          <span>&larr; Back</span>
        </button>

        <div className="memberPanel">
          <div className="memberPanel-header">
            <div className="memberPanel-image">
              {member.imageUrl ? (
                <img src={member.imageUrl} alt={member.name} />
              ) : (
                <div className="memberPanel-placeholder">{member.name.charAt(0)}</div>
              )}
            </div>

            <div className="memberPanel-heading">
              <span className="eyebrow">{member.rank}</span>
              <h1 className="fc-title">
                <span className="fc-title-accent">{member.name}</span>
              </h1>
              <p className="memberPanel-quote">{member.shortDescription}</p>

              <div className="memberPanel-tags">
                {member.mainJob.map((job) => (
                  <span key={job} className="tag tag-job">{job}</span>
                ))}
                {member.preferredRole.map((role) => (
                  <span key={role} className="tag tag-role">{role}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="memberPanel-body">
            <section className="memberPanel-bio">
              <h2>Biography</h2>
              <p>{member.bio}</p>
            </section>

            <section className="memberPanel-details">
              <div className="detail-block">
                <h3>Playing Since</h3>
                <p>{member.playingSince}</p>
              </div>

              <div className="detail-block">
                <h3>Playstyles</h3>
                <div className="memberPanel-tags">
                  {member.playstyles.map((style) => (
                    <span key={style} className="tag">{style}</span>
                  ))}
                </div>
              </div>

              <div className="detail-block">
                <h3>Favorite Content</h3>
                <div className="memberPanel-tags">
                  {member.favoriteContent.map((content) => (
                    <span key={content} className="tag">{content}</span>
                  ))}
                </div>
              </div>
            </section>

            {member.stats.length > 0 && (
              <section className="memberPanel-stats">
                <h2>Stats</h2>
                <div className="stats-grid">
                  {member.stats.map((stat) => (
                    <div key={stat.label} className="stat-card">
                      <span className="stat-label">{stat.label}</span>
                      <span className="stat-value">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberPage;
