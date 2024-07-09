import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png"
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";
import './index.scss'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray1 = ['e', 'e', 'r', 'a']
    const nameArray2 = [ 'u', 'r', 't', 'h', 'y']
    const developer = ['w', 'e', 'b','   ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout( () => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <>
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
                <AnimatedLetters letterClass={letterClass}
                StrArray={developer} idx={15}></AnimatedLetters>

                </h1>
                <h2> Full Stack Web Developer / Javascript Expert / Exploring UI / UX / VUI</h2>
                <h2> Open Source contributor at Mozilla <a href="https://bugzilla.mozilla.org/user_profile?user_id=731824">Mozilla Profile</a></h2>
                <Link to="/contact" className="flat-button" > CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type="pacman"></Loader>
        </>
    )
}

export default Home;
