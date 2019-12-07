import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateProf extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      field: '',
      subfield: '',
      location: '',
      contact: '',
      personal_image_url: '',
      bio: ''
    }
  }
  handleSubmit = (e) =>{
    console.log('handle submit inside create form')
    e.preventDefault()
    this.addProfessional(e, this.state)
    this.setState({
      name: '',
      field: '',
      subfield: '',
      location: '',
      contact: '',
      personal_image_url: '',
      bio: ''
    })

  }

  addProfessional = async (e, professionalFromForm) => {
    professionalFromForm.userId = this.props.userId;
    console.log('professionalForm >>', professionalFromForm);
      e.preventDefault();
      try {

        // We have to send JSON
        // createdProfessionalResponse variable will store the response from the express API
        const createdProfessionalResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/professionals/', {
          method: 'POST',
          body: JSON.stringify(professionalFromForm),
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        // we have to turn the response from flask into
        // an object we can use
        const parsedResponse = await createdProfessionalResponse.json();
        console.log(parsedResponse, ' this is response');
        this.props.history.push('/profList');

  
      } catch(err){
        console.log('error')
        console.log(err)
      }
      // request address will start with 'http://localhost:9000'
      // becuase after we create it, we want to add it to the professionals array
  }

  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return (
      <Segment className='newplace' style={{width: '80%'}} floated='right'>
        <h4>Create Professional</h4>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Label>Name:</Label>
          <Form.Input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
          <Label>Field:</Label>
          <Form.Input type='text' name='field' value={this.state.field} onChange={this.handleChange}/>
          <Label>Subfield:</Label>
          <Form.Input type='text' name='subfield' value={this.state.subfield} onChange={this.handleChange}/>
          <Label>Location:</Label>
          <Form.Input type='text' name='location' value={this.state.location} onChange={this.handleChange}/>
          <Label>Image:</Label>
          <Form.Input type='text' name='personal_image_url' value={this.state.personal_image_url} onChange={this.handleChange}/>
          <Label>Info:</Label>
          <Form.Input type='text' name='info' value={this.state.info} onChange={this.handleChange}/>
          <Label>Contact:</Label>
          <Form.Input type='text' name='contact' value={this.state.contact} onChange={this.handleChange}/>
          <Button type='Submit'>Create Professional</Button>
        </Form>
      </Segment>
      )
  }
}

export default CreateProf;