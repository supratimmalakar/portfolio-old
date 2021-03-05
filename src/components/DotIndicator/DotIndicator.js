import React from 'react'
import "./DotIndicator.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import {Link, animateScroll as scroll} from 'react-scroll'
// window.pageYOffset
// window.pageYOffset
// window.pageYOffset
// window.pageYOffset
// window.pageYOffset
// window.pageYOffset
// window.pageYOffset
export default function DotIndicator({currentPage, setCurrentPage, scrollDist}) {
    return (
        <div className="dot-indicator-container">
            <Link className="c-main__contact" to="home-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={1300}>
            <button onClick={() => {setCurrentPage("home")}}>
              <FontAwesomeIcon className={`dot home ${currentPage == "home" ? "current" : ""}`}  icon={faCircle}/>   
            </button>
            </Link>

            <Link className="c-main__contact" to="project1-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={1300}>
            <button onClick={() => {setCurrentPage("project1")}}>
              <FontAwesomeIcon className={`dot project1 ${currentPage == "project1" ? "current" : ""}`}  icon={faCircle}/>   
            </button>
            </Link>

            <Link className="c-main__contact" to="project2-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={1300}>
            <button onClick={() => {setCurrentPage("project2")}}>
              <FontAwesomeIcon className={`dot project2 ${currentPage == "project2" ? "current" : ""}`}  icon={faCircle}/>   
            </button>
            </Link>

            <Link className="c-main__contact" to="project3-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={1300}>
            <button onClick={() => {setCurrentPage("project3")}}>
              <FontAwesomeIcon className={`dot project3 ${currentPage == "project3" ? "current" : ""}`}  icon={faCircle}/>   
            </button>
            </Link>

            <Link className="c-main__contact" to="about-me-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={1300}>
            <button onClick={() => {setCurrentPage("about")}}>
              <FontAwesomeIcon className={`dot about ${currentPage == "about" ? "current" : ""}`}  icon={faCircle}/>   
            </button>
            </Link>

            <Link className="c-main__contact" to="contact-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={1300}>
            <button onClick={() => {setCurrentPage("contact")}}>
              <FontAwesomeIcon className={`dot contact ${currentPage == "contact" ? "current" : ""}`}  icon={faCircle}/>   
            </button>
            </Link>
            {/* <button onClick={setCurrentPage("project1")}>
                <FontAwesomeIcon className="dot project1" icon={faCircle}/>
            </button>
            <button onClick={setCurrentPage("project2")}>
                <FontAwesomeIcon className="dot project2" icon={faCircle}/>
            </button>
            <button onClick={setCurrentPage("project3")}>
                <FontAwesomeIcon className="dot project3" icon={faCircle}/>
            </button>
            <button onClick={setCurrentPage("about")}>
                <FontAwesomeIcon className="dot about" icon={faCircle}/>
            </button>
            <button onClick={setCurrentPage("contact")}>
                <FontAwesomeIcon className="dot contact" icon={faCircle}/>
            </button>  */}
        </div>
    )
}
