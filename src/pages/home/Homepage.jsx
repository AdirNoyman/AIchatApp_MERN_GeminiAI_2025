import { Link } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
  return (
    <div className='homepage'>
      <img src="/orbital.png" className='orbital' alt="orbital" />
     <div className="leftSide">
      <h1>ADIROS DEV</h1>
      <h2>Supercharge your charge</h2>
      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptatem maxime reprehenderit.</h3>
      <Link to="/" aria-label='get started'>Get Started</Link>
     </div>
     <div className="rightSide">
      <div className="imgContainer">
        <div className="bgContainer">
          <div className="bg"></div>
        </div>
        <img src="/bot.png" alt="bot"  className='bot'/>
      </div>
     </div>
    </div>
  )
}

export default Homepage