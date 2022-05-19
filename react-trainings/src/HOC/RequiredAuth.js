import { Navigate } from "react-router-dom";

function RequiredAuth(props){
    if(!props.auth) {
        return <Navigate to='/login'/>
    } else {
        return props.children;
    }  
}

export default RequiredAuth;