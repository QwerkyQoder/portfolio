import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout( () => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
        .sendForm('service_f940lr6', 'template_krs9tqk',
            refForm.current,
            '15naaxIhkyKeDWblF')
            .then (
            () => {
                alert('Message successfully sent')
            },
            () => {
                alert("Failed to send the message, please try again")
            }
        )
    }

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
                    <form ref={refForm} onSubmit={sendEmail}>
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
            <div className='info-map'>
                Meera Murthy
                <br/>
                Remote Freelancer.
                <br/>
                India
                <br/>
                <span>
                    colorcodedcrayons@gmail.com
                </span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[12.972442,77.580643]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'></TileLayer>
                    <Marker position={[12.972442,77.580643]}>
                        <Popup> I work from here. :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman'></Loader>
        </>
    )
}

export default Contact