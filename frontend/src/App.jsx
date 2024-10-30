import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Landing from './pages/Landing.jsx'
import Quests from './pages/Quests.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import Profile from './pages/Profile.jsx'
import Challenge from './pages/Challenge.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
    </Router>
  )
}

export default App
