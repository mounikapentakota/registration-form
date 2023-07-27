import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';
class App extends Component {
 render() {
 return (
 <div className="Form">
 <h1>React Form Validations</h1><hr style={{ borderTop: '3px solid purple' }} />
 < RegistrationForm/>
 </div>
 );
 }
}

export default App;