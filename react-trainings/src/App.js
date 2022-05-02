import './App.css';
import Car from './Car/Car.js';

function App() {
  const divStyle = {
    textAlign: 'center'
  }
  return (
        <div style={divStyle}>
          <Car name={'Mersedez'} year={'2022'}> 
          <p>Color</p>
          </Car>
          <Car name="Audi" year="2021"/>
          <Car name="Tesla" year={2022}/>
        </div>
  );
}

export default App;
