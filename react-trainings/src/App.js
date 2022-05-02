import { Component } from 'react';
import './App.css';
import Car from './Car/Car.js';

class App extends Component {

  state = {
    cars: [
      {name: 'Mersedez', year: 2020},
      {name: 'Audi', year: 2021},
      {name: 'Tesla', year: 2022}
    ],
    pageTitle: 'React components'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  render() {
     const divStyle = {
        textAlign: 'center'
      }

      const cars = this.state.cars;

  return (
        <div style={divStyle}>
          <h2>{this.state.pageTitle}:</h2>

          <button onClick={this.changeTitleHandler.bind(this, 'Changed')}>Change title</button>

          <Car 
          name={cars[0].name} 
          year={cars[0].year} 
          onChangeTitile={this.changeTitleHandler.bind(this, 'Mersedez title')}
          /> 
          <Car 
          name={cars[1].name}
           year={cars[1].year} 
           onChangeTitile={() => {this.changeTitleHandler(cars[1].name)}}
           />
          <Car n
          ame={cars[2].name} 
          year={cars[2].year} 
          onChangeTitile={() => {this.changeTitleHandler(cars[2].name)}}
          />
        </div>
  );
  }
}

export default App;
