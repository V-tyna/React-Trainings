import React from "react";
import { Link } from "react-router-dom";

function About() {
    return(
        <div>
            <h2>Page about</h2>
            <Link className="link-home-page" to='/'>Home page</Link>
        </div>
    )
}

export default About;