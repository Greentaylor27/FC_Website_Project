import './MemberCard.scss'
import { type Member } from '../../types/Member';
import { useNavigate } from 'react-router';

function MemberCard({ member }: { member: Member }) {
  const navigate = useNavigate();

  return (
    <div
      className="memberCard"
      onClick={() => navigate(`/members/${member.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') navigate(`/members/${member.id}`);
      }}
    >
      <div className="memberCard-image">
        {member.imageUrl ? (
          <img src={member.imageUrl} alt={member.name} />
        ) : (
          <div className="memberCard-placeholder">{member.name.charAt(0)}</div>
        )}
        <span className="memberCard-rank">{member.rank}</span>
      </div>

      <div className="memberCard-body">
        <h3>{member.name}</h3>
        <p className="memberCard-desc">{member.shortDescription}</p>

        {member.mainJob.length > 0 && (
          <div className="memberCard-tags">
            {member.mainJob.map((job) => (
              <span key={job} className="memberCard-tag">{job}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MemberCard;
