import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png"
import LogoTitleM from "../../assets/images/logo-s-dark.png"
import './index.scss'
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect } from "react";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray1 = ['e', 'e', 'r', 'a']
    const nameArray2 = [ 'u', 'r', 't', 'h', 'y']

    useEffect(() => {
        setTimeout( () => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <div className="mlogo">
                <img src={LogoTitle} alt="developer" ></img></div>
                <AnimatedLetters letterClass={letterClass}
                StrArray={nameArray1} idx={15}></AnimatedLetters>
                <div className="mlogo">
                <img src={LogoTitle} alt="developer" ></img></div>
                <AnimatedLetters letterClass={letterClass}
                StrArray={nameArray2} idx={15}></AnimatedLetters>
                <br/>
                Web Developer
                </h1>
                <h2> Front End Developer / Javascript Expert / Exploring UI / UX / VUI</h2>
                <Link to="/contact" className="flat-button" > CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;