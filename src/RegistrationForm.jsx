import React, { Component } from 'react';
import './App.css';
class RegistrationForm extends Component {

 constructor() {
 super();
 this.state = {
 formFields: {
 firstName: '',
 lastName: '',
 email: '',
 password: ''
 },
 errors: {}
 }
 this.handleChange = this.handleChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 };

 handleChange(event) {
 let formFields = this.state.formFields;
 formFields[event.target.name] = event.target.value;
 this.setState({
 formFields
 });
 }

 validate() {
 let formFields = this.state.formFields;
 let errors = {};
 let IsValid = true;

 if (!formFields["firstName"]) {
 IsValid = false;
 errors["firstName"] = "Enter Your First Name";
 }

 if (!formFields["lastName"]) {
 IsValid = false;
 errors["lastName"] = "Enter Your Last Name";
 }

 if (!formFields["email"]) {
 IsValid = false;
 errors["email"] = "Enter Your Email";
 }

 if (!formFields["password"]) {
 IsValid = false;
 errors["password"] = "Enter The Password";
 }

 this.setState({
 errors: errors
 });
 return IsValid;
 }

 handleSubmit(event) {
 event.preventDefault();
 if (this.validate()) {
 let formFields = {};
 formFields["firstName"] = "";
 formFields["lastName"] = "";
 formFields["email"] = "";
 formFields["password"] = "";
 this.setState({ formFields: formFields });
 }
 }

 render() {
 return (
 <div className="container" style={{ width: '315px' }}>
 <h3>Employee Registration With Required Validation</h3>
 <form onSubmit={this.handleSubmit} >
 <div className="form-group">
 <label>First Name</label> 
 <input className="form-control"
 type="text"
 name="firstName"
 value={this.state.formFields.firstName}
 onChange={this.handleChange} />
 {this.state.errors.firstName &&
 <div className="alert alert-danger">
 {this.state.errors.firstName}
 </div>
 }
 </div>


 <div className="form-group">
 <label>Last Name</label> 
 <input className="form-control"
 type="text"
 name="lastName"
 value={this.state.formFields.lastName}
 onChange={this.handleChange} />
 {this.state.errors.lastName &&
 <div className="alert alert-danger">
 {this.state.errors.lastName}
 </div>
 }
 </div>
 <div className="form-group">
 <label>Email</label>
 <input className="form-control"
 type="text"
 name="email"
 value={this.state.formFields.email}
 onChange={this.handleChange} />
 {this.state.errors.email &&
 <div className="alert alert-danger">
 {this.state.errors.email}
 </div>
 }
 </div>
 <div className="form-group">
 <label>Password</label> <br></br>
 <input className="form-control"
 type="text"
 name="password"

 value={this.state.formFields.password}
 onChange={this.handleChange} /> 
 {this.state.errors.password &&
 <div className="alert alert-danger">
 {this.state.errors.password}
 </div>
 }
 </div>
 <input type="submit" className="btn btn-primary" value="Submit" />
 </form>
 </div >
 );
 }
}

export default RegistrationForm;
