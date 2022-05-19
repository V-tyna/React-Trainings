import React from "react";
import Cars from "../Cars/Cars";
import "./LogIn.css";

function LogIn() {
    return(
        <div>
            <h1>Log In Page</h1>
            <button onClick={() => <Cars />}>Click</button>
        </div>
    )
}

export default LogIn;