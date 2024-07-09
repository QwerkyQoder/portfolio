import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faGitAlt, faHtml5, faJs, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => 
 {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout( () => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    StrArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx={15}></AnimatedLetters>
                </h1>
                <h2> I am a software with 9+ years of experience.
                At present I am a freelance Full Stack Web Developer. </h2>
                <p>I did fellowship in Web Development (JavaScript) with Mozilla Firefox, having been selected through the Outreachy program for open source and open science. I continued to contribute to the Mozilla Open source even after the fellowsip under the excellent guidance of my mentor at Mozilla.
                <br/>
                <a href='https://bugzilla.mozilla.org/user_profile?user_id=731824'> Mozilla Profile</a>
                </p>
                <p> I have also been working as a mentor for Artificial Intelligence and Web Development courses at Udacity since 2019.</p>
                <p> I worked in the Telecom Software Industry for 5.5 years in the beginning of my career. Here I worked on VoIP and LTE-4g.</p>
                <p>I am exploring UI / UX / VUI design. I am also pursuing the Google UX Design Professional Certificate Course.</p>
            </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529'></FontAwesomeIcon>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9'></FontAwesomeIcon>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faJs} color='#EFD81D'></FontAwesomeIcon>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'></FontAwesomeIcon>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faNodeJs} color='#EFD81D'></FontAwesomeIcon>
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color='#f34f29'></FontAwesomeIcon>
                </div>
                {/* <div className='face7'>
                    <FontAwesomeIcon icon={faPython} color='#4584b6'></FontAwesomeIcon>
                </div> */}
            </div>
        </div>
        </div>
        <Loader type='pacman'></Loader>
        </>
    )
}

export default About;