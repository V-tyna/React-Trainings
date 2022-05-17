import React from "react";
import { useParams } from "react-router-dom";

function EachCarPage() {
    
    console.log(useParams());

    const {id: carName} = useParams();
   
    return(
        <div>{carName}</div>
    )
}

export default EachCarPage;