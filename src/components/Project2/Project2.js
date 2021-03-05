import React from 'react'
import './Project2.css'
import treeview from '../../assets/treeview.png'
import {Button} from 'semantic-ui-react'

export default function Project2() {
    return (
        <div className="project2-container" id="project2-container">
            <div className="project2-main">
            <img className="treeview-img" src={treeview}/>
            <div className="project2-text-div">
            <h2>Chisel Labs</h2>
            <p>
                As a intern in Chisel Labs, I am given tasks mostly related to frontend(and few backend).  
                I've improved the UI of certain parts of the product and have created a few new components for the
                product. I've also contributed in the implementation of JWT Token authentication. Working on user authentication in the product gave me insight of how user authentication
                works in user based sites.
            </p>
            <a target="_blank"  href="https://app.chisellabs.com/"><Button className="project2-demo-btn"> DEMO</Button></a>
            </div>
            </div>
            
        </div>
    )
}
