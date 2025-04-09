import { Link } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Link to="/dashboard" className='logo'>Dashboard 🤓</Link>
    </div>
  )
}

export default Homepage