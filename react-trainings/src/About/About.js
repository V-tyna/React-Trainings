import React from "react";

function About() {
    return(
        <div>
            <h2>Page about</h2>
            <button type="text" onClick={() => window.location.pathname = '/'}>Back to home page</button>
        </div>
    )
}

export default About;