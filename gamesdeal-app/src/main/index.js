import React, { Component } from 'react';
import '../styles/App.css';
import {logo} from '../assets/index';
import {colors} from '../styles/index';
import Navbar from '../components/navbar';

const styles = {
  logo : {
    marginRight: 20,
    width: 70,
    height: 70
  },
  navbar : {
    backgroundColor : colors.primary,
    fontSize : 24
  },

  navbarTextContainer : {
    flex : 1
  }

};



class App extends Component {

  render() {
    return (
      <React.Fragment> 
        <Navbar/>
      </React.Fragment>
    );
    
  }
}

export default App;
