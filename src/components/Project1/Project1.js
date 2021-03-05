import React from 'react'
import './Project1.css'
import todoSS from '../../assets/Todoss.png'
import {Button} from 'semantic-ui-react'

export default function Project1() {
    return (
        <div className="project1-container">
            
         <h1 className="project1-heading">Projects</h1>

         <div className="todo-container">
            <img className="todo-ss" src={todoSS}/>
            <div className="project-text-div">
            <h2>Todo App</h2>
            <p>
                This Todo App is one of the web apps that I've built while I was bored in an online class.
                So, this app basically helps a user to manage his/her tasks or 'todos'. A user may add their 
                tasks and mark them according to the priority of the task. Once a task is complete, 
                user can mark it as complete or delete the task from the list. User can also select which todos
                are shown on screen based on a few criterias. If a user has too many tasks added, and want to find 
                a specific todo, they can use the search function.
            </p>
            <a target="_blank"  href="https://supratimmalakar.github.io/Todo-App/"><Button className="project-demo-btn"> DEMO</Button></a>
            </div>
         </div>
            
        </div>
    )
}
