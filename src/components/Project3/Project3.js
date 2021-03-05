import React from 'react'
import './Project3.css'
import guide from '../../assets/guide.png'

export default function Project3() {
    return (
        <div className="project3-container" id="project3-container">
            <div className="project3-main">
            <img className="guide-img" src={guide}/>
            <div className="project3-text-div">
            <p>
                I've also contributed in building a guide for the product that facilitates easier navigation around the product.
                Moreover the guide, also helps users in understanding many features and elements of the product. From my few months as 
                an intern, I've learned to work in a codebase that uses multiple technologies at the same time instead on more linear stacks
                that students are used to. I've got to know my way around relational databases, redux, orm and few more technologies.
            </p>
            </div>
         </div>
        </div>
    )
}
