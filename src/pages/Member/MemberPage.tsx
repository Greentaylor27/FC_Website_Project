import { useParams } from 'react-router';

function MemberPage() {
  const { id } = useParams();
  return <div>Member Detail for {id}</div>;
}

export default MemberPage;
