import { Routes, Route } from 'react-router';

import './App.css';
import MemberPage from './pages/Member/MemberPage';
import LandingPage from './pages/Landing/LandingPage';
import HomePage from './pages/Home/HomePage';
import MembersPage from './pages/Members/MembersPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/members" element={<MembersPage />} />
      <Route path="/members/:id" element={<MemberPage />} />
    </Routes>
  )
}

export default App;
