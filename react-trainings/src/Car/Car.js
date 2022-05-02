import React from 'react';

function Car(props) {
    return (
        <div>
            <h3>Car name: {props.name}</h3> 
            <p>Year: {props.year}</p>
            <button onClick={props.onChangeTitile}>Click</button>
        </div>
    )
}

export default Car;