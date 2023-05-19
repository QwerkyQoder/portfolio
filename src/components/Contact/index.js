import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout( () => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    StrArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}></AnimatedLetters>
                </h1>
                <p>For any freelance work and collaborations. Contact me here:</p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required></input>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required></input>
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required></input>
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required/>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="SEND"></input>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

        </div>
        <Loader type='pacman'></Loader>
        </>
    )
}

export default Contact