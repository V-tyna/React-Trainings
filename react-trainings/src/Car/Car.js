import React from "react";
import "./Car.css";
import withClass from "../HOC/withClass";
class Car extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('SHOULD UPDATE', 'Next props: ', nextProps, 'Next state:', nextState);
        return nextProps.name.trim() !== this.props.name
    }
 
    componentDidUpdate() {
        console.log('Did update');
    }

    componentWillUnmount() {
        console.log('Component Car will unmount');
    }

    render() {
        const inputClasses = ["car-input"];

        if (this.props.name !== '') {
        inputClasses.push('green');
        } else {
        inputClasses.push('red');
        }

        if (this.props.name.length > 5) {
        inputClasses.push("bold");
        }

        return (
        <React.Fragment>
            <h3>Car name: {this.props.name}</h3>
            <p>Year: {this.props.year}</p>
            <input
            type="text"
            onChange={this.props.onChangeCarName}
            value={this.props.name}
            className={inputClasses.join(" ")}
            />
            <button className="car-btn" type="button" onClick={this.props.onDeleteCar}> Delete </button>
        </React.Fragment>
        );
  }
}

export default withClass(Car, 'car-component');
