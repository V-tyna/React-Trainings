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
      textAlign: "center",
    };

    let cars = null;
    if(this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeTitile={() => this.changeTitleHandler(car.name)}
          />
        );
      })
    } 

    return (
      <div style={divStyle}>
        <h2>{this.state.pageTitle}</h2>
        <input type="text" onChange={this.handleInput} />

        <button onClick={this.changeTitleHandler.bind(this, "Changed")}>
          Change title
        </button>
        <button onClick={this.toggleCarsHandler}>
          Toggle cars
        </button>

        { cars }

      </div>
    );
  }
}

export default App;
