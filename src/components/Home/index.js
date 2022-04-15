import './index.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/nameLogo-S.png'
import AnimatedLetters from '../AnimatedLetters'

  const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h', 'e', 'r', 'r', 'i', 's', 'a', ',']
    const webArray = ['w', 'e', 'b']
    const developerArray = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <br />
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={webArray}
            idx={22}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={developerArray}
            idx={25}
          />
        </h1>
        <h2>Developer / Designer / Educator</h2>
        <Link to="/contact" className="flat-button">
          Let's Chat
        </Link>
      </div>
    </div>
  )
}

export default Home
