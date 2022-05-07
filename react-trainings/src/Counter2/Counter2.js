import React from "react";
import './Counter2.css';
import { ClickedContext } from "../App";

export default function Counter2(props) {
    return (
        <div className="counter2">
            <h3>Counter 2</h3>
            <ClickedContext.Consumer>
               {clicked => clicked ? <p>Clicked</p> : null} 
            </ClickedContext.Consumer>
        
        </div>
    )
}