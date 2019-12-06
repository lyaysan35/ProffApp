import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateProff extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      field: '',
      subfield: '',
      location: '',
      contact: '',
      image: '',
      bio: ''
    }
  }
  handleSubmit = (e) =>{
    console.log('handle submit inside create form')
    e.preventDefault()
    this.props.addProff(e, this.state)
    this.setState({
      name: '',
      field: '',
      subfield: '',
      location: '',
      contact: '',
      image: '',
      bio: ''
    })

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
          <Form.Input type='text' name='image' value={this.state.image} onChange={this.handleChange}/>
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

export default CreateProff;