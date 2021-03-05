import React from 'react'
import displayImg from '../../assets/dp.jpg'
import {Button} from 'semantic-ui-react'
import './Nav.css'
import {Link, animateScroll as scroll} from 'react-scroll'

export default function Nav({setCurrentPage}) {
        return (
        <div className="nav-container">
            <img className="display-picture" src={displayImg}/>
            <div className="button-group">
                <Link className="c-main__contact" to="home-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={1300}>
                <button className="btn fill">
                    HOME
                </button>
                </Link>
                <Link className="c-main__contact" to="project1-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={1300}>
                <button className="btn fill">
                    PROJECTS
                </button>
                </Link>
                <Link className="c-main__contact" to="about-me-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={1300}>
                <button className="btn fill">
                    ABOUT ME
                </button>
                </Link>
                <Link className="c-main__contact" to="contact-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={1300}>
                <Button inverted color="blue" className="contact-btn">
                    CONTACT ME
                </Button>
                </Link>
            </div>
        </div>
    )
}
