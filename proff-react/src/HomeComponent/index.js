import React, { Component } from 'react';
import { Form, Label, Button, Message, Dropdown } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import Login from '../Login';
// import Register from '../Register';
import DropDownComponent from '../DropDownComponent/sample.js';

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      field: "",
      results: [], //populating results array with objects returned by Database
      location: "",
      showResults: false,

    }
  }

  componentDidMount(){
    // this.getField();
    //calling this function here so that the data will be loaded for user
    //as soon as app loads up
  }
  handleFormChange(e){
  	// console.log(e)
  	// console.log(e.currentTarget.children)
  	// console.log(e.currentTarget.children[0])
  	// console.log(e.currentTarget.children[0].textContent)
  	const chosenProfession = e.currentTarget.children[0].textContent;
    //create setState!!!!!!!!
  }
  handleFormSumbit(){

  }
  render(){
  	const formStyle = {
  		display: "inline",
  		lineHeight: "100pt",
  	}
  	const inputStyle = {
  		width: "60%",
  		minWidth: "60vw",
  		lineHeight: "64pt",
  		fontSize: "100pt",
  	}
  	return(<div className='home'>
  		<h1>"Tie"</h1>
 	
  		<form style={formStyle} onSubmit={this.handleFormSumbit}>
  		<DropDownComponent change={this.handleFormChange}/>
  		<input type='submit' value="find" />
  		</form>
  		
  		</div>
  		

  		)
  }

}

export default HomeComponent;
// value={this.state.field}
  		// <input type='text'style={inputStyle} name='profession'  onChange ={this.handleFormChange}/>
  		// <label>Input Label</label>