import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function EachCarPage() {
    
    console.log(useParams());

    const {id: carName} = useParams();
   
    return(
        <div>
            {carName}
            <Link className="link-home-page" to='/'>Home page</Link>
        </div>
    )
}

export default EachCarPage;