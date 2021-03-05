import React from 'react'
import './Contact.css'
import jojo from '../../assets/jojo.png'
import elon from '../../assets/Elon.png'
import bg from '../../assets/bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagramSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-heading">Contact Me</h1>
            <div className="contact-main">
                <div className="contact-details">
                    <h2 className="email">supratim_m@me.iitr.ac.in</h2>
                    <h3 className="address">Agartala, Tripura(W), 799001</h3>
                    <p>Feel free to ping me on social media</p>
                    <div className="icons">
                    <a href="https://www.facebook.com/supratim.malakar.54/" target="_blank"><FontAwesomeIcon className="social-btn" id="facebook" icon={faFacebookSquare}/></a>
                    <a href="https://www.instagram.com/supthefuhrer/" target="_blank"><FontAwesomeIcon className="social-btn" id="instagram" icon={faInstagramSquare}/></a>
                    <a href="https://www.linkedin.com/in/supratim-malakar-023222190/" target="_blank"><FontAwesomeIcon className="social-btn" id="linkedin" icon={faLinkedin}/></a>
                    </div>
                </div>
                <div className="contact-img-div">
                    <img className="contact-img" src={elon}/>
                </div>
            </div>
            
        </div>
    )
}
