import React from 'react';
import './Car.css';

function Car(props) {
    const inputClasses = ['car-input'];

    if(props.name !== '') {
        inputClasses.push('green');
    } else {
        inputClasses.push('red');
    }

    if(props.name.length > 5) {
        inputClasses.push('bold');
    }

    return (
        <div className="car-component">
            <h3>Car name: {props.name}</h3> 
            <p>Year: {props.year}</p>
            <input 
                type="text" 
                onChange={props.onChangeCarName} 
                value={props.name}
                className={inputClasses.join(' ')}
            />
            <button style={{
                marginLeft: '10px'
            }} type='button' onClick={props.onDeleteCar}>Delete</button>
        </div>
    )
}

export default Car;