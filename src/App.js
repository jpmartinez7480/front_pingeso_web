import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/footer/footer';
import Login from './Views/login/login'
class App extends Component {
  render() {
    return (
      <div>
        <Login />
      <Footer/>
 
      </div>
           
    );
  }
}

export default App;
