import React from 'react'
import {Link} from "react-router-dom";
import user from '../assets/images/user.png'
import sunImage from '../assets/images/sun.png'
import fireImage from '../assets/images/fire.png'
import Navbar from '../components/Navbar.jsx'
import '../css/Landing.css'

const Landing = () => {
  const userName = 'John' 
  const days = 5

  return (
    <div className='phone-container'>
      <div className='content'>
        <div className='welcome'>
          <Welcome name={userName} profilePic={user} />
        </div>
        <div className='streak'>
          <Streak numDays={days} />
        </div>
        <div className='challenge'>
          <ChallengeButton />
        </div>
      </div>
      <div className='footer'>
        <Navbar />
      </div>
    </div>
  );
}

const Welcome = ({ name }) => {
  return (
      <div className="welcome-card">
          <div className="welcome-text">
              <div className="welcome-back">
                  <img src={sunImage} className="sun-img" />
                  <h3>WELCOME BACK!</h3>
              </div>
              <h2>Nice seeing you here, {name}</h2>
          </div>
      </div>
  );
}

const Streak = ({ numDays }) => {
  return (
    <div className='streak-card'>
      <button className='streak-button'>
        <div className='streak-text'>
          <h3>{numDays} days in a row!</h3>
        </div>
        <img src={fireImage} className='fire-img' />
      </button>
    </div>
  );
}

const ChallengeButton = () => {
  return (
    <div>
      <Link to={"/challenge"}>
        <button className='challenge-button'>
          <h3>Challenge!</h3>
        </button>
      </Link>
    </div>
  )
}

export default Landing;