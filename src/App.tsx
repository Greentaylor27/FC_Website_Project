import { Routes, Route } from 'react-router';

import './App.css';
import MemberPage from './pages/Member/MemberPage';
import LandingPage from './pages/Landing/LandingPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/members" element={<div>Members</div>} />
      <Route path="/members/:id" element={<MemberPage />} />
    </Routes>
  )
}

export default App;
