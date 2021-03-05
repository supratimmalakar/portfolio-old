import React from 'react'
import './AboutMe.css'
import {Button} from 'semantic-ui-react'
import {Link, animateScroll as scroll} from 'react-scroll'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import cpp from '../../assets/c++.png'
import python from '../../assets/python.png'
import sql from '../../assets/sql.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function AboutMe() {
    return (
        <div className="about-me-container">
            <h1 className="about-me-heading">About Me</h1>
            <div className="about-main">
                <div className="about-description">
                <p>
                    I'm Supratim Malakar, currently studying Production Engg.(2nd yr B.Tech) in IIT Roorkee.
                    I've had a keen interest in computers and their working from very young age and now I'm pursuing the 
                    same interest. My main areas of interest are Web Development, competitive programming and Machine Learning, 
                    competitive programming being the lesser of the three. I've worked on a few personal projects based on Computer Vision 
                    and natural style transfer. And outside of coding, I'm also a very passionate gamer(SUPR3X being my in-game name) and love
                    to watch movies and read novels (JRR Tolkien is <FontAwesomeIcon color="red" icon={faHeart}/>) during my free time.
                </p>
                {/* <Link className="c-main__contact" to="contact-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={1300}></Link>
                <Button className="about-cv-btn"> CONTACT ME</Button>
                <Link/> */}
                <Link className="c-main__contact" to="contact-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={1300}>
                <Button className="about-cv-btn"> CONTACT ME <FontAwesomeIcon style={{"margin-left" : "8px", "margin-right" : "5px"}} icon={faArrowDown}/></Button>
                </Link>
                </div>
                <div className="about-content">
                {/* tech stack icons */}
                <div className="about-icons">
                    <div className="icon-div up">
                    <div className="icon-containers">
                        <img className="abt-icon" src={html}/>
                    </div>
                    <div className="icon-containers">
                        <img className="abt-icon" src={css}/>
                    </div>
                    <div className="icon-containers">
                        <img className="abt-icon" src={js}/>
                    </div>
                    <div className="icon-containers">
                        <img className="abt-icon" src={react}/>
                    </div>
                    </div>
                    <div className="icon-div down">
                    <div className="icon-containers">
                        <img className="abt-icon" src={redux}/>
                    </div>
                    <div className="icon-containers">
                        <img className="abt-icon" src={cpp}/>
                    </div>
                    <div className="icon-containers">
                        <img className="abt-icon" src={python}/>
                    </div>
                    <div className="icon-containers">
                        <img className="abt-icon" src={sql}/>
                    </div>
                    </div>
                    <div className="icon-description">
                    <p>My relevant skills</p>
                    </div>
                    
                </div>
                
                </div>
            </div>
        </div>
    )
}
