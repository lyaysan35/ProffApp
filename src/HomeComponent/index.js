import React, { Component } from 'react';
import { Form, Label, Button, Message, Dropdown } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
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
  handleFormChange = (name, value) => {
  	console.log('Chosen', name, ':', value)
  	// console.log(e.currentTarget.children[0].textContent)
  	this.setState({[name]: value});
  	console.log('STATE', this.state);
  	console.log("Results", this.state.field);
    //create setState!!!!!!!!
  }
  handleFormSumbit = async (e) => {
  	e.preventDefault();
  	try {

  		// Fetch professionals that match the query
  		let queryString = `?field=${this.state.field}&location=${this.state.location}`
  		const searchResponse = await fetch(process.env.REACT_APP_API_URL + 
            '/api/v1/professionals/search' + queryString);
      
      // make the response into JSON so we can access its properties like an object
      const searchResponseParsed = await searchResponse.json();
      console.log('search response', searchResponseParsed);
  		console.log(queryString);
      // make browser load the ProfListComponent
      // send the filtered list of Professionals to the ProfListComponent
  		this.props.history.push({
  			pathname: '/profList',
  			state: { professionals: searchResponseParsed }
		});
  	} catch (err) {
  		console.log('Error', err);
  	}
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
  	const dropDownStyle = {
  		width: "30%",
  	}

  	return(<div className='home'>
  		<h1 className='tie'>Galstuk</h1>
  		<h2 className='logo'>Russian-speaking professionals</h2>
 	
  		<form style={formStyle} onSubmit={this.handleFormSumbit}>
  		<DropDownComponent isField={true} style={dropDownStyle} change={this.handleFormChange}/>
  		<DropDownComponent isArea={true} style={dropDownStyle} change={this.handleFormChange}/>
  		<Button primary type='submit'>Find</Button>
  		</form>
  		
  		</div>
  		

  		)
  }

}

export default HomeComponent;
// value={this.state.field}
  		// <input type='text'style={inputStyle} name='profession'  onChange ={this.handleFormChange}/>
  		// <label>Input Label</label>