import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])  

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                </h1>
                <h2>Designer</h2>
                    <p>I believe the key to good design is to subtract, not add, to understand the needs of the user, and eliminate the unimportant. I also believe design should add beauty and pleasure to life. I love what Milton Glaser, the legendary graphic designer, once said: "There are three responses to a piece of design -- yes, no and WOW! Wow is the one to aim for."</p>
                <h2>Developer</h2>
                    <p>My development experience is with JavaScript, React, React Native and the MERN stack. Each day I aspire to write code that is DRY, "Don't Repeat Yourself", and clean, easy to understand and easy to change. Currently, my two favorite web development topics are CSS and animation.</p>
                <h2>Educator</h2>
                    <p>Teaching is my happy place. An old proverb says, "Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime." This is my mantra and life mission. In five years, I see myself working as an eLearning developer, creating designs that are both effective and engaging.</p>
            </div>
        </div>
    )
}

export default About