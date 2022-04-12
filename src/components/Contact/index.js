import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import SubmitDaisy from '../../assets/images/yellowDaisy.png'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (error) => {
    error.preventDefault()
    emailjs
      .sendForm(
        'service_ld5rfq8',
        'template_qq3f4qn',
        refForm.current,
        '62a2A8g2FBHDQKQpe'
      )
      .then(
        () => {
          alert('SUCCESS!')
          /* refresh the page after submit */
          window.location.reload(false)
        },
        (error) => {
          alert('FAILED...', error)
        }
      )
  }

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am a motivated Front End Developer looking for opportunities to
          create high quality eLearning web applications.
        </p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <div className="submit-container">
                  <input
                    type="image"
                    alt="submit"
                    src={SubmitDaisy}
                    width="75"
                    height="75"
                    className="flat-button"
                    onSubmit={sendEmail}
                  />
                  <div className="submit-text">Submit</div>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
