import MemberCard from '../../components/MemberCard/MemberCard'
import { members } from '../../data/members'
import SceneBackground from '../../components/SceneBackground/SceneBackground'
import './MembersPage.scss'

function MembersMap() {
  return (
    <div className="membersMap">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  )
}

function MembersPage() {
  return (
    <div className="membersPage">
      <SceneBackground />

      <div className="bar">
        <span className="eyebrow">Final Coalition</span>
        <h1 className="fc-title">
          <span className="fc-title-main">Our</span>
          <span className="fc-title-accent">Members</span>
        </h1>
        <div className="actionGroup">
          <button className="FC-button">
            <span>Become a Member</span>
          </button>
        </div>
      </div>
      <div className="contentContainer">
        <div className="memberCards">
          <MembersMap />
        </div>
      </div>
    </div>
  )
}

export default MembersPage;
