import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './components/ShoppingList';

class App extends Component {
  render() {
return (
<div>
<AppNavbar />
<ShoppingList/>
</div>
);

  }
  
}

export default App;
