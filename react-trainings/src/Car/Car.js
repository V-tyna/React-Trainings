import React from "react";
import { Link } from "react-router-dom";
import "./Car.css";
import withClass from "../HOC/withClass";
import PropTypes from 'prop-types';

class Car extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.name.trim() !== this.props.name
    }
 
    componentDidMount() {
        if(this.props.index === 0) {
            this.inputRef.current.focus();
        }   
    }

    componentWillUnmount() {
        console.log('Component Car will unmount');
    }

    render() {
        console.log(this.props);
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
            ref = {this.inputRef}
            type="text"
            onChange={this.props.onChangeCarName}
            value={this.props.name}
            className={inputClasses.join(" ")}
            />
            <button className="car-btn" type="button" onClick={this.props.onDeleteCar}> Delete </button>
            <Link className="detail-car-link" to={`/cars/${this.props.name}`}> Go to details </Link>
        </React.Fragment>
        );
  }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeCarName: PropTypes.func,
    onDeleteCar: PropTypes.func
}

export default withClass(Car, 'car-component');
