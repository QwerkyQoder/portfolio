import { useState } from "react"
import AnimatedLetters from "../../../../portfolio-project/src/components/AnimatedLetters"
import { render } from "@testing-library/react"
import Loader from "react-loaders"
import { useEffect } from "react"
import "./index.scss"

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [portfolio, setPortfolio] = useState([])

    useEffect (() => {
        const timer =setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    })

    useEffect(() => {
        getPortfolio()
    },[])

    const getPortfolio = async () => {
        var parsedJSON = require('../../assets/Portfolio/portfoliodb.json');
        setPortfolio(parsedJSON)
    }
    const renderPortfolio = (portfolio) =>{
        
        return (
            <div className="images-container">
                {
                    portfolio.map ((port, idx) => {
                        console.log(port)
                        return (
                            <div className="image-box" key={idx}>
                                <img src={port.image} className="portfolio-image"
                                alt="portfolio"></img>
                                <div className="content"> 
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button className="btn"
                                    onClick={() => window.open(port.url)}> View </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                    letterClass={letterClass}
                    StrArray={"Portfolio".split("")}
                    idx={15}></AnimatedLetters>
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman"></Loader>
        </>
    )
}
export default Portfolio;