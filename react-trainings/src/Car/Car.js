import React from 'react';

function Car(props) {
    return (
        <div style={{
            border: '1px solid #ccc',
            marginTop: '10px',
            display: 'inline-block',
            padding: '10px',
            margin: '10px'
        }}>
            <h3>Car name: {props.name}</h3> 
            <p>Year: {props.year}</p>
            <input type="text" onChange={props.onChangeCarName} value={props.name}/>
            <button style={{
                marginLeft: '10px'
            }} type='button' onClick={props.onDeleteCar}>Delete</button>
        </div>
    )
}

export default Car;