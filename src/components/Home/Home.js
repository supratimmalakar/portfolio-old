import React from 'react'
import './Home.css'
import dp from "../../assets/superx.png"
import {Link, animateScroll as scroll} from 'react-scroll'
import {Button} from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <div className="home-container" id="home-container">
            {/* <h1 className="home-heading">home</h1> */}
            <div className="home-main">
            <div className="home-description">
            <h1 className="home-heading" >Hello, I'm Supratim,</h1>
            <p>...and I'm a IIT Roorkee 2nd year undergraduate student, currently working as a web development intern at Chisel Labs.
            
            </p>
            <Link className="c-main__contact" to="about-me-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={1300}>
                <Button id="project-btn" className="contact-btn">
                    KNOW MORE
                    <FontAwesomeIcon style={{"margin-left" : "8px", "margin-right" : "5px"}} icon={faArrowDown}/>
                </Button>
            </Link>
            </div>
            <img className="home-image" src={dp}/>
 
            </div>
           
        </div>
    )
}
