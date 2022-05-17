import React, { Component } from "react";
import "./Home.css";
import Cars from "../Cars/Cars";
import Counter from "../Counter/Counter";

export const ClickedContext = React.createContext(false);
class Home extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      pageTitle: "React components",
      showCars: false,
      clicked: false
  };
  }

  changeTitleHandler = (newTitle) => {
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
      textAlign: 'center',
      marginLeft: '10px'
    };

    return (
      <div style={divStyle}>
    
        <div>
           <h2>{this.state.pageTitle}</h2>
           <h2>{this.props.title}</h2>
        <input type="text" onChange={this.handleInput} />

        <button style={divStyle} onClick={this.changeTitleHandler.bind(this, "Changed")}>
          Change title
        </button>
        <button style={divStyle} onClick={this.toggleCarsHandler}>
          Toggle cars
        </button>

        <button className="home-button" onClick={() => this.setState({clicked: !this.state.clicked})}>Change clicked</button>
        </div>

       <ClickedContext.Provider value={this.state.clicked}>
         <Counter />
       </ClickedContext.Provider>
        
        {this.state.showCars ? <Cars /> : null}

      </div>
    );
  }
}

export default Home;
