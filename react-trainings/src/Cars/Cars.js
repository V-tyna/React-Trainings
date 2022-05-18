import React from "react";
import { Link } from "react-router-dom";
import Car from "../Car/Car";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "./Cars.css";



class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
            { name: "Mersedez", year: 2020 },
            { name: "Audi", year: 2021 },
            { name: "Tesla", year: 2022 },
            ],
        }
    }

    changeCarNameHandler = (nameFromInput, index) => {
        const car = this.state.cars[index];
        car.name = nameFromInput;
        const clonedCarrsArr = [...this.state.cars];
        clonedCarrsArr[index] = car;
        this.setState({
          cars: clonedCarrsArr
        })
      }
    
      deleteCarHandler = (index) => {
        const cloneCars = this.state.cars.concat();
        cloneCars.splice(index, 1);
        this.setState({
          cars: cloneCars
        })
      }
    
    render() {
        const cars =  this.state.cars.map((car, index) => {
            return (
            <ErrorBoundary key={index}>
                <Car
                  name={car.name}
                  year={car.year}
                  index={index}
                  onChangeCarName={(e) => this.changeCarNameHandler(e.target.value, index)}
                  onDeleteCar={this.deleteCarHandler.bind(this, index)}
                />
                </ErrorBoundary>
            );
          })

        return (
            <div>
              <div className="cars-component">
                 { cars }
              </div>
                { !this.props.showCars ? <Link className="link-home-page" to='/'>Home page</Link> : null}
            </div>
        )
    
    }  
    
}

export default Cars;