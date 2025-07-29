import './index.css'

const Navbar = props => {
  const {score, seconds} = props
  return (
    <div className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="web-logo"
      />
      <div className="score-container">
        <p className="score">
          Score:<span className="updated-score">{score}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="seconds-timer">
            <span className="seconds">{seconds}</span>Sec
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
