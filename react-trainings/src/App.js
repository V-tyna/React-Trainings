import { Component } from "react";
import "./App.css";
import Car from "./Car/Car.js";

class App extends Component {
  state = {
    cars: [
      { name: "Mersedez", year: 2020 },
      { name: "Audi", year: 2021 },
      { name: "Tesla", year: 2022 },
    ],
    pageTitle: "React components",
    showCars: false
  };

  changeTitleHandler = (newTitle) => {
    console.log('Car title click');
    this.setState({
      pageTitle: newTitle,
    });
  };

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

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  handleInput = (e) => {
    console.log("Input", e.target.value);
    this.setState({
      pageTitle: e.target.value,
    });
  };

  render() {
    const divStyle = {
      textAlign: 'center',
      marginLeft: '10px'
    };

    let cars = null;
    if(this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeCarName={(e) => this.changeCarNameHandler(e.target.value, index)}
            onDeleteCar={this.deleteCarHandler.bind(this, index)}
          />
        );
      })
    } 

    return (
      <div style={divStyle}>
        <div>
           <h2>{this.state.pageTitle}</h2>
        <input type="text" onChange={this.handleInput} />

        <button style={divStyle} onClick={this.changeTitleHandler.bind(this, "Changed")}>
          Change title
        </button>
        <button style={divStyle} onClick={this.toggleCarsHandler}>
          Toggle cars
        </button>
        </div>
       

        { cars }

      </div>
    );
  }
}

export default App;
