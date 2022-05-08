import React from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout';
import Quiz from './Containers/Quiz/Quiz';
class App extends React.Component {
  render() {
     return (
    <Layout>
      <Quiz />
    </Layout>
  );
  }
}

export default App;
